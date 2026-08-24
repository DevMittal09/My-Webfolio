"use client";

import { useEffect, useRef } from "react";

export default function CursorGlow() {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    if (!window.matchMedia("(pointer: fine)").matches) return;
    const el = ref.current;
    if (!el) return;

    let raf = 0;
    let tx = -600;
    let ty = -600;
    let x = tx;
    let y = ty;

    const step = () => {
      x += (tx - x) * 0.12;
      y += (ty - y) * 0.12;
      el.style.background = `radial-gradient(600px circle at ${x.toFixed(1)}px ${y.toFixed(1)}px, rgba(139, 92, 246, 0.07), transparent 65%)`;
      if (Math.abs(tx - x) > 0.5 || Math.abs(ty - y) > 0.5) {
        raf = requestAnimationFrame(step);
      } else {
        raf = 0;
      }
    };

    const handleMouseMove = (e: MouseEvent) => {
      tx = e.clientX;
      ty = e.clientY;
      if (!raf) raf = requestAnimationFrame(step);
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      cancelAnimationFrame(raf);
    };
  }, []);

  return (
    <div
      ref={ref}
      className="fixed inset-0 z-30 pointer-events-none"
      aria-hidden="true"
    />
  );
}
