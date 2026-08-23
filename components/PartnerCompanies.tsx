import { partnerCompanies } from "@/lib/content";

export default function PartnerCompanies() {
  return (
    <section id="partners" className="section-divider py-24">
      <div className="mx-auto max-w-6xl px-6">
        <p className="eyebrow mb-4">PARTNERS</p>
        <h2 className="font-display font-bold text-3xl md:text-4xl mb-14 max-w-xl">
          함께하는 협력사
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {partnerCompanies.map((c) => {
            const cardClasses =
              "rounded-lg border border-border bg-panel2 p-8 transition-colors block h-full" +
              (c.url ? " hover:border-signal/60 cursor-pointer" : " cursor-default");

            const cardContent = (
              <>
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
              </>
            );

            return c.url ? (
              <a
                key={c.code}
                href={c.url}
                target="_blank"
                rel="noopener noreferrer"
                className={cardClasses}
              >
                {cardContent}
              </a>
            ) : (
              <div key={c.code} className={cardClasses}>
                {cardContent}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
