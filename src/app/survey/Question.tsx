"use client";

import { allQuestions } from "@/app/survey/questions";
import { useAnswersStore } from "@/app/survey/useAnswersStore";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { AnimatePresence, motion } from "framer-motion";
import { useRouter } from "next/navigation";

export const Question = () => {
  const router = useRouter();
  const {
    answers,
    updateAnswers,
    changeCurrentQuestionIndex,
    currentQuestionIndex,
  } = useAnswersStore();

  const currentQuestion = allQuestions[currentQuestionIndex];
  const selectedAnswerIndex = answers[currentQuestionIndex];

  const onUpdateAnswers = async (answerIndex: number) => {
    updateAnswers({
      questionIndex: currentQuestion.index,
      answerIndex,
    });

    await new Promise((resolve) => setTimeout(resolve, 300));

    if (currentQuestionIndex === allQuestions.length - 1) {
      router.push("/survey-results");
    } else {
      changeCurrentQuestionIndex(currentQuestionIndex + 1);
    }
  };

  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={currentQuestionIndex}
        initial={{ x: 300, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        exit={{ x: -300, opacity: 0 }}
        transition={{ type: "spring", stiffness: 300, damping: 30 }}
      >
        <Card className="p-6 shadow-lg">
          <div className="text-sm text-muted-foreground mb-2">
            {currentQuestion.category} - Question {currentQuestionIndex + 1}/
            {allQuestions.length}
          </div>
          <h2 className="text-xl font-semibold mb-6">{currentQuestion.text}</h2>

          <div className="flex flex-col gap-4">
            {currentQuestion.answers.map((answer, answerIndex) => (
              <Button
                key={answerIndex}
                variant={
                  selectedAnswerIndex === answerIndex ? "default" : "outline"
                }
                className="w-full justify-start text-left h-auto py-4 px-6 whitespace-normal"
                onClick={() => onUpdateAnswers(answerIndex)}
              >
                {answer}
              </Button>
            ))}
          </div>
        </Card>
      </motion.div>
    </AnimatePresence>
  );
};
