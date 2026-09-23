"use client";

import { useEffect, useRef, useState, type CSSProperties } from "react";
import { animals } from "@/lib/content";
import { LivingPhoto } from "@/components/living-photo";
import { PhotoFrame } from "@/components/photo";
import { Reveal } from "@/components/reveal";

const groups = animals.groups;

export function AnimalsSlides() {
  const [index, setIndex] = useState(0);
  const [mobile, setMobile] = useState(false);
  const [entering, setEntering] = useState<number | null>(null);
  const skipSlideMotion = useRef(true);
  const previous = groups[(index - 1 + groups.length) % groups.length];
  const next = groups[(index + 1) % groups.length];

  useEffect(() => {
    const query = window.matchMedia("(max-width: 1023px)");
    const sync = () => setMobile(query.matches);
    sync();
    query.addEventListener("change", sync);
    return () => query.removeEventListener("change", sync);
  }, []);

  useEffect(() => {
    if (!mobile) return;
    if (skipSlideMotion.current) {
      skipSlideMotion.current = false;
      return;
    }

    setEntering(index);
    const timeout = window.setTimeout(() => setEntering(null), 700);
    return () => window.clearTimeout(timeout);
  }, [index, mobile]);

  return (
    <div className="mt-12 px-[clamp(1.25rem,2vw,2rem)] lg:mt-16">
      <div className="overflow-hidden">
        <div id="animales-pista" className="animals-track" style={{ "--animals-index": index } as CSSProperties}>
          {groups.map((group, slide) => (
            <article
              key={group.id}
              id={group.id}
              className="min-w-0"
              data-entering={entering === slide ? "true" : undefined}
              aria-hidden={mobile && slide !== index ? true : undefined}
            >
              {group.photo ? (
                <div className="photo-frame relative aspect-[4/3] overflow-hidden bg-night">
                  <LivingPhoto>
                    <PhotoFrame photo={group.photo} sizes="(min-width: 1024px) 30vw, 100vw" />
                  </LivingPhoto>
                </div>
              ) : (
                <div className="flex aspect-[4/3] items-end bg-night p-5 text-cream">
                  <p className="text-base leading-relaxed text-cream/80">{group.text}</p>
                </div>
              )}
              <Reveal delay={slide * 80}>
                <h3 className="mt-5 font-display text-[clamp(2rem,3vw,3.4rem)] leading-none tracking-tight">{group.title}</h3>
                {group.photo ? <p className="mt-3 text-base leading-relaxed text-muted sm:text-lg">{group.text}</p> : null}
              </Reveal>
            </article>
          ))}
        </div>
      </div>
      <div className="mt-8 flex justify-center gap-3 lg:hidden">
        <button
          type="button"
          className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-night text-cream"
          aria-label={`Anterior: ${previous.title}`}
          onClick={() => setIndex((current) => (current - 1 + groups.length) % groups.length)}
        >
          <svg viewBox="0 0 24 24" aria-hidden="true" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="1.6">
            <path d="M19 12H5M11 6l-6 6 6 6" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </button>
        <button
          type="button"
          className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-night text-cream"
          aria-label={`Siguiente: ${next.title}`}
          onClick={() => setIndex((current) => (current + 1) % groups.length)}
        >
          <svg viewBox="0 0 24 24" aria-hidden="true" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="1.6">
            <path d="M5 12h14M13 6l6 6-6 6" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </button>
      </div>
    </div>
  );
}
