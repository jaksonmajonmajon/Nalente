export type PortfolioItem = {
  name: string;
  slug: string;
  location: string;
  date: string;
  coverImage: string;
};

export const portfolioItems: PortfolioItem[] = [
  {
    name: "Casamento Clássico Helena & Rafael",
    slug: "casamentos",
    location: "São Paulo, SP",
    date: "Novembro 2025",
    coverImage: "/images/portfolio/portfolio-1.svg",
  },
  {
    name: "Conferência Tech Vision",
    slug: "corporativos",
    location: "Rio de Janeiro, RJ",
    date: "Outubro 2025",
    coverImage: "/images/portfolio/portfolio-2.svg",
  },
  {
    name: "Formatura Medicina 2025",
    slug: "formaturas",
    location: "Curitiba, PR",
    date: "Agosto 2025",
    coverImage: "/images/portfolio/portfolio-3.svg",
  },
  {
    name: "Festival Aurora",
    slug: "shows",
    location: "Belo Horizonte, MG",
    date: "Julho 2025",
    coverImage: "/images/portfolio/portfolio-4.svg",
  },
  {
    name: "Congresso Health Summit",
    slug: "congressos",
    location: "Brasília, DF",
    date: "Junho 2025",
    coverImage: "/images/portfolio/portfolio-5.svg",
  },
  {
    name: "Circuito Urbano de Corridas",
    slug: "esportivos",
    location: "Florianópolis, SC",
    date: "Maio 2025",
    coverImage: "/images/portfolio/portfolio-6.svg",
  },
];
