"use server";

import prisma from "@/app/lib/db";
export default async function registerAction(formData: FormData) {
  const entries = Array.from(formData.entries());

  const data = Object.fromEntries(entries) as {
    name: string;
    email: string;
    password: string;
  };
  console.log("====================== Server Action ======================");
  console.log(data);

  await prisma.user.create({
    data: {
      name: data.name,
      email: data.email,
      password: data.password,
    },
  });
}
