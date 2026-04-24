"use client";

import { useState, useRef } from "react";
import { useRouter } from "next/navigation";
import { questions } from "./questions";

export default function TestPage() {
  const router = useRouter();

  const [current, setCurrent] = useState(0);
  const [selected, setSelected] = useState<number | null>(null);
  const [answers, setAnswers] = useState<number[]>(
    Array(questions.length).fill(-1)
  );

  const audioRef = useRef<HTMLAudioElement | null>(null);

  const question = questions[current];

  function playAudio() {
    if (!question.audio) return;

    if (!audioRef.current) return;

    audioRef.current.src = question.audio;
    audioRef.current.play();
  }

  function handleAnswer() {
    if (selected === null) return;

    const newAnswers = [...answers];
    newAnswers[current] = selected;
    setAnswers(newAnswers);

    setSelected(null);

    const isLast = current === questions.length - 1;

    if (isLast) {
      router.push(
        `/result?answers=${encodeURIComponent(JSON.stringify(newAnswers))}`
      );
      return;
    }

    setCurrent(current + 1);
  }

  function finishEarly() {
    router.push(
      `/result?answers=${encodeURIComponent(JSON.stringify(answers))}`
    );
  }

  return (
    <main style={base}>
      <div style={card}>

        {/* HEADER */}
        <div style={top}>
          <p style={{ color: "#111827" }}>
            Question {current + 1} / {questions.length}
          </p>

          <button onClick={finishEarly} style={finishBtn}>
            Finish Early
          </button>
        </div>

        {/* QUESTION */}
        <h2 style={questionStyle}>{question.question}</h2>

        {/* AUDIO (IMPORTANT FIX) */}
        {question.audio && (
          <div style={{ marginTop: 15 }}>
            <button onClick={playAudio} style={audioBtn}>
              ▶ Play audio
            </button>

            <audio ref={audioRef} />
          </div>
        )}

        {/* OPTIONS */}
        <div style={options}>
          {question.options.map((opt, i) => (
            <button
              key={i}
              onClick={() => setSelected(i)}
              style={{
                ...optionBtn,
                background: selected === i ? "#3b82f6" : "white",
                color: selected === i ? "white" : "#111827"
              }}
            >
              {opt}
            </button>
          ))}
        </div>

        {/* ANSWER */}
        <button
          onClick={handleAnswer}
          disabled={selected === null}
          style={{
            ...answerBtn,
            opacity: selected === null ? 0.5 : 1
          }}
        >
          Answer
        </button>

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
  alignItems: "center",
  fontFamily: "Arial",
  padding: 20
};

const card: React.CSSProperties = {
  width: "100%",
  maxWidth: 700,
  background: "white",
  padding: 40,
  borderRadius: 16,
  boxShadow: "0 10px 30px rgba(0,0,0,0.08)"
};

const top: React.CSSProperties = {
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center"
};

const questionStyle: React.CSSProperties = {
  marginTop: 20,
  fontSize: 22,
  color: "#111827",
  fontWeight: 600
};

const options: React.CSSProperties = {
  marginTop: 20,
  display: "flex",
  flexDirection: "column",
  gap: 10
};

const optionBtn: React.CSSProperties = {
  padding: 14,
  borderRadius: 10,
  border: "1px solid #e5e7eb",
  textAlign: "left",
  cursor: "pointer"
};

const answerBtn: React.CSSProperties = {
  marginTop: 20,
  width: "100%",
  padding: 14,
  background: "#3b82f6",
  color: "white",
  borderRadius: 10,
  border: "none",
  fontWeight: 600
};

const finishBtn: React.CSSProperties = {
  background: "#ef4444",
  color: "white",
  border: "none",
  padding: "8px 14px",
  borderRadius: 10,
  cursor: "pointer"
};

const audioBtn: React.CSSProperties = {
  padding: "10px 14px",
  borderRadius: 10,
  background: "#111827",
  color: "white",
  border: "none",
  cursor: "pointer"
};