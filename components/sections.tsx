import type { ReactNode } from "react";
import { animals, contact, courses, education, hero, presentation, site, visit } from "@/lib/content";
import { AnimalsSlides } from "@/components/animals-slides";
import { LivingPhoto } from "@/components/living-photo";
import { PhotoFrame } from "@/components/photo";
import { Reveal } from "@/components/reveal";

function External({ children, href }: { children: ReactNode; href: string }) {
  return (
    <a href={href} target="_blank" rel="noopener noreferrer" className="underline decoration-cream/40 underline-offset-4 hover:decoration-cream">
      {children}
      <span className="sr-only"> (se abre en una pestaña nueva)</span>
    </a>
  );
}

const pill =
  "inline-flex min-h-12 items-center rounded-full bg-cream px-6 text-night no-underline motion-safe:transition-colors hover:bg-white";

const pillDark =
  "inline-flex min-h-12 items-center rounded-full bg-night px-6 text-cream no-underline motion-safe:transition-colors hover:bg-ink";

export function Hero() {
  return (
    <section id="inicio" className="relative min-h-[100svh] bg-night" aria-labelledby="titulo-inicio">
      <div className="photo-frame absolute inset-0 overflow-hidden">
        <LivingPhoto kind="hero">
          <PhotoFrame photo={hero.photo} priority sizes="100vw" />
        </LivingPhoto>
        <div
          className="pointer-events-none absolute inset-0 bg-[linear-gradient(to_bottom,rgba(18,22,20,0.55)_0%,rgba(18,22,20,0.12)_22%,transparent_40%)]"
          aria-hidden="true"
        />
      </div>
      <div className="relative z-10 flex min-h-[100svh] items-start">
        <div className="w-full max-w-md px-[clamp(1.25rem,4vw,3rem)] pt-28 pb-16 text-cream">
          <p className="arrive text-sm tracking-[0.18em] uppercase text-cream/80">{hero.title}</p>
          <h1 id="titulo-inicio" className="arrive arrive-2 mt-3 max-w-sm font-display text-[clamp(1.65rem,2.6vw,2.15rem)] leading-snug tracking-tight text-balance">
            {hero.lede}
          </h1>
          <p className="arrive arrive-3 mt-3 text-base text-cream/80">{hero.place}</p>
          <a href={hero.ctaHref} className={`arrive arrive-4 mt-6 ${pill}`}>
            {hero.cta}
          </a>
        </div>
      </div>
    </section>
  );
}

