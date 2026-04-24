"use client";

import { useSearchParams, useRouter } from "next/navigation";
import { questions } from "../test/questions";
import { calculateScore } from "../test/scoring";

export default function ResultClient() {
  const router = useRouter();
  const params = useSearchParams();

  const answersParam = params.get("answers");

  let userAnswers: number[] = [];

  try {
    userAnswers = answersParam ? JSON.parse(answersParam) : [];
  } catch {
    userAnswers = [];
  }

  const result = calculateScore(userAnswers);

  return (
    <main style={base}>
      <div style={card}>

        <h1 style={title}>Your English Level</h1>

        <h2 style={level}>{result.level}</h2>

        <p style={score}>
          Score: {result.score} / {result.maxScore}
        </p>

        <div style={box}>
          Based on CEFR scale (A1 → C1). Placement estimate only.
        </div>

        <div style={buttons}>
          <button onClick={() => router.push("/test")} style={primary}>
            Retake Test
          </button>

          <button onClick={() => router.push("/")} style={secondary}>
            Home
          </button>
        </div>

        <div style={{ marginTop: 35 }}>
          <h3 style={h3}>Review Answers</h3>

          <div style={reviewList}>
            {questions.map((q, i) => {
              const userAnswer = userAnswers[i];
              const isCorrect = userAnswer === q.answer;

              return (
                <div
                  key={i}
                  style={{
                    ...reviewItem,
                    borderColor: isCorrect ? "#22c55e" : "#ef4444"
                  }}
                >
                  <p style={questionText}>{q.question}</p>

                  <p style={meta}>
                    {q.level} • {q.type}
                  </p>

                  <p style={line}>
                    Your answer:{" "}
                    <span style={bold}>
                      {userAnswer !== undefined && userAnswer !== -1
                        ? q.options[userAnswer]
                        : "No answer"}
                    </span>
                  </p>

                  {!isCorrect && (
                    <p style={correct}>
                      Correct answer:{" "}
                      <span style={bold}>
                        {q.options[q.answer]}
                      </span>
                    </p>
                  )}
                </div>
              );
            })}
          </div>
        </div>

      </div>
    </main>
  );
}

/* ---------------- STYLES ---------------- */

const base: React.CSSProperties = {
  minHeight: "100vh",
  background: "#f8fafc",
  display: "flex",
  justifyContent: "center",
  fontFamily: "Arial",
  padding: 20,
  color: "#0f172a"
};

const card: React.CSSProperties = {
  width: "100%",
  maxWidth: 800,
  background: "white",
  padding: 40,
  borderRadius: 16,
  boxShadow: "0 10px 30px rgba(0,0,0,0.08)"
};

const title = {
  fontSize: 28,
  fontWeight: 700,
  color: "#0f172a"
};

const level = {
  fontSize: 64,
  fontWeight: 800,
  color: "#0f172a",
  marginTop: 10
};

const score = {
  fontSize: 18,
  color: "#0f172a",
  marginTop: 10
};

const box = {
  marginTop: 20,
  padding: 15,
  borderRadius: 10,
  background: "#f1f5f9",
  color: "#0f172a"
};

const buttons = {
  marginTop: 25,
  display: "flex",
  gap: 10
};

const primary = {
  padding: "12px 18px",
  background: "#3b82f6",
  color: "white",
  borderRadius: 10,
  border: "none",
  fontWeight: 600
};

const secondary = {
  padding: "12px 18px",
  background: "#e2e8f0",
  color: "#0f172a",
  borderRadius: 10,
  border: "none",
  fontWeight: 600
};

const h3 = {
  fontSize: 20,
  fontWeight: 700,
  color: "#0f172a"
};

const reviewList = {
  marginTop: 15,
  display: "flex",
  flexDirection: "column",
  gap: 12
};

const reviewItem = {
  padding: 15,
  borderRadius: 12,
  border: "2px solid",
  background: "#fff"
};

const questionText = {
  fontWeight: 700,
  fontSize: 15,
  color: "#0f172a"
};

const meta = {
  fontSize: 13,
  color: "#334155",
  marginTop: 4
};

const line = {
  marginTop: 6,
  color: "#0f172a"
};

const correct = {
  marginTop: 4,
  color: "#16a34a"
};

const bold = {
  fontWeight: 700,
  color: "#0f172a"
};