"use client";

import { useRef, useMemo } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Points, PointMaterial } from "@react-three/drei";
import * as THREE from "three";

function StarField() {
  const ref = useRef<THREE.Points>(null);

  const [positions, colors] = useMemo(() => {
    const count = 3000;
    const positions = new Float32Array(count * 3);
    const colors = new Float32Array(count * 3);

    for (let i = 0; i < count; i++) {
      positions[i * 3] = (Math.random() - 0.5) * 20;
      positions[i * 3 + 1] = (Math.random() - 0.5) * 20;
      positions[i * 3 + 2] = (Math.random() - 0.5) * 20;

      const rand = Math.random();
      if (rand < 0.5) {
        // Neon blue
        colors[i * 3] = 0;
        colors[i * 3 + 1] = 0.83;
        colors[i * 3 + 2] = 1;
      } else if (rand < 0.8) {
        // Purple
        colors[i * 3] = 0.55;
        colors[i * 3 + 1] = 0.36;
        colors[i * 3 + 2] = 0.96;
      } else {
        // Cyan
        colors[i * 3] = 0;
        colors[i * 3 + 1] = 1;
        colors[i * 3 + 2] = 1;
      }
    }

    return [positions, colors];
  }, []);

  useFrame(({ clock, mouse }) => {
    if (!ref.current) return;
    ref.current.rotation.x = clock.elapsedTime * 0.05 + mouse.y * 0.1;
    ref.current.rotation.y = clock.elapsedTime * 0.08 + mouse.x * 0.1;
  });

  return (
    <Points ref={ref} positions={positions} stride={3} frustumCulled={false}>
      <PointMaterial
        transparent
        vertexColors
        size={0.02}
        sizeAttenuation
        depthWrite={false}
        opacity={0.8}
      />
    </Points>
  );
}

function FloatingSphere({
  position,
  color,
  size,
  speed,
}: {
  position: [number, number, number];
  color: string;
  size: number;
  speed: number;
}) {
  const ref = useRef<THREE.Mesh>(null);

  useFrame(({ clock }) => {
    if (!ref.current) return;
    ref.current.position.y =
      position[1] + Math.sin(clock.elapsedTime * speed) * 0.5;
    ref.current.rotation.x = clock.elapsedTime * 0.3;
    ref.current.rotation.y = clock.elapsedTime * 0.5;
  });

  return (
    <mesh ref={ref} position={position}>
      <icosahedronGeometry args={[size, 1]} />
      <meshStandardMaterial
        color={color}
        wireframe
        transparent
        opacity={0.3}
      />
    </mesh>
  );
}

function FloatingCube({
  position,
  color,
  size,
}: {
  position: [number, number, number];
  color: string;
  size: number;
}) {
  const ref = useRef<THREE.Mesh>(null);

  useFrame(({ clock }) => {
    if (!ref.current) return;
    ref.current.rotation.x = clock.elapsedTime * 0.4;
    ref.current.rotation.y = clock.elapsedTime * 0.6;
    ref.current.position.y =
      position[1] + Math.sin(clock.elapsedTime * 0.8) * 0.3;
  });

  return (
    <mesh ref={ref} position={position}>
      <boxGeometry args={[size, size, size]} />
      <meshStandardMaterial
        color={color}
        wireframe
        transparent
        opacity={0.25}
      />
    </mesh>
  );
}

export default function Scene3D() {
  return (
    <div className="absolute inset-0 pointer-events-none">
      <Canvas
        camera={{ position: [0, 0, 5], fov: 75 }}
        gl={{ antialias: true, alpha: true }}
        style={{ background: "transparent" }}
      >
        <ambientLight intensity={0.5} />
        <pointLight position={[10, 10, 10]} intensity={1} color="#00d4ff" />
        <pointLight position={[-10, -10, -10]} intensity={0.5} color="#8b5cf6" />

        <StarField />

        <FloatingSphere position={[-3.5, 1, -2]} color="#00d4ff" size={0.5} speed={0.7} />
        <FloatingSphere position={[3.5, -1, -1]} color="#8b5cf6" size={0.4} speed={0.9} />
        <FloatingSphere position={[0, 2, -3]} color="#00ffff" size={0.3} speed={0.6} />

        <FloatingCube position={[-2, -1.5, -1]} color="#00d4ff" size={0.4} />
        <FloatingCube position={[2.5, 1.5, -2]} color="#8b5cf6" size={0.35} />
      </Canvas>
    </div>
  );
}
