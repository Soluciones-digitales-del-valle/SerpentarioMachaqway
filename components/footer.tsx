import { site } from "@/lib/content";
import { Reveal } from "@/components/reveal";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-night px-[clamp(1.25rem,4vw,3rem)] py-14 text-cream/75">
      <div className="mx-auto grid max-w-6xl gap-10 border-t border-cream/15 pt-10 sm:grid-cols-3">
        <Reveal>
          <p className="font-display text-4xl leading-none tracking-tight text-cream">{site.name}</p>
          <p className="mt-3 max-w-xs">
            {site.legalName}. Villa de Las Rosas, Córdoba. Investigación, educación y protección desde {site.founded}.
          </p>
        </Reveal>
        <div>
          <p className="text-sm tracking-[0.14em] text-cream uppercase">Contacto</p>
          <ul className="mt-3 space-y-2">
            <li>
              <a href={site.phoneHref} className="text-cream underline decoration-cream/40 underline-offset-4 hover:decoration-cream">
                {site.phoneDisplay}
              </a>
            </li>
            <li>
              <a href={site.instagramHref} className="underline decoration-cream/40 underline-offset-4 hover:decoration-cream" target="_blank" rel="noopener noreferrer">
                Instagram
                <span className="sr-only"> (se abre en una pestaña nueva)</span>
              </a>
            </li>
            <li>
              <a href="#visita" className="underline decoration-cream/40 underline-offset-4 hover:decoration-cream">
                La visita
              </a>
            </li>
          </ul>
        </div>
        <div>
          <p className="text-sm tracking-[0.14em] text-cream uppercase">Fotografías</p>
          <p className="mt-3 text-cream">{site.photoCredit}</p>
          <p className="mt-8 text-sm">© {year} {site.legalName}</p>
        </div>
      </div>
    </footer>
  );
}
