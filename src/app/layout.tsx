import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';

// Configuração da fonte 'Inter' do Google Fonts.
// O next/font otimiza o carregamento de fontes para melhor performance.
const inter = Inter({ subsets: ['latin'] });

// Metadados do site: informações usadas pelo navegador e por motores de busca (SEO).
export const metadata: Metadata = {
  title: 'NeuroFlow™ Coffee | Seu Café, Sua Mente. Em Perfeita Sintonia.',
  description: 'O café especial com nootrópicos para foco, clareza mental e energia sem ansiedade. Transforme sua produtividade com NeuroFlow™.',
};

// Este é o componente Layout principal.
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-br">
      {/* A classe da fonte 'inter' é aplicada a todo o corpo do site. */}
      <body className={inter.className}>
        {/* 'children' representa o conteúdo da página que será renderizada aqui dentro (no nosso caso, o page.tsx). */}
        {children}
      </body>
    </html>
  );
}