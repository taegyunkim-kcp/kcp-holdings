import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "SmartVault | KCP Holdings",
  description:
    "NFC/RFID 인식과 도어락 정책 제어로 운영하는 군 스마트폰 보관함 IoT 솔루션, SmartVault.",
};

const features = [
  {
    code: "VAULT-POLICY",
    title: "계층형 도어락 정책 관리",
    description:
      "부대·건물·내무반 단위로 반복 스케줄과 상황별 임시 예외, 긴급 개폐를 함께 운영하고 예외 적용 후에는 자동으로 원래 정책으로 복귀합니다.",
  },
  {
    code: "VAULT-STATUS",
    title: "인원 재실 상태 자동 판정",
    description:
      "보관중·부재·이상 등 인원별 보관 상태를 자동으로 분류하고, 등록된 소속과 다른 보관함을 이용하는 등의 이상 상황을 즉시 감지합니다.",
  },
  {
    code: "VAULT-EDGE",
    title: "폐쇄망 현장 자율 제어",
    description:
      "인터넷이 없는 부대 내부망 환경에서도 중앙 서버 연결 여부와 무관하게 현장 장비가 스스로 개폐를 판단해 안정적으로 동작합니다.",
  },
  {
    code: "VAULT-SYNC",
    title: "오프라인 이벤트 동기화",
    description:
      "통신이 끊긴 구간의 이벤트도 현장에 안전하게 보관했다가, 연결이 복구되면 발생 순서 그대로 중앙 서버에 자동 전송합니다.",
  },
  {
    code: "VAULT-ONBOARD",
    title: "장비 자동 탐지·등록",
    description:
      "신규 게이트웨이·리더를 자동으로 인식해 관리자 승인만으로 빠르게 현장에 배치하고 운영을 시작할 수 있습니다.",
  },
  {
    code: "VAULT-DASH",
    title: "통합 관제 대시보드",
    description:
      "보관함 현황, 인원 상태, 이상 이력, 장비 상태를 하나의 화면에서 실시간으로 모니터링합니다.",
  },
];

const pipeline = [
  "스마트폰 보관 태깅",
  "RFID 인식",
  "재실 상태 판정",
  "정책 대조",
  "개폐 판단",
  "이상탐지·알림",
  "이력 기록",
];

const consoleFeatures = [
  {
    title: "실시간 통합 모니터링",
    description: "전체·중대별·내무반별 현황을 한눈에 보고, 통계 카드를 클릭해 바로 인원 목록으로 좁혀볼 수 있습니다.",
  },
  {
    title: "이벤트 처리함",
    description: "아직 확인하지 않은 이상 이벤트만 모아 내무반·유형별로 걸러보고, 상세 확인과 조치를 한 화면에서 끝냅니다.",
  },
  {
    title: "보관함 개폐 정책 제어",
    description: "반복 스케줄과 이번 주만 적용할 임시 예외, 긴급 개폐 요청을 하나의 화면에서 관리합니다.",
  },
  {
    title: "사용자 · RFID 매칭",
    description: "미등록 인원과 미매칭 태그를 나란히 두고 클릭 두 번으로 매칭을 완료합니다.",
  },
  {
    title: "게이트웨이 자동 탐지",
    description: "신규 장비가 자동으로 목록에 나타나고, 내무반만 지정하면 별도 설정 없이 바로 등록됩니다.",
  },
];

const roadmap = [
  ["AI 인식 보정", "일시적인 인식 오류와 실제 반출을 구분해 오탐을 줄입니다."],
  ["장비 예지보전", "리더·게이트웨이의 이상 징후를 사전에 감지해 고장 전에 조치합니다."],
  ["정책 자동 추천", "반복되는 이용 패턴을 분석해 관리자에게 정책 개선안을 제안합니다."],
  ["이상행동 스코어링", "여러 신호를 종합해 보안상 주의가 필요한 상황을 조기에 알립니다."],
];

