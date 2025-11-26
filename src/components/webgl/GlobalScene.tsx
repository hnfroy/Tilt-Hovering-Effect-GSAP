import { Canvas } from "@react-three/fiber";
import { MeshDistortMaterial, Sphere } from "@react-three/drei";

export default function GlobalScene() {
  return (
    <Canvas
      className="fixed inset-0 -z-10 pointer-events-none"
    >
      <Sphere args={[1, 64, 64]} scale={3}>
        <MeshDistortMaterial
          color="#6B4CFF"
          distort={0.35}
          speed={1.6}
        />
      </Sphere>
    </Canvas>
  );
}
