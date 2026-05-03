"use client";

import { useRef, type ReactNode } from "react";
import { motion, useMotionTemplate, useMotionValue, useSpring } from "framer-motion";

interface GlowCardBaseProps {
  children: ReactNode;
  className?: string;
  onClick?: () => void;
}

type GlowCardProps = GlowCardBaseProps & (
  | { href: string; onClick?: never }
  | { href?: never; onClick?: () => void }
);

export function GlowCard({ children, className = "", href, onClick }: GlowCardProps) {
  const divRef = useRef<HTMLDivElement>(null);
  const anchorRef = useRef<HTMLAnchorElement>(null);
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const springX = useSpring(mouseX, { stiffness: 300, damping: 30 });
  const springY = useSpring(mouseY, { stiffness: 300, damping: 30 });

  const backgroundImage = useMotionTemplate`radial-gradient(200px circle at ${springX}px ${springY}px, rgba(127,119,221,0.08), transparent 80%)`;

  const ref = href ? anchorRef : divRef;

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement | HTMLAnchorElement>) => {
    const current = ref.current;
    if (!current) return;
    const rect = current.getBoundingClientRect();
    mouseX.set(e.clientX - rect.left);
    mouseY.set(e.clientY - rect.top);
  };

  const handleMouseLeave = () => {
    mouseX.set(0);
    mouseY.set(0);
  };

  if (href) {
    return (
      <motion.a
        ref={anchorRef as React.RefObject<HTMLAnchorElement>}
        className={`glow-card ${className}`}
        href={href}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        style={{ backgroundImage: backgroundImage as unknown as string }}
      >
        {children}
      </motion.a>
    );
  }

  return (
    <motion.div
      ref={divRef as React.RefObject<HTMLDivElement>}
      className={`glow-card ${className}`}
      onClick={onClick}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{ backgroundImage: backgroundImage as unknown as string }}
    >
      {children}
    </motion.div>
  );
}
