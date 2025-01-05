import { NextResponse } from "next/server";
import { prisma } from "@/prisma/prisma-client";

export async function GET() {
  const favorites = await prisma.favoriteRecipe.findMany();
  return NextResponse.json(favorites);
}

export async function POST(req: Request) {
  const data = await req.json();
  const newFavorite = await prisma.favoriteRecipe.create({
    data: {
      id: data.id,
      name: data.name,
      image: data.image,
    },
  });

  return NextResponse.json(newFavorite);
}

export async function DELETE(req: Request) {
  const { id } = await req.json();

  await prisma.favoriteRecipe.delete({
    where: { id },
  });
  return NextResponse.json(
    { message: "Favorite recipe deleted successfully" },
    { status: 200 }
  );
}
