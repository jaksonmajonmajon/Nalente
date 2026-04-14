import { Camera, ImagesSquare, Strategy, Timer } from "@phosphor-icons/react/dist/ssr";

const steps = [
  {
    title: "Planejamento com visão de evento",
    description:
      "Mapeamos momentos-chave, fluxo do público, necessidades do organizador e oportunidades de registro.",
    icon: Strategy,
  },
  {
    title: "Cobertura com presença e discrição",
    description:
      "Nossa equipe registra emoção, bastidores e pontos de atenção sem atrapalhar a experiência do público.",
    icon: Camera,
  },
  {
    title: "Curadoria e organização pós-evento",
    description:
      "Selecionamos, tratamos e organizamos o material para facilitar divulgação, memória e acesso às fotos.",
    icon: ImagesSquare,
  },
  {
    title: "Entrega ágil e pronta para gerar valor",
    description:
      "O evento continua rendendo com imagens profissionais para participantes, marcas e comunicação.",
    icon: Timer,
  },
];

export function Steps() {
  return (
    <section className="section-shell bg-[#0a0a0a] py-24 text-white">
      <div className="mx-auto max-w-7xl px-6">
        <div className="max-w-3xl">
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-accent">
            Como funciona
          </p>
          <h2 className="mt-4 text-3xl font-semibold leading-tight sm:text-5xl">
            Estrutura profissional para entregar impacto sem complicar sua operação.
          </h2>
          <p className="mt-5 max-w-2xl text-base leading-7 text-white/68">
            A NA LENTE entra no evento com método, leitura de ambiente e agilidade. Isso nos permite registrar melhor, organizar melhor e entregar uma experiência mais valiosa para quem promove.
          </p>
        </div>

        <div className="mt-14 grid gap-5 md:grid-cols-2 xl:grid-cols-4">
          {steps.map((step, index) => {
            const Icon = step.icon;

            return (
              <div
                key={step.title}
                className="frame-line rounded-[30px] border border-white/10 bg-white/5 p-6 transition duration-300 hover:-translate-y-1 hover:border-accent/40 hover:bg-white/[0.075]"
              >
                <div className="flex items-center justify-between">
                  <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-accent text-black">
                    <Icon size={22} weight="fill" />
                  </span>
                  <span className="text-sm font-semibold uppercase tracking-[0.16em] text-white/30">
                    0{index + 1}
                  </span>
                </div>
                <h3 className="mt-6 text-xl font-semibold text-white">{step.title}</h3>
                <p className="mt-3 text-sm leading-6 text-white/68">{step.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
