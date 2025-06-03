'use client'
import Form from "next/form"
import loginAction from "./loginAction";
import { useActionState } from "react";

export default function LoginForm()  {
    const [state, formAction, isPending] = useActionState(loginAction, null);
  
    return (
        <Form action={formAction} className="space-y-4">
          {state?.success == false && (
            <div>
              <p className="text-red-500 text-sm mb-4 ">{state?.message}</p>
            </div>)}
        <div>
          <label className="block text-sm font-medium text-gray-700">
            Email
          </label>
          <input
            type="text"
            name="email"
            className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring focus:ring-blue-300"
            placeholder="Digite seu email"
            required
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700">
            Senha
          </label>
          <input
            type="password"
            name="password"
            className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring focus:ring-blue-300"
            placeholder="Digite sua senha"
            required
          />
        </div>
        <div>
          <button
            disabled={isPending}
            type="submit"
            className="w-full py-2 px-4 bg-blue-500 text-white rounded-md hover:bg-blue-600 focus:outline-none focus:ring focus:ring-blue-300"
          >
            Entrar
          </button>
        </div>
      </Form>
    )
}