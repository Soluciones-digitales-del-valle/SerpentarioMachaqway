"use client";

import Image from "next/image";
import { useEffect, useRef } from "react";
import { nav, site } from "@/lib/content";

export function Header() {
  const menuRef = useRef<HTMLDetailsElement>(null);

  useEffect(() => {
    const menu = menuRef.current;
    if (!menu) return;

    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape" && menu.open) {
        menu.open = false;
        menu.querySelector("summary")?.focus();
      }
    };

    const onClick = (event: MouseEvent) => {
      const target = event.target;
      if (target instanceof Element && target.closest("a")) {
        menu.open = false;
      }
    };

    document.addEventListener("keydown", onKey);
    menu.addEventListener("click", onClick);
    return () => {
      document.removeEventListener("keydown", onKey);
      menu.removeEventListener("click", onClick);
    };
  }, []);

  return (
    <header className="pointer-events-none fixed inset-x-0 top-0 z-40 flex justify-center px-3 pt-3">
      <div className="pointer-events-auto flex w-full max-w-5xl items-center gap-2 rounded-full bg-night/92 px-3 py-1.5 text-cream shadow-[0_10px_30px_rgba(0,0,0,0.18)] backdrop-blur-md">
        <a href="#inicio" className="mr-auto flex min-h-12 items-center gap-2.5 rounded-full pr-2 no-underline">
          <Image src={site.logo.src} alt="" width={site.logo.width} height={site.logo.height} className="h-9 w-auto" />
          <span className="font-display text-[1.45rem] leading-none tracking-tight">{site.name}</span>
        </a>

        <nav className="hidden items-center lg:flex" aria-label="Principal">
          {nav.map((item) => (
            <a key={item.href} href={item.href} className="inline-flex min-h-12 items-center px-3 text-sm text-cream no-underline hover:underline">
              {item.label}
            </a>
          ))}
        </nav>

        <a href="#contacto" className="hidden min-h-12 items-center rounded-full bg-cream px-4 text-sm text-night no-underline hover:bg-white lg:inline-flex">
          Contacto
        </a>

        <details ref={menuRef} className="relative lg:hidden" id="menu-movil">
          <summary className="flex min-h-12 cursor-pointer list-none items-center rounded-full px-3 text-sm [&::-webkit-details-marker]:hidden">
            Menú
          </summary>
          <nav className="absolute top-[calc(100%+0.6rem)] right-0 z-30 w-56 rounded-3xl bg-night px-4 py-2 text-cream shadow-lg" aria-label="Secciones">
            {nav.map((item) => (
              <a key={item.href} href={item.href} className="flex min-h-12 items-center no-underline">
                {item.label}
              </a>
            ))}
            <a href="#contacto" className="flex min-h-12 items-center no-underline">
              Contacto
            </a>
          </nav>
        </details>
      </div>
    </header>
  );
}
