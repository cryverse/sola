"use client";

import { useEffect, useState } from "react";

export default function Home() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <main style={{
      minHeight: "100vh",
      background: "#f8fafc",
      fontFamily: "Arial",
      color: "#0f172a"
    }}>

      {/* NAV */}
      <div style={{
        position: "sticky",
        top: 0,
        background: scrolled ? "white" : "transparent",
        backdropFilter: "blur(10px)",
        borderBottom: scrolled ? "1px solid #e5e7eb" : "none",
        display: "flex",
        justifyContent: "space-between",
        padding: "18px 40px",
        transition: "0.3s"
      }}>
        <div style={{ fontWeight: 800 }}>Sola</div>

        <div style={{ display: "flex", gap: 20 }}>
          <a href="#features">Features</a>
          <a href="#how">How it works</a>
          <a href="/test" style={{ fontWeight: 600 }}>Start Test</a>
        </div>
      </div>

      {/* HERO */}
      <section style={{
        textAlign: "center",
        padding: "100px 20px 60px"
      }}>

        <h1 style={{
          fontSize: 58,
          fontWeight: 800,
          lineHeight: 1.1
        }}>
          Find your real English level
        </h1>

        <p style={{
          marginTop: 20,
          fontSize: 18,
          color: "#475569",
          maxWidth: 650,
          marginInline: "auto"
        }}>
          Sola is a fast English level test based on CEFR (A1 → C1).
          No registration. No waiting. Just real results in 5 minutes.
        </p>

        <div style={{
          marginTop: 30,
          display: "flex",
          gap: 15,
          justifyContent: "center",
          flexWrap: "wrap"
        }}>

          <a href="/test" style={btnPrimary}>
            Start Test
          </a>

          <a href="#how" style={btnSecondary}>
            See how it works
          </a>

        </div>

        {/* trust line */}
        <p style={{
          marginTop: 20,
          fontSize: 14,
          color: "#94a3b8"
        }}>
          ⚡ 5 minutes • ⚡ Instant result • ⚡ CEFR-based
        </p>

      </section>

      {/* FEATURES */}
      <section id="features" style={section}>
        <h2 style={h2}>Why people use Sola</h2>

        <div style={grid}>
          <div style={card}>
            <h3>Real CEFR scale</h3>
            <p>From A1 to C1 with structured difficulty</p>
          </div>

          <div style={card}>
            <h3>Fast test</h3>
            <p>Only 20 questions, no wasting time</p>
          </div>

          <div style={card}>
            <h3>Instant result</h3>
            <p>Get your level immediately after test</p>
          </div>
        </div>
      </section>

      {/* HOW IT WORKS */}
      <section id="how" style={{
        padding: "80px 20px",
        textAlign: "center"
      }}>
        <h2 style={h2}>How it works</h2>

        <div style={{
          maxWidth: 600,
          margin: "40px auto",
          textAlign: "left",
          fontSize: 18,
          lineHeight: 2
        }}>
          <p>1. Start a 5-minute test</p>
          <p>2. Answer 20 carefully selected questions</p>
          <p>3. Get your English level instantly</p>
        </div>

        <a href="/test" style={btnPrimary}>
          Start your test now
        </a>
      </section>

      {/* FINAL CTA */}
      <section style={{
        textAlign: "center",
        padding: "80px 20px",
        background: "#0f172a",
        color: "white"
      }}>
        <h2 style={{ fontSize: 36 }}>
          Ready to find your level?
        </h2>

        <p style={{ color: "#cbd5e1", marginTop: 10 }}>
          Takes only 5 minutes
        </p>

        <a href="/test" style={{
          ...btnPrimary,
          marginTop: 25,
          display: "inline-block"
        }}>
          Start Test
        </a>
      </section>

      {/* FOOTER */}
      <footer style={{
        padding: 30,
        textAlign: "center",
        color: "#94a3b8",
        fontSize: 14
      }}>
        Sola © 2026
      </footer>

    </main>
  );
}

/* STYLES */

const btnPrimary = {
  padding: "14px 26px",
  background: "#3b82f6",
  color: "white",
  borderRadius: 12,
  textDecoration: "none",
  fontWeight: 600
};

const btnSecondary = {
  padding: "14px 26px",
  background: "#e2e8f0",
  color: "#0f172a",
  borderRadius: 12,
  textDecoration: "none"
};

const section = {
  padding: "80px 20px",
  textAlign: "center"
};

const h2 = {
  fontSize: 32,
  fontWeight: 700
};

const grid = {
  display: "flex",
  gap: 20,
  justifyContent: "center",
  flexWrap: "wrap",
  marginTop: 40
};

const card = {
  background: "white",
  padding: 25,
  borderRadius: 16,
  width: 240,
  boxShadow: "0 10px 25px rgba(0,0,0,0.05)"
};