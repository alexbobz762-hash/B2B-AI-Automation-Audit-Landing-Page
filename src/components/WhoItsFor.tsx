import { Check, X } from 'lucide-react';
import Reveal from './Reveal';

const forYou = [
  'You run a real business with real operations',
  'Your team does repetitive manual work that slows things down',
  'You want to understand what\u2019s possible before committing to anything',
  'You\u2019re a founder or operator who values clarity over hype',
];

const notForYou = [
  'You\u2019re looking for a quick fix or off-the-shelf software',
  'You want results without any internal involvement',
  'You\u2019re not open to changing how some processes work',
  'You need something built and deployed tomorrow',
];

export default function WhoItsFor() {
  return (
    <section className="border-t border-ink-200 py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-6">
        <Reveal>
          <div className="max-w-2xl">
            <p className="text-xs font-medium uppercase tracking-widest text-accent">Honest fit</p>
            <h2 className="mt-3 text-3xl font-semibold leading-tight tracking-tight text-bone text-balance sm:text-4xl">
              Who this is for — and who it isn't
            </h2>
          </div>
        </Reveal>

        <div className="mt-12 grid grid-cols-1 gap-6 lg:grid-cols-2">
          <Reveal>
            <div className="group h-full rounded-2xl border border-accent/25 bg-accent/[0.04] p-8 transition-all duration-300 hover:border-accent/40 hover:bg-accent/[0.06] sm:p-10">
              <h3 className="text-sm font-semibold uppercase tracking-wider text-accent">This is for you if</h3>
              <ul className="mt-6 space-y-4">
                {forYou.map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <span className="mt-0.5 flex h-5 w-5 flex-none items-center justify-center rounded-full bg-accent/15 text-accent">
                      <Check className="h-3 w-3" strokeWidth={3} />
                    </span>
                    <span className="text-sm leading-relaxed text-bone">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>

          <Reveal delay={100}>
            <div className="group h-full rounded-2xl border border-ink-300 bg-ink-50 p-8 transition-all duration-300 hover:border-ink-400 hover:bg-ink-100 sm:p-10">
              <h3 className="text-sm font-semibold uppercase tracking-wider text-bone-faint">
                This probably isn't for you if
              </h3>
              <ul className="mt-6 space-y-4">
                {notForYou.map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <span className="mt-0.5 flex h-5 w-5 flex-none items-center justify-center rounded-full bg-ink-300 text-bone-faint">
                      <X className="h-3 w-3" strokeWidth={2.5} />
                    </span>
                    <span className="text-sm leading-relaxed text-bone-muted">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
