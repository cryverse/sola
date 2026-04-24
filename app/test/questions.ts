export type Question = {
  level: "A1" | "A2" | "B1" | "B2" | "C1";
  type: "grammar" | "vocab" | "listening";
  question: string;
  options: string[];
  answer: number;
  audio?: string;
};

export const questions: Question[] = [
  /* ================= A1 ================= */

  {
    level: "A1",
    type: "grammar",
    question: "He ___ a student.",
    options: ["is", "are", "am", "be"],
    answer: 0
  },
  {
    level: "A1",
    type: "grammar",
    question: "I ___ from Russia.",
    options: ["is", "am", "are", "be"],
    answer: 1
  },
  {
    level: "A1",
    type: "vocab",
    question: "What does “book” mean?",
    options: ["стол", "книга", "машина", "вода"],
    answer: 1
  },
  {
    level: "A1",
    type: "vocab",
    question: "What does “happy” mean?",
    options: ["грустный", "злой", "счастливый", "уставший"],
    answer: 2
  },
  {
    level: "A1",
    type: "listening",
    question: "Listen and answer: What is her name?",
    options: ["Maria", "Anna", "Kate", "Lucy"],
    answer: 1,
    audio: "/audio/L1.mp3"
  },

  /* ================= A2 ================= */

  {
    level: "A2",
    type: "grammar",
    question: "She ___ to school every day.",
    options: ["goes", "go", "going", "gone"],
    answer: 0
  },
  {
    level: "A2",
    type: "grammar",
    question: "They ___ football yesterday.",
    options: ["played", "play", "playing", "plays"],
    answer: 0
  },
  {
    level: "A2",
    type: "vocab",
    question: "What does “travel” mean?",
    options: ["работа", "путешествие", "учёба", "еда"],
    answer: 1
  },
  {
    level: "A2",
    type: "vocab",
    question: "What does “tired” mean?",
    options: ["энергичный", "уставший", "злой", "счастливый"],
    answer: 1
  },
  {
    level: "A2",
    type: "listening",
    question: "Listen and answer: How does John go to school?",
    options: ["car", "bus", "bike", "train"],
    answer: 1,
    audio: "/audio/L2.mp3"
  },

  /* ================= B1 ================= */

  {
    level: "B1",
    type: "grammar",
    question: "If I ___ time, I will go.",
    options: ["have", "has", "had", "having"],
    answer: 0
  },
  {
    level: "B1",
    type: "grammar",
    question: "She ___ when I called her.",
    options: ["slept", "sleeps", "sleeping", "sleep"],
    answer: 0
  },
  {
    level: "B1",
    type: "vocab",
    question: "What does “opportunity” mean?",
    options: ["ошибка", "проблема", "шанс", "цель"],
    answer: 2
  },
  {
    level: "B1",
    type: "vocab",
    question: "What does “decision” mean?",
    options: ["действие", "выбор", "ошибка", "игра"],
    answer: 1
  },
  {
    level: "B1",
    type: "listening",
    question: "Listen and answer: Where did Maria go?",
    options: ["school", "supermarket", "hospital", "cinema"],
    answer: 1,
    audio: "/audio/L3.mp3"
  },

  /* ================= B2 ================= */

  {
    level: "B2",
    type: "grammar",
    question: "The meeting ___ because of problems.",
    options: ["was cancelled", "cancelled", "cancelling", "cancel"],
    answer: 0
  },
  {
    level: "B2",
    type: "grammar",
    question: "She has ___ finished her work.",
    options: ["already", "yet", "still", "never"],
    answer: 0
  },
  {
    level: "B2",
    type: "vocab",
    question: "What does “efficient” mean?",
    options: ["медленный", "эффективный", "дорогой", "случайный"],
    answer: 1
  },
  {
    level: "B2",
    type: "vocab",
    question: "What does “delayed” mean?",
    options: ["ранний", "поздний", "быстрый", "готовый"],
    answer: 1
  },
  {
    level: "B2",
    type: "listening",
    question: "Listen and answer: Why was Tom late?",
    options: ["traffic", "train delay", "overslept", "forgot"],
    answer: 1,
    audio: "/audio/L4.mp3"
  },

  /* ================= C1 ================= */

  {
    level: "C1",
    type: "grammar",
    question: "Had I known, I ___ earlier.",
    options: ["come", "came", "would have come", "will come"],
    answer: 2
  },
  {
    level: "C1",
    type: "grammar",
    question: "The report ___ by the team.",
    options: ["write", "wrote", "was written", "writing"],
    answer: 2
  },
  {
    level: "C1",
    type: "vocab",
    question: "What does “implication” mean?",
    options: ["результат", "догадка", "ошибка", "идея"],
    answer: 0
  },
  {
    level: "C1",
    type: "vocab",
    question: "What does “implemented” mean?",
    options: ["игнорирован", "применён", "удалён", "остановлен"],
    answer: 1
  },
  {
    level: "C1",
    type: "listening",
    question: "Listen and answer: Why did the company restructure?",
    options: ["expansion", "cost reduction", "accident", "hiring"],
    answer: 1,
    audio: "/audio/L5.mp3"
  }
];