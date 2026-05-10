"use client";

import { useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Torus, TorusKnot, MeshDistortMaterial, Float } from "@react-three/drei";
import * as THREE from "three";

function HeroMesh() {
  const torusRef = useRef<THREE.Mesh>(null);
  const innerRef = useRef<THREE.Mesh>(null);
  const knotRef = useRef<THREE.Mesh>(null);

  useFrame(({ clock, mouse }) => {
    if (torusRef.current) {
      torusRef.current.rotation.x = clock.elapsedTime * 0.3;
      torusRef.current.rotation.y = clock.elapsedTime * 0.5 + mouse.x * 0.5;
    }
    if (innerRef.current) {
      innerRef.current.rotation.x = -clock.elapsedTime * 0.4;
      innerRef.current.rotation.z = clock.elapsedTime * 0.3;
    }
    if (knotRef.current) {
      knotRef.current.rotation.x = clock.elapsedTime * 0.2;
      knotRef.current.rotation.y = -clock.elapsedTime * 0.3;
    }
  });

  return (
    <>
      {/* Outer torus */}
      <Torus ref={torusRef} args={[1.8, 0.03, 8, 120]}>
        <meshStandardMaterial color="#00d4ff" emissive="#00d4ff" emissiveIntensity={1} />
      </Torus>

      {/* Inner torus */}
      <Torus ref={innerRef} args={[1.3, 0.03, 8, 80]} rotation={[Math.PI / 2, 0, 0]}>
        <meshStandardMaterial color="#8b5cf6" emissive="#8b5cf6" emissiveIntensity={0.8} />
      </Torus>

      {/* Torus knot */}
      <Float speed={1.5} floatIntensity={0.3}>
        <TorusKnot ref={knotRef} args={[0.6, 0.15, 128, 16]}>
          <MeshDistortMaterial
            color="#00ffff"
            emissive="#00ffff"
            emissiveIntensity={0.5}
            distort={0.3}
            speed={2}
            transparent
            opacity={0.8}
          />
        </TorusKnot>
      </Float>

      {/* Point lights for glow */}
      <pointLight position={[2, 2, 2]} color="#00d4ff" intensity={3} distance={8} />
      <pointLight position={[-2, -2, 2]} color="#8b5cf6" intensity={2} distance={6} />
    </>
  );
}

export default function HeroModel() {
  return (
    <div className="w-full h-full">
      <Canvas
        camera={{ position: [0, 0, 5], fov: 60 }}
        gl={{ antialias: true, alpha: true }}
        style={{ background: "transparent" }}
      >
        <ambientLight intensity={0.2} />
        <HeroMesh />
      </Canvas>
    </div>
  );
}
