import type { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
  title: "AI-WEP | KCP Holdings",
  description:
    "지자체 소각시설의 환경·운전·설비 데이터를 통합 분석하는 AI-WEP 환경 플랜트 AI 플랫폼.",
};

const modules = [
  {
    code: "AI-ENV",
    title: "배출가스 예측",
    description: "환경 데이터를 분석해 배출가스의 변화를 미리 예측하고 이상 징후를 알려줍니다.",
  },
  {
    code: "AI-OP",
    title: "소각운전 최적화",
    description: "연소 상태와 운전 조건을 분석해 안정적이고 효율적인 운전 조건을 제시합니다.",
  },
  {
    code: "AI-PM",
    title: "설비 이상예측",
    description: "설비 데이터를 기반으로 고장 가능성을 사전에 감지해 비계획 정지를 줄입니다.",
  },
  {
    code: "AI-COPILOT",
    title: "운영자 AI",
    description: "현장 운전원의 판단을 보조하는 실시간 추천과 운영 인사이트를 제공합니다.",
  },
  {
    code: "DIGITAL TWIN",
    title: "가상운전",
    description: "운전 조건을 가상으로 검토하며 변화에 따른 결과를 예측할 수 있습니다.",
  },
];

const pipeline = [
  "실시간 데이터 수집",
  "AI 이상탐지",
  "배출가스 예측",
  "소각운전 예측",
  "운전조건 최적화",
  "운전원 AI 추천",
  "성과분석",
];

const kpis = [
  ["90% 이상", "배출가스 예측 정확도"],
  ["10분 이상", "이상징후 사전탐지"],
  ["99% 이상", "AI 시스템 가동률"],
  ["10% 이하", "오탐률"],
  ["5% 이상", "운영비 절감 목표"],
];

