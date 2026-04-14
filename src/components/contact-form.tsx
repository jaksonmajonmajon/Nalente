'use client';

import { Button } from "@/components/ui/button";

export function ContatoForm() {
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const form = e.currentTarget;

    const nome = (form.nome as HTMLInputElement).value;
    const empresa = (form.empresa as HTMLInputElement).value;
    const email = (form.email as HTMLInputElement).value;
    const telefone = (form.telefone as HTMLInputElement).value;
    const data = (form.data as HTMLInputElement).value;
    const local = (form.local as HTMLInputElement).value;
    const mensagem = (form.mensagem as HTMLTextAreaElement).value;

    const texto =`📸 *Novo contato - Site* 
    
👤 *Nome:* ${nome} 
🏢 *Evento:* ${empresa} 
📧 *Email:* ${email}
📱 *Telefone:* ${telefone} 
📅 *Data:* ${data} 
📍 *Local:* ${local}

📝 *Mensagem:* 
${mensagem}`;

    const numero = "5511954462390";

    const url = `https://wa.me/${numero}?text=${encodeURIComponent(texto)}`;

    window.open(url, "_blank");
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="bg-neutral-50 rounded-4xl border border-neutral-200 p-6 grid gap-4 text-neutral-400"
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
              type="date"
              className="w-full rounded-2xl border border-neutral-200 bg-white px-4 py-3 text-sm"
              placeholder="Data do evento"
              name="data"
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
