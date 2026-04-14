import Image from "next/image";
import Link from "next/link";
import { EventData } from "@/data/eventos";

export function EventCard({ event }: { event: EventData }) {
  return (
    <div className="group overflow-hidden rounded-[30px] border border-white/10 bg-[#111111] text-white shadow-[0_24px_70px_rgba(0,0,0,0.2)] transition duration-300 hover:-translate-y-1 hover:border-accent/40">
      <div className="relative h-48 overflow-hidden">
        <Image
          src={event.coverImage}
          alt={event.name}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          className="object-cover transition duration-700 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-[linear-gradient(180deg,transparent_25%,rgba(0,0,0,0.82))]" />
      </div>
      <div className="space-y-3 p-6">
        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-accent">
          Evento atendido
        </p>
        <h3 className="text-lg font-semibold text-white">{event.name}</h3>
        <p className="text-sm text-white/65">{event.shortDescription}</p>
        <Link
          href={`/eventos/${event.slug}`}
          className="inline-flex items-center text-sm font-semibold text-accent transition hover:text-accent-strong"
        >
          Ver detalhes
        </Link>
      </div>
    </div>
  );
}
