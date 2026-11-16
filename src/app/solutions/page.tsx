import type { Metadata } from "next";
import Link from "next/link";

import { PrintButton } from "@/components/solutions/PrintButton";
import { SolutionCard } from "@/components/solutions/SolutionCard";
import { RichMath } from "@/components/ui/math";
import { Badge, Container, Eyebrow } from "@/components/ui/primitives";
import { tasks } from "@/content/tasks";
import { theoryById } from "@/content/theory";

export const metadata: Metadata = {
  title: "Разборы",
  description:
    "Двенадцать разобранных задач на непрерывность: устранимые разрывы, скачки, разрывы второго рода, параметры в кусочных функциях и корни уравнений по теореме о промежуточном значении.",
};

const legend = [
  { label: "Условие", className: "border-line bg-paper" },
  { label: "Ответ", className: "border-accent/25 bg-accent-soft" },
  { label: "Примечание", className: "border-warn-line bg-warn-soft" },
];

export default function SolutionsPage() {
  return (
    <Container className="py-10 sm:py-14">
      <header className="max-w-3xl print:hidden">
        <Eyebrow>Разборы</Eyebrow>
        <h1 className="mt-2 font-serif text-4xl leading-tight font-semibold tracking-tight sm:text-5xl">
          Двенадцать задач с полным решением
        </h1>
        <p className="mt-4 text-[17px] leading-relaxed text-ink-soft">
          Каждая задача разобрана по шагам: что проверяем, какой предел считаем, почему получается
          именно такой тип разрыва. Ответ и примечание выделены отдельно.
        </p>

        <div className="mt-6 flex flex-wrap items-center gap-x-4 gap-y-2">
          {legend.map((item) => (
            <span key={item.label} className="inline-flex items-center gap-2 text-xs text-ink-faint">
              <span className={`h-3 w-3 rounded-sm border ${item.className}`} aria-hidden />
              {item.label}
            </span>
          ))}
          <span className="hidden text-xs text-ink-faint sm:inline">·</span>
          <Link
            href="/theory"
            className="w-full text-xs font-medium text-accent hover:underline sm:w-auto"
          >
            Теория к задачам →
          </Link>
        </div>

        <div className="mt-6 flex flex-wrap items-center gap-3">
          <PrintButton />
          <p className="text-xs leading-relaxed text-ink-faint">
            При печати все свёрнутые разборы раскрываются автоматически.
          </p>
        </div>
      </header>

      <nav aria-label="Задачи" className="mt-8 flex gap-2 overflow-x-auto pb-2 lg:hidden print:hidden">
        {tasks.map((task) => (
          <a
            key={task.n}
            href={`#${task.slug}`}
            className="shrink-0 rounded-full border border-line bg-surface px-3 py-1.5 text-xs whitespace-nowrap text-ink-soft"
          >
            <span className="mr-1.5 font-mono text-[10px] text-ink-faint">
              {String(task.n).padStart(2, "0")}
            </span>
            {task.title}
          </a>
        ))}
      </nav>

      <div className="mt-8 grid gap-12 lg:grid-cols-[230px_1fr] lg:gap-14">
        <aside className="hidden lg:block print:hidden">
          <div className="sticky top-24">
            <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-ink-faint">
              Задачи
            </p>
            <ol className="mt-3 space-y-1">
              {tasks.map((task) => (
                <li key={task.n}>
                  <a
                    href={`#${task.slug}`}
                    className="flex gap-3 rounded-md px-2 py-1.5 transition-colors hover:bg-surface"
                  >
                    <span className="pt-0.5 font-mono text-[10px] text-ink-faint">
                      {String(task.n).padStart(2, "0")}
                    </span>
                    <span className="text-sm leading-snug text-ink-soft">{task.title}</span>
                  </a>
                </li>
              ))}
            </ol>
          </div>
        </aside>

        <div className="min-w-0">
          {tasks.map((task) => {
            const theory = theoryById(task.theory);

            return (
              <section
                key={task.n}
                id={task.slug}
                className="scroll-mt-24 border-t border-line py-10 first:border-t-0 first:pt-0"
              >
                <div className="flex flex-wrap items-start justify-between gap-4">
                  <div className="flex min-w-0 gap-4">
                    <span
                      aria-hidden
                      className="mt-0.5 hidden font-serif text-3xl leading-none font-semibold text-line-strong select-none sm:block"
                    >
                      {String(task.n).padStart(2, "0")}
                    </span>
                    <div className="min-w-0">
                      <div className="flex flex-wrap items-center gap-2">
                        <Eyebrow>Задача {task.n}</Eyebrow>
                        <Badge tone={task.level === "средний" ? "accent" : "neutral"}>
                          {task.level}
                        </Badge>
                      </div>
                      <h2 className="mt-1 font-serif text-2xl font-semibold tracking-tight text-balance sm:text-3xl">
                        {task.title}
                      </h2>
                      <p className="mt-1.5 text-[11px] font-medium uppercase tracking-[0.12em] text-accent">
                        {task.topic}
                      </p>
                      <p className="mt-2 max-w-xl text-sm leading-relaxed text-ink-soft">
                        <RichMath text={task.short} />
                      </p>
                      {theory ? (
                        <Link
                          href={`/theory#${theory.id}`}
                          className="mt-2 inline-flex items-center gap-1.5 text-xs font-medium text-ink-faint underline decoration-line-strong underline-offset-4 transition-colors hover:text-accent"
                        >
                          Теория: {theory.title}
                        </Link>
                      ) : null}
                    </div>
                  </div>
                </div>

                <div className="mt-6">
                  <SolutionCard task={task} defaultOpen={task.n === 1} />
                </div>
              </section>
            );
          })}
        </div>
      </div>
    </Container>
  );
}
