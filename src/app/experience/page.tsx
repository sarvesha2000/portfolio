"use client";

import { motion } from "framer-motion";

const experiences = [
  {
    role: "Your Current Role",
    company: "Company Name",
    period: "2024 — Present",
    location: "Pune, Maharashtra",
    type: "Full-time",
    description: "Describe what you do here. Focus on impact, not just responsibilities.",
    achievements: [
      "Achievement 1 — quantify it (e.g. reduced latency by 40%)",
      "Achievement 2 — what did you ship?",
      "Achievement 3 — what did you learn or teach?",
    ],
    tags: ["Python", "FastAPI", "PostgreSQL"],
    current: true,
  },
  {
    role: "Previous Role",
    company: "Previous Company",
    period: "2022 — 2024",
    location: "Pune, Maharashtra",
    type: "Full-time",
    description: "Describe your previous role here.",
    achievements: ["Achievement 1", "Achievement 2", "Achievement 3"],
    tags: ["React", "Node.js", "MongoDB"],
    current: false,
  },
  {
    role: "Internship / First Role",
    company: "Company Name",
    period: "2021 — 2022",
    location: "Remote",
    type: "Internship",
    description: "Your first professional experience.",
    achievements: ["Achievement 1", "Achievement 2"],
    tags: ["JavaScript", "HTML", "CSS"],
    current: false,
  },
];

const education = [
  {
    degree: "Your Degree",
    school: "Your University",
    period: "2018 — 2022",
    description: "Field of study. Any notable projects, clubs, or achievements.",
  },
];

