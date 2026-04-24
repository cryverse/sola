import { questions } from "./questions";

export type Level = "A1" | "A2" | "B1" | "B2" | "C1";

const LEVEL_WEIGHTS: Record<Level, number> = {
  A1: 1,
  A2: 2,
  B1: 3,
  B2: 4,
  C1: 5
};

export function calculateScore(userAnswers: number[]) {
  let totalScore = 0;
  let maxScore = 0;

  const breakdown: Record<Level, { correct: number; total: number }> = {
    A1: { correct: 0, total: 0 },
    A2: { correct: 0, total: 0 },
    B1: { correct: 0, total: 0 },
    B2: { correct: 0, total: 0 },
    C1: { correct: 0, total: 0 }
  };

  questions.forEach((q, i) => {
    const weight = LEVEL_WEIGHTS[q.level];

    breakdown[q.level].total++;
    maxScore += weight;

    if (userAnswers[i] === q.answer) {
      totalScore += weight;
      breakdown[q.level].correct++;
    }
  });

  const level = calculateLevel(totalScore, maxScore);

  return {
    score: totalScore,
    maxScore,
    level,
    breakdown
  };
}

/* ---------- LEVEL LOGIC ---------- */

function calculateLevel(score: number, max: number): Level {
  const percent = score / max;

  if (percent < 0.25) return "A1";
  if (percent < 0.45) return "A2";
  if (percent < 0.65) return "B1";
  if (percent < 0.85) return "B2";
  return "C1";
}