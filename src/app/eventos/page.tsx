import { EventCard } from "@/components/EventCard";
import { eventos } from "@/data/eventos";

export const metadata = {
  title: "Eventos",
  description:
    "Confira os tipos de eventos atendidos com cobertura fotográfica calorosa, detalhista e organizada.",
  openGraph: {
    title: "Cobertura de eventos",
    description:
      "Casamentos, corporativos, formaturas, shows e muito mais com fotografia cheia de luz e emoção.",
  },
};

export default function EventosPage() {
  return (
    <div className="bg-white">
      <section className="mx-auto max-w-6xl px-6 py-20">
        <div className="mb-10 max-w-2xl">
          <p className="pt-7 text-sm font-semibold uppercase tracking-[0.2em] text-neutral-500">
            Eventos
          </p>
          <h1 className="mt-3 text-3xl font-semibold text-neutral-900">
            Coberturas sob medida para cada tipo de evento
          </h1>
          <p className="mt-4 text-sm text-neutral-600">
            Cada evento tem seu ritmo e sua energia. A gente observa, organiza e
            registra cada detalhe com cuidado.
          </p>
        </div>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {eventos.map((event) => (
            <EventCard key={event.slug} event={event} />
          ))}
        </div>
      </section>
    </div>
  );
}
