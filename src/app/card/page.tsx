import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  Camera,
  EnvelopeSimple,
  InstagramLogo,
  MapPin,
  Phone,
  Sparkle,
} from "@phosphor-icons/react/dist/ssr";

export const metadata = {
  title: "Cartão Virtual",
  description:
    "Cartão de visita virtual da NA LENTE com contato rápido, portfólio e proposta de valor para eventos.",
};

const quickActions = [
  {
    label: "Chamar no WhatsApp",
    href: "https://wa.me/5511954462390",
    icon: Phone,
    primary: true,
  },
  {
    label: "Ver portfólio",
    href: "/eventos",
    icon: Camera,
  },
  {
    label: "Instagram",
    href: "https://instagram.com/vcnalente.fotos",
    icon: InstagramLogo,
  },
  {
    label: "Enviar e-mail",
    href: "mailto:comercial@nalentefotos.com.br",
    icon: EnvelopeSimple,
  },
];

const highlights = [
  "Cobertura profissional para eventos",
  "Entrega organizada e ágil",
  "Memória, conteúdo e valor percebido",
];

export default function CardPage() {
  return (
    <div className="section-shell min-h-screen bg-black px-4 pb-16 pt-32 text-white sm:px-6">
      <div className="mx-auto max-w-3xl">
        <section className="frame-line overflow-hidden rounded-[36px] border border-white/10 bg-[linear-gradient(145deg,rgba(255,107,0,0.2),rgba(255,255,255,0.06)_42%,rgba(255,255,255,0.03))] shadow-[0_30px_90px_rgba(0,0,0,0.45)]">
          <div className="relative px-6 py-8 sm:px-8 sm:py-10">
            <div className="absolute right-0 top-0 h-40 w-40 rounded-full bg-accent/20 blur-3xl" />

            <div className="relative z-10 flex flex-col gap-8">
              <div className="flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
                <div className="flex items-center gap-4">
                  <div>
                    <Image
                      src="/images/Logotipo.png"
                      alt="Logo NA LENTE"
                      width={144}
                      height={52}
                      className="h-auto w-28 sm:w-32"
                      priority
                    />
                  </div>

                  <div>
                    <p className="inline-flex items-center gap-2 rounded-full border border-accent/30 bg-accent/10 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.22em] text-accent">
                      <Sparkle size={12} weight="fill" />
                      Cartão virtual
                    </p>
                    <p className="mt-2 max-w-md text-sm leading-6 text-white/72 sm:text-base">
                      Fotografia profissional para eventos com energia, estrutura e entrega que continua gerando valor depois do evento.
                    </p>
                  </div>
                </div>

                <div className="rounded-[28px] border border-white/10 bg-black/35 px-5 py-4 text-sm backdrop-blur-md">
                  <p className="text-xs font-semibold uppercase tracking-[0.2em] text-white/45">
                    Atendimento
                  </p>
                  <p className="mt-2 font-semibold text-white">Eventos corporativos, sociais e esportivos</p>
                  <div className="mt-3 flex items-center gap-2 text-white/68">
                    <MapPin size={16} weight="fill" />
                    <span>Brasil, com operação sob demanda</span>
                  </div>
                </div>
              </div>

              <div className="grid gap-3 sm:grid-cols-3">
                {highlights.map((item) => (
                  <div
                    key={item}
                    className="rounded-3xl border border-white/10 bg-white/5 px-4 py-4 text-sm font-medium text-white/78"
                  >
                    {item}
                  </div>
                ))}
              </div>

              <div className="grid gap-3 sm:grid-cols-2">
                {quickActions.map((action) => {
                  const Icon = action.icon;

                  return (
                    <Link
                      key={action.label}
                      href={action.href}
                      target={action.href.startsWith("http") || action.href.startsWith("mailto") ? "_blank" : undefined}
                      rel={action.href.startsWith("http") ? "noreferrer" : undefined}
                      className={`inline-flex items-center justify-between rounded-3xl border px-5 py-4 text-sm font-semibold transition duration-300 hover:-translate-y-0.5 ${
                        action.primary
                          ? "border-accent bg-accent text-black hover:bg-accent-strong"
                          : "border-white/10 bg-black/30 text-white hover:border-accent hover:bg-white/8"
                      }`}
                    >
                      <span className="flex items-center gap-3">
                        <Icon size={18} weight="fill" />
                        {action.label}
                      </span>
                      <ArrowRight size={18} weight="bold" />
                    </Link>
                  );
                })}
              </div>
            </div>
          </div>
        </section>

        <section className="mt-8 grid gap-4 md:grid-cols-[0.95fr_1.05fr]">
          <div className="rounded-4xl border border-white/10 bg-[#111111] p-6">
            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-accent">
              Proposta de valor
            </p>
            <h2 className="mt-4 text-2xl font-semibold leading-tight">
              Seu evento não precisa terminar quando a última luz se apaga.
            </h2>
            <p className="mt-4 text-sm leading-7 text-white/68">
              A Na Lente registra, seleciona e entrega imagens com cuidado para transformar momentos em memória, material de divulgação e percepção de valor para quem organiza.
            </p>
          </div>

          <div className="rounded-4xl border border-white/10 bg-white p-6 text-black">
            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[#ff6b00]">
              Contato rápido
            </p>
            <div className="mt-5 space-y-4 text-sm">
              <div className="rounded-4xl border border-black/10 bg-[#f7f7f7] px-4 py-4">
                <p className="font-semibold">WhatsApp</p>
                <p className="mt-1 text-[#555555]">(11) 95446-2390</p>
              </div>
              <div className="rounded-4xl border border-black/10 bg-[#f7f7f7] px-4 py-4">
                <p className="font-semibold">Instagram</p>
                <p className="mt-1 text-[#555555]">@vcnalente.fotos</p>
              </div>
              <div className="rounded-4xl border border-black/10 bg-[#f7f7f7] px-4 py-4">
                <p className="font-semibold">E-mail</p>
                <p className="mt-1 text-[#555555]">comercial@nalentefotos.com.br</p>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
