import Link from "next/link";

import { DiscontinuityFigure } from "@/components/ui/Diagrams";
import { RichMath } from "@/components/ui/math";
import { Badge, Container, Eyebrow, FormulaBlock, Section } from "@/components/ui/primitives";
import { tasks } from "@/content/tasks";
import { theory } from "@/content/theory";

const steps = [
  {
    n: "01",
    title: "Найдите подозрительные точки",
    text: "Точки разрыва возможны там, где функция не определена: нули знаменателя, границы кусочных формул, аргументы, уходящие в бесконечность.",
  },
  {
    n: "02",
    title: "Считайте пределы слева и справа",
    text: String.raw`Отдельно $x\to a-0$ и $x\to a+0$. Тип разрыва определяется именно этими двумя числами, а не значением функции в точке.`,
  },
  {
    n: "03",
    title: "Сверьтесь с типом разрыва",
    text: "Совпали и конечны — устранимый разрыв. Конечны, но различны — скачок. Есть бесконечность — второй род.",
  },
];

const limits = [
  { label: "Первый замечательный", tex: String.raw`\lim_{x\to0}\frac{\sin x}{x}=1` },
  { label: "Синус и тангенс", tex: String.raw`\sin x\sim x,\qquad \tan x\sim x` },
  { label: "Косинус", tex: String.raw`1-\cos x\sim \frac{x^2}{2}` },
  {
    label: "Экспонента и логарифм",
    tex: String.raw`e^x-1\sim x,\qquad \ln(1+x)\sim x`,
  },
];

