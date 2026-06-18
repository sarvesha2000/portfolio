"use client";

import { motion } from "framer-motion";
import dynamic from "next/dynamic";

const HeroScene = dynamic(() => import("@/components/3d/HeroScene"), {
  ssr: false,
  loading: () => <div style={{ width: "100%", height: "100%" }} />,
});

export default function HomePage() {
  return (
    <div style={{ position: "relative", minHeight: "100vh", background: "#0A0A1A", overflow: "hidden" }}>

      {/* 3D Scene — full background */}
      <div style={{ position: "absolute", inset: 0, zIndex: 0 }}>
        <HeroScene />
      </div>

      {/* Dark overlay so text stays readable */}
      <div style={{
        position: "absolute", inset: 0, zIndex: 1,
        background: "radial-gradient(ellipse at center, rgba(10,10,26,0.3) 0%, rgba(10,10,26,0.7) 100%)",
      }} />

      {/* Hero content */}
      <div style={{
        position: "relative", zIndex: 2,
        minHeight: "100vh",
        display: "flex", alignItems: "center", justifyContent: "center",
        textAlign: "center", padding: "0 24px",
      }}>
        <div>
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
              padding: "12px 28px", borderRadius: "8px",
              background: "#7C3AED", color: "white",
              fontWeight: "500", textDecoration: "none", fontSize: "15px",
            }}>
              View Projects
            </a>
            <a href="/chat" style={{
              padding: "12px 28px", borderRadius: "8px",
              border: "1px solid rgba(255,255,255,0.2)",
              color: "rgba(255,255,255,0.7)",
              fontWeight: "500", textDecoration: "none", fontSize: "15px",
            }}>
              Chat with AI ✦
            </a>
            <a href="/recruiter" style={{
              padding: "12px 28px", borderRadius: "8px",
              border: "1px solid rgba(167,139,250,0.3)",
              color: "#C4B5FD",
              fontWeight: "500", textDecoration: "none", fontSize: "15px",
            }}>
              Recruiter Mode
            </a>
          </motion.div>
        </div>
      </div>
    </div>
  );
}