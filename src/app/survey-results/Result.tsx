"use client";

import { getPadelLevel } from "@/app/survey-results/getPadelLevel";
import { useAnswersStore } from "@/app/survey/useAnswersStore";

export const Result = () => {
  const { answers } = useAnswersStore();

  const acc = Object.values(answers).reduce(
    (accumulator, currentValue) => accumulator + currentValue,
    0
  );

  const level = getPadelLevel({
    score: acc,
    totalQuestions: Object.keys(answers).length,
  });

  return <div>Ton niveau: {level}</div>;
};
