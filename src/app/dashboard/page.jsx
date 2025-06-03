
import { auth } from "../../../auth";

export default async function Dashboard() {
   const session = await auth();
 
   if(!session)
     return redirect("/login");

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="w-full max-w-md p-8 bg-white rounded shadow-md">
        <h1 className="text-2xl font-bold text-center mb-6">
          Bem-vindo(a) {session?.user?.name}
        </h1>
        <p className="text-sm text-center text-gray-600 mt-4">
          <a
            href="/api/auth/logout"
            className="text-blue-500 hover:underline"
          >
            Sair
          </a>
        </p>
      </div>
    </div>
  );
}
