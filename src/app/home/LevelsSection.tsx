import { LevelCard } from "@/app/home/LevelCard";
import { levels } from "@/app/home/levels";

export const LevelsSection = () => {
  return (
    <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {levels.map((level) => (
        <LevelCard key={level.level} {...level} />
      ))}
    </section>
  );
};
