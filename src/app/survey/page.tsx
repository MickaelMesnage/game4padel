import { NavigationButtons } from "@/app/survey/NavigationButtons";
import { ProgressBar } from "@/app/survey/ProgressBar";
import { Question } from "@/app/survey/Question";

export default function Page() {
  return (
    <main className="max-w-2xl mx-auto p-4">
      <h1 className="text-3xl font-bold text-center mb-8">
        Évaluer mon niveau de padel
      </h1>
      <div className="flex flex-col gap-8">
        <ProgressBar />
        <Question />
        <NavigationButtons />
      </div>
    </main>
  );
}
