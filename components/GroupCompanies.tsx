import { groupCompanies } from "@/lib/content";

export default function GroupCompanies() {
  return (
    <section id="group" className="section-divider py-24">
      <div className="mx-auto max-w-6xl px-6">
        <p className="eyebrow mb-4">GROUP COMPANIES</p>
        <h2 className="font-display font-bold text-3xl md:text-4xl mb-14 max-w-xl">
          KCP Holdings의 두 자회사
        </h2>
        <div className="grid md:grid-cols-2 gap-6">
          {groupCompanies.map((c) => (
            <div
              key={c.code}
              className="rounded-lg border border-border bg-panel2 p-8 hover:border-signal/60 transition-colors"
            >
              <div className="flex items-baseline gap-3">
                <h3 className="font-display font-bold text-2xl">{c.code}</h3>
                <span className="eyebrow">{c.tag}</span>
              </div>
              <p className="mt-4 text-sm text-muted leading-relaxed">{c.description}</p>
              <ul className="mt-6 space-y-2 border-t border-border pt-5">
                {c.focus.map((f) => (
                  <li key={f} className="flex items-center gap-2 text-xs font-mono text-muted">
                    <span className="h-1 w-1 rounded-full bg-accent" />
                    {f}
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
