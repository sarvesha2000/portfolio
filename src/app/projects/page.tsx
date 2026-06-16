"use client";

import { motion } from "framer-motion";
import { useState } from "react";

const projects = [
  {
    title: "AI Portfolio Platform",
    description: "This very site — a next-generation portfolio with RAG-powered AI assistant, 3D skill galaxy, and recruiter mode. Built as a GenAI learning project.",
    tags: ["Next.js", "FastAPI", "RAG", "Three.js", "TypeScript"],
    category: "AI",
    status: "In Progress",
    github: "https://github.com/sarvesha2000/portfolio",
    live: null,
    impact: "Full GenAI + 3D stack in one project",
  },
  {
    title: "Project 2",
    description: "Add your second project here. Describe the problem you solved, the tech you used, and the impact it had.",
    tags: ["Python", "FastAPI", "PostgreSQL"],
    category: "Backend",
    status: "Completed",
    github: "#",
    live: null,
    impact: "Describe your impact metric here",
  },
  {
    title: "Project 3",
    description: "Add your third project here. Real projects with real outcomes impress recruiters far more than tutorial projects.",
    tags: ["React", "TypeScript", "Tailwind"],
    category: "Frontend",
    status: "Completed",
    github: "#",
    live: null,
    impact: "Describe your impact metric here",
  },
  {
    title: "Project 4",
    description: "Add your fourth project. Consider adding an ML or GenAI project here to show breadth.",
    tags: ["Python", "LLM", "Vector DB"],
    category: "AI",
    status: "Completed",
    github: "#",
    live: null,
    impact: "Describe your impact metric here",
  },
];

const categories = ["All", "AI", "Frontend", "Backend"];

const categoryColors: Record<string, string> = {
  AI: "rgba(167,139,250,0.15)",
  Frontend: "rgba(34,211,238,0.15)",
  Backend: "rgba(52,211,153,0.15)",
};

const categoryText: Record<string, string> = {
  AI: "#C4B5FD",
  Frontend: "#67E8F9",
  Backend: "#6EE7B7",
};

export default function ProjectsPage() {
  const [active, setActive] = useState("All");

  const filtered = active === "All"
    ? projects
    : projects.filter((p) => p.category === active);

  return (
    <div style={{ minHeight: "100vh", background: "#0A0A1A", padding: "80px 24px" }}>
      <div style={{ maxWidth: "1000px", margin: "0 auto" }}>

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          style={{ marginBottom: "48px" }}
        >
          <p style={{ color: "rgba(167,139,250,0.7)", fontSize: "13px", letterSpacing: "0.12em", textTransform: "uppercase", marginBottom: "12px" }}>
            My work
          </p>
          <h1 style={{ fontSize: "52px", fontWeight: "700", color: "white", lineHeight: 1.1, marginBottom: "16px" }}>
            Projects
          </h1>
          <p style={{ fontSize: "18px", color: "rgba(255,255,255,0.45)", maxWidth: "560px" }}>
            Things I've built, shipped, and learned from. Each project is a story of a problem solved.
          </p>
        </motion.div>

        {/* Filter tabs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          style={{ display: "flex", gap: "8px", marginBottom: "40px", flexWrap: "wrap" }}
        >
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActive(cat)}
              style={{
                padding: "8px 20px",
                borderRadius: "99px",
                border: active === cat ? "1px solid rgba(167,139,250,0.6)" : "1px solid rgba(255,255,255,0.1)",
                background: active === cat ? "rgba(124,58,237,0.2)" : "transparent",
                color: active === cat ? "#C4B5FD" : "rgba(255,255,255,0.45)",
                fontSize: "14px",
                cursor: "pointer",
                transition: "all 0.2s",
              }}
            >
              {cat}
            </button>
          ))}
        </motion.div>

        {/* Project grid */}
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(440px, 1fr))", gap: "20px" }}>
          {filtered.map((project, i) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              whileHover={{ y: -4, transition: { duration: 0.2 } }}
              style={{
                background: "rgba(255,255,255,0.03)",
                border: "1px solid rgba(255,255,255,0.08)",
                borderRadius: "16px",
                padding: "28px",
                cursor: "pointer",
                position: "relative",
                overflow: "hidden",
              }}
            >
              {/* Top row */}
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: "16px" }}>
                <span style={{
                  padding: "4px 12px",
                  borderRadius: "99px",
                  background: categoryColors[project.category] || "rgba(255,255,255,0.08)",
                  color: categoryText[project.category] || "rgba(255,255,255,0.6)",
                  fontSize: "12px",
                  fontWeight: "500",
                }}>
                  {project.category}
                </span>
                <span style={{
                  fontSize: "12px",
                  color: project.status === "In Progress" ? "#FCD34D" : "rgba(255,255,255,0.3)",
                }}>
                  {project.status === "In Progress" ? "🟡 " : "✅ "}{project.status}
                </span>
              </div>

              {/* Title */}
              <h3 style={{ fontSize: "20px", fontWeight: "600", color: "white", marginBottom: "10px" }}>
                {project.title}
              </h3>

              {/* Description */}
              <p style={{ fontSize: "14px", color: "rgba(255,255,255,0.45)", lineHeight: 1.7, marginBottom: "16px" }}>
                {project.description}
              </p>

              {/* Impact */}
              <div style={{
                background: "rgba(124,58,237,0.08)",
                border: "1px solid rgba(124,58,237,0.15)",
                borderRadius: "8px",
                padding: "10px 14px",
                marginBottom: "20px",
                fontSize: "13px",
                color: "rgba(196,181,253,0.8)",
              }}>
                ✦ {project.impact}
              </div>

              {/* Tags */}
              <div style={{ display: "flex", flexWrap: "wrap", gap: "8px", marginBottom: "24px" }}>
                {project.tags.map((tag) => (
                  <span key={tag} style={{
                    padding: "4px 10px",
                    borderRadius: "6px",
                    background: "rgba(255,255,255,0.05)",
                    border: "1px solid rgba(255,255,255,0.08)",
                    fontSize: "12px",
                    color: "rgba(255,255,255,0.5)",
                  }}>
                    {tag}
                  </span>
                ))}
              </div>

              {/* Links */}
              <div style={{ display: "flex", gap: "12px" }}>
                <a href={project.github} style={{
                  padding: "8px 16px",
                  borderRadius: "8px",
                  border: "1px solid rgba(255,255,255,0.12)",
                  color: "rgba(255,255,255,0.55)",
                  fontSize: "13px",
                  textDecoration: "none",
                  display: "flex",
                  alignItems: "center",
                  gap: "6px",
                }}>
                  GitHub →
                </a>
                {project.live && (
                  <a href={project.live} style={{
                    padding: "8px 16px",
                    borderRadius: "8px",
                    background: "#7C3AED",
                    color: "white",
                    fontSize: "13px",
                    textDecoration: "none",
                  }}>
                    Live ↗
                  </a>
                )}
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </div>
  );
}