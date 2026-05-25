"use server";

import { prisma } from "@/lib/prisma";
import { revalidatePath } from "next/cache";
import { Propiedad } from "@prisma/client";
import { z } from "zod";
import { v2 as cloudinary } from "cloudinary";

cloudinary.config(process.env.CLOUDINARY_URL ?? "");

/* ------------------------------------------------------------------
   SCHEMA
------------------------------------------------------------------ */
const propiedadSchema = z.object({
  id: z.string().optional(),
  title: z.string().min(3).max(255),
  titleEn: z.string().optional(),
  titleDe: z.string().optional(),
  slug: z.string().min(3).max(255),
  address: z.string(),
  addressEn: z.string().optional(),
  addressDe: z.string().optional(),
  description: z.string(),
  descriptionEn: z.string().optional(),
  descriptionDe: z.string().optional(),
  apto: z.string(),
  aptoEn: z.string().optional(),
  aptoDe: z.string().optional(),
  geoLink: z.string(),
  precio: z.coerce.number().min(0),
  metros: z.coerce.number().min(0).optional().default(0),
  ft2: z.coerce.number().min(0).optional().default(0),
  area: z.coerce.number().min(0).optional().default(0),
  acres: z.coerce.number().min(0).optional().default(0),
  tipoMedida: z.string().optional(),
  tipoMedida1: z.string().optional(),
  altura: z.coerce.number().min(0),

  categoriaId: z.string(),
  tipoPropiedadId: z.string(),
  ciudadId: z.string().optional(),
  rentaVenta: z.string(),
  temperatura: z.string(),

  esPrincipal: z.coerce.boolean().default(false),
}).refine(
  (data) =>
    Number(data.metros ?? 0) > 0 ||
    Number(data.ft2 ?? 0) > 0 ||
    Number(data.area ?? 0) > 0 ||
    Number(data.acres ?? 0) > 0,
  {
    message: "Debe ingresar al menos un valor de superficie.",
    path: ["metros"],
  },
);

/* ------------------------------------------------------------------
   TYPES
------------------------------------------------------------------ */
type UploadedMedia = {
  url: string;
  type: "image" | "video";
};

/* ------------------------------------------------------------------
   ACTION
------------------------------------------------------------------ */
function slugify(input: string) {
  return (
    input
      .toLowerCase()
      .trim()
      // quita acentos: ÃƒÂ¡ÃƒÂ©ÃƒÂ­ÃƒÂ³ÃƒÂºÃƒÂ± -> aeioun
      .normalize("NFD")
      .replace(/[\u0300-\u036f]/g, "")
      // reemplaza cualquier cosa no alfanumÃƒÂ©rica por guiÃƒÂ³n
      .replace(/[^a-z0-9]+/g, "-")
      // quita guiones al inicio/fin
      .replace(/^-+|-+$/g, "")
      // colapsa guiones dobles
      .replace(/-+/g, "-")
  );
}

async function makeUniqueSlug(tx: any, baseSlug: string, currentId?: string) {
  let slug = baseSlug;
  let n = 2;

  while (true) {
    const exists = await tx.propiedad.findFirst({
      where: {
        slug,
        ...(currentId ? { NOT: { id: currentId } } : {}),
      },
      select: { id: true },
    });

    if (!exists) return slug;
    slug = `${baseSlug}-${n++}`;
  }
}

