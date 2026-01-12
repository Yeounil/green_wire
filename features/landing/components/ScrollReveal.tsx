"use client";

import { useScrollReveal } from "../hooks/useScrollReveal";
import { ReactNode } from "react";

type RevealDirection = "up" | "left" | "right" | "scale";

interface ScrollRevealProps {
  children: ReactNode;
  direction?: RevealDirection;
  delay?: number;
  className?: string;
  threshold?: number;
}

const directionClasses: Record<RevealDirection, string> = {
  up: "scroll-reveal",
  left: "scroll-reveal-left",
  right: "scroll-reveal-right",
  scale: "scroll-reveal-scale",
};

export function ScrollReveal({
  children,
  direction = "up",
  delay = 0,
  className = "",
  threshold = 0.1,
}: ScrollRevealProps) {
  const { ref, isRevealed } = useScrollReveal<HTMLDivElement>({ threshold });

  return (
    <div
      ref={ref}
      className={`${directionClasses[direction]} ${isRevealed ? "revealed" : ""} ${className}`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </div>
  );
}

// Section wrapper with reveal animation
interface RevealSectionProps {
  children: ReactNode;
  className?: string;
}

export function RevealSection({ children, className = "" }: RevealSectionProps) {
  const { ref, isRevealed } = useScrollReveal<HTMLElement>({ threshold: 0.05 });

  return (
    <section
      ref={ref}
      className={`${className} ${isRevealed ? "revealed" : ""}`}
    >
      {children}
    </section>
  );
}
