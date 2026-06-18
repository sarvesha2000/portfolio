"use client";

import { motion } from "framer-motion";
import dynamic from "next/dynamic";

const SkillsGalaxy = dynamic(() => import("@/components/3d/SkillsGalaxy"), {
  ssr: false,
  loading: () => (
    <div style={{ width: "100%", height: "100%", display: "flex", alignItems: "center", justifyContent: "center" }}>
      <p style={{ color: "rgba(255,255,255,0.2)", fontSize: "14px" }}>Loading galaxy...</p>
    </div>
  ),
});

export default function SkillsPage() {
  return (
    <div style={{ minHeight: "100vh", background: "#0A0A1A", display: "flex", flexDirection: "column" }}>

      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        style={{ padding: "60px 32px 20px", textAlign: "center" }}
      >
        <p style={{ color: "rgba(167,139,250,0.7)", fontSize: "13px", letterSpacing: "0.12em", textTransform: "uppercase", marginBottom: "12px" }}>
          What I work with
        </p>
        <h1 style={{ fontSize: "48px", fontWeight: "700", color: "white", lineHeight: 1.1, marginBottom: "12px" }}>
          Skills Galaxy
        </h1>
        <p style={{ fontSize: "16px", color: "rgba(255,255,255,0.35)" }}>
          Click any planet to explore the skill category
        </p>
      </motion.div>

      {/* 3D Galaxy */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 0.3 }}
        style={{ flex: 1, minHeight: "600px" }}
      >
        <SkillsGalaxy />
      </motion.div>

    </div>
  );
}