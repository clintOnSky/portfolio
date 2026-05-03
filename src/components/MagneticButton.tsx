"use client";

import { useRef, useEffect, type ReactNode } from "react";
import { motion, useMotionValue, useSpring, type ForwardRefComponent, type HTMLMotionProps } from "framer-motion";

interface MagneticButtonProps {
  children: ReactNode;
  variant?: "primary" | "ghost";
  href?: string;
  target?: HTMLMotionProps<"a">["target"];
  rel?: string;
}

export function MagneticButton({ children, variant = "primary", href = "#", target, rel }: MagneticButtonProps) {
  const ref = useRef<HTMLAnchorElement>(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const springX = useSpring(x, { stiffness: 200, damping: 20 });
  const springY = useSpring(y, { stiffness: 200, damping: 20 });

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const handleMove = (e: MouseEvent) => {
      const rect = el.getBoundingClientRect();
      const centerX = rect.left + rect.width / 2;
      const centerY = rect.top + rect.height / 2;
      const maxMove = 8;
      x.set(((e.clientX - centerX) / rect.width) * maxMove);
      y.set(((e.clientY - centerY) / rect.height) * maxMove);
    };

    const handleLeave = () => {
      x.set(0);
      y.set(0);
    };

    el.addEventListener("mousemove", handleMove);
    el.addEventListener("mouseleave", handleLeave);
    return () => {
      el.removeEventListener("mousemove", handleMove);
      el.removeEventListener("mouseleave", handleLeave);
    };
  }, [x, y]);

  const MotionA = motion.a as ForwardRefComponent<HTMLAnchorElement, HTMLMotionProps<"a">>;

  return (
    <MotionA
      ref={ref}
      style={{ x: springX, y: springY }}
      className={variant === "primary" ? "btn-primary" : "btn-ghost"}
      href={href}
      target={target}
      rel={rel}
    >
      {children}
    </MotionA>
  );
}
