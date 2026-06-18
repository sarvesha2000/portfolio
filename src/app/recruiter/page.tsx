"use client";

import { motion } from "framer-motion";

const skills = ["Next.js", "React", "TypeScript", "FastAPI", "Python", "PostgreSQL", "RAG Pipelines", "LLM APIs", "Three.js", "Tailwind CSS"];

const experience = [
  {
    role: "Your Current Role",
    company: "Company Name",
    period: "2024 — Present",
    achievement: "Your top achievement in one line — quantify it",
  },
  {
    role: "Previous Role",
    company: "Previous Company",
    period: "2022 — 2024",
    achievement: "Your top achievement in one line",
  },
  {
    role: "First Role / Internship",
    company: "Company Name",
    period: "2021 — 2022",
    achievement: "Your top achievement in one line",
  },
];

const projects = [
  {
    name: "AI Portfolio Platform",
    desc: "RAG-powered portfolio with 3D UI, AI assistant, and recruiter mode. Built with Next.js, FastAPI, and GenAI stack.",
    link: "https://github.com/sarvesha2000/portfolio",
  },
  {
    name: "Project 2",
    desc: "One line description with the impact metric.",
    link: "#",
  },
  {
    name: "Project 3",
    desc: "One line description with the impact metric.",
    link: "#",
  },
];

