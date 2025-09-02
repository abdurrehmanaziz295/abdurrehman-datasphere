import { Canvas, useFrame } from '@react-three/fiber';
import { useRef, useMemo } from 'react';
import * as THREE from 'three';

const ParticleField = () => {
  const meshRef = useRef<THREE.Points>(null);
  
  const [positions, colors] = useMemo(() => {
    const count = 1000;
    const positions = new Float32Array(count * 3);
    const colors = new Float32Array(count * 3);
    
    for (let i = 0; i < count; i++) {
      // Random positions in a large sphere
      positions[i * 3] = (Math.random() - 0.5) * 50;
      positions[i * 3 + 1] = (Math.random() - 0.5) * 50;
      positions[i * 3 + 2] = (Math.random() - 0.5) * 50;
      
      // Cyberpunk colors (cyan, pink, purple)
      const colorChoice = Math.random();
      if (colorChoice < 0.4) {
        // Cyan
        colors[i * 3] = 0;
        colors[i * 3 + 1] = 1;
        colors[i * 3 + 2] = 1;
      } else if (colorChoice < 0.7) {
        // Pink
        colors[i * 3] = 1;
        colors[i * 3 + 1] = 0;
        colors[i * 3 + 2] = 1;
      } else {
        // Purple
        colors[i * 3] = 0.5;
        colors[i * 3 + 1] = 0;
        colors[i * 3 + 2] = 1;
      }
    }
    
    return [positions, colors];
  }, []);
  
  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.x = state.clock.elapsedTime * 0.02;
      meshRef.current.rotation.y = state.clock.elapsedTime * 0.03;
      
      // Pulsing effect
      const scale = 1 + Math.sin(state.clock.elapsedTime * 2) * 0.1;
      meshRef.current.scale.setScalar(scale);
    }
  });
  
  return (
    <points ref={meshRef}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          count={positions.length / 3}
          array={positions}
          itemSize={3}
        />
        <bufferAttribute
          attach="attributes-color"
          count={colors.length / 3}
          array={colors}
          itemSize={3}
        />
      </bufferGeometry>
      <pointsMaterial
        size={0.1}
        vertexColors
        transparent
        opacity={0.6}
        blending={THREE.AdditiveBlending}
      />
    </points>
  );
};

const FloatingOrbs = () => {
  const group = useRef<THREE.Group>(null);
  
  useFrame((state) => {
    if (group.current) {
      group.current.rotation.y = state.clock.elapsedTime * 0.1;
    }
  });
  
  return (
    <group ref={group}>
      {Array.from({ length: 8 }).map((_, i) => (
        <mesh
          key={i}
          position={[
            Math.cos((i / 8) * Math.PI * 2) * 15,
            Math.sin(i) * 3,
            Math.sin((i / 8) * Math.PI * 2) * 15
          ]}
        >
          <sphereGeometry args={[0.2, 16, 16]} />
          <meshBasicMaterial
            color={i % 3 === 0 ? '#00ffff' : i % 3 === 1 ? '#ff00ff' : '#8000ff'}
            transparent
            opacity={0.8}
          />
        </mesh>
      ))}
    </group>
  );
};

const ParticleBackground = () => {
  return (
    <div className="particle-bg">
      <Canvas
        camera={{ position: [0, 0, 20], fov: 60 }}
        style={{ background: 'transparent' }}
      >
        <ParticleField />
        <FloatingOrbs />
        <ambientLight intensity={0.3} />
      </Canvas>
    </div>
  );
};

export default ParticleBackground;