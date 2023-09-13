"use client";
import { Button } from "@/components/ui/button";
import prisma from "@/lib/prisma";
import Image from "next/image";

export default function Home() {
  const createUser = (e) => {
    e.preventDefault();
    const res = fetch("/api/users", {
      method: "POST",
    });
  };
  return (
    <main className="flex min-h-screen flex-col dark:text-black items-center justify-between p-24">
      Hello
      <Button as="button" onClick={createUser}>
        cklick
      </Button>
    </main>
  );
}
