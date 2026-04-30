export interface Project {
  id: number;
  title: string;
  description: string;
  tech: string[];
  image: string;
  liveUrl: string;
  githubUrl?: string;
  featured: boolean;
}

export const projects: Project[] = [
  {
    id: 1,
    title: "Finish Your Quest",
    description:
      "To-do list application with RPG mechanics. Complete quests, earn XP, and level up your character. Gamification meets productivity.",
    tech: ["Next.js", "Tailwind CSS", "TypeScript", "Vercel"],
    image: "/projects/finishyourquest.png",
    liveUrl: "https://finishyourquest.vercel.app",
    featured: true,
  },
  {
    id: 2,
    title: "Sistem Rekomendasi Ban Motor",
    description:
      "Recommendation system for motorcycle tires based on user needs, bike type, and budget. Helps users find the right tire efficiently.",
    tech: ["Next.js", "Tailwind CSS", "Algorithm", "PostgreSQL"],
    image: "/projects/caribanmu.png",
    liveUrl: "https://caribanmu.vercel.app/", 
    featured: true,
  },
  {
    id: 3,
    title: "Personal Finance Tracker",
    description:
      "Track income and expenses with interactive charts, category filters, and monthly summaries. Built for personal financial management.",
    tech: ["Next.js", "Firebase", "Recharts", "Tailwind CSS"],
    image: "/projects/financetracker.png",
    liveUrl: "https://manageurfinance.vercel.app", // GANTI DENGAN URL VERCEL KAMU
    featured: true, // <-- UBAH JADI TRUE
  },
];