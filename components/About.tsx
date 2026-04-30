"use client";

import { motion } from "framer-motion";
import { Code2, Database, Layout, Server } from "lucide-react";

const skills = [
  {
    icon: <Layout size={24} />,
    category: "Frontend",
    items: ["React", "Next.js", "TypeScript", "Tailwind CSS", "Framer Motion"],
  },
  {
    icon: <Server size={24} />,
    category: "Backend",
    items: ["Node.js", "Express", "REST API", "Prisma ORM", "Firebase"],
  },
  {
    icon: <Database size={24} />,
    category: "Database",
    items: ["PostgreSQL", "MySQL", "MongoDB", "Supabase", "Firebase"],
  },
  {
    icon: <Code2 size={24} />,
    category: "Tools",
    items: ["Git", "GitHub", "Vercel", "VS Code", "Figma"],
  },
];

export default function About() {
  return (
    <section id="about" className="py-24 md:py-32">
      <div className="max-w-6xl mx-auto px-6">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <p className="text-emerald-400 text-sm font-medium mb-2">ABOUT ME</p>
          <h2 className="text-3xl md:text-4xl font-bold">
            Background & Skills
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-16">
          {/* About Text */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            viewport={{ once: true }}
          >
            <p className="text-gray-400 leading-relaxed mb-6">
              I&apos;m a final-year Informatics Engineering student at Universitas
              Duta Bangsa with a passion for building web applications. I
              specialize in modern JavaScript frameworks, particularly React and
              Next.js.
            </p>
            <p className="text-gray-400 leading-relaxed mb-6">
              My focus is creating fast, responsive, and user-friendly websites
              that solve real problems. I enjoy turning complex requirements
              into clean, efficient code.
            </p>
            <p className="text-gray-400 leading-relaxed">
              Currently available for freelance projects — from landing pages
              to full-stack web applications.
            </p>
          </motion.div>

          {/* Skills Grid */}
          <div className="grid grid-cols-2 gap-4">
            {skills.map((skill, index) => (
              <motion.div
                key={skill.category}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 * index }}
                viewport={{ once: true }}
                className="p-5 bg-white/[0.03] rounded-2xl border border-white/5 hover:border-white/10 transition-colors"
              >
                <div className="text-emerald-400 mb-3">{skill.icon}</div>
                <h3 className="text-sm font-semibold mb-3">
                  {skill.category}
                </h3>
                <ul className="space-y-1.5">
                  {skill.items.map((item) => (
                    <li
                      key={item}
                      className="text-sm text-gray-500"
                    >
                      {item}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}