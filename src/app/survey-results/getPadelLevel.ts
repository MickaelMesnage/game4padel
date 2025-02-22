export const getPadelLevel = ({
  score,
  totalQuestions,
}: {
  score: number;
  totalQuestions: number;
}): "1" | "2" | "3" | "4" | "5" | "6" => {
  const maxScore = totalQuestions * 2;
  const ratio = score / maxScore;
  const level = Math.max(1, Math.min(6, Math.round(ratio * 6))); // Niveau entre 1 et 6

  return level.toString() as "1" | "2" | "3" | "4" | "5" | "6";
};
