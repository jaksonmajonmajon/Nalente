import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import "./globals.css";
import { Footer } from "@/components/Footer";
import { Navbar } from "@/components/Navbar";

const montserrat = Montserrat({
  subsets: ["latin"],
  variable: "--font-montserrat",
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "NA LENTE | Fotografia profissional para eventos",
    template: "%s | NA LENTE",
  },
  description:
    "Fotografia profissional para eventos com operação organizada, entrega ágil e imagens que prolongam o valor da experiência.",
  openGraph: {
    title: "NA LENTE | Fotografia profissional para eventos",
    description:
      "Cobertura fotográfica para eventos com energia, organização e memória de marca.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body className={`${montserrat.variable} bg-background font-sans text-foreground antialiased`}>
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
