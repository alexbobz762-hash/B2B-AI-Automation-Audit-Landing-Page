import Reveal from './Reveal';

const steps = [
  {
    title: 'You submit the form',
    detail: 'Takes about 60 seconds. Just enough for us to understand the shape of your operations.',
  },
  {
    title: 'We review your situation',
    detail: 'Before we even speak, we look at what you shared and think through where the clearest wins are.',
  },
  {
    title: 'A short intro call',
    detail: '20\u201330 minutes. No sales pitch \u2014 just questions and context so we can give you something useful.',
  },
  {
    title: 'You receive clear recommendations',
    detail: 'Specific, actionable, and yours to keep. What we\u2019d automate, in what order, and why.',
  },
];

export default function WhatHappensNext() {
  return (
    <section className="border-t border-ink-200 bg-ink-50/30 py-20 sm:py-28">
      <div className="mx-auto max-w-4xl px-6">
        <Reveal>
          <div className="max-w-2xl">
            <p className="text-xs font-medium uppercase tracking-widest text-accent">The process</p>
            <h2 className="mt-3 text-3xl font-semibold leading-tight tracking-tight text-bone text-balance sm:text-4xl">
              What happens next
            </h2>
          </div>
        </Reveal>

        <ol className="mt-14 space-y-0">
          {steps.map((s, i) => (
            <Reveal key={s.title} delay={i * 100}>
              <li className="relative flex gap-6 pb-12 last:pb-0">
                <div className="flex flex-col items-center">
                  <span className="flex h-10 w-10 flex-none items-center justify-center rounded-full border border-accent/30 bg-ink-50 text-sm font-semibold text-accent">
                    {i + 1}
                  </span>
                  {i < steps.length - 1 && <span className="mt-2 w-px flex-1 bg-ink-300" />}
                </div>
                <div className="pt-1.5 pb-2">
                  <h3 className="text-lg font-semibold text-bone">{s.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-bone-muted">{s.detail}</p>
                </div>
              </li>
            </Reveal>
          ))}
        </ol>

        <Reveal>
          <div className="mt-10 rounded-xl border border-ink-200 bg-ink-50 p-6">
            <p className="text-base leading-relaxed text-bone">
              Then you decide what to do next. No pressure, no follow-up sequence.
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