export default function AiWepPage() {
  return (
    <>
      <header className="fixed top-0 left-0 right-0 z-50 border-b border-border/60 bg-bg/80 backdrop-blur">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
          <a href="/" className="font-display text-lg font-bold tracking-tight">
            KCP <span className="text-signal">Holdings</span>
          </a>
          <a href="/#contact" className="text-sm text-muted transition-colors hover:text-text">
            문의하기 <span className="ml-2 text-signal">↗</span>
          </a>
        </div>
      </header>

      <main className="overflow-hidden pt-24">
        <section className="relative border-b border-border bg-grid-fade py-24 md:py-32">
          <div className="absolute -right-32 top-16 h-80 w-80 rounded-full border border-signal/20 bg-signal/5 blur-[1px]" />
          <div className="relative mx-auto max-w-6xl px-6">
            <div>
              <p className="eyebrow mb-5">WASTE & ENVIRONMENTAL PLANT AI PLATFORM</p>
              <h1 className="max-w-3xl font-display text-5xl font-bold leading-[1.05] md:text-7xl">
                AI-WEP
                <br />
                <span className="text-accent">AI와 DW로 바꾸는 차세대 소각시설 운영</span>
              </h1>
              <div className="relative my-10 max-w-5xl overflow-hidden rounded-lg border border-signal/40 bg-white shadow-2xl shadow-accent/10 md:my-14">
                <Image
                  src="/ai-wep-overview.png"
                  alt="AI-WEP 환경·운전·설비 통합 AI 플랫폼 개요"
                  width={1536}
                  height={864}
                  priority
                  className="h-auto w-full"
                />
                <div className="absolute bottom-3 right-3 border border-white/40 bg-bg/80 px-3 py-2 font-mono text-[10px] tracking-[0.16em] text-signal backdrop-blur">
                  AI-WEP OVERVIEW
                </div>
              </div>
              <p className="mt-8 max-w-2xl text-base leading-relaxed text-muted md:text-lg">
                배출가스·소각운전·설비 데이터를 하나의 AI로 연결합니다. 사후관리에서
                사전예측과 최적화로, 지자체 환경 플랜트의 운영 방식을 바꿉니다.
              </p>
              <div className="mt-10 flex flex-wrap gap-4">
                <a href="/#contact" className="rounded-md bg-accent px-6 py-3 text-sm font-medium text-text transition-colors hover:bg-accent/90">
                  실증사업 문의하기
                </a>
                <a href="#modules" className="rounded-md border border-border px-6 py-3 text-sm font-medium text-muted transition-colors hover:border-muted hover:text-text">
                  핵심 모듈 보기
                </a>
              </div>
            </div>
          </div>
        </section>

        <section className="section-divider py-24">
          <div className="mx-auto max-w-6xl px-6">
            <div className="max-w-2xl">
              <p className="eyebrow mb-4">WHY AI-WEP</p>
              <h2 className="font-display text-3xl font-bold md:text-4xl">현장 데이터가 운영의 언어가 되도록</h2>
              <p className="mt-5 leading-relaxed text-muted">
                폐기물 성상의 가변성, 예측하기 어려운 설비 고장, 지속되는 운영비 부담과 숙련 인력 의존 문제를 데이터와 AI로 함께 다룹니다.
              </p>
            </div>
            <div className="mt-12 grid gap-4 md:grid-cols-3">
              {[
                ["01", "사전예측", "배출가스와 설비의 이상 징후를 조기에 감지합니다."],
                ["02", "운전 최적화", "환경 기준과 효율을 함께 고려한 운전 조건을 제시합니다."],
                ["03", "운영 의사결정", "운전원의 경험을 데이터와 AI 추천으로 확장합니다."],
              ].map(([number, title, description]) => (
                <article key={number} className="border border-border bg-panel p-7">
                  <span className="font-mono text-sm text-signal">{number}</span>
                  <h3 className="mt-8 font-display text-xl font-bold">{title}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-muted">{description}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="modules" className="section-divider bg-panel2/50 py-24">
          <div className="mx-auto max-w-6xl px-6">
            <p className="eyebrow mb-4">AI-WEP MODULES</p>
            <div className="flex flex-col justify-between gap-5 md:flex-row md:items-end">
              <h2 className="max-w-xl font-display text-3xl font-bold md:text-4xl">환경·운전·설비를 통합하는 다섯 가지 모듈</h2>
              <p className="max-w-sm text-sm leading-relaxed text-muted">데이터 수집부터 운영 성과 분석까지, 하나의 루프로 현장 의사결정을 지원합니다.</p>
            </div>
            <div className="mt-12 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
              {modules.map((module, index) => (
                <article key={module.code} className="group border border-border bg-bg p-6 transition-colors hover:border-accent/70">
                  <div className="flex items-center justify-between">
                    <span className="font-mono text-xs text-signal">{module.code}</span>
                    <span className="font-mono text-xs text-muted">0{index + 1}</span>
                  </div>
                  <h3 className="mt-10 font-display text-xl font-bold">{module.title}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-muted">{module.description}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="section-divider py-24">
          <div className="mx-auto max-w-6xl px-6">
            <p className="eyebrow mb-4">HOW IT WORKS</p>
            <h2 className="font-display text-3xl font-bold md:text-4xl">7단계 핵심 기능 파이프라인</h2>
            <div className="mt-12 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
              {pipeline.map((step, index) => (
                <div key={step} className="relative border border-border p-5">
                  <span className="font-mono text-xs text-signal">0{index + 1}</span>
                  <p className="mt-6 text-sm font-medium">{step}</p>
                  {index < pipeline.length - 1 && <span className="absolute -right-2 top-1/2 hidden text-signal lg:block">→</span>}
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="section-divider bg-panel2/50 py-24">
          <div className="mx-auto max-w-6xl px-6">
            <div className="flex flex-col justify-between gap-8 lg:flex-row lg:items-end">
              <div>
                <p className="eyebrow mb-4">PROVEN IMPACT</p>
                <h2 className="font-display text-3xl font-bold md:text-4xl">실증으로 증명하는 운영 성과</h2>
              </div>
              <p className="max-w-md text-sm leading-relaxed text-muted">현장 데이터와 기존 시스템 성능을 기준으로 실증 KPI를 설정하고, 실제 운영 효과를 측정합니다.</p>
            </div>
            <div className="mt-12 grid gap-px overflow-hidden border border-border bg-border sm:grid-cols-2 lg:grid-cols-5">
              {kpis.map(([value, label]) => (
                <div key={label} className="bg-bg p-6">
                  <strong className="font-display text-3xl font-bold text-signal">{value}</strong>
                  <p className="mt-3 text-xs leading-relaxed text-muted">{label}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="section-divider py-24">
          <div className="mx-auto max-w-6xl px-6">
            <div className="border border-accent/50 bg-accent/10 p-8 md:flex md:items-center md:justify-between md:p-12">
              <div>
                <p className="eyebrow mb-4">PILOT PROGRAM</p>
                <h2 className="font-display text-3xl font-bold">함께 실증을 시작하겠습니다</h2>
                <p className="mt-4 max-w-xl text-sm leading-relaxed text-muted">귀 시설의 배출가스 이상을 사전에 예측하고 운전원의 대응을 지원하는 AI 실증사업을 제안드립니다.</p>
              </div>
              <a href="/#contact" className="mt-8 inline-flex shrink-0 rounded-md bg-accent px-6 py-3 text-sm font-medium text-text transition-colors hover:bg-accent/90 md:mt-0">
                실증 문의하기 <span className="ml-3">↗</span>
              </a>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
