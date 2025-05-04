''
import { compareSync } from "bcrypt-ts";
import prisma from "./db";


type User = {
    email: string;
    name: string;
    password?: string;
}

export async function  findUserByCredentials(email: string, password: string):Promise<User | null> {
    const user = await prisma.user.findFirst({
        where: { email: email},
    });

    if (!user) return null;

    const passwordMatch = await compareSync(password, user.password);

    if (passwordMatch) return {email: user.email, name: user.name}; 

    return null;

}