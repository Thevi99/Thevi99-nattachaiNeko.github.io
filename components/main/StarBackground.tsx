"use client";

import React, { useState, useRef, Suspense ,useMemo } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Points, PointMaterial, Preload } from "@react-three/drei";
import { Color } from "three";
// @ts-ignore
import * as random from "maath/random/dist/maath-random.esm";



const StarBackground = (props: any) => {
  const ref: any = useRef();
  const [sphere] = useState(() =>
    random.inSphere(new Float32Array(5000), { radius: 1.2 })
  );

  const colors = useMemo(() => {
    const colors = new Float32Array(sphere.length * 3);
    for (let i = 0; i < sphere.length; i += 3) {
      const color = new Color();
      // เลือกสีขาวหรือเหลืองโดยตรง
      if (Math.random() > 0.5) {
        color.set(0xffffff); // สีขาว
      } else {
        color.set(0xffff00); // สีเหลือง
      }
      colors[i] = color.r;
      colors[i + 1] = color.g;
      colors[i + 2] = color.b;
    }
    return colors;
  }, [sphere.length]);

  useFrame((state, delta) => {
    ref.current.rotation.x -= delta / 10;
    ref.current.rotation.y -= delta / 15;
  });

  return (
    <group rotation={[0, 0, Math.PI / 4]}>
      <Points
        ref={ref}
        positions={sphere}
        colors={colors} // ใช้สีที่สุ่มขึ้น
        stride={3}
        frustumCulled
        {...props}
      >
        <PointMaterial
          transparent
          vertexColors
          size={0.002} // ขนาดของจุดที่เพิ่มขึ้น
          sizeAttenuation={true}
          depthWrite={false}
        />
      </Points>
    </group>
  );
};

const StarsCanvas = () => (
    <div className="w-full h-auto fixed inset-0 z-[20]">
        <Canvas camera={{position: [0, 0, 1]}}>
        <Suspense fallback={null}>
            <StarBackground />
        </Suspense>
        </Canvas>
    </div>
)

export default StarsCanvas;