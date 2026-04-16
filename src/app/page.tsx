import Link from "next/link";
import { ArrowRight, CheckCircle, ClockCountdown, ImagesSquare, PresentationChart } from "@phosphor-icons/react/dist/ssr";
import { Hero } from "@/components/Hero";
import { Steps } from "@/components/Steps";
import { Benefits } from "@/components/Benefits";
import { CTA } from "@/components/CTA";
import { GalleryGrid } from "@/components/GalleryGrid";
import { Button } from "@/components/ui/button";
import { galeriaImages } from "@/data/galeria";

export const metadata = {
  title: "Início",
  description:
    "Fotografia profissional para eventos com cobertura organizada, entrega ágil e imagens que ampliam memória, valor percebido e presença de marca.",
  openGraph: {
    title: "NA LENTE | Fotografia profissional para eventos",
    description:
      "Eventos ganham mais valor quando continuam vivos em imagem, memória e experiência.",
  },
};

const authorityPoints = [
  {
    title: "Cobertura completa",
    description: "Registramos palco, bastidores, público, ativações e detalhes com leitura real do evento.",
    icon: ImagesSquare,
  },
  {
    title: "Organização que facilita",
    description: "A operação é planejada para dar segurança ao organizador e fluidez para toda a jornada.",
    icon: CheckCircle,
  },
  {
    title: "Agilidade de entrega",
    description: "O material volta pronto para continuar gerando relacionamento, lembrança e divulgação.",
    icon: ClockCountdown,
  },
  {
    title: "Impacto comercial",
    description: "A fotografia ajuda a valorizar marca, experiência do público e oportunidades de pós-evento.",
    icon: PresentationChart,
  },
];

const marketSegments = [
  "Eventos corporativos",
  "Shows e experiências de marca",
  "Esportes e ativações",
  "Eventos sociais e celebrações",
];

