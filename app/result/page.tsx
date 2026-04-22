type Props = {
  searchParams: { score?: string };
};

export default function ResultPage({ searchParams }: Props) {
  const score = Number(searchParams.score || 0);
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
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      fontFamily: "Arial",
      background: "#f8fafc",
      padding: 20
    }}>

      <div style={{
        background: "white",
        padding: 40,
        borderRadius: 16,
        textAlign: "center",
        width: "100%",
        maxWidth: 500,
        boxShadow: "0 10px 30px rgba(0,0,0,0.08)"
      }}>

        <h2 style={{ color: "#6b7280" }}>
          Your level
        </h2>

        <h1 style={{ fontSize: 64 }}>
          {level}
        </h1>

        <p>
          Score: {score} / {questionsTotal}
        </p>

        <p style={{ marginTop: 15, color: "#6b7280" }}>
          {getDescription(level)}
        </p>

        <a href="/test" style={{
          display: "inline-block",
          marginTop: 25,
          padding: "12px 20px",
          background: "#3b82f6",
          color: "white",
          borderRadius: 10,
          textDecoration: "none"
        }}>
          Retake test
        </a>

      </div>

    </main>
  );
}