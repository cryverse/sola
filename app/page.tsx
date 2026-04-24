console.log("TEST UPDATE VERCEL");

"use client";

import { useEffect, useState } from "react";

export default function Home() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const btnPrimary: React.CSSProperties = {
    padding: "14px 22px",
    background: "#3b82f6",
    color: "white",
    borderRadius: 12,
    textDecoration: "none",
    fontWeight: 600,
    display: "inline-block"
  };

  const btnSecondary: React.CSSProperties = {
    padding: "14px 22px",
    background: "#e2e8f0",
    color: "#0f172a",
    borderRadius: 12,
    textDecoration: "none",
    fontWeight: 600,
    display: "inline-block"
  };

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
        <div style={{ fontWeight: 800, fontSize: 18 }}>Sola</div>

        <div style={{ display: "flex", gap: 20 }}>
          <a href="#features">Features</a>
          <a href="#how">How it works</a>
          <a href="/test" style={{ fontWeight: 700 }}>Start test</a>
        </div>
      </div>

      {/* HERO */}
      <section style={{
        textAlign: "center",
        padding: "110px 20px 60px"
      }}>
        <h1 style={{
          fontSize: 54,
          fontWeight: 800,
          lineHeight: 1.1,
          maxWidth: 800,
          margin: "0 auto"
        }}>
          Find your real English level in 5 minutes
        </h1>

        <p style={{
          marginTop: 20,
          fontSize: 18,
          color: "#475569",
          maxWidth: 650,
          marginInline: "auto"
        }}>
          Sola is a CEFR-based English test (A1 → C1). No registration.
          Instant result. Built for learners who want clarity, not guesswork.
        </p>

        <div style={{
          marginTop: 30,
          display: "flex",
          gap: 15,
          justifyContent: "center",
          flexWrap: "wrap"
        }}>
          <a href="/test" style={btnPrimary}>
            Start test
          </a>

          <a href="#how" style={btnSecondary}>
            How it works
          </a>
        </div>

        <p style={{
          marginTop: 18,
          fontSize: 13,
          color: "#94a3b8"
        }}>
          ⚡ 5 min • ⚡ Instant result • ⚡ CEFR-based
        </p>
      </section>

      {/* FEATURES */}
      <section id="features" style={{
        padding: "80px 20px",
        textAlign: "center"
      }}>
        <h2 style={{ fontSize: 32, fontWeight: 700 }}>
          Why Sola
        </h2>

        <div style={{
          display: "flex",
          gap: 20,
          justifyContent: "center",
          flexWrap: "wrap",
          marginTop: 40
        }}>
          <div style={{
            background: "white",
            padding: 25,
            borderRadius: 16,
            width: 260,
            boxShadow: "0 10px 25px rgba(0,0,0,0.05)"
          }}>
            <h3>CEFR accuracy</h3>
            <p>Real A1–C1 structured evaluation system</p>
          </div>

          <div style={{
            background: "white",
            padding: 25,
            borderRadius: 16,
            width: 260,
            boxShadow: "0 10px 25px rgba(0,0,0,0.05)"
          }}>
            <h3>Fast test</h3>
            <p>20 questions, no unnecessary complexity</p>
          </div>

          <div style={{
            background: "white",
            padding: 25,
            borderRadius: 16,
            width: 260,
            boxShadow: "0 10px 25px rgba(0,0,0,0.05)"
          }}>
            <h3>Instant result</h3>
            <p>Get your level immediately after finishing</p>
          </div>
        </div>
      </section>

      {/* HOW IT WORKS */}
      <section id="how" style={{
        padding: "80px 20px",
        textAlign: "center",
        background: "#ffffff"
      }}>
        <h2 style={{ fontSize: 32, fontWeight: 700 }}>
          How it works
        </h2>

        <div style={{
          maxWidth: 600,
          margin: "40px auto",
          textAlign: "left",
          fontSize: 18,
          lineHeight: 2,
          color: "#334155"
        }}>
          <p>1. Start a 5-minute test</p>
          <p>2. Answer 20 structured questions</p>
          <p>3. Get your CEFR level instantly</p>
        </div>

        <a href="/test" style={btnPrimary}>
          Start test now
        </a>
      </section>

      {/* FINAL CTA */}
      <section style={{
        padding: "90px 20px",
        textAlign: "center",
        background: "#0f172a",
        color: "white"
      }}>
        <h2 style={{ fontSize: 36, fontWeight: 800 }}>
          Ready to find your English level?
        </h2>

        <p style={{
          marginTop: 10,
          color: "#cbd5e1"
        }}>
          Takes only 5 minutes. No registration.
        </p>

        <a href="/test" style={{
          ...btnPrimary,
          marginTop: 25
        }}>
          Start test
        </a>
      </section>

      {/* FOOTER */}
      <footer style={{
        padding: 30,
        textAlign: "center",
        fontSize: 13,
        color: "#94a3b8"
      }}>
        Sola © 2026
      </footer>

    </main>
  );
}