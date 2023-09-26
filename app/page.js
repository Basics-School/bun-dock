
import { Button } from "@/components/ui/button";
import prisma from "@/lib/prisma";
import Image from "next/image";


async function getUsers() {
  try {
    // Use Prisma Client to query the User model
    const users = await prisma.user.findMany();

    // Do something with the retrieved data
    console.log(users);
    return  users
  } catch (error) {
    console.error('Error retrieving users:', error);
  } finally {
    // Close the Prisma Client connection
    await prisma.$disconnect();
  }
}

export default async function Home() {
  const createUser = (e) => {
    e.preventDefault();
    const res = fetch("/api/users", {
      method: "POST",
    });
  };
  const {users} = await getUsers()
  return (
    <main className="flex min-h-screen flex-col dark:text-black items-center justify-between p-24">
      Hello
     {users}
      {/* <Button as="button" onClick={createUser}>
        cklick
      </Button> */}
      <p>
        
      </p>
    </main>
  );
}
