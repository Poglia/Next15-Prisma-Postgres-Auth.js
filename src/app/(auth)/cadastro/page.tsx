import Link from "next/link";
import RegisterForm from "./register-form";

const RegisterPage = () => {

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="w-full max-w-md p-8 bg-white rounded shadow-md">
        <h1 className="text-2xl font-bold text-center mb-6">Registre-se</h1>
       <RegisterForm />
        <p className="text-sm text-center text-gray-600 mt-4">
          Já tem uma conta?{" "}
          <Link href="/signin" className="text-blue-500 hover:underline">
            Faça login
          </Link>
        </p>
      </div>
    </div>
  );
};

export default RegisterPage;
