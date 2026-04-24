"use client";

import { useSearchParams } from "next/navigation";

export default function ResultInner() {
  const params = useSearchParams();

  const score = Number(params.get("score") || 0);
  const total = Number(params.get("total") || 20);

  function getLevel(score: number) {
    if (score <= 4) return "A1";
    if (score <= 8) return "A2";
    if (score <= 12) return "B1";
    if (score <= 16) return "B2";
    return "C1";
  }

  function getDescription(level: string) {
    switch (level) {
      case "A1":
        return "You understand very basic English words and simple phrases.";
      case "A2":
        return "You can communicate in simple everyday situations.";
      case "B1":
        return "You can handle most travel and daily conversations.";
      case "B2":
        return "You can communicate fluently in most situations.";
      case "C1":
        return "You have advanced English with strong accuracy and fluency.";
      default:
        return "";
    }
  }

  const level = getLevel(score);

  return (
    <main
      style={{
        minHeight: "100vh",
        background: "#f8fafc",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        fontFamily: "Arial",
        padding: 20,
        color: "#0f172a",
      }}
    >
      <div
        style={{
          width: "100%",
          maxWidth: 650,
          background: "white",
          borderRadius: 18,
          padding: 40,
          boxShadow: "0 10px 30px rgba(0,0,0,0.08)",
          textAlign: "center",
        }}
      >
        {/* TITLE */}
        <h2 style={{ fontSize: 16, color: "#475569", marginBottom: 10 }}>
          Your English Level Result
        </h2>

        {/* LEVEL */}
        <h1
          style={{
            fontSize: 64,
            margin: "10px 0",
            fontWeight: 800,
            color: "#0f172a",
          }}
        >
          {level}
        </h1>

        {/* SCORE */}
        <p style={{ fontSize: 18, color: "#0f172a", marginTop: 10 }}>
          Score: <b>{score}</b> / {total}
        </p>

        {/* DESCRIPTION */}
        <p
          style={{
            marginTop: 20,
            fontSize: 16,
            color: "#334155",
            lineHeight: 1.6,
          }}
        >
          {getDescription(level)}
        </p>

        {/* INFO BOX */}
        <div
          style={{
            marginTop: 30,
            background: "#f1f5f9",
            padding: 18,
            borderRadius: 12,
            fontSize: 14,
            color: "#334155",
            lineHeight: 1.5,
          }}
        >
          This test is based on CEFR scale (A1 → C1). It is a placement
          estimate, not an official exam certificate.
        </div>

        {/* BUTTONS */}
        <div
          style={{
            marginTop: 30,
            display: "flex",
            gap: 12,
            justifyContent: "center",
            flexWrap: "wrap",
          }}
        >
          <a
            href="/test"
            style={{
              padding: "12px 20px",
              background: "#3b82f6",
              color: "white",
              borderRadius: 10,
              textDecoration: "none",
              fontWeight: 600,
            }}
          >
            Retake Test
          </a>

          <a
            href="/"
            style={{
              padding: "12px 20px",
              background: "#e2e8f0",
              color: "#0f172a",
              borderRadius: 10,
              textDecoration: "none",
              fontWeight: 600,
            }}
          >
            Back to Home
          </a>
        </div>
      </div>
    </main>
  );
}