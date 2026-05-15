import { prisma } from "@/lib/prisma";
import { NextResponse } from "next/server";

export async function GET(req: Request) {
  const { searchParams } = new URL(req.url);
  const userId = searchParams.get("userId");
  if (!userId) return NextResponse.json([]);

  const favoritos = await prisma.favorito.findMany({
    where: { userId },
    select: { propiedadId: true },
  });

  return NextResponse.json(favoritos);
}
