/**
 * Textos, enlaces y fotos de la home.
 * Para cambiar una imagen, reemplazá el archivo en public/images
 * con el mismo nombre, o actualizá `src`. El encuadre se ajusta con
 * `focus` (escritorio) y `focusMobile` (celular): horizontal y vertical.
 * `zoom` acerca la foto para dejar la firma fuera del recorte.
 */

export type Photo = {
  src: string;
  alt: string;
  width: number;
  height: number;
  focus: string;
  focusMobile: string;
  zoom: number;
  zoomMobile: number;
};

export const site = {
  name: "Machaqway",
  legalName: "Serpentario Machaqway",
  url: "https://www.serpentariomachaqway.com.ar",
  title: "Serpentario Machaqway | Traslasierra",
  description:
    "Centro familiar de educación e investigación en Villa de Las Rosas, Traslasierra, desde 2004. Un lugar para conocer reptiles, anfibios y arácnidos.",
  location: "Villa de Las Rosas, Traslasierra, Córdoba",
  founded: 2004,
  phoneDisplay: "+54 3544 469822",
  phoneHref: "tel:+543544469822",
  whatsappHref:
    "https://wa.me/5493544469822?text=Hola%2C%20quiero%20consultar%20por%20una%20visita%20al%20Serpentario%20Machaqway.",
  coursesHref:
    "https://wa.me/5493544469822?text=Hola%2C%20quiero%20consultar%20por%20las%20capacitaciones%20del%20Serpentario%20Machaqway.",
  instagramHref: "https://www.instagram.com/serpentario.machaqway/",
  instagramLabel: "serpentario.machaqway",
  mapsHref:
    "https://www.google.com/maps/search/?api=1&query=Serpentario%20Machaqway%2C%20Ruta%2014%2C%20Villa%20de%20Las%20Rosas%2C%20C%C3%B3rdoba%2C%20Argentina",
  mapsEmbedHref:
    "https://www.google.com/maps/embed?origin=mfe&pb=!1m4!3m2!1m1!4s16795846897195926249!6i16!3m1!1ses!5m1!1ses",
  address: ["Ruta 14, a 800 metros de la plaza", "Villa de Las Rosas, Córdoba, Argentina"],
  /** Dejar vacío hasta confirmar. No publicar un horario inventado. */
  hours: "",
  /** Dejar vacío hasta confirmar. */
  prices: "",
  photoCredit: "Fran Brito",
  logo: {
    src: "/images/logo.png",
    width: 480,
    height: 600,
  },
};

export const nav = [
  { href: "#presentacion", label: "Serpentario" },
  { href: "#animales", label: "Animales" },
  { href: "#educacion", label: "Educación" },
  { href: "#visita", label: "Visita" },
  { href: "#cursos", label: "Cursos" },
] as const;

export const hero = {
  title: "Machaqway",
  lede: "Un serpentario familiar para descubrir y comprender la fauna de Traslasierra.",
  place: "Villa de Las Rosas, Córdoba",
  cta: "Conocé Machaqway",
  ctaHref: "#presentacion",
  photo: {
    src: "/images/hero-portada.webp",
    alt: "Cabeza de una serpiente verde, de perfil, con la boca abierta, sobre un fondo oscuro.",
    width: 1599,
    height: 1018,
    focus: "46% 58%",
    focusMobile: "42% 62%",
    zoom: 1.16,
    zoomMobile: 1.22,
  } satisfies Photo,
};

export const presentation = {
  id: "presentacion",
  title: "Un centro familiar desde 2004",
  paragraphs: [
    "Serpentario Machaqway se fundó en 2004 en Villa de Las Rosas, en Traslasierra, Córdoba. Es un proyecto familiar dedicado a la investigación, la educación y la protección de serpientes y otros animales de la fauna argentina.",
    "El trabajo cotidiano busca transformar el miedo en conocimiento y promover el respeto por estos animales.",
  ],
  photo: {
    src: "/images/hero.webp",
    alt: "Cabeza de una serpiente de perfil, con la lengua afuera y la boca cerrada, sobre un fondo oscuro.",
    width: 1600,
    height: 1068,
    focus: "64% 48%",
    focusMobile: "72% 50%",
    zoom: 1.18,
    zoomMobile: 1.22,
  } satisfies Photo,
};

