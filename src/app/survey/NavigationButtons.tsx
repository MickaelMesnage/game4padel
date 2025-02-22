"use client";

import { allQuestions } from "@/app/survey/questions";
import { useAnswersStore } from "@/app/survey/useAnswersStore";
import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight } from "lucide-react";

export const NavigationButtons = () => {
  const { answers, currentQuestionIndex, changeCurrentQuestionIndex } =
    useAnswersStore();

  const isNextButtonEnabled =
    currentQuestionIndex in answers &&
    currentQuestionIndex < allQuestions.length - 1;
  const isPreviousButtonEnabled = currentQuestionIndex > 0;

  const onNextClick = () => {
    if (isNextButtonEnabled) {
      changeCurrentQuestionIndex(currentQuestionIndex + 1);
    }
  };

  const onPrevClick = () => {
    if (isPreviousButtonEnabled) {
      changeCurrentQuestionIndex(currentQuestionIndex - 1);
    }
  };

  // const jumpToQuestion = (index: number) => {
  //   setCurrentQuestionIndex(index);
  // };

  return (
    <div className="flex justify-between mt-6">
      <Button
        variant="outline"
        onClick={onPrevClick}
        disabled={!isPreviousButtonEnabled}
      >
        <ChevronLeft className="mr-2 h-4 w-4" />
        Précédent
      </Button>
      <Button onClick={onNextClick} disabled={!isNextButtonEnabled}>
        Suivant
        <ChevronRight className="ml-2 h-4 w-4" />
      </Button>
    </div>
  );
};
