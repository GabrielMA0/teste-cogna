import type { Metadata } from "next";
import { Inter, Roboto } from 'next/font/google'
import { Header, Footer } from "@/components/index";
import "./globals.css";

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter'
})

const roboto = Roboto({
  subsets: ['latin'],
  variable: '--font-roboto'
})

export const metadata: Metadata = {
  title: "Cogna Educação",
  description: "Teste de front-end para vaga de desenvolvedor na Cogna Educação",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="pt-BR"
      className="h-full"
    >
      <body className={`${inter.variable} ${roboto.variable}`}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