export default function Home() {
  return (
    <>
      <section className="paper-grid border-b border-line bg-surface/40">
        <Container className="grid items-center gap-10 py-12 sm:py-16 lg:grid-cols-[1.1fr_0.9fr] lg:gap-14 lg:py-20">
          <div>
            <div className="flex flex-wrap items-center gap-2">
              <Badge tone="accent">Матанализ · 1 семестр</Badge>
              <Badge>12 задач с решением</Badge>
            </div>

            <h1 className="mt-5 max-w-2xl font-serif text-4xl leading-[1.08] font-semibold tracking-tight text-balance sm:text-5xl lg:text-[3.4rem]">
              Непрерывность функции: теория и разборы задач
            </h1>

            <p className="mt-5 max-w-xl text-[17px] leading-relaxed text-ink-soft">
              Предел, односторонние пределы и три типа разрывов — на конкретных примерах.
              Восемь разделов теории и двенадцать задач с пошаговыми решениями: можно быстро
              вспомнить правило и сразу проверить себя.
            </p>

            <div className="mt-7 flex flex-col gap-3 sm:flex-row">
              <Link
                href="/solutions"
                className="inline-flex items-center justify-center gap-2 rounded-lg bg-accent px-5 py-3 text-sm font-semibold text-paper transition-colors hover:bg-accent-ink focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent"
              >
                Перейти к разборам
                <span aria-hidden>→</span>
              </Link>
              <Link
                href="/theory"
                className="inline-flex items-center justify-center gap-2 rounded-lg border border-line-strong bg-surface px-5 py-3 text-sm font-semibold text-ink transition-colors hover:border-accent/40 hover:text-accent-ink"
              >
                Сначала теория
              </Link>
            </div>

            <dl className="mt-9 grid max-w-lg grid-cols-3 gap-4 border-t border-line pt-6 sm:[&>div+div]:border-l sm:[&>div+div]:border-line/70 sm:[&>div+div]:pl-4">
              {[
                { value: String(tasks.length), label: "задач с решением" },
                { value: String(theory.length), label: "разделов теории" },
                { value: "3", label: "типа разрывов" },
              ].map((stat) => (
                <div key={stat.label}>
                  <dt className="sr-only">{stat.label}</dt>
                  <dd>
                    <span className="block font-serif text-2xl font-semibold text-ink sm:text-3xl">
                      {stat.value}
                    </span>
                    <span className="mt-1 block text-xs leading-snug text-ink-faint">
                      {stat.label}
                    </span>
                  </dd>
                </div>
              ))}
            </dl>
          </div>

          <figure className="rounded-2xl border border-line bg-surface p-4 shadow-[0_1px_0_rgba(23,20,15,0.04),0_18px_40px_-32px_rgba(23,20,15,0.35)] sm:p-6">
            <DiscontinuityFigure />
            <figcaption className="mt-3 border-t border-line pt-3 text-xs leading-relaxed text-ink-faint">
              Три типа разрыва: устранимый (предел существует), скачок (пределы конечны, но
              различны) и второй род (хотя бы один предел бесконечен или не существует).
            </figcaption>
          </figure>
        </Container>
      </section>

      <Section>
        <Container>
          <div className="grid gap-8 lg:grid-cols-[0.8fr_1.2fr] lg:gap-14">
            <div>
              <Eyebrow>Порядок действий</Eyebrow>
              <h2 className="mt-2 font-serif text-3xl font-semibold tracking-tight sm:text-4xl">
                Как разбирать любую точку разрыва
              </h2>
              <p className="mt-4 text-[15px] leading-relaxed text-ink-soft">
                Одна и та же схема подходит для дробей, кусочных функций и параметров. Главное —
                не подставлять значение в точку вслепую.
              </p>
            </div>

            <ol className="relative space-y-6 before:absolute before:top-2 before:bottom-2 before:left-[1.125rem] before:w-px before:bg-line">
              {steps.map((step) => (
                <li key={step.n} className="grid grid-cols-[2.25rem_1fr] gap-x-4">
                  <span className="relative grid h-9 w-9 place-items-center rounded-full border border-accent/20 bg-accent-soft font-mono text-xs text-accent-ink">
                    {step.n}
                  </span>
                  <div>
                    <h3 className="text-sm font-semibold text-ink">{step.title}</h3>
                    <p className="mt-1 text-[15px] leading-relaxed text-ink-soft">
                      <RichMath text={step.text} />
                    </p>
                  </div>
                </li>
              ))}
            </ol>
          </div>
        </Container>
      </Section>

      <Section id="tasks" className="border-y border-line bg-surface/50">
        <Container>
          <div className="max-w-2xl">
            <Eyebrow>Задачи</Eyebrow>
            <h2 className="mt-2 font-serif text-3xl font-semibold tracking-tight sm:text-4xl">
              Двенадцать задач с решениями
            </h2>
            <p className="mt-3 text-[15px] leading-relaxed text-ink-soft">
              От классификации разрывов до параметров и теорем о существовании корня. Порядок
              близок к ходу семестра, поэтому удобно идти сверху вниз.
            </p>
          </div>

          <div className="mt-8 grid gap-4 sm:grid-cols-2">
            {tasks.map((task) => (
              <article
                key={task.n}
                className="group relative flex flex-col rounded-xl border border-line bg-surface p-5 transition duration-200 hover:-translate-y-0.5 hover:border-line-strong hover:shadow-[0_2px_0_rgba(23,20,15,0.03),0_16px_30px_-24px_rgba(23,20,15,0.4)]"
              >
                <div className="flex items-start justify-between gap-4">
                  <span className="grid h-8 w-8 place-items-center rounded-md border border-line bg-paper/80 font-mono text-[11px] text-ink-soft">
                    {String(task.n).padStart(2, "0")}
                  </span>
                  <Badge tone={task.level === "средний" ? "accent" : "neutral"}>
                    {task.level}
                  </Badge>
                </div>

                <h3 className="mt-4 font-serif text-xl font-semibold tracking-tight text-ink">
                  <Link
                    href={`/solutions#${task.slug}`}
                    className="after:absolute after:inset-0 after:rounded-xl after:content-[''] focus-visible:outline-none focus-visible:after:outline-2 focus-visible:after:outline-offset-2 focus-visible:after:outline-accent"
                  >
                    {task.title}
                  </Link>
                </h3>

                <p className="mt-1.5 text-[11px] font-medium uppercase tracking-[0.12em] text-accent">
                  {task.topic}
                </p>

                <p className="mt-2.5 flex-1 text-sm leading-relaxed text-ink-soft">
                  <RichMath text={task.short} />
                </p>

                <div className="mt-5 flex items-center justify-between border-t border-line pt-3">
                  <Link
                    href={`/theory#${task.theory}`}
                    className="relative z-10 text-xs font-medium text-ink-faint underline decoration-line-strong underline-offset-4 transition-colors hover:text-accent"
                  >
                    Теория к задаче
                  </Link>
                  <span className="text-xs font-semibold text-accent">
                    Разбор
                    <span
                      aria-hidden
                      className="ml-0.5 inline-block transition-transform duration-200 group-hover:translate-x-0.5"
                    >
                      →
                    </span>
                  </span>
                </div>
              </article>
            ))}
          </div>
        </Container>
      </Section>

      <Section className="py-4 sm:py-6">
        <Container>
          <div className="grid gap-6 rounded-2xl border border-accent/20 bg-accent-soft/50 p-6 sm:grid-cols-[1fr_auto] sm:items-center sm:p-8">
            <div className="max-w-2xl">
              <Eyebrow>Тренажёр</Eyebrow>
              <h2 className="mt-2 font-serif text-2xl font-semibold tracking-tight sm:text-3xl">
                Проверьте себя за 12 вопросов
              </h2>
              <p className="mt-2 text-[15px] leading-relaxed text-ink-soft">
                Типы разрывов, пределы и параметры — с объяснением после каждого ответа. Рекорд
                сохраняется в браузере.
              </p>
            </div>
            <Link
              href="/game"
              className="inline-flex items-center justify-center gap-2 rounded-lg bg-accent px-5 py-2.5 text-sm font-semibold text-paper transition-colors hover:bg-accent-ink"
            >
              Начать тренажёр
              <span aria-hidden>→</span>
            </Link>
          </div>
        </Container>
      </Section>

      <Section>
        <Container>
          <div className="max-w-2xl">
            <Eyebrow>Шпаргалка</Eyebrow>
            <h2 className="mt-2 font-serif text-3xl font-semibold tracking-tight sm:text-4xl">
              Пределы, которые нужны чаще всего
            </h2>
            <p className="mt-3 text-[15px] leading-relaxed text-ink-soft">
              Если при подстановке получается 0/0, эти эквивалентности часто позволяют обойтись
              одной строкой.
            </p>
          </div>

          <div className="mt-8 grid gap-3 sm:grid-cols-2">
            {limits.map((item) => (
              <div key={item.label} className="rounded-xl border border-line bg-surface p-4">
                <p className="text-[11px] font-semibold uppercase tracking-[0.14em] text-ink-faint">
                  {item.label}
                </p>
                <FormulaBlock lines={[item.tex]} />
              </div>
            ))}
          </div>
        </Container>
      </Section>

      <Section className="border-t border-line">
        <Container>
          <div className="flex flex-col items-start justify-between gap-6 rounded-2xl border border-accent/20 bg-accent-soft/60 px-6 py-8 sm:flex-row sm:items-center sm:px-8">
            <div className="max-w-xl">
              <h2 className="font-serif text-2xl font-semibold tracking-tight text-accent-ink">
                Начните с теории, проверяйте себя по разборам
              </h2>
              <p className="mt-2 text-[15px] leading-relaxed text-accent-ink/80">
                Сначала — короткие разделы с определениями и признаками. Затем — практика на
                дробях, кусочных функциях, параметрах и уравнениях.
              </p>
            </div>
            <div className="flex shrink-0 flex-col gap-2 sm:flex-row">
              <Link
                href="/theory"
                className="inline-flex items-center justify-center rounded-lg bg-accent px-5 py-2.5 text-sm font-semibold text-paper transition-colors hover:bg-accent-ink"
              >
                К теории
              </Link>
              <Link
                href="/solutions"
                className="inline-flex items-center justify-center rounded-lg border border-accent/30 bg-surface px-5 py-2.5 text-sm font-semibold text-accent-ink transition-colors hover:border-accent/60"
              >
                К разборам
              </Link>
            </div>
          </div>
        </Container>
      </Section>
    </>
  );
}
