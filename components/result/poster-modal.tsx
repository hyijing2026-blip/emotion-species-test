"use client";

import { useRef, useState } from "react";

import { getCompactDimensionHighlights } from "@/lib/result-generator";
import { downloadNodeAsPng } from "@/lib/poster";
import { QuizResult } from "@/types/quiz";
import { PrimaryButton } from "@/components/shared/primary-button";

type PosterModalProps = {
  isOpen: boolean;
  onClose: () => void;
  result: QuizResult;
};

export function PosterModal({ isOpen, onClose, result }: PosterModalProps) {
  const posterRef = useRef<HTMLDivElement | null>(null);
  const [isDownloading, setIsDownloading] = useState(false);

  if (!isOpen) return null;

  const highlightDimensions = getCompactDimensionHighlights(result.normalizedScores);

  async function handleDownload() {
    if (!posterRef.current) return;

    setIsDownloading(true);
    try {
      await downloadNodeAsPng(
        posterRef.current,
        `emotion-species-${result.primaryType.slug}.png`,
      );
    } finally {
      setIsDownloading(false);
    }
  }

  return (
    <div className="fixed inset-0 z-50 flex items-end justify-center bg-[rgba(23,18,15,0.58)] p-4 sm:items-center">
      <div className="flex max-h-[90vh] w-full max-w-[420px] flex-col overflow-hidden rounded-[28px] bg-[#fff8ef] shadow-[0_24px_80px_rgba(23,18,15,0.32)] sm:max-h-[86vh]">
        <div className="flex items-center justify-between gap-3 border-b border-[rgba(23,18,15,0.08)] px-4 pb-4 pt-4">
          <div>
            <p className="text-sm text-[var(--ink-soft)]">分享海报预览</p>
            <h2 className="headline-font text-2xl tracking-[-0.05em]">
              发出去像个真产品
            </h2>
          </div>
          <button
            type="button"
            onClick={onClose}
            className="rounded-full border border-[rgba(23,18,15,0.12)] px-3 py-2 text-sm"
          >
            关闭
          </button>
        </div>

        <div className="min-h-0 flex-1 overflow-y-auto px-4 py-4">
          <div className="rounded-[24px] bg-white p-3">
            <div className="mx-auto w-full max-w-[312px]">
              <div
                ref={posterRef}
                className="poster-mesh story-frame overflow-hidden rounded-[24px] p-5 text-[var(--foreground)]"
              >
                <div className="flex items-center justify-between gap-3">
                  <div className="rounded-full border border-[rgba(23,18,15,0.1)] bg-white/65 px-3 py-1 text-xs tracking-[0.14em] text-[var(--ink-soft)] uppercase">
                    情绪物种测试
                  </div>
                  <div className="rounded-full bg-[rgba(23,18,15,0.06)] px-3 py-1 text-[10px] uppercase tracking-[0.16em] text-[var(--ink-soft)]">
                    for share
                  </div>
                </div>

                <div className="mt-5 rounded-[24px] bg-[linear-gradient(145deg,#17120f_0%,#2d241f_60%,#ff6b4a_160%)] p-4 text-white">
                  <div className="flex items-center justify-between gap-3 text-xs text-white/70">
                    <span>{result.primaryType.code}</span>
                    <span>匹配度 {Math.round(result.matchPercentage)}%</span>
                  </div>
                  <h3 className="headline-font mt-3 text-4xl leading-[0.96] tracking-[-0.06em]">
                    {result.primaryType.name}
                  </h3>
                  <p className="mt-3 text-sm leading-6 text-white/84">
                    {result.primaryType.subtitle}
                  </p>
                  <div className="mt-4 rounded-[18px] bg-white/10 p-4">
                    <div className="text-[10px] uppercase tracking-[0.16em] text-white/68">
                      截图主文案
                    </div>
                    <p className="headline-font mt-2 text-[1.75rem] leading-[1.08] tracking-[-0.05em]">
                      {result.primaryType.posterLine}
                    </p>
                  </div>
                </div>

                <div className="mt-5 flex flex-wrap gap-2">
                  {result.primaryType.tags.slice(0, 4).map((tag) => (
                    <span
                      key={tag}
                      className="rounded-full bg-[rgba(23,18,15,0.06)] px-3 py-1 text-xs"
                    >
                      #{tag}
                    </span>
                  ))}
                </div>

                <div className="mt-5 rounded-[20px] bg-white/82 p-4">
                  <div className="mb-3 flex items-center justify-between gap-3">
                    <div className="text-xs uppercase tracking-[0.16em] text-[var(--ink-soft)]">
                      你的高能维度
                    </div>
                    <div className="text-xs text-[var(--ink-soft)]">适合发朋友圈 / 小红书</div>
                  </div>
                  <div className="grid gap-3">
                    {highlightDimensions.map((item) => (
                      <div key={item.key}>
                        <div className="mb-1 flex items-center justify-between text-xs text-[var(--ink-soft)]">
                          <span>{item.label}</span>
                          <span>{Math.round(item.value)}</span>
                        </div>
                        <div className="h-2 rounded-full bg-[rgba(23,18,15,0.08)]">
                          <div
                            className="h-full rounded-full bg-[linear-gradient(90deg,#ff6b4a,#ffc857)]"
                            style={{ width: `${item.value}%` }}
                          />
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="mt-5 rounded-[20px] bg-[rgba(29,143,122,0.1)] p-4">
                  <div className="text-xs uppercase tracking-[0.16em] text-[var(--ink-soft)]">
                    朋友会怎么说
                  </div>
                  <p className="mt-3 text-sm leading-6 text-[var(--foreground)]">
                    {result.primaryType.friendComment}
                  </p>
                </div>

                <p className="mt-5 text-sm leading-6 text-[var(--ink-soft)]">
                  {result.primaryType.roastLine}
                </p>

                <div className="mt-6 flex items-center justify-between border-t border-[rgba(23,18,15,0.08)] pt-4 text-xs text-[var(--ink-soft)]">
                  <span>测一测你属于哪一种当代互联网情绪物种</span>
                  <span>仅供娱乐</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="sticky bottom-0 grid grid-cols-2 gap-3 border-t border-[rgba(23,18,15,0.08)] bg-[#fff8ef] px-4 pb-4 pt-4">
          <PrimaryButton
            type="button"
            variant="ghost"
            onClick={onClose}
          >
            继续看结果页
          </PrimaryButton>
          <PrimaryButton
            type="button"
            onClick={handleDownload}
            disabled={isDownloading}
          >
            {isDownloading ? "正在导出..." : "下载 PNG"}
          </PrimaryButton>
        </div>
      </div>
    </div>
  );
}
