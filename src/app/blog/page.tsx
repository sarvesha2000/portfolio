"use client";

import { motion } from "framer-motion";
import { useState } from "react";

const posts = [
  {
    title: "Building a RAG Pipeline from Scratch",
    summary: "How I designed the AI assistant behind this portfolio — chunking strategy, embedding model choice, retrieval flow, and lessons learned.",
    tags: ["RAG", "LLM", "FastAPI"],
    date: "Coming soon",
    readTime: "8 min read",
    slug: "rag-pipeline-from-scratch",
    featured: true,
  },
  {
    title: "Why I Chose Next.js App Router",
    summary: "SSR vs SSG vs ISR — breaking down the decision and how the App Router changes the mental model for React developers.",
    tags: ["Next.js", "React", "TypeScript"],
    date: "Coming soon",
    readTime: "5 min read",
    slug: "nextjs-app-router",
    featured: false,
  },
  {
    title: "Three.js + React Three Fiber: First Impressions",
    summary: "Building the 3D skills galaxy — what worked, what didn't, and how to think about 3D on the web as a React developer.",
    tags: ["Three.js", "R3F", "3D"],
    date: "Coming soon",
    readTime: "6 min read",
    slug: "threejs-react-three-fiber",
    featured: false,
  },
  {
    title: "Prompt Engineering Patterns I Actually Use",
    summary: "Beyond 'be a helpful assistant' — the prompting patterns that make a real difference in production AI systems.",
    tags: ["Prompt Engineering", "LLM", "AI"],
    date: "Coming soon",
    readTime: "7 min read",
    slug: "prompt-engineering-patterns",
    featured: false,
  },
];

const allTags = ["All", ...Array.from(new Set(posts.flatMap((p) => p.tags)))];

export default function BlogPage() {
  const [activeTag, setActiveTag] = useState("All");

  const filtered = activeTag === "All"
    ? posts
    : posts.filter((p) => p.tags.includes(activeTag));

  return (
    <div style={{ minHeight: "100vh", background: "#0A0A1A", padding: "80px 24px" }}>
      <div style={{ maxWidth: "800px", margin: "0 auto" }}>

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          style={{ marginBottom: "48px" }}
        >
          <p style={{ color: "rgba(167,139,250,0.7)", fontSize: "13px", letterSpacing: "0.12em", textTransform: "uppercase", marginBottom: "12px" }}>
            Writing
          </p>
          <h1 style={{ fontSize: "52px", fontWeight: "700", color: "white", lineHeight: 1.1, marginBottom: "16px" }}>
            Blog
          </h1>
          <p style={{ fontSize: "18px", color: "rgba(255,255,255,0.45)" }}>
            Technical writing on AI, full stack development, and building in public.
            AI-powered semantic search coming in M5.
          </p>
        </motion.div>

        {/* Tag filter */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          style={{ display: "flex", gap: "8px", flexWrap: "wrap", marginBottom: "40px" }}
        >
          {allTags.map((tag) => (
            <button
              key={tag}
              onClick={() => setActiveTag(tag)}
              style={{
                padding: "6px 16px",
                borderRadius: "99px",
                border: activeTag === tag ? "1px solid rgba(167,139,250,0.6)" : "1px solid rgba(255,255,255,0.1)",
                background: activeTag === tag ? "rgba(124,58,237,0.2)" : "transparent",
                color: activeTag === tag ? "#C4B5FD" : "rgba(255,255,255,0.4)",
                fontSize: "13px",
                cursor: "pointer",
                transition: "all 0.2s",
              }}
            >
              {tag}
            </button>
          ))}
        </motion.div>

        {/* Posts */}
        <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
          {filtered.map((post, i) => (
            <motion.div
              key={post.slug}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: i * 0.08 }}
              whileHover={{ x: 4, transition: { duration: 0.2 } }}
              style={{
                background: post.featured ? "rgba(124,58,237,0.06)" : "rgba(255,255,255,0.02)",
                border: post.featured ? "1px solid rgba(124,58,237,0.2)" : "1px solid rgba(255,255,255,0.06)",
                borderRadius: "14px",
                padding: "24px 28px",
                cursor: "pointer",
                position: "relative",
              }}
            >
              {post.featured && (
                <div style={{
                  position: "absolute",
                  top: "16px",
                  right: "16px",
                  padding: "2px 10px",
                  borderRadius: "99px",
                  background: "rgba(124,58,237,0.3)",
                  border: "1px solid rgba(167,139,250,0.3)",
                  fontSize: "11px",
                  color: "#C4B5FD",
                }}>
                  Featured
                </div>
              )}

              <h2 style={{ fontSize: "18px", fontWeight: "600", color: "white", marginBottom: "8px", paddingRight: "80px" }}>
                {post.title}
              </h2>

              <p style={{ fontSize: "14px", color: "rgba(255,255,255,0.45)", lineHeight: 1.7, marginBottom: "16px" }}>
                {post.summary}
              </p>

              <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", flexWrap: "wrap", gap: "12px" }}>
                <div style={{ display: "flex", gap: "8px", flexWrap: "wrap" }}>
                  {post.tags.map((tag) => (
                    <span key={tag} style={{
                      padding: "3px 10px",
                      borderRadius: "6px",
                      background: "rgba(255,255,255,0.05)",
                      border: "1px solid rgba(255,255,255,0.08)",
                      fontSize: "12px",
                      color: "rgba(255,255,255,0.4)",
                    }}>
                      {tag}
                    </span>
                  ))}
                </div>
                <div style={{ display: "flex", gap: "16px", fontSize: "12px", color: "rgba(255,255,255,0.25)" }}>
                  <span>{post.date}</span>
                  <span>{post.readTime}</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* AI search note */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          style={{
            marginTop: "48px",
            padding: "20px 24px",
            borderRadius: "12px",
            border: "1px dashed rgba(167,139,250,0.2)",
            display: "flex",
            alignItems: "center",
            gap: "16px",
          }}
        >
          <span style={{ fontSize: "20px" }}>✦</span>
          <div>
            <div style={{ fontSize: "14px", color: "rgba(167,139,250,0.7)", marginBottom: "2px" }}>
              AI-powered semantic search
            </div>
            <div style={{ fontSize: "13px", color: "rgba(255,255,255,0.25)" }}>
              Search posts by meaning, not just keywords — arriving in Milestone 5 with the RAG pipeline
            </div>
          </div>
        </motion.div>

      </div>
    </div>
  );
}