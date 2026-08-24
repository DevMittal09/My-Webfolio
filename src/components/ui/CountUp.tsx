"use client";

import { useEffect, useRef, useState } from "react";
import { useInView, useReducedMotion } from "framer-motion";

interface CountUpProps {
  value: string;
  duration?: number;
  className?: string;
}

const NUMERIC = /^(\d+(?:\.\d+)?)(.*)$/;

export default function CountUp({
  value,
  duration = 1.4,
  className = "",
}: CountUpProps) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-40px" });
  const reduced = useReducedMotion();
  const [display, setDisplay] = useState(() => {
    const m = value.match(NUMERIC);
    return m ? `0${m[2]}` : value;
  });

  useEffect(() => {
    const m = value.match(NUMERIC);
    if (!inView || !m) return;
    if (reduced) {
      setDisplay(value);
      return;
    }
    const target = parseFloat(m[1]);
    const decimals = (m[1].split(".")[1] ?? "").length;
    const suffix = m[2];
    const start = performance.now();
    let raf = 0;
    const tick = (now: number) => {
      const t = Math.min((now - start) / (duration * 1000), 1);
      const eased = 1 - Math.pow(1 - t, 3);
      setDisplay(`${(target * eased).toFixed(decimals)}${suffix}`);
      if (t < 1) raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [inView, value, duration, reduced]);

  return (
    <span ref={ref} className={className}>
      {display}
    </span>
  );
}
