// src/lib/cloudinary-upload.ts
export type UploadedMedia = {
  url: string;
  publicId: string;
  type: "image" | "video";
};

type SignResponse = {
  cloudName: string;
  apiKey: string;
  timestamp: number;
  signature: string;
  folder: string;
};

export async function uploadToCloudinaryWithProgress(
  file: File,
  onProgress?: (percent: number) => void
): Promise<UploadedMedia> {
  // 1) pedir firma a tu API
  const signRes = await fetch("/api/cloudinary/sign", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ folder: "propiedades" }),
  });
  if (!signRes.ok) throw new Error("No se pudo firmar Cloudinary");
  const sign: SignResponse = await signRes.json();

  const isVideo = file.type.startsWith("video/");
  const endpoint = `https://api.cloudinary.com/v1_1/${sign.cloudName}/${isVideo ? "video" : "image"}/upload`;

  // 2) subir con XHR para tener progreso real
  const fd = new FormData();
  fd.append("file", file);
  fd.append("api_key", sign.apiKey);
  fd.append("timestamp", String(sign.timestamp));
  fd.append("signature", sign.signature);
  fd.append("folder", sign.folder);

  const data = await new Promise<any>((resolve, reject) => {
    const xhr = new XMLHttpRequest();
    xhr.open("POST", endpoint);

    xhr.upload.onprogress = (e) => {
      if (!e.lengthComputable) return;
      const percent = Math.round((e.loaded / e.total) * 100);
      onProgress?.(percent);
    };

    xhr.onload = () => {
      try {
        if (xhr.status < 200 || xhr.status >= 300) {
          return reject(new Error(`Cloudinary upload failed: ${xhr.status}`));
        }
        resolve(JSON.parse(xhr.responseText));
      } catch (err) {
        reject(err);
      }
    };

    xhr.onerror = () => reject(new Error("Error de red subiendo a Cloudinary"));
    xhr.send(fd);
  });

  return {
    url: data.secure_url as string,
    publicId: data.public_id as string,
    type: isVideo ? "video" : "image",
  };
}
