import Image from "next/image";
import { LightboxGallery } from "@/components/LightboxGallery";
import { galeriaImages } from "@/data/galeria";

export const metadata = {
  title: "Galeria",
  description:
    "Confira registros feitos pela nossa equipe em eventos e produções especiais, com luz e emoção.",
  openGraph: {
    title: "Galeria Nalente Studio",
    description:
      "Momentos vivos, bastidores e sorrisos registrados com carinho.",
  },
};

export default function GaleriaPage() {
  return (
    <div className="bg-white">
      <section className="mx-auto max-w-6xl px-6 py-20">
        <div className="max-w-2xl">
          <p className="pt-7 text-sm font-semibold uppercase tracking-[0.2em] text-neutral-500">
            Galeria
          </p>
          <h1 className="mt-3 text-3xl font-semibold text-neutral-900">
            Imagens que contam o clima do evento
          </h1>
          <p className="mt-4 text-sm text-neutral-600">
            A fotografia guarda luz, movimento e emoção. Veja registros feitos
            pela nossa equipe durante eventos e produções.
          </p>
        </div>

        <div className="my-12 overflow-hidden rounded-4xl">
          <Image
            src="/images/galeria/destaque.jpg"
            alt="Foto destaque"
            width={1200}
            height={600}
            className="h-auto w-full object-cover"
          />
        </div>

        <LightboxGallery
          images={galeriaImages}
          columns="grid-cols-1 sm:grid-cols-2 lg:grid-cols-3"
        />
      </section>
    </div>
  );
}