export default function Home() {
  return (
    <div className="bg-background text-foreground">
      <Hero
        title="Fotografia profissional para eventos que continuam gerando valor depois do último aplauso"
        subtitle="A NA LENTE transforma momentos em memória, conteúdo e percepção de valor. Cobrimos, organizamos, selecionamos e entregamos cada registro com a energia do evento e a estrutura que uma marca profissional exige."
        primaryAction={{ label: "Solicitar proposta", href: "/contato" }}
        secondaryAction={{ label: "Ver portfólio", href: "/eventos" }}
        tertiaryAction={{ label: "Conhecer processo", href: "#processo" }}
        backgroundImage="/images/hero-evento2.png"
      />

      <section className="section-shell border-y border-white/10 bg-[#080808] py-8">
        <div className="mx-auto grid max-w-7xl gap-4 px-6 md:grid-cols-[1.1fr_0.9fr] md:items-center">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-accent">
              Proposta de valor
            </p>
            <p className="mt-3 max-w-3xl text-lg leading-8 text-white/78">
              Eventos perdem força quando acabam. A NA LENTE prolonga essa experiência com imagem profissional, operação organizada e entrega pensada para continuar gerando lembrança, conteúdo e valor percebido.
            </p>
          </div>

          <div className="grid gap-3 sm:grid-cols-2">
            {marketSegments.map((item) => (
              <div
                key={item}
                className="rounded-3xl border border-white/10 bg-white/5 px-4 py-4 text-sm font-medium text-white/75"
              >
                {item}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="sobre" className="section-shell bg-white py-24 text-black">
        <div className="mx-auto grid max-w-7xl gap-14 px-6 lg:grid-cols-[0.92fr_1.08fr]">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-[#ff6b00]">
              Por que a marca se destaca
            </p>
            <h2 className="mt-4 text-3xl font-semibold leading-tight sm:text-5xl">
              Não é só cobertura fotográfica. É uma solução completa para prolongar a experiência do evento.
            </h2>
            <p className="mt-5 max-w-xl text-base leading-7 text-[#444444]">
              Entramos com olhar sensível, mas operamos com método. Isso faz a diferença para quem precisa de imagem forte, atendimento profissional, curadoria bem feita e entrega sem ruído.
            </p>
            <div className="mt-8">
              <Button asChild size="lg" variant="primary">
                <Link href="/contato">
                  Conversar com a equipe
                  <ArrowRight size={18} weight="bold" />
                </Link>
              </Button>
            </div>
          </div>

          <div className="grid gap-5 md:grid-cols-2">
            {authorityPoints.map((point) => {
              const Icon = point.icon;

              return (
                <article
                  key={point.title}
                  className="rounded-[30px] border border-black/10 bg-[#f7f7f7] p-6 transition duration-300 hover:-translate-y-1 hover:border-[#ff6b00]/35 hover:bg-[#fff7f2]"
                >
                  <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-black text-accent">
                    <Icon size={22} weight="fill" />
                  </span>
                  <h3 className="mt-6 text-xl font-semibold text-black">{point.title}</h3>
                  <p className="mt-3 text-sm leading-6 text-[#444444]">{point.description}</p>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      <section className="section-shell bg-[#111111] py-24 text-white">
        <div className="mx-auto grid max-w-7xl gap-10 px-6 lg:grid-cols-[0.9fr_1.1fr]">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-accent">
              Impacto para o evento
            </p>
            <h2 className="mt-4 text-3xl font-semibold leading-tight sm:text-5xl">
              Experiência, lembrança, conteúdo e potencial de receita no mesmo fluxo.
            </h2>
          </div>
          <div className="grid gap-4 sm:grid-cols-2">
            {[
              "O público leva memórias reais com qualidade de entrega.",
              "Organizadores ganham material para reforçar reputação e divulgar próximas edições.",
              "Patrocinadores e marcas aparecem em registros mais valiosos e compartilháveis.",
              "Quando o formato do evento permite, a venda de fotos abre uma nova frente de retorno.",
            ].map((item) => (
              <div
                key={item}
                className="rounded-[28px] border border-white/10 bg-white/5 px-5 py-5 text-sm leading-6 text-white/72"
              >
                {item}
              </div>
            ))}
          </div>
        </div>
      </section>

      <div id="processo">
        <Steps />
      </div>

      <section className="section-shell bg-white py-24 text-black">
        <div className="mx-auto max-w-7xl px-6">
          <div className="flex flex-col gap-5 md:flex-row md:items-end md:justify-between">
            <div className="max-w-3xl">
              <p className="text-xs font-semibold uppercase tracking-[0.3em] text-[#ff6b00]">
                Prova visual
              </p>
              <h2 className="mt-4 text-3xl font-semibold leading-tight sm:text-5xl">
                Energia real, conexão humana e momentos que continuam contando a história do evento.
              </h2>
              <p className="mt-5 text-base leading-7 text-[#444444]">
                A curadoria abaixo reforça o que a marca entrega: presença, emoção na medida certa e acabamento profissional.
              </p>
            </div>

            <Button asChild size="lg" variant="outline">
              <Link href="/galeria" className="border-black/15 bg-black text-white hover:border-[#ff6b00] hover:bg-[#ff6b00] hover:text-black">
                Explorar galeria completa
              </Link>
            </Button>
          </div>

          <div className="mt-12">
            <GalleryGrid images={galeriaImages.slice(0, 8)} columns="grid-cols-1 md:grid-cols-2 xl:grid-cols-4" />
          </div>
        </div>
      </section>

      <Benefits />

      <CTA
        title="Sua cobertura pode ser tão forte quanto a experiência que você criou."
        description="Se o seu evento merece mais do que fotos soltas, a NA LENTE entrega uma operação visual completa: presença em campo, curadoria, organização e registros que continuam trabalhando pela marca depois do encerramento."
        ctaLabel="Falar com a NA LENTE"
        ctaHref="/contato"
      />
    </div>
  );
}
