import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Camera, CheckCircle, Sparkle } from "@phosphor-icons/react/dist/ssr";
import { Button } from "@/components/ui/button";

type HeroProps = {
  title: string;
  subtitle: string;
  primaryAction: { label: string; href: string };
  secondaryAction?: { label: string; href: string };
  tertiaryAction?: { label: string; href: string };
  backgroundImage: string;
};

const heroStats = [
  { value: "Cobertura completa", label: "Do briefing ao pós-evento" },
  { value: "Entrega rápida", label: "Seleção e organização profissional" },
  { value: "Mais valor percebido", label: "Memória, conteúdo e presença de marca" },
];

export function Hero({
  title,
  subtitle,
  primaryAction,
  secondaryAction,
  tertiaryAction,
  backgroundImage,
}: HeroProps) {
  return (
    <section className="section-shell relative overflow-hidden bg-black px-6 pb-18 pt-32 text-white sm:px-8 lg:px-10">
      <div className="absolute inset-x-0 top-0 h-135 bg-[radial-gradient(circle_at_top_right,rgba(255,107,0,0.28),transparent_35%),linear-gradient(180deg,rgba(0,0,0,0.08),transparent)]" />
      <div className="mx-auto grid min-h-[calc(100vh-7rem)] max-w-7xl items-center gap-12 lg:grid-cols-[1.05fr_0.95fr]">
        <div className="relative z-10">
          <div className="inline-flex items-center gap-2 rounded-full border border-accent/30 bg-accent/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.18em] text-accent">
            <Sparkle size={14} weight="fill" />
            Fotografia profissional para eventos
          </div>

          <h1 className="mt-6 max-w-3xl text-4xl font-semibold leading-[1.02] text-white sm:text-4xl lg:text-6xl">
            {title}
          </h1>

          <p className="mt-6 max-w-2xl text-base leading-7 text-white/72 sm:text-lg">
            {subtitle}
          </p>

          <div className="mt-8 flex flex-wrap gap-4">
            <Button asChild size="lg">
              <Link href={primaryAction.href}>
                {primaryAction.label}
                <ArrowRight size={18} weight="bold" />
              </Link>
            </Button>
            {secondaryAction && (
              <Button asChild size="lg" variant="outline">
                <Link href={secondaryAction.href}>{secondaryAction.label}</Link>
              </Button>
            )}
            {tertiaryAction && (
              <Button asChild size="lg" variant="ghost">
                <Link href={tertiaryAction.href}>{tertiaryAction.label}</Link>
              </Button>
            )}
          </div>

          <div className="mt-10 grid gap-4 sm:grid-cols-3">
            {heroStats.map((item) => (
              <div
                key={item.value}
                className="rounded-[28px] border border-white/10 bg-white/5 p-5 backdrop-blur-sm"
              >
                <p className="text-sm font-semibold uppercase tracking-[0.14em] text-accent">
                  {item.value}
                </p>
                <p className="mt-3 text-sm leading-6 text-white/68">{item.label}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="relative">
          <div className="frame-line relative min-h-140 overflow-hidden rounded-[36px] border border-white/10 bg-white/5 shadow-[0_30px_80px_rgba(0,0,0,0.45)]">
            <Image
              src={backgroundImage}
              alt="Evento em destaque"
              fill
              priority
              sizes="(max-width: 1024px) 100vw, 48vw"
              className="object-cover"
            />
            <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(0,0,0,0.08),rgba(0,0,0,0.8)),linear-gradient(135deg,rgba(255,107,0,0.2),transparent_42%)]" />

            <div className="absolute left-5 top-5 rounded-3xl border border-white/12 bg-black/58 px-4 py-4 backdrop-blur-md sm:left-8 sm:top-8">
              <div className="flex items-start gap-3">
                <span className="mt-0.5 rounded-full bg-accent/20 p-2 text-accent">
                  <Camera size={18} weight="fill" />
                </span>
                <div>
                  <p className="text-xs font-semibold uppercase tracking-[0.18em] text-white/45">
                    Operação NA LENTE
                  </p>
                  <p className="mt-2 max-w-55 text-sm leading-6 text-white/82">
                    Cobertura organizada, olhar comercial e entrega pronta para continuar circulando depois do evento.
                  </p>
                </div>
              </div>
            </div>

            <div className="absolute bottom-5 right-5 max-w-72.5 rounded-[28px] border border-white/12 bg-white/10 p-5 backdrop-blur-md sm:bottom-8 sm:right-8">
              <div className="flex items-center gap-3">
                <span className="rounded-full bg-accent p-2 text-black">
                  <CheckCircle size={18} weight="fill" />
                </span>
                <div>
                  <p className="text-xs font-semibold uppercase tracking-[0.18em] text-white/45">
                    Valor prolongado
                  </p>
                  <p className="mt-1 text-lg font-semibold text-white">
                    Seu evento continua vivo em memória, conteúdo e percepção.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="absolute -bottom-6 -left-4 hidden w-48 rounded-[28px] border border-accent/35 bg-black/80 p-5 text-sm text-white/78 shadow-[0_20px_60px_rgba(0,0,0,0.3)] backdrop-blur-md lg:block">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-accent">
              Presença de marca
            </p>
            <p className="mt-2 leading-6">
              Fotografia que reforça a experiência e gera ativos para o pós-evento.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
