"use client";

import { useState } from "react";
import { questions } from "../lib/questions";
import { useRouter } from "next/navigation";

export default function Test() {
  const [current, setCurrent] = useState(0);
  const [selected, setSelected] = useState<number | null>(null);
  const [answered, setAnswered] = useState(false);
  const [score, setScore] = useState(0);
  const [locked, setLocked] = useState(false);

  const router = useRouter();

  const q = questions[current];

  function selectOption(i: number) {
    if (locked) return;
    setSelected(i);
  }

  function check() {
    if (selected === null) return;

    setAnswered(true);
    setLocked(true);

    if (selected === q.answer) {
      setScore(score + 1);
    }
  }

  function next() {
    setSelected(null);
    setAnswered(false);
    setLocked(false);

    if (current + 1 < questions.length) {
      setCurrent(current + 1);
    } else {
      router.push(`/result?score=${score}`);
    }
  }

  const progress = ((current + 1) / questions.length) * 100;

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
        maxWidth: 650,
        background: "white",
        borderRadius: 16,
        padding: 30,
        boxShadow: "0 10px 25px rgba(0,0,0,0.08)"
      }}>

        {/* TOP BAR */}
        <div style={{
          marginBottom: 20
        }}>

          <div style={{
            height: 8,
            background: "#e5e7eb",
            borderRadius: 20
          }}>
            <div style={{
              width: `${progress}%`,
              height: "100%",
              background: "#3b82f6",
              borderRadius: 20,
              transition: "0.3s"
            }} />
          </div>

          <p style={{
            marginTop: 10,
            fontSize: 14,
            color: "#6b7280"
          }}>
            Question {current + 1} / {questions.length}
          </p>

        </div>

        {/* QUESTION */}
        <h1 style={{
          fontSize: 22,
          fontWeight: 600,
          color: "#0f172a",
          marginBottom: 25
        }}>
          {q.question}
        </h1>

        {/* OPTIONS */}
        <div style={{
          display: "flex",
          flexDirection: "column",
          gap: 12
        }}>
          {q.options.map((opt, i) => {

            let bg = "#f1f5f9";
            let border = "#e2e8f0";
            let color = "#0f172a";

            if (selected === i && !answered) {
              bg = "#dbeafe";
              border = "#3b82f6";
            }

            if (answered) {
              if (i === q.answer) {
                bg = "#dcfce7";
                border = "#22c55e";
              } else if (i === selected) {
                bg = "#fee2e2";
                border = "#ef4444";
              }
            }

            return (
              <button
                key={i}
                onClick={() => selectOption(i)}
                style={{
                  padding: 14,
                  borderRadius: 12,
                  border: `1px solid ${border}`,
                  background: bg,
                  textAlign: "left",
                  fontSize: 16,
                  color,
                  cursor: locked ? "default" : "pointer",
                  transition: "0.2s"
                }}
              >
                {opt}
              </button>
            );
          })}
        </div>

        {/* ACTIONS */}
        <div style={{
          marginTop: 25,
          display: "flex",
          justifyContent: "space-between"
        }}>

          <button
            onClick={check}
            disabled={answered}
            style={{
              padding: "12px 18px",
              background: answered ? "#94a3b8" : "#111827",
              color: "white",
              borderRadius: 10,
              border: "none",
              cursor: answered ? "not-allowed" : "pointer"
            }}
          >
            Check answer
          </button>

          {answered && (
            <button
              onClick={next}
              style={{
                padding: "12px 18px",
                background: "#3b82f6",
                color: "white",
                borderRadius: 10,
                border: "none",
                cursor: "pointer"
              }}
            >
              Next
            </button>
          )}

        </div>

        {/* FEEDBACK TEXT */}
        {answered && (
          <p style={{
            marginTop: 15,
            fontSize: 14,
            color: selected === q.answer ? "#16a34a" : "#dc2626"
          }}>
            {selected === q.answer
              ? "Correct"
              : "Incorrect"}
          </p>
        )}

      </div>

    </main>
  );
}