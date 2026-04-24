"use client";

import { useSearchParams, useRouter } from "next/navigation";
import { questions } from "../test/questions";
import { calculateScore } from "../test/scoring";

export default function ResultPage() {
  const router = useRouter();
  const params = useSearchParams();

  const answersParam = params.get("answers");
  const userAnswers: number[] = answersParam
    ? JSON.parse(answersParam)
    : [];

  const result = calculateScore(userAnswers);

  return (
    <main style={base}>
      <div style={card}>

        {/* HEADER */}
        <h1 style={title}>Your English Level</h1>

        <h2 style={level}>{result.level}</h2>

        <p style={score}>
          Score: {result.score} / {result.maxScore}
        </p>

        {/* INFO */}
        <div style={box}>
          Based on CEFR scale (A1 → C1). Placement estimate only.
        </div>

        {/* BUTTONS */}
        <div style={buttons}>
          <button onClick={() => router.push("/test")} style={primary}>
            Retake Test
          </button>

          <button onClick={() => router.push("/")} style={secondary}>
            Home
          </button>
        </div>

        {/* REVIEW */}
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
                  {/* QUESTION */}
                  <p style={questionText}>{q.question}</p>

                  {/* META */}
                  <p style={meta}>
                    {q.level} • {q.type}
                  </p>

                  {/* YOUR ANSWER */}
                  <p style={line}>
                    Your answer:{" "}
                    <span style={bold}>
                      {userAnswer !== -1
                        ? q.options[userAnswer]
                        : "No answer"}
                    </span>
                  </p>

                  {/* CORRECT ANSWER */}
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

/* ---------------- STYLES (FIXED CONTRAST) ---------------- */

const base: React.CSSProperties = {
  minHeight: "100vh",
  background: "#f8fafc",
  display: "flex",
  justifyContent: "center",
  fontFamily: "Arial",
  padding: 20
};

const card: React.CSSProperties = {
  width: "100%",
  maxWidth: 800,
  background: "white",
  padding: 40,
  borderRadius: 16,
  boxShadow: "0 10px 30px rgba(0,0,0,0.08)"
};

const title: React.CSSProperties = {
  fontSize: 28,
  fontWeight: 700,
  color: "#111827"
};

const level: React.CSSProperties = {
  fontSize: 64,
  fontWeight: 800,
  marginTop: 10,
  color: "#111827"
};

const score: React.CSSProperties = {
  fontSize: 18,
  color: "#111827",
  marginTop: 10
};

const box: React.CSSProperties = {
  marginTop: 20,
  padding: 15,
  borderRadius: 10,
  background: "#f1f5f9",
  color: "#111827"
};

const buttons: React.CSSProperties = {
  marginTop: 25,
  display: "flex",
  gap: 10
};

const primary: React.CSSProperties = {
  padding: "12px 18px",
  background: "#3b82f6",
  color: "white",
  borderRadius: 10,
  border: "none",
  fontWeight: 600,
  cursor: "pointer"
};

const secondary: React.CSSProperties = {
  padding: "12px 18px",
  background: "#e2e8f0",
  color: "#111827",
  borderRadius: 10,
  border: "none",
  fontWeight: 600,
  cursor: "pointer"
};

const h3: React.CSSProperties = {
  fontSize: 20,
  fontWeight: 700,
  color: "#111827"
};

const reviewList: React.CSSProperties = {
  marginTop: 15,
  display: "flex",
  flexDirection: "column",
  gap: 12
};

const reviewItem: React.CSSProperties = {
  padding: 15,
  borderRadius: 12,
  border: "2px solid",
  background: "#ffffff"
};

/* 🔥 FIXED TEXT COLORS (KEY PART) */

const questionText: React.CSSProperties = {
  fontWeight: 700,
  fontSize: 15,
  color: "#111827" // было серое → теперь чёрное
};

const meta: React.CSSProperties = {
  fontSize: 13,
  color: "#111827", // было бледное → теперь читаемое
  marginTop: 4
};

const line: React.CSSProperties = {
  marginTop: 6,
  color: "#111827" // FIX
};

const correct: React.CSSProperties = {
  marginTop: 4,
  color: "#16a34a"
};

const bold: React.CSSProperties = {
  fontWeight: 700,
  color: "#111827"
};