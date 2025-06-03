"use client";

import Form from "next/form";
import Link from "next/link";
import LoginForm from "./login-form";
import { auth } from "../../../../auth";
import { redirect } from "next/navigation";

async function Login() {
  const session = await auth();

  if(session){
    return redirect("/dashboard");
  }
  

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="w-full max-w-md p-8 bg-white rounded shadow-md">
        <h1 className="text-2xl font-bold text-center mb-6">Login</h1>
     <LoginForm />
        <p className="text-sm text-center text-gray-600 mt-4">
          Não tem uma conta?{" "}
          <Link href="/cadastro" className="text-blue-500 hover:underline">
            Registre-se
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Login;
