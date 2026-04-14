"use client";

import Image from "next/image";
import { cn } from "@/lib/utils";

export type GalleryGridImage = {
  src: string;
  alt: string;
};

type GalleryGridProps = {
  images: GalleryGridImage[];
  columns?: string;
  onImageClick?: (index: number) => void;
};

export function GalleryGrid({
  images,
  columns = "grid-cols-1 sm:grid-cols-2 lg:grid-cols-3",
  onImageClick,
}: GalleryGridProps) {
  return (
    <div className={cn("grid gap-5", columns)}>
      {images.map((image, index) => {
        const content = (
          <>
            <Image
              src={image.src}
              alt={image.alt}
              fill
              loading="lazy"
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              className="object-cover transition duration-700 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-[linear-gradient(180deg,transparent_35%,rgba(0,0,0,0.78))]" />
            <div className="absolute inset-x-0 bottom-0 p-5">
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-accent">
                NA LENTE
              </p>
            </div>
          </>
        );

        if (onImageClick) {
          return (
            <button
              key={image.src}
              type="button"
              onClick={() => onImageClick(index)}
              className="group frame-line relative h-72 cursor-pointer overflow-hidden rounded-[30px] border border-black/10 bg-black"
            >
              {content}
            </button>
          );
        }

        return (
          <div
            key={image.src}
            className="group frame-line relative h-72 overflow-hidden rounded-[30px] border border-black/10 bg-black"
          >
            {content}
          </div>
        );
      })}
    </div>
  );
}