export function Presentation() {
  return (
    <section id={presentation.id} className="scroll-mt-28 bg-paper" aria-labelledby="titulo-presentacion">
      <div className="mx-auto grid max-w-6xl items-end gap-10 px-[clamp(1.25rem,4vw,3rem)] pt-20 lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)] lg:gap-16 lg:pt-28">
        <div>
          <Reveal>
            <h2 id="titulo-presentacion" className="font-display text-[clamp(3rem,6vw,5.4rem)] leading-[0.92] tracking-tight text-balance">
              {presentation.title}
            </h2>
          </Reveal>
        </div>
        <Reveal delay={90}>
          <div className="max-w-xl space-y-4 pb-2 text-lg leading-relaxed text-muted">
            {presentation.paragraphs.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </div>
        </Reveal>
      </div>
      <Reveal className="photo-frame relative mt-12 aspect-[16/9] overflow-hidden bg-night lg:mt-16 lg:aspect-[2.2/1]">
        <LivingPhoto>
          <PhotoFrame photo={presentation.photo} sizes="100vw" />
        </LivingPhoto>
      </Reveal>
    </section>
  );
}

export function Animals() {
  return (
    <section id={animals.id} className="scroll-mt-28 bg-paper pt-20 pb-16 lg:pt-28 lg:pb-24" aria-labelledby="titulo-animales">
      <div className="px-[clamp(1.25rem,2vw,2rem)]">
        <Reveal>
          <h2 id="titulo-animales" className="max-w-3xl font-display text-[clamp(3rem,6vw,5.4rem)] leading-[0.92] tracking-tight">
            {animals.title}
          </h2>
        </Reveal>
        <Reveal delay={80}>
          <p className="mt-5 max-w-md text-lg leading-relaxed text-muted">{animals.lede}</p>
        </Reveal>
      </div>
      <AnimalsSlides />
    </section>
  );
}

export function Education() {
  return (
    <section id={education.id} className="scroll-mt-28 bg-paper" aria-labelledby="titulo-educacion">
      <div className="grid items-stretch lg:grid-cols-2">
        <Reveal className="photo-frame relative min-h-[70vw] overflow-hidden bg-night lg:min-h-[88vh]">
          <LivingPhoto>
            <PhotoFrame photo={education.photo} sizes="(min-width: 1024px) 50vw, 100vw" />
          </LivingPhoto>
        </Reveal>
        <div className="flex items-end px-[clamp(1.25rem,4vw,3rem)] py-16 lg:py-24">
          <div className="max-w-xl">
            <Reveal>
              <h2 id="titulo-educacion" className="font-display text-[clamp(3rem,5vw,4.8rem)] leading-[0.92] tracking-tight text-balance">
                {education.title}
              </h2>
            </Reveal>
            <Reveal delay={90}>
              <div className="mt-6 space-y-4 text-lg leading-relaxed text-muted">
                {education.paragraphs.map((paragraph) => (
                  <p key={paragraph}>{paragraph}</p>
                ))}
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}

export function Visit() {
  return (
    <section id={visit.id} className="scroll-mt-28 bg-night text-cream" aria-labelledby="titulo-visita">
      <div className="mx-auto grid max-w-6xl gap-14 px-[clamp(1.25rem,4vw,3rem)] py-20 lg:grid-cols-[minmax(0,0.8fr)_minmax(0,1fr)] lg:py-28">
        <div>
          <Reveal>
            <h2 id="titulo-visita" className="font-display text-[clamp(3rem,6vw,5.4rem)] leading-[0.92] tracking-tight">
              {visit.title}
            </h2>
          </Reveal>
          <Reveal delay={80}>
            <p className="mt-6 max-w-md text-lg leading-relaxed text-cream/75">{visit.lede}</p>
          </Reveal>
          <Reveal delay={140}>
            <p className="mt-10 font-display text-[clamp(4rem,8vw,6.5rem)] leading-none tracking-tight">{site.founded}</p>
            <p className="mt-2 text-sm tracking-[0.16em] text-cream/70 uppercase">Desde {site.location}</p>
          </Reveal>
        </div>
        <Reveal delay={100}>
          <dl className="divide-y divide-cream/15 border-y border-cream/15">
            <div className="py-5">
              <dt className="text-sm tracking-[0.14em] text-cream/60 uppercase">Dirección</dt>
              <dd className="mt-2 text-lg">
                <address className="not-italic">
                  {site.address.map((line) => (
                    <span key={line} className="block">
                      {line}
                    </span>
                  ))}
                </address>
                <p className="mt-3">
                  <External href={site.mapsHref}>Abrir la ubicación en Google Maps</External>
                </p>
              </dd>
            </div>
            <div className="py-5">
              <dt className="text-sm tracking-[0.14em] text-cream/60 uppercase">WhatsApp</dt>
              <dd className="mt-2 text-lg">
                <a href={site.phoneHref} className="underline decoration-cream/40 underline-offset-4 hover:decoration-cream">
                  {site.phoneDisplay}
                </a>
              </dd>
            </div>
            <div className="py-5">
              <dt className="text-sm tracking-[0.14em] text-cream/60 uppercase">Instagram</dt>
              <dd className="mt-2 text-lg">
                <External href={site.instagramHref}>{site.instagramLabel}</External>
              </dd>
            </div>
            <div className="py-5">
              <dt className="text-sm tracking-[0.14em] text-cream/60 uppercase">Horarios</dt>
              <dd className="mt-2 text-lg">{site.hours || "Consultanos por los horarios de visita."}</dd>
            </div>
          </dl>
          <a href={site.whatsappHref} target="_blank" rel="noopener noreferrer" className={`mt-8 ${pill}`}>
            Escribir por WhatsApp
            <span className="sr-only"> (se abre en una pestaña nueva)</span>
          </a>
        </Reveal>
      </div>
    </section>
  );
}

export function Courses() {
  return (
    <section id={courses.id} className="scroll-mt-28 bg-paper" aria-labelledby="titulo-cursos">
      <div className="mx-auto max-w-3xl px-[clamp(1.25rem,4vw,3rem)] py-20 lg:py-28">
        <Reveal>
          <h2 id="titulo-cursos" className="font-display text-[clamp(3rem,6vw,5rem)] leading-[0.92] tracking-tight">
            {courses.title}
          </h2>
        </Reveal>
        <Reveal delay={90}>
          <div className="mt-6 space-y-4 text-lg leading-relaxed text-muted">
            {courses.paragraphs.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </div>
        </Reveal>
        {courses.upcoming.length > 0 ? (
          <ul className="mt-8 divide-y divide-line border-y border-line">
            {courses.upcoming.map((item) => (
              <li key={item.title} className="grid gap-1 py-4 sm:grid-cols-[1fr_auto]">
                <span className="font-display text-2xl">{item.title}</span>
                <span className="text-muted">
                  {item.date}
                  {item.price ? ` · ${item.price}` : ""}
                </span>
              </li>
            ))}
          </ul>
        ) : null}
        <a href={site.coursesHref} target="_blank" rel="noopener noreferrer" className={`mt-8 ${pillDark}`}>
          Consultar capacitaciones
          <span className="sr-only"> (se abre en una pestaña nueva)</span>
        </a>
      </div>
    </section>
  );
}

export function Contact() {
  return (
    <section id={contact.id} className="scroll-mt-28 bg-paper" aria-labelledby="titulo-contacto">
      <div className="mx-auto grid max-w-6xl gap-10 px-[clamp(1.25rem,4vw,3rem)] pb-20 lg:grid-cols-[minmax(0,1.1fr)_minmax(0,0.8fr)] lg:pb-28">
        <div>
          <Reveal>
            <h2 id="titulo-contacto" className="font-display text-[clamp(3.4rem,7vw,6rem)] leading-[0.9] tracking-tight">
              {contact.title}
            </h2>
          </Reveal>
          <Reveal delay={80}>
            <p className="mt-5 max-w-md text-lg leading-relaxed text-muted">{contact.lede}</p>
          </Reveal>
        </div>
        <Reveal delay={120}>
          <address className="not-italic text-lg leading-relaxed">
            {site.address.map((line) => (
              <span key={line} className="block">
                {line}
              </span>
            ))}
          </address>
          <ul className="mt-6 space-y-3 text-lg">
            <li>
              <a href={site.phoneHref} className="underline decoration-ink/30 underline-offset-4 hover:decoration-ink">
                {site.phoneDisplay}
              </a>
            </li>
            <li>
              <a href={site.whatsappHref} className="underline decoration-ink/30 underline-offset-4 hover:decoration-ink" target="_blank" rel="noopener noreferrer">
                WhatsApp
                <span className="sr-only"> (se abre en una pestaña nueva)</span>
              </a>
            </li>
            <li>
              <a href={site.instagramHref} className="underline decoration-ink/30 underline-offset-4 hover:decoration-ink" target="_blank" rel="noopener noreferrer">
                Instagram
                <span className="sr-only"> (se abre en una pestaña nueva)</span>
              </a>
            </li>
            <li>
              <a href={site.mapsHref} className="underline decoration-ink/30 underline-offset-4 hover:decoration-ink" target="_blank" rel="noopener noreferrer">
                Google Maps
                <span className="sr-only"> (se abre en una pestaña nueva)</span>
              </a>
            </li>
          </ul>
        </Reveal>
      </div>
    </section>
  );
}
