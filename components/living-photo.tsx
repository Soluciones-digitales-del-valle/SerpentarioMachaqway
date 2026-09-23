"use client";

import { useEffect, useRef, type ReactNode } from "react";

type LivingPhotoProps = {
  children: ReactNode;
  kind?: "hero" | "section";
};

export function LivingPhoto({ children, kind = "section" }: LivingPhotoProps) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const frame = ref.current;
    if (!frame) return;

    const motion = window.matchMedia("(prefers-reduced-motion: reduce)");
    if (motion.matches) return;

    if (kind !== "hero") return;

    let request = 0;

    const update = () => {
      request = 0;
      const box = frame.getBoundingClientRect();
      const traveled = Math.min(Math.max(-box.top, 0), box.height || 1);
      const progress = traveled / (box.height || 1);
      const scale = 1.04 - progress * 0.01;
      const shift = progress * -Math.min(8, box.height * 0.012);
      frame.style.transform = `translate3d(0, ${shift.toFixed(2)}px, 0) scale(${scale.toFixed(4)})`;
    };

    const onScroll = () => {
      if (request) return;
      request = window.requestAnimationFrame(update);
    };

    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);

    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
      if (request) window.cancelAnimationFrame(request);
    };
  }, [kind]);

  return (
    <div ref={ref} className={`living-photo living-photo--${kind}`}>
      {children}
    </div>
  );
}
