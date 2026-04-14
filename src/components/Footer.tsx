import Link from "next/link";

const navLinks = [
  { href: "/", label: "Início" },
  { href: "/eventos", label: "Eventos" },
  { href: "/portfolio", label: "Portfólio" },
  { href: "/galeria", label: "Galeria" },
  { href: "/organizadores", label: "Organizadores" },
  { href: "/contato", label: "Contato" },
];

const highlights = [
  "Cobertura com energia de evento e direção profissional",
  "Seleção, tratamento e entrega organizados com agilidade",
  "Memória, percepção de valor e conteúdo que continua circulando",
];

export function Footer() {
  return (
    <footer className="section-shell border-t border-white/10 bg-black text-white">
      <div className="mx-auto grid max-w-7xl gap-10 px-6 py-16 lg:grid-cols-[1.25fr_0.8fr_0.85fr]">
        <div className="space-y-6">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-accent">
              Na Lente
            </p>
            <h2 className="mt-3 max-w-xl text-3xl font-semibold leading-tight text-white">
              Seu evento continua gerando presença, lembrança e valor mesmo depois do encerramento.
            </h2>
          </div>
          <div className="grid gap-3">
            {highlights.map((item) => (
              <div
                key={item}
                className="rounded-3xl border border-white/10 bg-white/5 px-4 py-4 text-sm text-white/72"
              >
                {item}
              </div>
            ))}
          </div>
        </div>

        <div className="space-y-4">
          <p className="text-sm font-semibold uppercase tracking-[0.18em] text-white/45">
            Navegação
          </p>
          <div className="flex flex-col gap-3 text-sm">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-white/70 transition-colors hover:text-accent"
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>

        <div className="space-y-4">
          <p className="text-sm font-semibold uppercase tracking-[0.18em] text-white/45">
            Contato
          </p>
          <div className="space-y-3 text-sm text-white/70 flex flex-col">

            <a href="https://wa.me/5511954462390" target="_blank" rel="noopener noreferrer" className="text-white/70 transition-colors hover:text-accent">
              WhatsApp: (11) 95446-2390
            </a>
            <a href="https://www.instagram.com/" target="_blank" rel="noopener noreferrer" className="text-white/70 transition-colors hover:text-accent">
              Instagram: @nalentefotos
            </a>
            <a href="mailto:contato@nalente.com.br" className="text-white/70 transition-colors hover:text-accent">
              Email: contato@nalente.com.br
            </a>
            <p className="rounded-4xl border border-accent/30 bg-accent/10 px-4 py-4 text-white">
              Atendimento pensado para eventos que precisam de imagem forte, operação fluida e entrega profissional.
            </p>
          </div>
        </div>
      </div>

      <div className="border-t border-white/10 px-6 py-5 text-center text-xs uppercase tracking-[0.18em] text-white/35">
        © 2026 Na Lente. Todos os direitos reservados.
      </div>
    </footer>
  );
}