export default function ExperiencePage() {
  return (
    <div style={{ minHeight: "100vh", background: "#0A0A1A", padding: "80px 24px" }}>
      <div style={{ maxWidth: "760px", margin: "0 auto" }}>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          style={{ marginBottom: "64px" }}
        >
          <p style={{ color: "rgba(167,139,250,0.7)", fontSize: "13px", letterSpacing: "0.12em", textTransform: "uppercase", marginBottom: "12px" }}>
            Career
          </p>
          <h1 style={{ fontSize: "52px", fontWeight: "700", color: "white", lineHeight: 1.1, marginBottom: "16px" }}>
            Experience
          </h1>
          <p style={{ fontSize: "18px", color: "rgba(255,255,255,0.45)" }}>
            The journey so far — roles, impact, and what I learned along the way.
          </p>
        </motion.div>

        <div style={{ position: "relative" }}>
          <div style={{
            position: "absolute",
            left: "15px",
            top: "8px",
            bottom: "0",
            width: "1px",
            background: "linear-gradient(to bottom, rgba(124,58,237,0.6), rgba(124,58,237,0.05))",
          }} />

          {experiences.map((exp, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: i * 0.15 }}
              style={{ display: "flex", gap: "32px", marginBottom: "52px", position: "relative" }}
            >
              <div style={{ flexShrink: 0, marginTop: "4px" }}>
                <div style={{
                  width: "30px",
                  height: "30px",
                  borderRadius: "50%",
                  background: exp.current ? "#7C3AED" : "rgba(124,58,237,0.2)",
                  border: exp.current ? "2px solid #A78BFA" : "1px solid rgba(124,58,237,0.3)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  fontSize: "12px",
                  color: "white",
                }}>
                  {exp.current ? "★" : "○"}
                </div>
              </div>

              <div style={{ flex: 1 }}>
                <div style={{ display: "flex", alignItems: "flex-start", justifyContent: "space-between", flexWrap: "wrap", gap: "8px", marginBottom: "4px" }}>
                  <div>
                    <h3 style={{ fontSize: "20px", fontWeight: "600", color: "white", marginBottom: "2px" }}>
                      {exp.role}
                    </h3>
                    <div style={{ fontSize: "15px", color: "#A78BFA", fontWeight: "500" }}>
                      {exp.company}
                    </div>
                  </div>
                  <div style={{ textAlign: "right" }}>
                    <div style={{ fontSize: "13px", color: "rgba(255,255,255,0.35)", marginBottom: "4px" }}>
                      {exp.period}
                    </div>
                    <span style={{
                      padding: "2px 10px",
                      borderRadius: "99px",
                      background: exp.current ? "rgba(124,58,237,0.2)" : "rgba(255,255,255,0.05)",
                      border: exp.current ? "1px solid rgba(167,139,250,0.3)" : "1px solid rgba(255,255,255,0.08)",
                      fontSize: "11px",
                      color: exp.current ? "#C4B5FD" : "rgba(255,255,255,0.35)",
                    }}>
                      {exp.current ? "Current" : exp.type}
                    </span>
                  </div>
                </div>

                <div style={{ fontSize: "13px", color: "rgba(255,255,255,0.3)", marginBottom: "14px" }}>
                  {exp.location}
                </div>

                <p style={{ fontSize: "14px", color: "rgba(255,255,255,0.5)", lineHeight: 1.75, marginBottom: "16px" }}>
                  {exp.description}
                </p>

                <ul style={{ listStyle: "none", padding: 0, marginBottom: "20px" }}>
                  {exp.achievements.map((a, j) => (
                    <li key={j} style={{
                      fontSize: "14px",
                      color: "rgba(255,255,255,0.55)",
                      marginBottom: "8px",
                      paddingLeft: "16px",
                      position: "relative",
                      lineHeight: 1.6,
                    }}>
                      <span style={{ position: "absolute", left: 0, color: "#7C3AED" }}>▸</span>
                      {a}
                    </li>
                  ))}
                </ul>

                <div style={{ display: "flex", flexWrap: "wrap", gap: "8px" }}>
                  {exp.tags.map((tag) => (
                    <span key={tag} style={{
                      padding: "4px 10px",
                      borderRadius: "6px",
                      background: "rgba(255,255,255,0.04)",
                      border: "1px solid rgba(255,255,255,0.08)",
                      fontSize: "12px",
                      color: "rgba(255,255,255,0.4)",
                    }}>
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          style={{ marginTop: "20px" }}
        >
          <h2 style={{ fontSize: "13px", color: "rgba(255,255,255,0.3)", textTransform: "uppercase", letterSpacing: "0.1em", marginBottom: "24px" }}>
            Education
          </h2>
          {education.map((edu, i) => (
            <div key={i} style={{
              background: "rgba(255,255,255,0.03)",
              border: "1px solid rgba(255,255,255,0.07)",
              borderRadius: "12px",
              padding: "24px",
            }}>
              <div style={{ display: "flex", justifyContent: "space-between", flexWrap: "wrap", gap: "8px", marginBottom: "8px" }}>
                <div>
                  <div style={{ fontSize: "17px", fontWeight: "600", color: "white" }}>{edu.degree}</div>
                  <div style={{ fontSize: "14px", color: "#A78BFA", marginTop: "2px" }}>{edu.school}</div>
                </div>
                <div style={{ fontSize: "13px", color: "rgba(255,255,255,0.35)" }}>{edu.period}</div>
              </div>
              <p style={{ fontSize: "14px", color: "rgba(255,255,255,0.45)", lineHeight: 1.7, marginTop: "12px" }}>
                {edu.description}
              </p>
            </div>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.7 }}
          style={{ marginTop: "60px", display: "flex", gap: "16px" }}
        >
          <a href="/recruiter" style={{
            padding: "12px 24px",
            borderRadius: "8px",
            background: "#7C3AED",
            color: "white",
            fontWeight: "500",
            textDecoration: "none",
            fontSize: "15px",
          }}>
            Download Resume →
          </a>
          <a href="/chat" style={{
            padding: "12px 24px",
            borderRadius: "8px",
            border: "1px solid rgba(255,255,255,0.15)",
            color: "rgba(255,255,255,0.6)",
            fontWeight: "500",
            textDecoration: "none",
            fontSize: "15px",
          }}>
            Ask AI about my experience
          </a>
        </motion.div>

      </div>
    </div>
  );
}