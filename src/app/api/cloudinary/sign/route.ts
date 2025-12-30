import { NextResponse } from "next/server";
import { v2 as cloudinary } from "cloudinary";

cloudinary.config(process.env.CLOUDINARY_URL ?? "");

export async function POST(req: Request) {
  const body = await req.json().catch(() => ({}));
  const folder = body.folder ?? "propiedades";

  const timestamp = Math.round(Date.now() / 1000);

  // params que vas a mandar a cloudinary
  const paramsToSign = {
    timestamp,
    folder,
  };

  const signature = cloudinary.utils.api_sign_request(
    paramsToSign,
    cloudinary.config().api_secret!
  );

  return NextResponse.json({
    timestamp,
    signature,
    cloudName: cloudinary.config().cloud_name,
    apiKey: cloudinary.config().api_key,
    folder,
  });
}
