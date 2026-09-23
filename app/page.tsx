import { Animals, Contact, Courses, Education, Hero, Presentation, Visit } from "@/components/sections";
import { site } from "@/lib/content";

export default function Home() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Place",
    name: site.legalName,
    url: site.url,
    description:
      "Proyecto familiar fundado en 2004 en Villa de Las Rosas, Córdoba, dedicado a la investigación, la educación y la protección de serpientes y otros animales de la fauna argentina.",
    telephone: "+54-3544-469822",
    address: {
      "@type": "PostalAddress",
      streetAddress: "Ruta 14, a 800 metros de la plaza",
      addressLocality: "Villa de Las Rosas",
      addressRegion: "Córdoba",
      addressCountry: "AR",
    },
    sameAs: [site.instagramHref],
  };

  return (
    <main id="contenido">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <Hero />
      <Presentation />
      <Animals />
      <Education />
      <Visit />
      <Courses />
      <Contact />
    </main>
  );
}