export default function SmartVaultPage() {
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
              <p className="eyebrow mb-5">MILITARY SMARTPHONE VAULT IoT SOLUTION</p>
              <h1 className="max-w-3xl font-display text-5xl font-bold leading-[1.05] md:text-7xl">
                SmartVault
                <br />
                <span className="text-accent">RFID로 관리하는 차세대 스마트폰 보관함</span>
              </h1>
              <p className="mt-8 max-w-2xl text-base leading-relaxed text-muted md:text-lg">
                NFC/RFID로 보관자를 식별하고, 도어락 정책과 인원 상태를 자동으로 관리합니다.
                인터넷이 없는 폐쇄망 환경에서도 현장이 스스로 판단하고 동작하도록 설계했습니다.
              </p>
              <div className="mt-6 inline-flex items-center gap-2 rounded-full border border-signal/40 bg-signal/5 px-4 py-1.5 font-mono text-[11px] tracking-wide text-signal">
                핵심 기술 특허 출원 준비 중
              </div>
              <div className="mt-10 flex flex-wrap gap-4">
                <a href="/#contact" className="rounded-md bg-accent px-6 py-3 text-sm font-medium text-text transition-colors hover:bg-accent/90">
                  도입 문의하기
                </a>
                <a href="#features" className="rounded-md border border-border px-6 py-3 text-sm font-medium text-muted transition-colors hover:border-muted hover:text-text">
                  핵심 기능 보기
                </a>
              </div>
            </div>
          </div>
        </section>

        <section className="section-divider py-24">
          <div className="mx-auto max-w-6xl px-6">
            <p className="eyebrow mb-4">ADMIN & OPERATOR CONSOLE</p>
            <div className="flex flex-col justify-between gap-5 md:flex-row md:items-end">
              <h2 className="max-w-xl font-display text-3xl font-bold md:text-4xl">
                관리자가 매일 쓰는 화면, 다섯 가지로 정리했습니다
              </h2>
              <p className="max-w-sm text-sm leading-relaxed text-muted">
                모니터링부터 정책 제어, 사용자 등록까지 관리자가 반복하는 업무를 하나의 관제 화면으로 통합했습니다.
              </p>
            </div>

            <div className="relative mt-12 overflow-hidden rounded-lg border border-signal/40 bg-panel shadow-2xl shadow-accent/10">
              <div className="flex items-center gap-2 border-b border-border bg-panel2/70 px-4 py-3">
                <span className="h-2.5 w-2.5 rounded-full bg-border" />
                <span className="h-2.5 w-2.5 rounded-full bg-border" />
                <span className="h-2.5 w-2.5 rounded-full bg-border" />
                <span className="ml-3 font-mono text-[11px] text-muted">smartvault-admin · 전체 현황</span>
                <span className="ml-auto font-mono text-[10px] tracking-[0.16em] text-signal">ADMIN CONSOLE</span>
              </div>
              <div className="grid gap-px bg-border md:grid-cols-[220px_1fr_260px]">
                <div className="hidden bg-panel2/40 p-4 md:block">
                  {[
                    { title: "모니터링", active: true },
                    { title: "이벤트 관리" },
                    { title: "보관함 개폐 관리/제어" },
                    { title: "사용자/RFID 등록" },
                    { title: "환경 설정" },
                  ].map((group) => (
                    <div
                      key={group.title}
                      className={`mb-1 rounded px-3 py-2 font-mono text-[11px] ${
                        group.active ? "bg-accent/15 text-signal" : "text-muted"
                      }`}
                    >
                      {group.title}
                    </div>
                  ))}
                </div>

                <div className="bg-bg p-5">
                  <div className="grid grid-cols-3 gap-2 sm:grid-cols-6">
                    {[
                      ["전체 등록", "128", false],
                      ["보관중", "109", false],
                      ["부재", "12", false],
                      ["이상", "4", true],
                      ["타내무반", "2", true],
                      ["미등록", "1", true],
                    ].map(([label, value, warn]) => (
                      <div key={label as string} className={`rounded border p-3 ${warn ? "border-accent/50 bg-accent/10" : "border-border"}`}>
                        <div className="font-mono text-[10px] text-muted">{label}</div>
                        <div className={`mt-1 font-display text-lg font-bold ${warn ? "text-accent" : "text-signal"}`}>{value}</div>
                      </div>
                    ))}
                  </div>
                  <div className="mt-4 font-mono text-[10px] text-muted">내무반 현황</div>
                  <div className="mt-2 grid grid-cols-8 gap-1.5 sm:grid-cols-12">
                    {Array.from({ length: 36 }).map((_, i) => {
                      const warn = i % 11 === 0;
                      const alert = i === 20;
                      return (
                        <span
                          key={i}
                          className={`aspect-square rounded-sm ${
                            alert ? "bg-accent" : warn ? "bg-accent/40" : "bg-signal/30"
                          }`}
                        />
                      );
                    })}
                  </div>
                </div>

                <div className="bg-panel2/30 p-4">
                  <div className="font-mono text-[10px] text-muted">미확인 이벤트</div>
                  <div className="mt-2 space-y-2">
                    {[
                      ["14:02", "타내무반", "3소대 2호실"],
                      ["13:47", "이상", "1소대 4호실"],
                      ["13:20", "미등록", "게이트웨이 GW-07"],
                      ["12:58", "부재", "2소대 1호실"],
                    ].map(([time, type, place]) => (
                      <div key={time} className="rounded border border-border bg-bg px-3 py-2">
                        <div className="flex items-center justify-between font-mono text-[10px] text-muted">
                          <span>{time}</span>
                          <span className="text-accent">{type}</span>
                        </div>
                        <div className="mt-1 text-xs text-text">{place}</div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
              {consoleFeatures.map((feature, index) => (
                <div key={feature.title} className="border border-border bg-panel p-5">
                  <span className="font-mono text-xs text-signal">0{index + 1}</span>
                  <h3 className="mt-4 font-display text-sm font-bold">{feature.title}</h3>
                  <p className="mt-2 text-xs leading-relaxed text-muted">{feature.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="section-divider py-24">
          <div className="mx-auto max-w-6xl px-6">
            <div className="max-w-2xl">
              <p className="eyebrow mb-4">WHY SMARTVAULT</p>
              <h2 className="font-display text-3xl font-bold md:text-4xl">현장 운영의 부담을 시스템으로 옮깁니다</h2>
              <p className="mt-5 leading-relaxed text-muted">
                단순 출입 기록만으로는 지금 실제로 보관 중인지 알기 어렵고, 인터넷이 없는 부대
                환경에서는 중앙 시스템 장애가 곧 현장 마비로 이어질 수 있습니다.
              </p>
            </div>
            <div className="mt-12 grid gap-4 md:grid-cols-3">
              {[
                ["01", "정확한 재실 판단", "인식 오류를 걸러내 실제 보관 여부를 신뢰성 있게 판단합니다."],
                ["02", "유연한 정책 운영", "반복 스케줄과 상황별 예외, 긴급 개폐를 함께 안전하게 운영합니다."],
                ["03", "폐쇄망 안정 운영", "인터넷 연결 없이도 현장에서 자율적으로 동작합니다."],
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

        <section id="features" className="section-divider bg-panel2/50 py-24">
          <div className="mx-auto max-w-6xl px-6">
            <p className="eyebrow mb-4">CORE FEATURES</p>
            <div className="flex flex-col justify-between gap-5 md:flex-row md:items-end">
              <h2 className="max-w-xl font-display text-3xl font-bold md:text-4xl">인식부터 관제까지, 여섯 가지 핵심 기능</h2>
              <p className="max-w-sm text-sm leading-relaxed text-muted">보관함 인식 장비부터 정책 제어, 관제 대시보드까지 하나의 시스템으로 통합합니다.</p>
            </div>
            <div className="mt-12 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
              {features.map((feature, index) => (
                <article key={feature.code} className="group border border-border bg-bg p-6 transition-colors hover:border-accent/70">
                  <div className="flex items-center justify-between">
                    <span className="font-mono text-xs text-signal">{feature.code}</span>
                    <span className="font-mono text-xs text-muted">0{index + 1}</span>
                  </div>
                  <h3 className="mt-10 font-display text-xl font-bold">{feature.title}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-muted">{feature.description}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="section-divider py-24">
          <div className="mx-auto max-w-6xl px-6">
            <p className="eyebrow mb-4">HOW IT WORKS</p>
            <h2 className="font-display text-3xl font-bold md:text-4xl">7단계 운영 파이프라인</h2>
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
                <p className="eyebrow mb-4">ROADMAP</p>
                <h2 className="font-display text-3xl font-bold md:text-4xl">AI로 확장하는 다음 단계</h2>
              </div>
              <p className="max-w-md text-sm leading-relaxed text-muted">현장 데이터가 쌓일수록 시스템이 스스로 더 정확해지고, 관리자의 판단을 돕는 방향으로 고도화합니다.</p>
            </div>
            <div className="mt-12 grid gap-px overflow-hidden border border-border bg-border sm:grid-cols-2 lg:grid-cols-4">
              {roadmap.map(([title, description]) => (
                <div key={title} className="bg-bg p-6">
                  <strong className="font-display text-lg font-bold text-signal">{title}</strong>
                  <p className="mt-3 text-xs leading-relaxed text-muted">{description}</p>
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
                <h2 className="font-display text-3xl font-bold">함께 도입을 검토하겠습니다</h2>
                <p className="mt-4 max-w-xl text-sm leading-relaxed text-muted">군부대, 학원 등 스마트폰 사용시간 관리가 필요한 현장에 맞춘 SmartVault 도입을 제안드립니다.</p>
              </div>
              <a href="/#contact" className="mt-8 inline-flex shrink-0 rounded-md bg-accent px-6 py-3 text-sm font-medium text-text transition-colors hover:bg-accent/90 md:mt-0">
                도입 문의하기 <span className="ml-3">↗</span>
              </a>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
