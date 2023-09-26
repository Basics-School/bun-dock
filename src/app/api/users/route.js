import { NextResponse } from "next/server";
import prisma from "@/lib/prisma";
export async function GET(req) {
  const user = await prisma.user.findMany();
  return NextResponse.json(user);
}

export async function POST(req) {
  const user = await prisma.user.create({
    data: {
      name: "John Dough",
      email: `john-${Math.random()}@example.com`,
    },
  });
  return new NextResponse.json({ user: user, status: 200 });
}
