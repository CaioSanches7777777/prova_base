import Link from "@/node_modules/next/link";

export default function Home() {
  return (
    <div className="flex flex-col items-center gap-4 w-full">
      <h1>Bem vindo ao Portal de Receitas</h1>
      <Link className="bg-gray-600 text-white py-2 px-4 m-2 rounded-lg hover:bg-gray-800" href="/recipes">Receitas</Link>
    </div>
  );
}
