import { getServerSession } from "next-auth";
//import { authOptions } from "@/auth";
import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import prisma from "@/lib/prisma";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
  const session = await getServerSession(authOptions);
  if (!session?.user?.id)
    return NextResponse.json({ error: "No autorizado" }, { status: 401 });

  const { propiedadId } = await req.json();

  const favorito = await prisma.favorito.findFirst({
    where: { userId: session.user.id, propiedadId: propiedadId },
  });

  try {
    if (!propiedadId) throw new Error("PropiedadId es requerido");
  } catch (error: any) {
    return NextResponse.json({ error: error.message }, { status: 400 });
  }
  if (favorito) {
    // Si ya existe, lo elimina (toggle off)
    await prisma.favorito.delete({ where: { id: favorito.id } });
    return NextResponse.json({ status: "removed" });
  } else {
    // Si no existe, lo crea
    await prisma.favorito.create({
      data: { userId: session.user.id, propiedadId },
    });
    return NextResponse.json({ status: "added" });
  }
}
