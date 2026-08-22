import { solutions } from "@/lib/content";

export default function Solutions() {
  return (
    <section id="solutions" className="section-divider py-24">
      <div className="mx-auto max-w-6xl px-6">
        <p className="eyebrow mb-4">CORE SOLUTIONS</p>
        <h2 className="font-display font-bold text-3xl md:text-4xl mb-14 max-w-xl">
          세 가지 영역, 하나의 개발 방식
        </h2>
        <div className="grid md:grid-cols-3 gap-6">
          {solutions.map((s) => (
            <div
              key={s.tag}
              className="rounded-lg border border-border bg-panel p-7 hover:border-accent/60 transition-colors"
            >
              <span className="eyebrow">{s.tag}</span>
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
