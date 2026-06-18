"use client";

import { motion } from "framer-motion";
import { useState } from "react";

const suggestions = [
  "What tech stack does Sarvesha use?",
  "Tell me about her AI projects",
  "What is she currently learning?",
  "Is she open to new opportunities?",
];

export default function ChatPage() {
  const [input, setInput] = useState("");
  const [messages, setMessages] = useState([
    {
      role: "ai",
      text: "Hi! I'm Sarvesha's AI assistant. I know everything about her experience, projects, and skills. Ask me anything — I'll give you a sourced, accurate answer. The full RAG engine powers up in Milestone 5.",
    },
  ]);

  function handleSend(text?: string) {
    const query = text || input;
    if (!query.trim()) return;
    setMessages((prev) => [
      ...prev,
      { role: "user", text: query },
      { role: "ai", text: "The RAG-powered AI engine is coming in Milestone 5. For now, explore the site or check the Projects and Experience pages!" },
    ]);
    setInput("");
  }

  return (
    <div style={{ height: "calc(100vh - 64px)", background: "#0A0A1A", display: "flex", flexDirection: "column" }}>

      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        style={{
          padding: "24px 32px 20px",
          borderBottom: "1px solid rgba(255,255,255,0.06)",
          display: "flex",
          alignItems: "center",
          gap: "14px",
        }}
      >
        <div style={{
          width: "40px", height: "40px", borderRadius: "50%",
          background: "linear-gradient(135deg, #7C3AED, #22d3ee)",
          display: "flex", alignItems: "center", justifyContent: "center",
          fontSize: "16px",
        }}>
          ✦
        </div>
        <div>
          <div style={{ fontSize: "16px", fontWeight: "600", color: "white" }}>Sarvesha's AI Assistant</div>
          <div style={{ fontSize: "13px", color: "rgba(255,255,255,0.35)" }}>Knows everything about this portfolio · RAG-powered in M5</div>
        </div>
        <div style={{ marginLeft: "auto", display: "flex", alignItems: "center", gap: "6px" }}>
          <div style={{ width: "8px", height: "8px", borderRadius: "50%", background: "#34d399" }} />
          <span style={{ fontSize: "13px", color: "rgba(255,255,255,0.35)" }}>Online</span>
        </div>
      </motion.div>

      {/* Messages */}
      <div style={{ flex: 1, overflowY: "auto", padding: "24px 32px", display: "flex", flexDirection: "column", gap: "16px" }}>

        {messages.map((msg, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
            style={{
              display: "flex",
              justifyContent: msg.role === "user" ? "flex-end" : "flex-start",
              gap: "10px",
              alignItems: "flex-end",
            }}
          >
            {msg.role === "ai" && (
              <div style={{
                width: "28px", height: "28px", borderRadius: "50%", flexShrink: 0,
                background: "linear-gradient(135deg, #7C3AED, #22d3ee)",
                display: "flex", alignItems: "center", justifyContent: "center",
                fontSize: "11px",
              }}>
                ✦
              </div>
            )}
            <div style={{
              maxWidth: "520px",
              padding: "12px 16px",
              borderRadius: msg.role === "user" ? "16px 16px 4px 16px" : "16px 16px 16px 4px",
              background: msg.role === "user" ? "rgba(124,58,237,0.3)" : "rgba(255,255,255,0.05)",
              border: msg.role === "user" ? "1px solid rgba(167,139,250,0.3)" : "1px solid rgba(255,255,255,0.08)",
              fontSize: "14px",
              color: msg.role === "user" ? "#E9D5FF" : "rgba(255,255,255,0.8)",
              lineHeight: 1.7,
            }}>
              {msg.text}
            </div>
          </motion.div>
        ))}

        {/* Suggestions — only show at start */}
        {messages.length === 1 && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
            style={{ display: "flex", flexWrap: "wrap", gap: "8px", marginTop: "8px" }}
          >
            {suggestions.map((s) => (
              <button
                key={s}
                onClick={() => handleSend(s)}
                style={{
                  padding: "8px 16px",
                  borderRadius: "99px",
                  border: "1px solid rgba(124,58,237,0.3)",
                  background: "rgba(124,58,237,0.08)",
                  color: "rgba(196,181,253,0.8)",
                  fontSize: "13px",
                  cursor: "pointer",
                }}
              >
                {s}
              </button>
            ))}
          </motion.div>
        )}
      </div>

      {/* Input */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.3 }}
        style={{
          padding: "20px 32px",
          borderTop: "1px solid rgba(255,255,255,0.06)",
          display: "flex",
          gap: "12px",
          alignItems: "center",
        }}
      >
        <input
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={(e) => e.key === "Enter" && handleSend()}
          placeholder="Ask anything about Sarvesha..."
          style={{
            flex: 1,
            padding: "12px 18px",
            borderRadius: "12px",
            border: "1px solid rgba(255,255,255,0.1)",
            background: "rgba(255,255,255,0.04)",
            color: "white",
            fontSize: "14px",
            outline: "none",
          }}
        />
        <button
          onClick={() => handleSend()}
          style={{
            padding: "12px 24px",
            borderRadius: "12px",
            background: "#7C3AED",
            border: "none",
            color: "white",
            fontSize: "14px",
            fontWeight: "500",
            cursor: "pointer",
          }}
        >
          Send ↑
        </button>
      </motion.div>

    </div>
  );
}