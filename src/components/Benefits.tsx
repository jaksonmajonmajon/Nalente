import { CurrencyCircleDollar, MegaphoneSimple, Sparkle, UsersThree } from "@phosphor-icons/react/dist/ssr";

const benefits = [
  {
    title: "Mais percepção de valor",
    description:
      "Seu evento passa a ser lembrado como uma experiência bem produzida, bem registrada e digna de ser compartilhada.",
    icon: Sparkle,
  },
  {
    title: "Conteúdo que continua circulando",
    description:
      "As imagens alimentam divulgação, relacionamento com o público, lembrança de marca e novos convites.",
    icon: MegaphoneSimple,
  },
  {
    title: "Experiência melhor para participantes",
    description:
      "As pessoas saem do evento levando mais do que a memória do momento: levam registros com qualidade real.",
    icon: UsersThree,
  },
  {
    title: "Potencial de receita complementar",
    description:
      "Quando o formato fizer sentido, a fotografia também se transforma em oportunidade comercial adicional.",
    icon: CurrencyCircleDollar,
  },
];

export function Benefits() {
  return (
    <section className="section-shell bg-white py-24 text-black">
      <div className="mx-auto grid max-w-7xl gap-12 px-6 lg:grid-cols-[0.9fr_1.1fr]">
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-[#ff6b00]">
            Benefícios
          </p>
          <h2 className="mt-4 text-3xl font-semibold leading-tight text-black sm:text-5xl">
            A fotografia deixa de ser só registro e passa a ampliar o valor do evento.
          </h2>
          <p className="mt-5 max-w-xl text-base leading-7 text-[#444444]">
            Quando a cobertura é bem pensada, ela fortalece a memória, melhora a percepção do público, cria ativos para divulgação e mostra mais profissionalismo para patrocinadores, marcas e organizadores.
          </p>

          <div className="mt-8 rounded-4xl border border-black/10 bg-[#111111] p-7 text-white shadow-[0_28px_70px_rgba(0,0,0,0.12)]">
            <p className="text-xs font-semibold uppercase tracking-[0.24em] text-accent">
              Proposta central
            </p>
            <p className="mt-4 text-2xl font-semibold leading-tight">
              Eventos perdem impacto quando acabam. A NA LENTE prolonga esse valor com imagem, organização e presença.
            </p>
          </div>
        </div>

        <div className="grid gap-5 md:grid-cols-2">
          {benefits.map((benefit) => {
            const Icon = benefit.icon;

            return (
              <div
                key={benefit.title}
                className="rounded-[30px] border border-black/10 bg-[#fff7f2] p-6 transition duration-300 hover:-translate-y-1 hover:border-[#ff6b00]/35 hover:shadow-[0_24px_50px_rgba(255,107,0,0.12)]"
              >
                <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#ff6b00] text-black">
                  <Icon size={22} weight="fill" />
                </span>
                <h3 className="mt-6 text-xl font-semibold text-black">{benefit.title}</h3>
                <p className="mt-3 text-sm leading-6 text-[#444444]">{benefit.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
