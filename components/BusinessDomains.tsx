import { businessDomains } from "@/lib/content";

export default function BusinessDomains() {
  return (
    <section id="business" className="section-divider py-24">
      <div className="mx-auto max-w-6xl px-6">
        <p className="eyebrow mb-4">BUSINESS DOMAINS</p>
        <h2 className="font-display font-bold text-3xl md:text-4xl mb-4 max-w-xl">
          지식에서 시스템까지, 하나의 그룹이 잇습니다
        </h2>
        <p className="mb-14 max-w-2xl text-muted text-sm md:text-base leading-relaxed">
          KCP Holdings가 사업 기획과 컨설팅을 맡고, 그룹사 Smart-E · Smart-X가
          엔지니어링과 솔루션 개발을 담당합니다.
        </p>
        <div className="grid md:grid-cols-3 gap-6">
          {businessDomains.map((s) => (
            <div
              key={s.title}
              className="rounded-lg border border-border bg-panel p-7 hover:border-accent/60 transition-colors flex flex-col"
            >
              <div className="flex items-center justify-between">
                <span className="eyebrow">{s.tag}</span>
                <span className="font-mono text-[10px] tracking-wide text-muted border border-border rounded px-2 py-0.5">
                  {s.owner}
                </span>
              </div>
              <h3 className="mt-4 font-display font-bold text-xl">{s.title}</h3>
              <p className="mt-3 text-sm text-muted leading-relaxed">{s.description}</p>
              <ul className="mt-5 space-y-2 border-t border-border pt-5">
                {s.points.map((p) => (
                  <li key={p} className="flex items-center gap-2 text-xs font-mono text-muted">
                    <span className="h-1 w-1 rounded-full bg-signal" />
                    {p}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
