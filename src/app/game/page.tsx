import type { Metadata } from "next";

import { QuizGame } from "@/components/game/QuizGame";
import { Container, Eyebrow } from "@/components/ui/primitives";

export const metadata: Metadata = {
  title: "Тренажёр",
  description:
    "Двенадцать вопросов по непрерывности: типы разрывов, пределы, параметры в кусочных функциях и теоремы о существовании корня. С объяснением после каждого ответа.",
};

export default function GamePage() {
  return (
    <Container className="py-10 sm:py-14">
      <header className="max-w-3xl">
        <Eyebrow>Тренажёр</Eyebrow>
        <h1 className="mt-2 font-serif text-4xl leading-tight font-semibold tracking-tight sm:text-5xl">
          Двенадцать вопросов по непрерывности
        </h1>
        <p className="mt-4 text-[17px] leading-relaxed text-ink-soft">
          Проверьте, различаете ли вы устранимый разрыв, скачок и второй род. После каждого ответа
          будет объяснение — можно сразу понять, где ошибка.
        </p>
      </header>

      <div className="mt-8 max-w-4xl">
        <QuizGame />
      </div>

      <p className="mt-6 max-w-3xl text-xs leading-relaxed text-ink-faint">
        Вопросы составлены по задачам сайта. Баллы и рекорд хранятся только в вашем браузере.
      </p>
    </Container>
  );
}
