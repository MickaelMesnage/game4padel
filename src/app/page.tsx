import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function Home() {
  return (
    <main className="max-w-2xl mx-auto p-4">
      <h1 className="text-3xl font-bold text-center mb-8">
        Connaitre son niveau de padel
      </h1>
      <Link href="/survey" passHref>
        <Button>Commencer l&apos;enquête</Button>
      </Link>
    </main>
  );
}
