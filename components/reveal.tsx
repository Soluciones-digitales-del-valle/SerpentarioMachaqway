"use client";

import { useEffect, useRef, type CSSProperties, type ReactNode } from "react";

type RevealProps = {
  children: ReactNode;
  className?: string;
  delay?: number;
};

export function Reveal({ children, className = "", delay = 0 }: RevealProps) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    let frame = 0;
    let observer: IntersectionObserver | undefined;

    const show = () => {
      el.classList.add("is-shown");
      window.removeEventListener("scroll", onScroll);
      observer?.disconnect();
      if (frame) cancelAnimationFrame(frame);
    };

    const check = () => {
      frame = 0;
      if (el.getBoundingClientRect().top < window.innerHeight * 0.9) show();
    };

    const onScroll = () => {
      if (frame) return;
      frame = requestAnimationFrame(check);
    };

    if (el.getBoundingClientRect().top < window.innerHeight * 0.9 && el.getBoundingClientRect().bottom > 0) {
      show();
      return;
    }

    el.classList.add("reveal-wait");
    observer = new IntersectionObserver(check, { threshold: 0 });
    observer.observe(el);
    window.addEventListener("scroll", onScroll, { passive: true });

    return () => {
      observer?.disconnect();
      window.removeEventListener("scroll", onScroll);
      if (frame) cancelAnimationFrame(frame);
    };
  }, []);

  return (
    <div
      ref={ref}
      className={`reveal ${className}`}
      style={delay ? ({ transitionDelay: `${delay}ms`, "--reveal-delay": `${delay}ms` } as CSSProperties) : undefined}
    >
      {children}
    </div>
  );
}
