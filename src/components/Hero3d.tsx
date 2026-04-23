import { useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Float, Stars } from '@react-three/drei';
import * as THREE from 'three';

function AbstractTechShape() {
  const outerRef = useRef<THREE.Mesh>(null);
  const innerRef = useRef<THREE.Mesh>(null);

  useFrame((state) => {
    const time = state.clock.getElapsedTime();
    if (outerRef.current) {
      outerRef.current.rotation.x = time * 0.15;
      outerRef.current.rotation.y = time * 0.2;
    }
    if (innerRef.current) {
      innerRef.current.rotation.x = time * -0.1;
      innerRef.current.rotation.y = time * -0.15;
    }
  });

  return (
    <Float speed={2} rotationIntensity={0.5} floatIntensity={1}>
      {/* Outer Wireframe Icosahedron */}
      <mesh ref={outerRef}>
        <icosahedronGeometry args={[2, 0]} />
        <meshStandardMaterial 
          color="#ffffff" 
          wireframe 
          transparent 
          opacity={0.2} 
        />
      </mesh>
      
      {/* Inner Wireframe Octahedron */}
      <mesh ref={innerRef}>
        <octahedronGeometry args={[1.2, 0]} />
        <meshStandardMaterial 
          color="#a8b1ff" 
          wireframe 
          transparent 
          opacity={0.3} 
        />
      </mesh>
      
      {/* Core Glowing Node */}
      <mesh>
        <sphereGeometry args={[0.4, 16, 16]} />
        <meshBasicMaterial color="#ffffff" transparent opacity={0.5} />
      </mesh>
    </Float>
  );
}

export default function Hero3D() {
  return (
    <div className="fixed inset-0 z-0 pointer-events-none overflow-hidden h-screen w-screen opacity-60">
      <Canvas camera={{ position: [0, 0, 7], fov: 45 }}>
        {/* Subtle moving particles in the background */}
        <Stars radius={50} depth={50} count={1500} factor={4} saturation={0} fade speed={0.5} />
        <ambientLight intensity={0.5} />
        <directionalLight position={[10, 10, 10]} intensity={2} />
        
        {/* Positioning to the right on desktop, center on mobile */}
        <group position={[0, 0, 0]} scale={1}>
          <AbstractTechShape />
        </group>
      </Canvas>
    </div>
  );
}