export default function RecruiterPage() {
  return (
    <div style={{ minHeight: "100vh", background: "#0A0A1A", padding: "60px 24px" }}>
      <div style={{ maxWidth: "820px", margin: "0 auto" }}>

        {/* Mode banner */}
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          style={{
            display: "inline-flex", alignItems: "center", gap: "8px",
            padding: "6px 14px", borderRadius: "99px", marginBottom: "40px",
            background: "rgba(124,58,237,0.15)",
            border: "1px solid rgba(167,139,250,0.3)",
          }}
        >
          <div style={{ width: "6px", height: "6px", borderRadius: "50%", background: "#A78BFA" }} />
          <span style={{ fontSize: "12px", color: "#C4B5FD", letterSpacing: "0.08em" }}>RECRUITER MODE</span>
        </motion.div>

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", flexWrap: "wrap", gap: "20px", marginBottom: "40px", paddingBottom: "40px", borderBottom: "1px solid rgba(255,255,255,0.07)" }}
        >
          <div>
            <h1 style={{ fontSize: "42px", fontWeight: "700", color: "white", marginBottom: "6px" }}>
              Sarvesha Pathak
            </h1>
            <p style={{ fontSize: "18px", color: "#A78BFA", marginBottom: "12px" }}>
              AI Engineer · Full Stack Developer
            </p>
            <div style={{ display: "flex", gap: "20px", flexWrap: "wrap" }}>
              <span style={{ fontSize: "14px", color: "rgba(255,255,255,0.4)" }}>📍 Pune, Maharashtra</span>
              <a href="mailto:sarveshapathak2000@gmail.com" style={{ fontSize: "14px", color: "rgba(255,255,255,0.4)", textDecoration: "none" }}>
                ✉ sarveshapathak2000@gmail.com
              </a>
              <a href="https://github.com/sarvesha2000" style={{ fontSize: "14px", color: "rgba(255,255,255,0.4)", textDecoration: "none" }}>
                ⌥ github.com/sarvesha2000
              </a>
            </div>
          </div>
          <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
            <div style={{
              padding: "8px 18px", borderRadius: "8px",
              background: "rgba(52,211,153,0.1)", border: "1px solid rgba(52,211,153,0.25)",
              fontSize: "13px", color: "#6EE7B7", textAlign: "center",
            }}>
              ✓ Open to opportunities
            </div>
            <button
              onClick={() => window.print()}
              style={{
                padding: "8px 18px", borderRadius: "8px",
                background: "#7C3AED", border: "none",
                color: "white", fontSize: "13px", cursor: "pointer",
              }}
            >
              Download PDF ↓
            </button>
          </div>
        </motion.div>

        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "32px" }}>

          {/* Left column */}
          <div>

            {/* Skills */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              style={{ marginBottom: "36px" }}
            >
              <h2 style={{ fontSize: "11px", fontWeight: "600", color: "rgba(255,255,255,0.3)", textTransform: "uppercase", letterSpacing: "0.1em", marginBottom: "16px" }}>
                Core Skills
              </h2>
              <div style={{ display: "flex", flexWrap: "wrap", gap: "8px" }}>
                {skills.map((skill) => (
                  <span key={skill} style={{
                    padding: "5px 12px", borderRadius: "6px",
                    background: "rgba(255,255,255,0.05)",
                    border: "1px solid rgba(255,255,255,0.08)",
                    fontSize: "13px", color: "rgba(255,255,255,0.65)",
                  }}>
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>

            {/* Experience */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              <h2 style={{ fontSize: "11px", fontWeight: "600", color: "rgba(255,255,255,0.3)", textTransform: "uppercase", letterSpacing: "0.1em", marginBottom: "16px" }}>
                Experience
              </h2>
              <div style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
                {experience.map((exp, i) => (
                  <div key={i} style={{ paddingLeft: "12px", borderLeft: "2px solid rgba(124,58,237,0.3)" }}>
                    <div style={{ fontSize: "15px", fontWeight: "600", color: "white" }}>{exp.role}</div>
                    <div style={{ fontSize: "13px", color: "#A78BFA", marginBottom: "4px" }}>{exp.company} · {exp.period}</div>
                    <div style={{ fontSize: "13px", color: "rgba(255,255,255,0.45)", lineHeight: 1.6 }}>{exp.achievement}</div>
                  </div>
                ))}
              </div>
            </motion.div>

          </div>

          {/* Right column */}
          <div>

            {/* Projects */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              style={{ marginBottom: "36px" }}
            >
              <h2 style={{ fontSize: "11px", fontWeight: "600", color: "rgba(255,255,255,0.3)", textTransform: "uppercase", letterSpacing: "0.1em", marginBottom: "16px" }}>
                Key Projects
              </h2>
              <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
                {projects.map((proj, i) => (
                  <div key={i} style={{
                    padding: "16px",
                    borderRadius: "10px",
                    background: "rgba(255,255,255,0.03)",
                    border: "1px solid rgba(255,255,255,0.07)",
                  }}>
                    <div style={{ display: "flex", justifyContent: "space-between", marginBottom: "6px" }}>
                      <span style={{ fontSize: "14px", fontWeight: "600", color: "white" }}>{proj.name}</span>
                      <a href={proj.link} style={{ fontSize: "12px", color: "#A78BFA", textDecoration: "none" }}>GitHub →</a>
                    </div>
                    <p style={{ fontSize: "13px", color: "rgba(255,255,255,0.4)", lineHeight: 1.6 }}>{proj.desc}</p>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* AI assistant */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.5 }}
              style={{
                padding: "20px",
                borderRadius: "12px",
                background: "rgba(124,58,237,0.08)",
                border: "1px solid rgba(124,58,237,0.2)",
              }}
            >
              <div style={{ fontSize: "14px", fontWeight: "600", color: "white", marginBottom: "8px" }}>
                ✦ Ask the AI about Sarvesha
              </div>
              <p style={{ fontSize: "13px", color: "rgba(255,255,255,0.4)", lineHeight: 1.6, marginBottom: "14px" }}>
                Have questions about her experience, availability, or fit for your role? The AI assistant can answer instantly.
              </p>
              <a href="/chat" style={{
                display: "inline-block",
                padding: "8px 16px", borderRadius: "8px",
                background: "#7C3AED", color: "white",
                fontSize: "13px", textDecoration: "none", fontWeight: "500",
              }}>
                Open AI Chat →
              </a>
            </motion.div>

          </div>
        </div>

      </div>
    </div>
  );
}