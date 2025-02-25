import { Counter } from "@/app/compteur/counter";

export default function Page() {
  return (
    <main className="max-w-2xl mx-auto p-4">
      <h1 className="text-3xl font-bold text-center mb-8">Compteur</h1>
      <Counter />
    </main>
  );
}
