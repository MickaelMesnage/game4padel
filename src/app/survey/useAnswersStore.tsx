import { create } from "zustand";

type AnswersStore = {
  answers: Record<number, number>;
  updateAnswers: (props: {
    questionIndex: number;
    answerIndex: number;
  }) => void;
  currentQuestionIndex: number;
  changeCurrentQuestionIndex: (newIndex: number) => void;
};

export const useAnswersStore = create<AnswersStore>((set) => ({
  currentQuestionIndex: 0,
  answers: {},
  updateAnswers: (props: { questionIndex: number; answerIndex: number }) =>
    set((state) => ({
      answers: { ...state.answers, [props.questionIndex]: props.answerIndex },
    })),
  changeCurrentQuestionIndex: (newIndex: number) =>
    set((state) => ({
      answers: { ...state.answers },
      currentQuestionIndex: newIndex,
    })),
}));
