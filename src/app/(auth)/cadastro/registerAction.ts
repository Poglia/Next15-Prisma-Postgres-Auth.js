"use server";

import prisma from "@/app/lib/db";
import { hashSync } from "bcrypt-ts";

export default async function registerAction(
  _prevState: any,
  formData: FormData
) {
  const entries = Array.from(formData.entries());

  const data = Object.fromEntries(entries) as {
    name: string;
    email: string;
    password: string;
  };
  console.log("====================== Server Action ======================");
  console.log(data);

  const userExists = await prisma.user.findUnique({
    where: { email: data.email },
  });

  if (userExists) {
    return {
      message: "Este usuario já existe!",
      success: false,
    };
  }

  await prisma.user.create({
    data: {
      name: data.name,
      email: data.email,
      password: hashSync(data.password),
    },
  });

  return {
    message: "Usuário criado com sucesso",
    success: true,
  };
}
