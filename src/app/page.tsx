"use client";

import { motion } from "framer-motion";

export default function HomePage() {
  return (
    <div style={{
      minHeight: "100vh",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      background: "#0A0A1A",
      position: "relative",
      overflow: "hidden",
    }}>

      {/* Glow */}
      <div style={{
        position: "absolute",
        width: "500px",
        height: "500px",
        borderRadius: "50%",
        background: "rgba(124, 58, 237, 0.08)",
        filter: "blur(80px)",
        top: "50%",
        left: "50%",
        transform: "translate(-50%, -50%)",
        pointerEvents: "none",
      }} />

      {/* Content */}
      <div style={{ textAlign: "center", padding: "0 24px", position: "relative", zIndex: 10 }}>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          style={{ color: "rgba(255,255,255,0.4)", fontSize: "12px", letterSpacing: "0.15em", textTransform: "uppercase", marginBottom: "16px" }}
        >
          Hello, world —
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          style={{ fontSize: "72px", fontWeight: "700", color: "white", marginBottom: "16px", lineHeight: 1.1 }}
        >
          {"I'm "}
          <span style={{
            background: "linear-gradient(to right, #c084fc, #22d3ee)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            backgroundClip: "text",
          }}>
            Sarvesha
          </span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.4 }}
          style={{ fontSize: "22px", color: "rgba(255,255,255,0.5)", marginBottom: "40px" }}
        >
          AI Engineer · Full Stack Developer
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.6 }}
          style={{ display: "flex", gap: "16px", justifyContent: "center", flexWrap: "wrap" }}
        >
          <a href="/projects" style={{
            padding: "12px 24px", borderRadius: "8px",
            background: "#7C3AED", color: "white",
            fontWeight: "500", textDecoration: "none", fontSize: "15px",
          }}>
            View Projects
          </a>
          <a href="/chat" style={{
            padding: "12px 24px", borderRadius: "8px",
            border: "1px solid rgba(255,255,255,0.2)", color: "rgba(255,255,255,0.7)",
            fontWeight: "500", textDecoration: "none", fontSize: "15px",
          }}>
            Chat with AI ✦
          </a>
          <a href="/recruiter" style={{
            padding: "12px 24px", borderRadius: "8px",
            border: "1px solid rgba(167,139,250,0.3)", color: "#C4B5FD",
            fontWeight: "500", textDecoration: "none", fontSize: "15px",
          }}>
            Recruiter Mode
          </a>
        </motion.div>

      </div>
    </div>
  );
}