export const animals = {
  id: "animales",
  title: "Animales",
  lede: "En las visitas se conocen reptiles, anfibios y arácnidos.",
  groups: [
    {
      id: "reptiles",
      title: "Reptiles",
      text: "Esta fotografía es de una serpiente de cascabel. El recorrido permite mirar reptiles de cerca y hacer preguntas.",
      photo: {
        src: "/images/reptiles-cascabel.webp",
        alt: "Serpiente de cascabel enroscada, con la lengua afuera y la boca cerrada, sobre tierra.",
        width: 1600,
        height: 986,
        focus: "50% 46%",
        focusMobile: "52% 44%",
        zoom: 1.2,
        zoomMobile: 1.26,
      } satisfies Photo,
    },
    {
      id: "anfibios",
      title: "Anfibios",
      text: "También forman parte de las visitas. El recorrido permite mirar anfibios de cerca y hacer preguntas.",
      photo: {
        src: "/images/anfibios.webp",
        alt: "Anfibio verde, con ojos rojos y dedos anaranjados, asomado entre una hoja.",
        width: 1600,
        height: 900,
        focus: "68% 58%",
        focusMobile: "70% 55%",
        zoom: 1.08,
        zoomMobile: 1.12,
      } satisfies Photo,
    },
    {
      id: "aranas",
      title: "Arañas",
      text: "También forman parte de las visitas. El recorrido permite mirar arañas de cerca y hacer preguntas.",
      photo: {
        src: "/images/aranas.webp",
        alt: "Araña negra con marcas rojas en el abdomen, suspendida en su tela.",
        width: 1600,
        height: 928,
        focus: "0% 46%",
        focusMobile: "0% 46%",
        zoom: 1.22,
        zoomMobile: 1.22,
      } satisfies Photo,
    },
  ],
};

export const education = {
  id: "educacion",
  title: "Conocer para cuidar",
  paragraphs: [
    "Conocer a un animal de cerca cambia la pregunta. Deja de ser solo un reflejo de miedo y pasa a ser parte del paisaje que ya nos rodea.",
    "El serpentario combina visitas educativas, investigación de la herpetofauna y atención a serpientes que quedan en una situación de riesgo, por ejemplo cuando aparecen en una vivienda.",
  ],
  photo: {
    src: "/images/educacion-cascabel.webp",
    alt: "Cascabel de una serpiente, formada por segmentos claros, sobre un fondo negro.",
    width: 1471,
    height: 1600,
    focus: "50% 42%",
    focusMobile: "50% 40%",
    zoom: 1.24,
    zoomMobile: 1.24,
  } satisfies Photo,
};

export const visit = {
  id: "visita",
  title: "La visita",
  lede: "El serpentario está en Villa de Las Rosas, sobre la Ruta 14. Antes de salir, escribinos y te confirmamos cómo venir.",
};

export const courses = {
  id: "cursos",
  title: "Cursos y formación",
  paragraphs: [
    "Hay capacitaciones para el público general y para profesionales. Las fechas cambian según la temporada.",
    "En esta página no hay calendario ni precios. Escribinos y te contamos qué está vigente.",
  ],
  /** Cuando haya un curso confirmado, agregá título, fecha y precio acá. */
  upcoming: [] as { title: string; date: string; price: string }[],
};

export const contact = {
  id: "contacto",
  title: "Contacto",
  lede: "Villa de Las Rosas, Traslasierra. Escribinos para visitas, horarios y capacitaciones.",
};
