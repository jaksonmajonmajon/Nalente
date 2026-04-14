'use client'

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import logoImg from "../../public/images/Logotipo.png";
import { ArrowRight, List, X } from "@phosphor-icons/react";

const navLinks = [
  { href: "/", label: "Início" },
  { href: "/eventos", label: "Eventos" },
  { href: "/galeria", label: "Galeria" },
  { href: "/contato", label: "Contato" },
];

export function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 24);

    handleScroll();
    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <motion.header
        initial={{ y: -32, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
        className={`fixed inset-x-0 top-0 z-50 px-4 transition-all duration-300 sm:px-6 ${
          scrolled ? "pt-3" : "pt-5"
        } ${open ? "pointer-events-none opacity-0" : ""}`}
      >
        <nav
          className={`mx-auto flex max-w-7xl items-center justify-between rounded-full border px-4 py-3 transition-all duration-300 sm:px-6 ${
            scrolled
              ? "border-white/12 bg-black/82 shadow-[0_18px_55px_rgba(0,0,0,0.45)] backdrop-blur-xl"
              : "border-white/10 bg-black/52 backdrop-blur-md"
          }`}
        >
          <Link href="/" className="flex items-center gap-3">
            <div className="p-2">
              <Image
                src={logoImg}
                alt="Logo NA LENTE"
                width={92}
                height={32}
                className="h-7 w-auto sm:h-8"
                priority
              />
            </div>
            <div className="hidden sm:block">
              <p className="text-[10px] font-semibold uppercase tracking-[0.28em] text-white/45">
                Fotografia para eventos
              </p>
              <p className="text-sm font-semibold text-white">Energia com estrutura</p>
            </div>
          </Link>

          <div className="hidden items-center gap-7 md:flex">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-sm font-medium text-white/68 transition-colors hover:text-accent"
              >
                {link.label}
              </Link>
            ))}
          </div>

          <div className="hidden md:flex">
            <Link
              href="/contato"
              className="inline-flex items-center gap-2 rounded-full border border-accent bg-accent px-5 py-3 text-xs font-semibold uppercase tracking-[0.12em] text-black transition hover:-translate-y-0.5 hover:bg-accent-strong"
            >
              Solicitar proposta
              <ArrowRight size={16} weight="bold" />
            </Link>
          </div>

          <button
            type="button"
            aria-label="Abrir menu"
            className="rounded-full border border-white/12 bg-white/5 p-2 text-white transition hover:border-accent hover:text-accent md:hidden"
            onClick={() => setOpen(true)}
          >
            <List size={22} />
          </button>
        </nav>
      </motion.header>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="fixed inset-0 z-50 bg-black/94 px-6 py-5 backdrop-blur-xl"
          >
            <div className="mx-auto flex h-full max-w-2xl flex-col rounded-4xl border border-white/10 bg-white/5 p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-xs font-semibold uppercase tracking-[0.22em] text-white/40">
                    NA LENTE
                  </p>
                  <p className="mt-1 text-lg font-semibold text-white">
                    Fotografia que prolonga o valor do evento
                  </p>
                </div>
                <button
                  type="button"
                  aria-label="Fechar menu"
                  className="rounded-full border border-white/12 p-2 text-white transition hover:border-accent hover:text-accent"
                  onClick={() => setOpen(false)}
                >
                  <X size={22} />
                </button>
              </div>

              <div className="mt-12 flex flex-1 flex-col justify-center gap-5">
                {navLinks.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    className="rounded-3xl border border-white/10 bg-black/30 px-5 py-4 text-lg font-semibold text-white transition hover:border-accent hover:bg-accent hover:text-black"
                    onClick={() => setOpen(false)}
                  >
                    {link.label}
                  </Link>
                ))}
              </div>

              <Link
                href="/contato"
                className="inline-flex items-center justify-center gap-2 rounded-full border border-accent bg-accent px-5 py-4 text-sm font-semibold uppercase tracking-[0.12em] text-black transition hover:bg-accent-strong"
                onClick={() => setOpen(false)}
              >
                Solicitar proposta
                <ArrowRight size={18} weight="bold" />
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
