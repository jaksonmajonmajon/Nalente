import Link from "next/link";
import { ArrowRight } from "@phosphor-icons/react/dist/ssr";
import { Button } from "@/components/ui/button";

type CTAProps = {
  title: string;
  description: string;
  ctaLabel: string;
  ctaHref: string;
};

export function CTA({ title, description, ctaLabel, ctaHref }: CTAProps) {
  return (
    <section className="section-shell bg-[#090909] py-24">
      <div className="mx-auto max-w-6xl px-6">
        <div className="frame-line rounded-[36px] border border-white/10 bg-[linear-gradient(135deg,rgba(255,107,0,0.14),rgba(255,255,255,0.04)_45%,rgba(255,255,255,0.02))] px-8 py-10 shadow-[0_30px_90px_rgba(0,0,0,0.35)] md:px-12 md:py-14">
          <div className="max-w-3xl">
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-accent">
              Próximo passo
            </p>
            <h2 className="mt-4 text-3xl font-semibold leading-tight text-white sm:text-5xl">
              {title}
            </h2>
            <p className="mt-5 max-w-2xl text-base leading-7 text-white/68">
              {description}
            </p>
          </div>

          <div className="mt-8 flex flex-wrap items-center gap-4">
            <Button asChild size="lg">
              <Link href={ctaHref}>
                {ctaLabel}
                <ArrowRight size={18} weight="bold" />
              </Link>
            </Button>
            <p className="text-sm text-white/50">
              Atendimento ágil para eventos corporativos, sociais, esportivos e experiências de marca.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
