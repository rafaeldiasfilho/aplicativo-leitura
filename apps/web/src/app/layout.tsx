import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { SiteNav } from "@/components/site-nav";

// Aplica o tema salvo antes da primeira pintura, evitando flash. Tag <script>
// nativa inline no início do <body> (HTML válido, sem erro de hidratação).
const themeInit = `try{var t=localStorage.getItem('theme')||'system';document.documentElement.setAttribute('data-theme',t);}catch(e){}`;

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "o aplicativo",
  description: "Uma memória de leitura calma, organizada e pessoal.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="pt-BR"
      suppressHydrationWarning
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col font-sans bg-background text-foreground">
        <script dangerouslySetInnerHTML={{ __html: themeInit }} />
        <SiteNav />
        <div className="flex flex-1 flex-col pb-14 md:pb-0">{children}</div>
      </body>
    </html>
  );
}