export const createUpdatePropiedad = async (formData: FormData) => {
  const data = Object.fromEntries(formData);
  const parsed = propiedadSchema.safeParse(data);
  if (!parsed.success) {
    console.error(parsed.error);
    return { ok: false };
  }

  const propiedadData = parsed.data;

  const baseSlug = slugify(propiedadData.slug || propiedadData.title);

  const { id, categoriaId, tipoPropiedadId, ciudadId, ...rest } = propiedadData;

  const imagesToDelete = formData.getAll("imagesToDelete") as string[];
  const uploadedMedia = JSON.parse(
    (formData.get("uploadedMedia") as string | null) ?? "[]",
  ) as UploadedMedia[];

  try {
    /* -------------------------------------------------------------
       1Ã¯Â¸ÂÃ¢Æ’Â£ OBTENER MEDIA A ELIMINAR (ANTES)
    ------------------------------------------------------------- */
    let mediaDBToDelete: { id: number; url: string }[] = [];

    if (imagesToDelete.length > 0 && id) {
      mediaDBToDelete = await prisma.propiedadImage.findMany({
        where: {
          id: { in: imagesToDelete.map(Number) },
          propiedadId: id,
        },
        select: { id: true, url: true },
      });
    }

    /* -------------------------------------------------------------
       2Ã¯Â¸ÂÃ¢Æ’Â£ SUBIR MEDIA NUEVA (FUERA DE TRANSACCIÃƒâ€œN)
    ------------------------------------------------------------- */
    /*let uploadedMedia: UploadedMedia[] = [];

    if (newFiles.length > 0) {
      uploadedMedia = await uploadMedia(newFiles);
    }*/

    /* -------------------------------------------------------------
       3Ã¯Â¸ÂÃ¢Æ’Â£ TRANSACCIÃƒâ€œN DB
    ------------------------------------------------------------- */
    const propiedadTx = await prisma.$transaction(async (tx) => {
      let propiedad: Propiedad;

      /* -------- VALIDAR CIUDAD -------- */
      let ciudadExiste: { id: string } | null = null;

      if (ciudadId) {
        ciudadExiste = await tx.ciudad.findUnique({
          where: { id: ciudadId },
          select: { id: true },
        });
      }
      const uniqueSlug = await makeUniqueSlug(tx, baseSlug, id);
      /* ---------------- UPDATE ---------------- */
      if (id) {
        const dataToUpdate: any = {
          ...rest,
          slug: uniqueSlug,
          categoria: { connect: { id: categoriaId } },
          tipoPropiedad: { connect: { id: tipoPropiedadId } },
        };

        if (ciudadExiste) {
          dataToUpdate.ciudad = { connect: { id: ciudadId } };
        }

        propiedad = await tx.propiedad.update({
          where: { id },
          data: dataToUpdate,
        });
      } else {
        /* ---------------- CREATE ---------------- */
        const dataToCreate: any = {
          ...rest,
          slug: uniqueSlug,
          categoria: { connect: { id: categoriaId } },
          tipoPropiedad: { connect: { id: tipoPropiedadId } },
        };

        if (ciudadExiste) {
          dataToCreate.ciudad = { connect: { id: ciudadId } };
        }

        propiedad = await tx.propiedad.create({
          data: dataToCreate,
        });
      }

      /* ---------------- ELIMINAR MEDIA (DB) ---------------- */
      if (imagesToDelete.length > 0) {
        await tx.propiedadImage.deleteMany({
          where: {
            id: { in: imagesToDelete.map(Number) },
            propiedadId: propiedad.id,
          },
        });
      }

      /* ---------------- GUARDAR MEDIA (DB) ---------------- */
      if (uploadedMedia.length > 0) {
        await tx.propiedadImage.createMany({
          data: uploadedMedia.map((media) => ({
            url: media.url,
            type: media.type,
            propiedadId: propiedad.id,
          })),
        });
      }

      return propiedad;
    });

    /* -------------------------------------------------------------
       4Ã¯Â¸ÂÃ¢Æ’Â£ BORRAR MEDIA DE CLOUDINARY
    ------------------------------------------------------------- */
    if (mediaDBToDelete.length > 0) {
      await Promise.all(
        mediaDBToDelete.map(async (media) => {
          const publicId = getCloudinaryPublicId(media.url);
          //media.url.split("/").pop()?.split(".")[0];
          if (!publicId) return;

          try {
            await cloudinary.uploader.destroy(publicId, {
              resource_type: "auto",
            });
          } catch (error) {
            console.error(`Error borrando ${publicId}`, error);
          }
        }),
      );
    }

    /* -------------------------------------------------------------
       5Ã¯Â¸ÂÃ¢Æ’Â£ REVALIDACIÃƒâ€œN
    ------------------------------------------------------------- */
    revalidatePath("/admin/propiedads");
    revalidatePath(`/admin/propiedad/${propiedadTx.slug}`);
    revalidatePath(`/propiedad/${propiedadTx.slug}`);

    return { ok: true, propiedad: propiedadTx };
  } catch (error) {
    console.error(error);
    return {
      ok: false,
      message: "No se pudo crear/actualizar la propiedad",
    };
  }
};

function getCloudinaryPublicId(url: string) {
  // quita querystring
  const clean = url.split("?")[0];
  // toma lo que estÃƒÂ¡ despuÃƒÂ©s de "/upload/"
  const idx = clean.indexOf("/upload/");
  if (idx === -1) return null;

  const afterUpload = clean.substring(idx + "/upload/".length);
  // afterUpload puede tener "v123/folder/file.jpg"
  const parts = afterUpload.split("/");
  // elimina version si empieza por v123
  const withoutVersion = parts[0].match(/^v\d+$/) ? parts.slice(1) : parts;
  const joined = withoutVersion.join("/");
  // quita extensiÃƒÂ³n
  return joined.replace(/\.[^/.]+$/, "");
}

/* ------------------------------------------------------------------
   SUBIDA DE MEDIA (IMÃƒÂGENES + VIDEOS)
------------------------------------------------------------------ */


