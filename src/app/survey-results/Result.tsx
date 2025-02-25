"use client";

import { LevelCard } from "@/app/home/LevelCard";
import { levels } from "@/app/home/levels";
import { getPadelLevel } from "@/app/survey-results/getPadelLevel";
import { useAnswersStore } from "@/app/survey/useAnswersStore";

export const Result = () => {
  const { answers } = useAnswersStore();

  const acc = Object.values(answers).reduce(
    (accumulator, currentValue) => accumulator + currentValue,
    0
  );

  const padelLevel = getPadelLevel({
    score: acc,
    totalQuestions: Object.keys(answers).length,
  });

  const level = levels[padelLevel];

  if (!level) throw new Error("padelLevel not consistent");

  return <LevelCard {...level} />;
};
