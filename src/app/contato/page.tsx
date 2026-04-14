
import Link from "next/link";
import { ContatoForm } from "@/components/contact-form";

export const metadata = {
  title: "Contato",
  description:
    "Fale com nossa equipe e solicite uma cobertura fotográfica calorosa e organizada para seu evento.",
  openGraph: {
    title: "Contato Nalente Studio",
    description:
      "Solicite uma proposta e conte com um olhar atento aos detalhes.",
  },
};

export default function ContatoPage() {
  return (
    <div className="bg-white">
      <section className="mx-auto max-w-6xl px-6 py-20">
        <div className="grid gap-10 md:grid-cols-[1.1fr_1fr]">
          <div>
            <p className="pt-7 text-sm font-semibold uppercase tracking-[0.2em] text-neutral-500">
              Contato
            </p>
            <h1 className="mt-3 text-3xl font-semibold text-neutral-900">
              Vamos conversar sobre o seu evento?
            </h1>
            <p className="mt-4 text-sm text-neutral-600">
              Preencha o formulário com os detalhes e retornaremos com uma
              proposta feita sob medida, com carinho e organização.
            </p>
            <div className="mt-6">
              <Link
                href="https://wa.me/5511954462390"
                className="inline-flex items-center rounded-full border border-neutral-200 px-5 py-2 text-sm font-semibold text-neutral-900 transition hover:border-neutral-900"
              >
                Falar com a equipe
              </Link>
            </div>
          </div>
          <div className="pt-7">
          <ContatoForm />
          </div>
        </div>
      </section>
    </div>
  );
}
