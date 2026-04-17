'use client';

import { useState, type FormEvent } from "react";
import { Button } from "@/components/ui/button";

function formatDateForWhatsapp(value: string) {
  if (!value) return "";

  if (/^\d{4}-\d{2}-\d{2}$/.test(value)) {
    const [year, month, day] = value.split("-");
    return `${day}/${month}/${year}`;
  }

  if (/^\d{2}\/\d{2}\/\d{4}$/.test(value)) {
    return value;
  }

  return value;
}

export function ContatoForm() {
  const [dataInputType, setDataInputType] = useState<"text" | "date">("text");
  const [dataValue, setDataValue] = useState("");

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const form = e.currentTarget;

    const nome = (form.nome as HTMLInputElement).value;
    const empresa = (form.empresa as HTMLInputElement).value;
    const email = (form.email as HTMLInputElement).value;
    const telefone = (form.telefone as HTMLInputElement).value;
    const local = (form.local as HTMLInputElement).value;
    const dataRaw = (form.data as HTMLInputElement).value;
    const data = formatDateForWhatsapp(dataRaw);
    const mensagem = (form.mensagem as HTMLTextAreaElement).value;

    const texto =` *Novo contato - Site* 

 *Nome:* ${nome} 
 *Evento:* ${empresa} 
 *Email:* ${email}
 *Telefone:* ${telefone} 
 *Data:* ${data} 
 *Local:* ${local}

 *Mensagem:* 
${mensagem}`;

    const numero = "5511954462390";

    const url = `https://wa.me/${numero}?text=${encodeURIComponent(texto)}`;

    window.open(url, "_blank");
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="bg-neutral-50 rounded-4xl border border-neutral-200 p-6 grid gap-4 text-neutral-500"
    >
            <input
              className="w-full rounded-2xl border border-neutral-200 bg-white px-4 py-3 text-sm"
              placeholder="Seu nome"
              name="nome"
            />
            <input
              className="w-full rounded-2xl border border-neutral-200 bg-white px-4 py-3 text-sm"
              placeholder="Empresa ou nome do evento"
              name="empresa"
            />
            <input
              type="email"
              className="w-full rounded-2xl border border-neutral-200 bg-white px-4 py-3 text-sm"
              placeholder="Seu melhor email"
              name="email"
            />
            <input
              className="w-full rounded-2xl border border-neutral-200 bg-white px-4 py-3 text-sm"
              placeholder="Telefone ou WhatsApp"
              name="telefone"
            />
            <input
              type={dataInputType}
              className="w-full rounded-2xl border border-neutral-200 bg-white px-4 py-3 text-sm"
              placeholder="Data do evento"
              name="data"
              value={dataValue}
              onChange={(e) => setDataValue(e.target.value)}
              onFocus={() => setDataInputType("date")}
              onBlur={() => {
                if (!dataValue) {
                  setDataInputType("text");
                }
              }}
            />
            <input
              className="w-full rounded-2xl border border-neutral-200 bg-white px-4 py-3 text-sm"
              placeholder="Local do evento"
              name="local"
            />
            <textarea
              className="min-h-35 w-full rounded-2xl border border-neutral-200 bg-white px-4 py-3 text-sm"
              placeholder="Conte um pouco sobre o evento"
              name="mensagem"
            />
            <Button type="submit" size="lg">
              Enviar e conversar
            </Button>
    </form>
  );
}
