"use client";

import { useRef, useState, useMemo } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Sphere, MeshDistortMaterial, Html } from "@react-three/drei";
import * as THREE from "three";

const skillGroups = [
  {
    name: "Frontend",
    color: "#22d3ee",
    radius: 3.5,
    speed: 0.4,
    size: 0.6,
    angle: 0,
    skills: ["React", "Next.js", "TypeScript", "Tailwind", "Framer Motion"],
  },
  {
    name: "Backend",
    color: "#34d399",
    radius: 5.5,
    speed: 0.25,
    size: 0.7,
    angle: 1.5,
    skills: ["FastAPI", "Python", "PostgreSQL", "REST APIs", "Redis"],
  },
  {
    name: "AI / GenAI",
    color: "#c084fc",
    radius: 7.5,
    speed: 0.15,
    size: 0.8,
    angle: 3,
    skills: ["RAG", "LLMs", "Embeddings", "Prompt Eng.", "LangChain"],
  },
  {
    name: "DevOps",
    color: "#fb923c",
    radius: 9.5,
    speed: 0.1,
    size: 0.55,
    angle: 4.5,
    skills: ["Git", "Docker", "CI/CD", "Vercel", "Linux"],
  },
];

function OrbitRing({ radius }: { radius: number }) {
  const ref = useRef<THREE.Line>(null);

  const geometry = useMemo(() => {
    const points = [];
    for (let i = 0; i <= 64; i++) {
      const angle = (i / 64) * Math.PI * 2;
      points.push(new THREE.Vector3(Math.cos(angle) * radius, 0, Math.sin(angle) * radius));
    }
    return new THREE.BufferGeometry().setFromPoints(points);
  }, [radius]);

  const material = useMemo(() => new THREE.LineBasicMaterial({
    color: "#ffffff",
    transparent: true,
    opacity: 0.06,
  }), []);

  return <primitive ref={ref} object={new THREE.Line(geometry, material)} />;
}

function Planet({ group, onClick, selected }: {
  group: typeof skillGroups[0];
  onClick: () => void;
  selected: boolean;
}) {
  const meshRef = useRef<THREE.Mesh>(null);
  const angleRef = useRef(group.angle);

  useFrame((_, delta) => {
    angleRef.current += group.speed * delta;
    if (!meshRef.current) return;
    meshRef.current.position.x = Math.cos(angleRef.current) * group.radius;
    meshRef.current.position.z = Math.sin(angleRef.current) * group.radius;
    meshRef.current.rotation.y += delta * 0.5;
  });

  return (
    <Sphere ref={meshRef} args={[group.size, 32, 32]} onClick={onClick}>
      <MeshDistortMaterial
        color={group.color}
        distort={selected ? 0.5 : 0.2}
        speed={2}
        roughness={0.1}
        metalness={0.8}
        transparent
        opacity={selected ? 1 : 0.85}
        emissive={group.color}
        emissiveIntensity={selected ? 0.4 : 0.1}
      />
      {selected && (
        <Html distanceFactor={6} center>
          <div style={{
            background: "rgba(10,10,26,0.92)",
            border: `1px solid ${group.color}`,
            borderRadius: "12px",
            padding: "12px 16px",
            minWidth: "140px",
            pointerEvents: "none",
          }}>
            <div style={{ fontSize: "13px", fontWeight: "600", color: group.color, marginBottom: "8px" }}>
              {group.name}
            </div>
            {group.skills.map((skill) => (
              <div key={skill} style={{ fontSize: "12px", color: "rgba(255,255,255,0.6)", marginBottom: "3px" }}>
                · {skill}
              </div>
            ))}
          </div>
        </Html>
      )}
    </Sphere>
  );
}

function CentralStar() {
  const meshRef = useRef<THREE.Mesh>(null);
  useFrame((state) => {
    if (!meshRef.current) return;
    meshRef.current.rotation.y = state.clock.elapsedTime * 0.3;
    meshRef.current.rotation.x = state.clock.elapsedTime * 0.1;
  });

  return (
    <Sphere ref={meshRef} args={[1, 64, 64]} position={[0, 0, 0]}>
      <MeshDistortMaterial
        color="#A78BFA"
        distort={0.4}
        speed={3}
        roughness={0}
        metalness={1}
        emissive="#7C3AED"
        emissiveIntensity={0.5}
      />
    </Sphere>
  );
}

function Galaxy({ selected, onSelect }: {
  selected: string | null;
  onSelect: (name: string | null) => void;
}) {
  return (
    <>
      <ambientLight intensity={0.4} />
      <pointLight position={[0, 0, 0]} intensity={2} color="#A78BFA" />
      <pointLight position={[10, 10, 10]} intensity={0.5} color="#22d3ee" />
      <CentralStar />
      {skillGroups.map((group) => (
        <OrbitRing key={group.name + "-ring"} radius={group.radius} />
      ))}
      {skillGroups.map((group) => (
        <Planet
          key={group.name}
          group={group}
          selected={selected === group.name}
          onClick={() => onSelect(selected === group.name ? null : group.name)}
        />
      ))}
    </>
  );
}

export default function SkillsGalaxy() {
  const [selected, setSelected] = useState<string | null>(null);

  return (
    <div style={{ width: "100%", height: "100%", position: "relative" }}>
      <Canvas
        camera={{ position: [0, 8, 16], fov: 60 }}
        style={{ background: "transparent" }}
      >
        <Galaxy selected={selected} onSelect={setSelected} />
      </Canvas>

      <div style={{
        position: "absolute", bottom: "24px", left: "50%",
        transform: "translateX(-50%)",
        display: "flex", gap: "20px", flexWrap: "wrap", justifyContent: "center",
      }}>
        {skillGroups.map((g) => (
          <div
            key={g.name}
            onClick={() => setSelected(selected === g.name ? null : g.name)}
            style={{ display: "flex", alignItems: "center", gap: "6px", cursor: "pointer" }}
          >
            <div style={{ width: "8px", height: "8px", borderRadius: "50%", background: g.color, boxShadow: `0 0 6px ${g.color}` }} />
            <span style={{ fontSize: "12px", color: selected === g.name ? g.color : "rgba(255,255,255,0.4)" }}>
              {g.name}
            </span>
          </div>
        ))}
      </div>

      <div style={{ position: "absolute", top: "16px", right: "16px", fontSize: "12px", color: "rgba(255,255,255,0.2)" }}>
        Click a planet to explore ↗
      </div>
    </div>
  );
}