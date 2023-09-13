import { NextResponse } from "next/server";
import prisma from "@/lib/prisma";
export async function GET(req) {

    const count = await prisma.user.findMany();

  return NextResponse.json({ count });
}

export async function POST(req) {

  await prisma.user.create({
    data: {
      name: "John Dough",
      email: `john-${Math.random()}@example.com`,
    },
  });
}