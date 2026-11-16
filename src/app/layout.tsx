import type { Metadata, Viewport } from "next";

import { SiteFooter, SiteHeader } from "@/components/site/chrome";

import "katex/dist/katex.min.css";
import "./globals.css";

export const metadata: Metadata = {
  title: {
    default: "Непрерывность функции — теория и разборы задач",
    template: "%s — Непрерывность",
  },
  description:
    "Предел, односторонние пределы и три типа разрывов: восемь разделов теории и двенадцать задач с пошаговыми решениями для первого семестра матанализа.",
  keywords: [
    "математический анализ",
    "непрерывность функции",
    "точки разрыва",
    "предел функции",
    "первый семестр",
    "устранимый разрыв",
    "скачок",
  ],
  openGraph: {
    title: "Непрерывность функции — теория и разборы задач",
    description:
      "Восемь разделов теории и двенадцать разборов: от классификации разрывов до теоремы Больцано–Коши.",
    locale: "ru_RU",
    type: "website",
  },
};

export const viewport: Viewport = {
  themeColor: "#f6f4ee",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="ru" className="h-full" data-scroll-behavior="smooth">
      <body className="flex min-h-full flex-col bg-paper text-ink antialiased">
        <a
          href="#content"
          className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-50 focus:rounded-md focus:bg-accent focus:px-4 focus:py-2 focus:text-sm focus:text-paper"
        >
          К содержанию
        </a>
        <SiteHeader />
        <main id="content" className="flex-1">
          {children}
        </main>
        <SiteFooter />
      </body>
    </html>
  );
}
