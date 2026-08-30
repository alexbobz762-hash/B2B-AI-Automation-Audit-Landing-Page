import StatCard from './StatCard';
import Reveal from './Reveal';

export default function CredibilitySignals() {
  return (
    <section className="border-t border-ink-200 bg-ink-50/30 py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-6">
        <Reveal>
          <div className="max-w-2xl">
            <p className="text-xs font-medium uppercase tracking-widest text-accent">Track record</p>
            <h2 className="mt-3 text-3xl font-semibold leading-tight tracking-tight text-bone text-balance sm:text-4xl">
              Specific work, not vague promises
            </h2>
            <p className="mt-5 text-lg leading-relaxed text-bone-muted text-pretty">
              A few results from recent engagements — anonymized, but real.
            </p>
          </div>
        </Reveal>

        <div className="mt-14 grid grid-cols-1 gap-5 sm:grid-cols-3">
          <StatCard
            countTo={40}
            suffix="%"
            label="less manual data entry"
            context="for a 12-person operations team"
          />
          <StatCard
            countTo={6}
            suffix=" hrs"
            label="of weekly reporting removed"
            context="through a single automated workflow"
            delay={100}
          />
          <StatCard
            staticValue="2 days \u2192 20 min"
            label="invoice processing time"
            context="from intake to approval"
            delay={200}
          />
        </div>

        <div className="mt-12 grid grid-cols-1 gap-px overflow-hidden rounded-2xl border border-ink-200 bg-ink-200 sm:grid-cols-2">
          <Reveal>
            <div className="bg-ink p-8 sm:p-10">
              <p className="text-2xl font-semibold tracking-tight text-bone">8+ years</p>
              <p className="mt-2 text-sm leading-relaxed text-bone-muted">
                Working inside business operations — building systems, cleaning up data, and removing
                the manual steps that quietly drain a team's week.
              </p>
            </div>
          </Reveal>
          <Reveal delay={100}>
            <div className="bg-ink p-8 sm:p-10">
              <p className="text-2xl font-semibold tracking-tight text-bone">120+ workflows</p>
              <p className="mt-2 text-sm leading-relaxed text-bone-muted">
                Built and shipped across operations, finance, reporting, and customer hand-offs — the
                unglamorous plumbing that makes a business run smoothly.
              </p>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
