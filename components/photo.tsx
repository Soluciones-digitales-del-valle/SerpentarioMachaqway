import Image from "next/image";
import type { CSSProperties } from "react";
import type { Photo } from "@/lib/content";

type FrameProps = {
  photo: Photo;
  priority?: boolean;
  sizes: string;
  className?: string;
};

export function PhotoFrame({ photo, priority = false, sizes, className = "" }: FrameProps) {
  return (
    <Image
      src={photo.src}
      alt={photo.alt}
      fill
      priority={priority}
      sizes={sizes}
      className={`photo-focus rounded-none object-cover ${className}`}
      style={
        {
          "--focus-mobile": photo.focusMobile,
          "--focus-desktop": photo.focus,
          "--zoom-mobile": photo.zoomMobile,
          "--zoom-desktop": photo.zoom,
        } as CSSProperties
      }
    />
  );
}
