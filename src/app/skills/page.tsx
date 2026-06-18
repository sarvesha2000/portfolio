"use client";

import { motion } from "framer-motion";

const skills = [
  {
    category: "Frontend",
    color: "#22d3ee",
    items: [
      { name: "React", level: 4 },
      { name: "Next.js", level: 4 },
      { name: "TypeScript", level: 3 },
      { name: "Tailwind CSS", level: 4 },
      { name: "Framer Motion", level: 3 },
      { name: "Three.js", level: 2 },
    ],
  },
  {
    category: "Backend",
    color: "#34d399",
    items: [
      { name: "FastAPI", level: 3 },
      { name: "Python", level: 4 },
      { name: "PostgreSQL", level: 3 },
      { name: "REST APIs", level: 4 },
      { name: "Redis", level: 2 },
    ],
  },
  {
    category: "AI / GenAI",
    color: "#c084fc",
    items: [
      { name: "RAG Pipelines", level: 3 },
      { name: "LLM APIs", level: 3 },
      { name: "Embeddings", level: 3 },
      { name: "Prompt Engineering", level: 4 },
      { name: "Vector Databases", level: 2 },
      { name: "LangChain", level: 2 },
    ],
  },
  {
    category: "DevOps & Tools",
    color: "#fb923c",
    items: [
      { name: "Git & GitHub", level: 4 },
      { name: "Docker", level: 2 },
      { name: "CI/CD", level: 2 },
      { name: "Vercel", level: 3 },
      { name: "VS Code", level: 5 },
    ],
  },
];

function SkillBar({ name, level, color }: { name: string; level: number; color: string }) {
  return (
    <div style={{ marginBottom: "16px" }}>
      <div style={{ display: "flex", justifyContent: "space-between", marginBottom: "6px" }}>
        <span style={{ fontSize: "14px", color: "rgba(255,255,255,0.7)" }}>{name}</span>
        <span style={{ fontSize: "12px", color: "rgba(255,255,255,0.25)" }}>
          {["", "Beginner", "Learning", "Comfortable", "Proficient", "Expert"][level]}
        </span>
      </div>
      <div style={{ height: "4px", background: "rgba(255,255,255,0.06)", borderRadius: "99px", overflow: "hidden" }}>
        <motion.div
          initial={{ width: 0 }}
          animate={{ width: `${(level / 5) * 100}%` }}
          transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
          style={{ height: "100%", background: color, borderRadius: "99px" }}
        />
      </div>
    </div>
  );
}

export default function SkillsPage() {
  return (
    <div style={{ minHeight: "100vh", background: "#0A0A1A", padding: "80px 24px" }}>
      <div style={{ maxWidth: "900px", margin: "0 auto" }}>

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          style={{ marginBottom: "64px", textAlign: "center" }}
        >
          <p style={{ color: "rgba(167,139,250,0.7)", fontSize: "13px", letterSpacing: "0.12em", textTransform: "uppercase", marginBottom: "12px" }}>
            What I work with
          </p>
          <h1 style={{ fontSize: "52px", fontWeight: "700", color: "white", lineHeight: 1.1, marginBottom: "16px" }}>
            Skills
          </h1>
          <p style={{ fontSize: "18px", color: "rgba(255,255,255,0.45)", maxWidth: "500px", margin: "0 auto" }}>
            A living map of what I know and what I'm actively learning.
            The 3D galaxy version is coming in M3.
          </p>
        </motion.div>

        {/* Skills grid */}
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(380px, 1fr))", gap: "24px" }}>
          {skills.map((group, i) => (
            <motion.div
              key={group.category}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              style={{
                background: "rgba(255,255,255,0.03)",
                border: "1px solid rgba(255,255,255,0.07)",
                borderRadius: "16px",
                padding: "28px",
              }}
            >
              {/* Category header */}
              <div style={{ display: "flex", alignItems: "center", gap: "10px", marginBottom: "24px" }}>
                <div style={{
                  width: "10px",
                  height: "10px",
                  borderRadius: "50%",
                  background: group.color,
                  boxShadow: `0 0 10px ${group.color}`,
                }} />
                <h2 style={{ fontSize: "16px", fontWeight: "600", color: "white" }}>
                  {group.category}
                </h2>
              </div>

              {/* Skill bars */}
              {group.items.map((skill) => (
                <SkillBar
                  key={skill.name}
                  name={skill.name}
                  level={skill.level}
                  color={group.color}
                />
              ))}
            </motion.div>
          ))}
        </div>

        {/* 3D preview note */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          style={{
            marginTop: "48px",
            padding: "24px",
            borderRadius: "16px",
            border: "1px dashed rgba(167,139,250,0.25)",
            textAlign: "center",
          }}
        >
          <p style={{ color: "rgba(167,139,250,0.6)", fontSize: "14px", marginBottom: "4px" }}>
            ✦ 3D Skills Galaxy
          </p>
          <p style={{ color: "rgba(255,255,255,0.25)", fontSize: "13px" }}>
            An interactive Three.js universe where each skill is an orbiting planet — arriving in Milestone 3
          </p>
        </motion.div>

      </div>
    </div>
  );
}