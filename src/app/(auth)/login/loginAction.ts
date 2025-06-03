'use server';

import { signIn } from "../../../../auth";

export default async function loginAction(_prevState: any, formData: FormData) {

    try{

        await signIn('credentials', {
            email: formData.get('email') as string,
            password: formData.get('password') as string,
            redirect: false,
        });
        return { success: true, message: "Login successful" };
    } catch (error) {
        return { success: false, message: "Usuário ou senha incorretos" }; 
    }

}