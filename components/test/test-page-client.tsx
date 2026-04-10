"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { useEffect, useRef, useState, useTransition } from "react";

import { QUESTIONS } from "@/data/questions";
import { createResultSearchParams } from "@/lib/result-generator";
import { calculateQuizResult } from "@/lib/scoring";
import { clearQuizResult, loadQuizSession, resetQuizStorage, saveQuizResult, saveQuizSession } from "@/lib/storage";
import { AnswersMap } from "@/types/quiz";
import { PrimaryButton } from "@/components/shared/primary-button";
import { SiteBadge } from "@/components/shared/site-badge";

export function TestPageClient() {
  const router = useRouter();
  const [answers, setAnswers] = useState<AnswersMap>({});
  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedOptionId, setSelectedOptionId] = useState<string | null>(null);
  const [isPending, startTransition] = useTransition();
  const timeoutRef = useRef<number | null>(null);

  useEffect(() => {
    const session = loadQuizSession();
    if (!session) return;

    const timeoutId = window.setTimeout(() => {
      const firstUnansweredIndex = QUESTIONS.findIndex(
        (question) => !session.answers[question.id],
      );

      startTransition(() => {
        setAnswers(session.answers);
        setCurrentIndex(
          firstUnansweredIndex === -1 ? QUESTIONS.length - 1 : firstUnansweredIndex,
        );
      });
    }, 0);

    return () => window.clearTimeout(timeoutId);
  }, [startTransition]);

  useEffect(() => {
    return () => {
      if (timeoutRef.current) {
        window.clearTimeout(timeoutRef.current);
      }
    };
  }, []);

  const currentQuestion = QUESTIONS[currentIndex];
  const answeredCount = Object.keys(answers).length;

  function handleSelect(optionId: string) {
    if (isPending) return;

    const nextAnswers = {
      ...answers,
      [currentQuestion.id]: optionId,
    };

    setSelectedOptionId(optionId);
    setAnswers(nextAnswers);
    saveQuizSession(nextAnswers);

    timeoutRef.current = window.setTimeout(() => {
      if (currentIndex === QUESTIONS.length - 1) {
        clearQuizResult();
        const result = calculateQuizResult(nextAnswers);
        saveQuizResult(result);
        const params = createResultSearchParams(result);

        startTransition(() => {
          router.push(`/result?${params}`);
        });
      } else {
        startTransition(() => {
          setCurrentIndex((value) => value + 1);
          setSelectedOptionId(null);
        });
      }
    }, 170);
  }

  function handleBack() {
    if (currentIndex === 0 || isPending) return;
    setSelectedOptionId(null);
    startTransition(() => {
      setCurrentIndex((value) => value - 1);
    });
  }

  function handleRestart() {
    const confirmed = window.confirm("重新开始会清空当前答题记录，继续吗？");
    if (!confirmed) return;

    resetQuizStorage();
    setAnswers({});
    setCurrentIndex(0);
    setSelectedOptionId(null);
  }

  return (
    <main className="app-shell min-h-screen px-4 py-5 sm:px-6">
      <div className="mx-auto flex w-full max-w-3xl flex-col gap-4 pb-10">
        <div className="flex items-center justify-between gap-3">
          <div className="flex items-center gap-3">
            <Link href="/">
              <SiteBadge label="Back Home" />
            </Link>
            <span className="text-sm text-[var(--ink-soft)]">
              仅供娱乐，嘴替报告正在生成中
            </span>
          </div>
          <button
            type="button"
            onClick={handleRestart}
            className="text-sm font-medium text-[var(--ink-soft)] hover:text-[var(--foreground)]"
          >
            重新开始
          </button>
        </div>

        <section className="card-surface-strong rounded-[32px] p-5 sm:p-7">
          <div className="flex flex-wrap items-center justify-between gap-3">
            <div>
              <p className="text-sm text-[var(--accent-2)]">
                第 {currentIndex + 1} 题 / 共 {QUESTIONS.length} 题
              </p>
              <h1 className="headline-font mt-2 text-3xl tracking-[-0.05em] sm:text-4xl">
                {currentQuestion.title}
              </h1>
            </div>
            <div className="rounded-full bg-[rgba(255,107,74,0.1)] px-4 py-2 text-sm font-medium text-[var(--foreground)]">
              已答 {answeredCount}/{QUESTIONS.length}
            </div>
          </div>

          <div className="mt-6 h-3 overflow-hidden rounded-full bg-white/70">
            <div
              className="h-full rounded-full bg-[linear-gradient(90deg,var(--accent),#ff9d5c)]"
              style={{
                width: `${((currentIndex + 1) / QUESTIONS.length) * 100}%`,
              }}
            />
          </div>

          <div className="mt-6 grid gap-3">
            {currentQuestion.options.map((option) => {
              const isSelected = selectedOptionId === option.id;
              const isAnswered = answers[currentQuestion.id] === option.id;

              return (
                <button
                  key={option.id}
                  type="button"
                  onClick={() => handleSelect(option.id)}
                  disabled={isPending}
                  className={`rounded-[24px] border px-5 py-4 text-left text-base leading-7 sm:px-6 sm:py-5 ${
                    isSelected || isAnswered
                      ? "border-[rgba(255,107,74,0.7)] bg-[rgba(255,107,74,0.12)] shadow-[0_14px_28px_rgba(255,107,74,0.12)]"
                      : "border-[rgba(23,18,15,0.08)] bg-white/70 hover:-translate-y-0.5 hover:bg-white"
                  }`}
                >
                  <span className="mr-3 inline-flex h-7 w-7 items-center justify-center rounded-full bg-[rgba(23,18,15,0.06)] text-sm font-semibold">
                    {option.id.toUpperCase()}
                  </span>
                  {option.text}
                </button>
              );
            })}
          </div>

          <div className="mt-6 flex items-center justify-between gap-3">
            <PrimaryButton
              type="button"
              variant="ghost"
              onClick={handleBack}
              disabled={currentIndex === 0 || isPending}
            >
              返回上一题
            </PrimaryButton>
            <p className="text-right text-xs leading-5 text-[var(--ink-soft)]">
              点击选项会自动进入下一题。
              <br />
              刷新后会恢复最近一次答题进度。
            </p>
          </div>
        </section>
      </div>
    </main>
  );
}
