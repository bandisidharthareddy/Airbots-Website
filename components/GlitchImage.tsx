"use client";

import React, { useEffect, useRef, useState } from "react";
import * as THREE from "three";
import gsap from "gsap";

interface GlitchImageProps {
  src: string;
  alt?: string;
  className?: string;
}

const vertexShader = `
varying vec2 vUv;
void main() {
  vUv = uv;
  gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
}
`;

const fragmentShader = `
uniform sampler2D tDiffuse;
uniform float uDistortion;
uniform float uTime;
varying vec2 vUv;

void main() {
  vec2 uv = vUv;
  
  // Liquid wave distortion based on time and distortion strength
  float wave = sin(uv.y * 20.0 + uTime * 5.0) * 0.01 * uDistortion;
  float waveX = cos(uv.x * 20.0 + uTime * 5.0) * 0.01 * uDistortion;
  
  // RGB Split
  float r = texture2D(tDiffuse, uv + vec2(wave + 0.02 * uDistortion, waveX)).r;
  float g = texture2D(tDiffuse, uv + vec2(wave, waveX)).g;
  float b = texture2D(tDiffuse, uv + vec2(wave - 0.02 * uDistortion, waveX)).b;
  float a = texture2D(tDiffuse, uv).a;
  
  // Mix original alpha with distorted rgb
  gl_FragColor = vec4(r, g, b, a);
}
`;

export default function GlitchImage({ src, alt = "", className = "" }: GlitchImageProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [mounted, setMounted] = useState(false);
  
  // We keep a reference to the uniform so we can tween it with GSAP
  const distortionRef = useRef({ value: 0 });

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    if (!mounted || !canvasRef.current || !containerRef.current) return;

    const container = containerRef.current;
    const canvas = canvasRef.current;
    
    // Explicitly set alpha: true and antialias
    const renderer = new THREE.WebGLRenderer({ 
      canvas, 
      alpha: true, 
      antialias: true 
    });
    renderer.setClearColor(0x000000, 0); // Transparent background

    const scene = new THREE.Scene();

    // Camera setup (orthographic is easiest for 2D planes matching container size)
    const { width, height } = container.getBoundingClientRect();
    const camera = new THREE.OrthographicCamera(
      width / -2, width / 2, 
      height / 2, height / -2, 
      0.1, 10
    );
    camera.position.z = 1;
    
    renderer.setSize(width, height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));

    // Load texture
    const textureLoader = new THREE.TextureLoader();
    let mesh: THREE.Mesh | null = null;
    let material: THREE.ShaderMaterial | null = null;
    
    textureLoader.load(src, (texture) => {
      // Calculate plane aspect ratio to cover or contain
      // For this, we stretch to plane size but ideally we'd manage aspect ratio.
      // Assuming images are already correctly proportioned for their container.
      const planeGeometry = new THREE.PlaneGeometry(width, height);
      
      material = new THREE.ShaderMaterial({
        vertexShader,
        fragmentShader,
        uniforms: {
          tDiffuse: { value: texture },
          uDistortion: { value: 0 },
          uTime: { value: 0 },
        },
        transparent: true,
      });

      mesh = new THREE.Mesh(planeGeometry, material);
      scene.add(mesh);
    });

    let reqId: number;
    let time = 0;

    const renderLoop = () => {
      time += 0.05;
      if (material) {
        material.uniforms.uTime.value = time;
        material.uniforms.uDistortion.value = distortionRef.current.value;
      }
      renderer.render(scene, camera);
      reqId = requestAnimationFrame(renderLoop);
    };
    renderLoop();

    // Resize handler
    const handleResize = () => {
      if (!containerRef.current) return;
      const { width, height } = containerRef.current.getBoundingClientRect();
      renderer.setSize(width, height);
      
      camera.left = width / -2;
      camera.right = width / 2;
      camera.top = height / 2;
      camera.bottom = height / -2;
      camera.updateProjectionMatrix();
      
      if (mesh) {
        mesh.geometry.dispose();
        mesh.geometry = new THREE.PlaneGeometry(width, height);
      }
    };
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
      cancelAnimationFrame(reqId);
      renderer.dispose();
      if (material) material.dispose();
      if (mesh) mesh.geometry.dispose();
      textureLoader.crossOrigin = ""; // clear
    };
  }, [mounted, src]);

  const handleMouseEnter = () => {
    gsap.to(distortionRef.current, {
      value: 1.5,
      duration: 0.6,
      ease: "power2.out",
    });
  };

  const handleMouseLeave = () => {
    gsap.to(distortionRef.current, {
      value: 0,
      duration: 0.8,
      ease: "power2.out",
    });
  };

  return (
    <div
      ref={containerRef}
      className={`relative w-full h-full overflow-hidden ${className}`}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {/* Fallback while SSR or before mounted */}
      {!mounted && (
        <img
          src={src}
          alt={alt}
          className="w-full h-full object-cover"
        />
      )}
      <canvas
        ref={canvasRef}
        className={`w-full h-full block ${mounted ? 'opacity-100' : 'opacity-0'} transition-opacity duration-300`}
      />
    </div>
  );
}
