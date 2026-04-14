export type EventGalleryImage = {
  src: string;
  alt: string;
};

export type EventData = {
  name: string;
  slug: string;
  shortDescription: string;
  description: string;
  coverImage: string;
  gallery: EventGalleryImage[];
};

export const eventos: EventData[] = [
  {
    name: "Culturais & Festivais",
    slug: "culturais-festivais",
    shortDescription:
      "Cobertura vibrante de eventos que celebram tradição, cultura e identidade.",
    description:
      "Registramos festas culturais e festivais com foco em cores, expressões e autenticidade, valorizando cada detalhe que representa a essência do evento.",
    coverImage: "/images/eventos/culturais-cover.jpg",
    gallery: [
      { src: "/images/galeria/festivais1.avif", alt: "Festa cultural com danças típicas" },
      { src: "/images/galeria/festivais2.jpg", alt: "Apresentação folclórica" },
      { src: "/images/galeria/festivais3.webp", alt: "Decoração temática" },
      { src: "/images/galeria/festivais4.jpg", alt: "Público em festival" },
      { src: "/images/galeria/festivais5.jpeg", alt: "Detalhes culturais" },
      { src: "/images/galeria/festivais6.jpg", alt: "Evento tradicional brasileiro" },
    ],
  },

  {
    name: "Esportivos & Performance",
    slug: "esportivos-performance",
    shortDescription:
      "Captura precisa de ação, intensidade e momentos decisivos.",
    description:
      "Cobertura dinâmica de eventos esportivos, com foco em movimento, emoção e registros no momento exato da ação.",
    coverImage: "/images/eventos/esportivos-cover.webp",
    gallery: [
      { src: "/images/galeria/esportivos1.jpg", alt: "Corrida de rua" },
      { src: "/images/galeria/esportivos2.webp", alt: "Jogo de futebol" },
      { src: "/images/galeria/esportivos3.jpg", alt: "Competição esportiva" },
      { src: "/images/galeria/esportivos4.jpg", alt: "Atleta em ação" },
      { src: "/images/galeria/esportivos5.avif", alt: "Evento esportivo coletivo" },
      { src: "/images/galeria/esportivos6.jpeg", alt: "Momento decisivo" },
    ],
  },

  {
    name: "Corporativos & Acadêmicos",
    slug: "corporativos-academicos",
    shortDescription:
      "Cobertura profissional para eventos institucionais e educacionais.",
    description:
      "Registramos eventos corporativos e acadêmicos com foco em credibilidade, organização e fortalecimento da imagem institucional.",
    coverImage: "/images/eventos/corporativos-cover.webp",
    gallery: [
      { src: "/images/galeria/corporativos1.webp", alt: "Palestra corporativa" },
      { src: "/images/galeria/corporativos2.jpg", alt: "Evento institucional" },
      { src: "/images/galeria/corporativos3.jpg", alt: "Formatura" },
      { src: "/images/galeria/corporativos4.jpeg", alt: "Auditório com público" },
      { src: "/images/galeria/corporativos5.webp", alt: "Apresentação profissional" },
      { src: "/images/galeria/corporativos6.jpg", alt: "Evento educacional" },
    ],
  },

  {
    name: "Entretenimento & Grandes Eventos",
    slug: "entretenimento-grandes-eventos",
    shortDescription:
      "Cobertura de eventos de grande público com energia e impacto visual.",
    description:
      "Captamos a atmosfera, emoção e experiência coletiva de grandes eventos, destacando público, shows e momentos marcantes.",
    coverImage: "/images/eventos/entretenimento-cover.webp",
    gallery: [
      { src: "/images/galeria/eventos1.jpeg", alt: "Show ao vivo" },
      { src: "/images/galeria/eventos3.jpg", alt: "Multidão em evento" },
      { src: "/images/galeria/eventos4.jpg", alt: "Palco iluminado" },
      { src: "/images/galeria/eventos5.webp", alt: "Festival noturno" },
      { src: "/images/galeria/eventos6.webp", alt: "Público animado" },
      { src: "/images/galeria/eventos7.webp", alt: "Grande evento ao ar livre" },
    ],
  },

  {
    name: "Lifestyle",
    slug: "lifestyle",
    shortDescription:
      "Registros leves e naturais de experiências e momentos especiais.",
    description:
      "Cobertura de eventos voltados ao bem-estar, lazer e conexões humanas, com foco em espontaneidade e emoção.",
    coverImage: "/images/eventos/lifestyle-cover.jpg",
    gallery: [
      { src: "/images/galeria/entreterimento1.jpg", alt: "Evento pet" },
      { src: "/images/galeria/entreterimento2.jpg", alt: "Passeio turístico" },
      { src: "/images/galeria/entreterimento3.jpg", alt: "Crianças em atividade" },
      { src: "/images/galeria/entreterimento4.webp", alt: "Família em evento" },
      { src: "/images/galeria/entreterimento5.jpg", alt: "Experiência ao ar livre" },
      { src: "/images/galeria/entreterimento6.jpg", alt: "Momento espontâneo" },
    ],
  },

  {
    name: "Automobilístico & Técnicos",
    slug: "automobilistico-tecnicos",
    shortDescription:
      "Cobertura de eventos de velocidade, tecnologia e alta performance.",
    description:
      "Registramos eventos automobilísticos com foco em detalhes, potência e estética, valorizando cada momento técnico e visual.",
    coverImage: "/images/eventos/automobilistico-cover.jpg",
    gallery: [
      { src: "/images/galeria/esportivos6.jpeg", alt: "Corrida de carros" },
      { src: "/images/galeria/esportivos9.jpeg", alt: "Moto em alta velocidade" },
      { src: "/images/galeria/esportivos11.jpg", alt: "Exposição automotiva" },
      { src: "/images/galeria/esportivos22.jpg", alt: "Detalhe de veículo" },
      { src: "/images/galeria/esportivos24.jpg", alt: "Evento automotivo" },
      { src: "/images/galeria/esportivos26.jpg", alt: "Competição automobilística" },
    ],
  },
];
