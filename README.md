# Serpentario Machaqway

Sitio en Next.js (App Router), TypeScript y Tailwind. Pensado para publicarse en Vercel.

## Ver la página

```bash
npm install
npm run dev
```

Abrí [http://localhost:3000](http://localhost:3000).

## Cambiar textos, enlaces y fotos

Todo está en `lib/content.ts`.

Para cambiar una foto, reemplazá el archivo en `public/images` con el mismo nombre, o actualizá `src`. El encuadre se ajusta con `focus` (pantallas anchas) y `focusMobile` (celular).

No completes horarios, precios ni fechas de cursos hasta confirmarlos. Esos campos están vacíos a propósito.

## Publicar en Vercel

El proyecto no necesita variables de entorno. Vercel detecta Next.js solo.

1. En [Vercel](https://vercel.com/new), importá `Soluciones-digitales-del-valle/SerpentarioMachaqway`.
2. Dejá el comando de build en `npm run build` y el directorio de salida por defecto.
3. Deploy.

La dirección canónica es `https://www.serpentariomachaqway.com.ar`.
