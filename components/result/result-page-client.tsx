"use client";

import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { useEffect, useState, useTransition } from "react";

import { DIMENSIONS } from "@/data/dimensions";
import {
  buildCopyResultText,
  createResultSearchParams,
  readResultFromSearchParams,
} from "@/lib/result-generator";
import { generateResultSummary } from "@/lib/scoring";
import { loadQuizResult, resetQuizStorage } from "@/lib/storage";
import { QuizResult } from "@/types/quiz";
import { DimensionRadarChart } from "@/components/result/dimension-radar-chart";
import { PosterModal } from "@/components/result/poster-modal";
import { PrimaryButton } from "@/components/shared/primary-button";
import { SiteBadge } from "@/components/shared/site-badge";

export function ResultPageClient() {
  const searchParams = useSearchParams();
  const [result, setResult] = useState<QuizResult | null>(null);
  const [copied, setCopied] = useState(false);
  const [posterOpen, setPosterOpen] = useState(false);
  const [, startTransition] = useTransition();

  useEffect(() => {
    const sharedResult = readResultFromSearchParams(searchParams);
    const storedResult = loadQuizResult()?.result ?? null;
    const timeoutId = window.setTimeout(() => {
      startTransition(() => {
        if (
          sharedResult &&
          storedResult?.primaryType.code === sharedResult.primaryType.code
        ) {
          setResult(storedResult);
          return;
        }

        if (sharedResult) {
          setResult({
            primaryType: sharedResult.primaryType,
            matchPercentage: sharedResult.matchPercentage,
            normalizedScores: sharedResult.normalizedScores,
            rawScores: sharedResult.normalizedScores,
            topMatches: [
              {
                code: sharedResult.primaryType.code,
                name: sharedResult.primaryType.name,
                slug: sharedResult.primaryType.slug,
                matchPercentage: sharedResult.matchPercentage,
              },
            ],
            dominantDimensions: [],
            shareText: `${sharedResult.primaryType.name}｜${sharedResult.primaryType.posterLine}`,
          });
          return;
        }

        if (storedResult) {
          setResult(storedResult);
        }
      });
    }, 0);

    return () => window.clearTimeout(timeoutId);
  }, [searchParams, startTransition]);

  async function handleCopyResult() {
    if (!result) return;

    const params = createResultSearchParams(result);
    const link = `${window.location.origin}/result?${params}`;
    const copyText = `${buildCopyResultText(result)}\n${link}`;

    await navigator.clipboard.writeText(copyText);
    setCopied(true);
    window.setTimeout(() => setCopied(false), 1800);
  }

  function handleRetest() {
    resetQuizStorage();
    window.location.href = "/test";
  }

  if (!result) {
    return (
      <main className="app-shell min-h-screen px-4 py-6 sm:px-6">
        <div className="mx-auto flex w-full max-w-2xl flex-col gap-4">
          <SiteBadge label="Result Missing" />
          <section className="card-surface-strong rounded-[32px] p-6 sm:p-8">
            <h1 className="headline-font text-3xl tracking-[-0.05em]">
              这里暂时没有可展示的结果
            </h1>
            <p className="mt-4 text-sm leading-6 text-[var(--ink-soft)]">
              你可以重新做一次测试，或者从别人分享给你的完整结果链接进入。
            </p>
            <div className="mt-6 flex gap-3">
              <Link href="/">
                <PrimaryButton variant="ghost">回首页</PrimaryButton>
              </Link>
              <Link href="/test">
                <PrimaryButton>开始测试</PrimaryButton>
              </Link>
            </div>
          </section>
        </div>
      </main>
    );
  }

  const summary = generateResultSummary(result.primaryType, result.normalizedScores);
  const linkForSharing =
    typeof window !== "undefined"
      ? `${window.location.origin}/result?${createResultSearchParams(result)}`
      : "";

  const storyCards: Array<[string, string]> = [
    ["你的社交风格", result.primaryType.socialStyle],
    ["你的情绪触发点", result.primaryType.trigger],
    ["你的吵架风格", result.primaryType.conflictStyle],
    ["你的隐藏技能", result.primaryType.hiddenSkill],
    ["一句最适合你的吐槽", result.primaryType.roastLine],
    ["最像你的朋友会怎么评价你", result.primaryType.friendComment],
  ];

  return (
    <>
      <main className="app-shell min-h-screen px-4 py-5 sm:px-6">
        <div className="mx-auto flex w-full max-w-6xl flex-col gap-5 pb-12">
          <div className="flex flex-wrap items-center justify-between gap-3">
            <div className="flex items-center gap-3">
              <Link href="/">
                <SiteBadge label="Emotion Species" />
              </Link>
              <span className="text-sm text-[var(--ink-soft)]">
                当前结果可直接分享链接访问
              </span>
            </div>
            <div className="flex flex-wrap gap-2">
              <PrimaryButton type="button" variant="ghost" onClick={handleRetest}>
                重新测试
              </PrimaryButton>
              <PrimaryButton type="button" variant="light" onClick={handleCopyResult}>
                {copied ? "结果已复制" : "复制结果文案"}
              </PrimaryButton>
              <PrimaryButton type="button" onClick={() => setPosterOpen(true)}>
                生成分享海报
              </PrimaryButton>
            </div>
          </div>

          <section className="grid gap-5 xl:grid-cols-[1.08fr_0.92fr]">
            <article className="card-surface-strong story-frame relative overflow-hidden rounded-[36px] p-6 sm:p-8">
              <div className="noise-ring -right-10 top-8 h-28 w-28 bg-[rgba(255,107,74,0.16)]" />
              <div className="noise-ring right-[24%] top-[58%] hidden h-20 w-20 bg-[rgba(29,143,122,0.14)] md:block" />
              <div className="absolute inset-x-0 top-0 h-36 bg-[radial-gradient(circle_at_top,rgba(255,107,74,0.12),transparent_72%)]" />

              <div className="relative flex flex-wrap items-start justify-between gap-4">
                <div>
                  <p className="text-sm font-medium text-[var(--accent-2)]">
                    {result.primaryType.code} · 匹配度 {Math.round(result.matchPercentage)}%
                  </p>
                  <h1 className="headline-font mt-3 text-[clamp(2.5rem,7vw,4.8rem)] leading-[0.94] tracking-[-0.06em]">
                    {result.primaryType.name}
                  </h1>
                  <p className="mt-4 max-w-2xl text-lg leading-8 text-[var(--foreground)] sm:text-[1.2rem]">
                    {result.primaryType.subtitle}
                  </p>
                </div>

                <div className="min-w-[150px] rounded-[28px] border border-[rgba(23,18,15,0.08)] bg-[linear-gradient(180deg,rgba(255,255,255,0.9),rgba(255,246,236,0.82))] p-4 text-right">
                  <div className="text-xs uppercase tracking-[0.16em] text-[var(--ink-soft)]">
                    Match
                  </div>
                  <div className="headline-font mt-2 text-4xl tracking-[-0.05em]">
                    {Math.round(result.matchPercentage)}%
                  </div>
                  <div className="mt-2 text-xs text-[var(--ink-soft)]">情绪适配度</div>
                </div>
              </div>

              <div className="mt-6 flex flex-wrap gap-2">
                {result.primaryType.tags.map((tag) => (
                  <span
                    key={tag}
                    className="rounded-full border border-[rgba(23,18,15,0.08)] bg-white/75 px-3 py-1 text-sm"
                  >
                    #{tag}
                  </span>
                ))}
              </div>

              <div className="mt-6 grid gap-4 md:grid-cols-[1.15fr_0.85fr]">
                <div className="rounded-[30px] bg-[linear-gradient(145deg,#17120f_0%,#302620_60%,#ff6b4a_170%)] p-5 text-white">
                  <div className="text-xs uppercase tracking-[0.18em] text-white/62">
                    主人格结论
                  </div>
                  <p className="mt-4 text-sm leading-7 text-white/84">{summary}</p>
                  <div className="mt-5 flex flex-wrap items-center gap-3 text-xs text-white/72">
                    {result.topMatches.slice(1).map((match) => (
                      <span
                        key={match.code}
                        className="rounded-full bg-white/12 px-3 py-1"
                      >
                        你还像 {match.name} {Math.round(match.matchPercentage)}%
                      </span>
                    ))}
                  </div>
                </div>

                <div className="rounded-[30px] border border-[rgba(23,18,15,0.08)] bg-white/74 p-5">
                  <div className="text-xs uppercase tracking-[0.18em] text-[var(--ink-soft)]">
                    适合截图的一句
                  </div>
                  <p className="headline-font mt-4 text-3xl leading-[1.05] tracking-[-0.05em]">
                    “{result.primaryType.posterLine}”
                  </p>
                  <p className="mt-4 text-sm leading-6 text-[var(--ink-soft)]">
                    {result.primaryType.roastLine}
                  </p>
                </div>
              </div>

              <div className="mt-6 grid gap-3 sm:grid-cols-3">
                {[
                  ["情绪签名", result.primaryType.posterLine],
                  ["朋友认证", result.primaryType.friendComment],
                  ["隐藏技能", result.primaryType.hiddenSkill],
                ].map(([title, content]) => (
                  <div
                    key={title}
                    className="rounded-[24px] border border-[rgba(23,18,15,0.08)] bg-white/72 p-4"
                  >
                    <div className="text-xs uppercase tracking-[0.16em] text-[var(--ink-soft)]">
                      {title}
                    </div>
                    <p className="mt-3 text-sm leading-6 text-[var(--foreground)]">
                      {content}
                    </p>
                  </div>
                ))}
              </div>

              <div className="mt-6 rounded-[24px] border border-[rgba(23,18,15,0.08)] bg-white/55 p-4">
                <div className="flex items-center justify-between gap-3">
                  <span className="text-sm font-medium">分享结果链接</span>
                  <a
                    href={linkForSharing}
                    className="text-xs text-[var(--accent-2)] underline-offset-4 hover:underline"
                  >
                    打开当前结果
                  </a>
                </div>
                <p className="mt-3 break-all text-xs leading-5 text-[var(--ink-soft)]">
                  {linkForSharing}
                </p>
              </div>
            </article>

            <article className="card-surface rounded-[32px] p-6 sm:p-8">
              <div className="flex items-center justify-between gap-3">
                <div>
                  <p className="text-sm text-[var(--accent-2)]">12 维画像</p>
                  <h2 className="headline-font mt-2 text-3xl tracking-[-0.05em]">
                    你的情绪图谱
                  </h2>
                </div>
                <span className="rounded-full bg-[rgba(255,200,87,0.25)] px-3 py-1 text-xs">
                  Radar View
                </span>
              </div>

              <div className="mt-4">
                <DimensionRadarChart scores={result.normalizedScores} />
              </div>

              <div className="mb-4 rounded-[24px] bg-[rgba(255,107,74,0.08)] p-4">
                <div className="text-xs uppercase tracking-[0.16em] text-[var(--ink-soft)]">
                  维度读法
                </div>
                <p className="mt-2 text-sm leading-6 text-[var(--foreground)]">
                  分数越高，说明这项情绪习性在你身上越明显。它不是诊断，只是你在互联网世界里的情绪出厂设置。
                </p>
              </div>

              <div className="grid gap-3 sm:grid-cols-2">
                {DIMENSIONS.map((dimension) => (
                  <div
                    key={dimension.key}
                    className="rounded-[20px] border border-[rgba(23,18,15,0.08)] bg-white/72 p-3"
                  >
                    <div className="mb-1 flex items-center justify-between gap-3">
                      <span className="text-sm font-semibold">{dimension.name}</span>
                      <span className="text-sm text-[var(--ink-soft)]">
                        {Math.round(result.normalizedScores[dimension.key])}
                      </span>
                    </div>
                    <div className="h-2 rounded-full bg-[rgba(23,18,15,0.07)]">
                      <div
                        className="h-full rounded-full bg-[linear-gradient(90deg,var(--accent),#ffc857)]"
                        style={{ width: `${result.normalizedScores[dimension.key]}%` }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </article>
          </section>

          <section className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
            {storyCards.map(([title, content], index) => (
              <article
                key={title}
                className="card-surface rounded-[30px] p-5"
              >
                <div className="flex items-center justify-between gap-3">
                  <p className="text-sm text-[var(--accent-2)]">{title}</p>
                  <span className="headline-font text-xl tracking-[-0.04em] text-[rgba(23,18,15,0.25)]">
                    0{index + 1}
                  </span>
                </div>
                <p className="mt-3 text-base leading-7 text-[var(--foreground)]">
                  {content}
                </p>
              </article>
            ))}
          </section>
        </div>
      </main>

      <PosterModal
        isOpen={posterOpen}
        onClose={() => setPosterOpen(false)}
        result={result}
      />
    </>
  );
}
