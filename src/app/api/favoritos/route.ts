import { getServerSession } from "next-auth";
import { authOptions } from "@/app/api/auth/[...nextauth]/auth.config";

import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";


export async function POST(req: Request) {
  const session = await getServerSession(authOptions);

  if (!session?.user?.id) {
    return NextResponse.json({ error: "No autorizado" }, { status: 401 });
  }

  const { propiedadId } = await req.json();

  if (!propiedadId) {
    return NextResponse.json(
      { error: "propiedadId es requerido" },
      { status: 400 }
    );
  }

  const favorito = await prisma.favorito.findFirst({
    where: { userId: session.user.id, propiedadId },
  });

  if (favorito) {
    // Ya existe → lo quitas (toggle off)
    await prisma.favorito.delete({ where: { id: favorito.id } });
    return NextResponse.json({ status: "removed" });
  } else {
    // No existe → lo creas
    await prisma.favorito.create({
      data: { userId: session.user.id, propiedadId },
    });
    return NextResponse.json({ status: "added" });
  }
}
