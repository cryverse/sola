"use client";

import { useSearchParams } from "next/navigation";

export default function Result() {
  const params = useSearchParams();
  const score = Number(params.get("score"));

  const questionsTotal = 20;

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
        return "You understand very basic English and simple phrases.";
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
    <main style={{
      minHeight: "100vh",
      background: "#f8fafc",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      fontFamily: "Arial",
      padding: 20
    }}>

      <div style={{
        width: "100%",
        maxWidth: 600,
        background: "white",
        borderRadius: 16,
        padding: 40,
        boxShadow: "0 10px 30px rgba(0,0,0,0.08)",
        textAlign: "center"
      }}>

        {/* LEVEL */}
        <h2 style={{
          color: "#6b7280",
          fontSize: 16
        }}>
          Your English Level
        </h2>

        <h1 style={{
          fontSize: 64,
          margin: "10px 0",
          color: "#111827"
        }}>
          {level}
        </h1>

        {/* SCORE */}
        <p style={{
          fontSize: 18,
          color: "#374151"
        }}>
          Score: {score} / {questionsTotal}
        </p>

        {/* DESCRIPTION */}
        <p style={{
          marginTop: 20,
          fontSize: 16,
          color: "#6b7280",
          maxWidth: 450,
          marginInline: "auto"
        }}>
          {getDescription(level)}
        </p>

        {/* INFO BLOCK */}
        <div style={{
          marginTop: 30,
          background: "#f1f5f9",
          padding: 20,
          borderRadius: 12,
          fontSize: 14,
          color: "#334155"
        }}>
          Based on CEFR scale (A1 → C1). This is a fast placement estimate, not a certified exam.
        </div>

        {/* CTA */}
        <a
          href="/test"
          style={{
            display: "inline-block",
            marginTop: 30,
            padding: "12px 20px",
            background: "#3b82f6",
            color: "white",
            borderRadius: 10,
            textDecoration: "none",
            fontWeight: 600
          }}
        >
          Retake Test
        </a>

      </div>

    </main>
  );
}