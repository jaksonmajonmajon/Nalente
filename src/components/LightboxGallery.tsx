"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { GalleryGrid, GalleryGridImage } from "@/components/GalleryGrid";

type LightboxGalleryProps = {
  images: GalleryGridImage[];
  columns?: string;
};

export function LightboxGallery({ images, columns }: LightboxGalleryProps) {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  useEffect(() => {
    if (activeIndex === null) {
      document.body.style.overflow = "";
      return;
    }
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "";
    };
  }, [activeIndex]);

  useEffect(() => {
    if (activeIndex === null) return;

    const handleKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setActiveIndex(null);
      }
      if (event.key === "ArrowRight") {
        setActiveIndex((current) =>
          current === null ? 0 : (current + 1) % images.length
        );
      }
      if (event.key === "ArrowLeft") {
        setActiveIndex((current) =>
          current === null ? 0 : (current - 1 + images.length) % images.length
        );
      }
    };

    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, [activeIndex, images.length]);

  const activeImage = activeIndex !== null ? images[activeIndex] : null;

  const handleNext = () => {
    if (activeIndex === null) return;
    setActiveIndex((activeIndex + 1) % images.length);
  };

  const handlePrev = () => {
    if (activeIndex === null) return;
    setActiveIndex((activeIndex - 1 + images.length) % images.length);
  };

  return (
    <>
      <GalleryGrid
        images={images}
        columns={columns}
        onImageClick={setActiveIndex}
      />
      {activeImage && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 p-6"
          onClick={() => setActiveIndex(null)}
        >
          <button
            type="button"
            aria-label="Fechar"
            onClick={() => setActiveIndex(null)}
            className="absolute right-6 top-6 rounded-full border border-white/30 px-4 py-2 text-xs font-semibold text-white"
          >
            Fechar
          </button>
          <button
            type="button"
            aria-label="Anterior"
            onClick={handlePrev}
            className="absolute left-6 top-1/2 -translate-y-1/2 rounded-full border border-white/30 px-4 py-2 text-xs font-semibold text-white"
          >
            Anterior
          </button>
          <div
            className="relative h-[70vh] w-full max-w-5xl overflow-hidden rounded-3xl"
            onClick={(event) => event.stopPropagation()}
          >
            <Image
              src={activeImage.src}
              alt={activeImage.alt}
              fill
              className="object-cover"
              priority
              sizes="(max-width: 1024px) 100vw, 80vw"
            />
          </div>
          <button
            type="button"
            aria-label="Próxima"
            onClick={handleNext}
            className="absolute right-6 top-1/2 -translate-y-1/2 rounded-full border border-white/30 px-4 py-2 text-xs font-semibold text-white"
          >
            Próxima
          </button>
        </div>
      )}
    </>
  );
}
