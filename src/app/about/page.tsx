"use client";

import { motion } from "framer-motion";

const facts = [
  { emoji: "🏙️", text: "Based in Pune, Maharashtra" },
  { emoji: "🤖", text: "Obsessed with GenAI and what it makes possible" },
  { emoji: "🚀", text: "Building this portfolio as a learning project" },
  { emoji: "✨", text: "Believer in learning by shipping" },
];

const values = [
  { title: "Build in public", desc: "Share the process, not just the outcome." },
  { title: "AI-first thinking", desc: "Every problem deserves an intelligent solution." },
  { title: "Ship and iterate", desc: "Done is better than perfect. Improve in production." },
  { title: "Deep curiosity", desc: "Always asking why before asking how." },
];

export default function AboutPage() {
  return (
    <div style={{ minHeight: "100vh", background: "#0A0A1A", padding: "80px 24px" }}>
      <div style={{ maxWidth: "760px", margin: "0 auto" }}>

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <p style={{ color: "rgba(167,139,250,0.7)", fontSize: "13px", letterSpacing: "0.12em", textTransform: "uppercase", marginBottom: "12px" }}>
            About me
          </p>
          <h1 style={{ fontSize: "52px", fontWeight: "700", color: "white", lineHeight: 1.1, marginBottom: "24px" }}>
            Engineer. Builder.{" "}
            <span style={{
              background: "linear-gradient(to right, #c084fc, #22d3ee)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
            }}>
              Curious human.
            </span>
          </h1>
          <p style={{ fontSize: "18px", color: "rgba(255,255,255,0.55)", lineHeight: 1.8, marginBottom: "16px" }}>
            I'm Sarvesha — an AI Engineer and Full Stack Developer building intelligent, 
            interactive experiences that push what software can feel like.
          </p>
          <p style={{ fontSize: "18px", color: "rgba(255,255,255,0.45)", lineHeight: 1.8, marginBottom: "60px" }}>
            This portfolio is itself a GenAI learning project — every feature you interact 
            with maps to a real skill I'm developing: RAG pipelines, 3D interfaces, 
            multi-agent systems, and beyond.
          </p>
        </motion.div>

        {/* Facts */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          style={{ marginBottom: "60px" }}
        >
          <h2 style={{ fontSize: "13px", color: "rgba(255,255,255,0.3)", textTransform: "uppercase", letterSpacing: "0.1em", marginBottom: "20px" }}>
            Quick facts
          </h2>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "12px" }}>
            {facts.map((f, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.4, delay: 0.3 + i * 0.1 }}
                style={{
                  background: "rgba(255,255,255,0.03)",
                  border: "1px solid rgba(255,255,255,0.07)",
                  borderRadius: "12px",
                  padding: "16px 20px",
                  display: "flex",
                  alignItems: "center",
                  gap: "12px",
                }}
              >
                <span style={{ fontSize: "22px" }}>{f.emoji}</span>
                <span style={{ color: "rgba(255,255,255,0.65)", fontSize: "14px" }}>{f.text}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Values */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <h2 style={{ fontSize: "13px", color: "rgba(255,255,255,0.3)", textTransform: "uppercase", letterSpacing: "0.1em", marginBottom: "20px" }}>
            How I work
          </h2>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "12px" }}>
            {values.map((v, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 0.5 + i * 0.1 }}
                style={{
                  background: "rgba(124,58,237,0.06)",
                  border: "1px solid rgba(124,58,237,0.15)",
                  borderRadius: "12px",
                  padding: "20px",
                }}
              >
                <div style={{ fontSize: "15px", fontWeight: "600", color: "white", marginBottom: "6px" }}>{v.title}</div>
                <div style={{ fontSize: "14px", color: "rgba(255,255,255,0.45)", lineHeight: 1.6 }}>{v.desc}</div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          style={{ marginTop: "60px", display: "flex", gap: "16px" }}
        >
          <a href="/projects" style={{
            padding: "12px 24px", borderRadius: "8px",
            background: "#7C3AED", color: "white",
            fontWeight: "500", textDecoration: "none", fontSize: "15px",
          }}>
            See my projects →
          </a>
          <a href="/chat" style={{
            padding: "12px 24px", borderRadius: "8px",
            border: "1px solid rgba(255,255,255,0.15)", color: "rgba(255,255,255,0.6)",
            fontWeight: "500", textDecoration: "none", fontSize: "15px",
          }}>
            Ask the AI about me
          </a>
        </motion.div>

      </div>
    </div>
  );
}