import { notFound } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { eventos } from "@/data/eventos";
import { LightboxGallery } from "@/components/LightboxGallery";
import { Button } from "@/components/ui/button";

type EventPageProps = {
  params: { slug: string };
};

export function generateStaticParams() {
  return eventos.map((event) => ({ slug: event.slug }));
}

export function generateMetadata({ params }: EventPageProps) {
  const event = eventos.find((item) => item.slug === params.slug);

  if (!event) {
    return {
      title: "Evento não encontrado",
      description: "Evento não encontrado.",
    };
  }

  return {
    title: `Fotografia para ${event.name}`,
    description: event.shortDescription,
    openGraph: {
      title: `Fotografia para ${event.name}`,
      description: event.shortDescription,
      images: [event.coverImage],
    },
  };
}

export default function EventoPage({ params }: EventPageProps) {
  const event = eventos.find((item) => item.slug === params.slug);

  if (!event) {
    notFound();
  }

  return (
    <div className="bg-white">
      <section className="relative overflow-hidden bg-neutral-950">
        <div className="absolute inset-0">
          <Image
            src={event.coverImage}
            alt={event.name}
            fill
            sizes="100vw"
            className="object-cover opacity-80"
            priority
          />
          <div className="absolute inset-0 bg-linear-to-r from-neutral-950 via-neutral-950/70 to-transparent" />
        </div>
        <div className="relative mx-auto flex min-h-[60vh] max-w-6xl flex-col justify-center gap-4 px-6 py-20 text-white">
          <p className="text-xs uppercase tracking-[0.3em] text-white/60">
            Fotografia para eventos
          </p>
          <h1 className="text-4xl font-semibold md:text-5xl">
            Fotografia para {event.name}
          </h1>
          <p className="max-w-2xl text-sm text-white/80">{event.description}</p>
          <Button asChild size="lg">
            <Link href="/contato">Quero cobertura para este evento</Link>
          </Button>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-20">
        <h2 className="text-3xl font-semibold text-neutral-900">
          Momentos registrados
        </h2>
        <p className="mt-3 max-w-2xl text-sm text-neutral-600">
          Cada clique preserva a energia do evento. Veja alguns registros cheios
          de luz e movimento.
        </p>
        <div className="mt-8">
          <LightboxGallery images={event.gallery} />
        </div>
      </section>

      <section className="bg-neutral-50 py-20">
        <div className="mx-auto max-w-6xl px-6">
          <h2 className="text-3xl font-semibold text-neutral-900">Benefícios</h2>
          <div className="mt-8 grid gap-6 md:grid-cols-2">
            {[
              "Olhar atento e profissional",
              "Cobertura completa e discreta",
              "Entrega organizada em alta qualidade",
              "Memórias vivas e autênticas",
            ].map((item) => (
              <div
                key={item}
                className="rounded-3xl border border-neutral-200 bg-white p-6"
              >
                <p className="text-sm font-semibold text-neutral-900">{item}</p>
              </div>
            ))}
          </div>
          <div className="mt-10">
            <Button asChild size="lg">
              <Link href="/contato">Quero cobertura para este evento</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
