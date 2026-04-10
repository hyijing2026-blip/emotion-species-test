import Link from "next/link";

import { PERSONALITY_TYPES } from "@/data/personality-types";
import { PrimaryButton } from "@/components/shared/primary-button";
import { SiteBadge } from "@/components/shared/site-badge";

const previewTypes = [
  PERSONALITY_TYPES[0],
  PERSONALITY_TYPES[1],
  PERSONALITY_TYPES[6],
  PERSONALITY_TYPES[14],
];

export function HomeHero() {
  return (
    <main className="app-shell min-h-screen px-4 py-6 text-[var(--foreground)] sm:px-6">
      <div className="mx-auto flex min-h-[calc(100vh-3rem)] w-full max-w-6xl flex-col gap-8">
        <section className="card-surface-strong hero-grid relative overflow-hidden rounded-[38px] px-5 py-7 sm:px-9 sm:py-10 lg:px-10 lg:py-11">
          <div className="noise-ring -right-16 -top-16 h-48 w-48 bg-[rgba(255,200,87,0.12)]" />
          <div className="noise-ring right-[22%] top-[14%] hidden h-28 w-28 bg-[rgba(29,143,122,0.06)] lg:block" />
          <div className="noise-ring -bottom-14 left-[10%] h-36 w-36 bg-[rgba(46,73,209,0.05)]" />
          <div className="absolute inset-y-0 right-0 hidden w-[52%] bg-[radial-gradient(circle_at_top,rgba(255,107,74,0.14),transparent_56%),radial-gradient(circle_at_75%_52%,rgba(29,143,122,0.1),transparent_34%)] md:block" />

          <div className="relative grid gap-10 lg:grid-cols-[minmax(0,0.92fr)_minmax(320px,1.08fr)] lg:items-center lg:gap-12">
            <div className="max-w-[34rem]">
              <div className="flex flex-wrap items-center gap-3">
                <SiteBadge label="Emotion Species" />
                <span className="rounded-full border border-[rgba(23,18,15,0.08)] bg-white/58 px-3 py-1 text-xs font-medium tracking-[0.14em] text-[var(--ink-soft)] uppercase">
                  当代互联网情绪图鉴
                </span>
              </div>

              <div className="mt-7">
                <div className="headline-font inline-flex flex-col items-center tracking-[-0.07em] text-[var(--foreground)]">
                  <div className="text-[clamp(2.85rem,7.2vw,5.45rem)] leading-[0.9]">
                    情绪物种
                  </div>
                  <div className="mt-2 text-[clamp(1.35rem,3.1vw,2.05rem)] leading-[0.98] tracking-[-0.045em]">
                    测试
                  </div>
                </div>
                <div className="mt-4 text-[11px] tracking-[0.22em] text-[var(--ink-soft)] uppercase">
                  For Wired Feelings
                </div>
              </div>

              <div className="mt-8 flex flex-wrap gap-2.5 text-xs text-[var(--ink-soft)] sm:text-sm">
                {["3 分钟左右", "16 种高梗人格", "结果支持海报下载"].map((item) => (
                  <span
                    key={item}
                    className="rounded-full border border-[rgba(23,18,15,0.08)] bg-white/70 px-3 py-2"
                  >
                    {item}
                  </span>
                ))}
              </div>

              <div className="mt-9 flex flex-wrap items-center gap-3">
                <Link href="/test">
                  <PrimaryButton className="min-w-[184px] px-8 text-base shadow-[0_18px_34px_rgba(23,18,15,0.16)]">
                    开始测试
                  </PrimaryButton>
                </Link>
                <a
                  href="#preview"
                  className="inline-flex min-h-12 items-center rounded-full px-1 text-sm font-medium text-[var(--ink-soft)] transition-colors hover:text-[var(--foreground)]"
                >
                  先看结果长啥样
                </a>
              </div>

              <p className="mt-8 max-w-[25rem] text-sm leading-6 text-[var(--ink-soft)]">
                <span className="font-semibold text-[var(--foreground)]">
                  测完大概率只想立刻转发一句：
                </span>
                “这说的不就是你。”
              </p>
            </div>

            <div className="relative">
              <div className="absolute -left-3 top-10 hidden rounded-full bg-[rgba(255,200,87,0.3)] px-3 py-1 text-[10px] tracking-[0.16em] text-[var(--foreground)] uppercase lg:block">
                screenshot bait
              </div>

              <div className="rounded-[34px] border border-[rgba(23,18,15,0.08)] bg-[linear-gradient(180deg,rgba(255,255,255,0.88),rgba(255,247,239,0.84))] p-4 shadow-[0_20px_46px_rgba(80,54,34,0.08)] sm:p-5">
                <div className="story-frame rounded-[30px] bg-[linear-gradient(145deg,#17120f_0%,#2d241f_52%,#8d4b36_100%,#ff6b4a_168%)] p-6 text-white shadow-[0_28px_56px_rgba(23,18,15,0.22)]">
                  <div className="flex items-center justify-between gap-3">
                    <div className="text-[11px] tracking-[0.18em] text-white/64 uppercase">
                      热门结果预览
                    </div>
                    <span className="rounded-full bg-white/10 px-3 py-1 text-[10px] tracking-[0.16em] uppercase text-white/72">
                      share-ready
                    </span>
                  </div>

                  <div className="mt-5">
                    <div className="text-xs text-white/62">ZYG · 嘴硬怪</div>
                    <div className="headline-font mt-2 text-[2.9rem] leading-[0.92] tracking-[-0.07em]">
                      嘴硬怪
                    </div>
                    <p className="mt-3 max-w-[24rem] text-base leading-7 text-white/86">
                      嘴上说“随便”，心里已经把聊天截图剪成一份临时证据档案。
                    </p>
                  </div>

                  <div className="mt-5 flex flex-wrap gap-2">
                    {["嘴比心硬", "已读脑补", "逞强专业户"].map((tag) => (
                      <span
                        key={tag}
                        className="rounded-full bg-white/12 px-3 py-1 text-xs text-white"
                      >
                        #{tag}
                      </span>
                    ))}
                  </div>

                  <div className="mt-6 grid gap-3 sm:grid-cols-[1fr_0.7fr]">
                    <div className="rounded-[22px] bg-white/10 p-4 backdrop-blur-sm">
                      <div className="text-[10px] uppercase tracking-[0.16em] text-white/68">
                        截图主文案
                      </div>
                      <p className="headline-font mt-3 text-[1.95rem] leading-[1.06] tracking-[-0.05em]">
                        嘴上无所谓，
                        <br />
                        心里在开加急会议
                      </p>
                    </div>

                    <div className="rounded-[22px] bg-black/14 p-4">
                      <div className="text-xs text-white/68">分享欲触发值</div>
                      <div className="headline-font mt-2 text-3xl tracking-[-0.05em]">
                        91%
                      </div>
                      <div className="mt-3 h-2 rounded-full bg-white/12">
                        <div className="h-full w-[91%] rounded-full bg-[linear-gradient(90deg,#ffc857,#ff8c69)]" />
                      </div>
                      <p className="mt-3 text-xs leading-5 text-white/66">
                        测完很容易想到一个朋友
                      </p>
                    </div>
                  </div>
                </div>

                <div className="mt-4 flex flex-wrap items-center gap-3 px-1 text-[13px] text-[var(--ink-soft)]">
                  <span className="headline-font text-[1.7rem] tracking-[-0.05em] text-[var(--foreground)]">
                    3 min
                  </span>
                  <span>做完不累</span>
                  <span className="h-1 w-1 rounded-full bg-[rgba(23,18,15,0.25)]" />
                  <span className="headline-font text-[1.7rem] tracking-[-0.05em] text-[var(--foreground)]">
                    16 类
                  </span>
                  <span>结果够有梗</span>
                  <span className="h-1 w-1 rounded-full bg-[rgba(23,18,15,0.25)]" />
                  <span className="font-medium text-[var(--foreground)]">支持 PNG 海报下载</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section
          id="preview"
          className="grid gap-4 pt-3 sm:grid-cols-2 xl:grid-cols-4"
        >
          {previewTypes.map((type) => (
            <article
              key={type.code}
              className="card-surface rounded-[28px] p-5 opacity-88"
            >
              <div className="flex items-start justify-between gap-3">
                <div>
                  <p className="text-xs tracking-[0.16em] text-[var(--ink-soft)] uppercase">
                    {type.code}
                  </p>
                  <h2 className="headline-font mt-2 text-[1.85rem] tracking-[-0.04em]">
                    {type.name}
                  </h2>
                </div>
                <span className="rounded-full bg-[rgba(255,107,74,0.1)] px-3 py-1 text-xs text-[var(--ink-soft)]">
                  示例人格
                </span>
              </div>
              <p className="mt-4 text-sm leading-6 text-[var(--ink-soft)]">
                {type.posterLine}
              </p>
              <div className="mt-5 flex flex-wrap gap-2">
                {type.tags.slice(0, 2).map((tag) => (
                  <span
                    key={tag}
                    className="rounded-full border border-[rgba(23,18,15,0.07)] bg-white/55 px-3 py-1 text-xs"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </article>
          ))}
        </section>

        <section className="grid gap-4 lg:grid-cols-[1.2fr_0.8fr]">
          <div className="card-surface rounded-[28px] p-6">
            <h2 className="headline-font text-2xl tracking-[-0.04em]">
              这个小产品会给你什么
            </h2>
            <ul className="mt-5 grid gap-3 text-sm leading-6 text-[var(--ink-soft)] sm:grid-cols-2">
              <li>31 道单题流答题，点完就走，不逼你读大段说明</li>
              <li>12 维度真实算分，不是随便弹一个人格名糊弄你</li>
              <li>16 种互联网气质人格，文案统一，有梗但不刻薄</li>
            </ul>
          </div>

          <div className="card-surface rounded-[28px] p-6">
            <h2 className="headline-font text-2xl tracking-[-0.04em]">
              小声声明
            </h2>
            <p className="mt-4 text-sm leading-6 text-[var(--ink-soft)]">
              本测试仅供娱乐，不作为任何专业判断依据。它更像一面带梗的镜子，
              帮你看见自己在互联网时代练出来的情绪生存技。
            </p>
          </div>
        </section>
      </div>
    </main>
  );
}
