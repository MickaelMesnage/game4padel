"use client";

import { allQuestions } from "@/app/survey/questions";
import { useAnswersStore } from "@/app/survey/useAnswersStore";
import { Progress } from "@/components/ui/progress";

export const ProgressBar = () => {
  const { currentQuestionIndex } = useAnswersStore();
  const progress = (currentQuestionIndex / allQuestions.length) * 100;

  return <Progress value={progress} className="h-2" />;
};
