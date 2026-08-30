import CTAButton from './CTAButton';
import Reveal from './Reveal';

type AuditOfferProps = {
  onCTA: () => void;
};

const includes = [
  {
    title: 'A review of your current workflows',
    body: 'We look at where your team spends time on manual, repeatable work — and where information gets stuck moving between tools.',
  },
  {
    title: '2\u20133 specific automation opportunities',
    body: 'Not a vague list of possibilities. Concrete processes we\u2019d automate first, and roughly what each would take.',
  },
  {
    title: 'A plain-language summary of what\u2019s possible',
    body: 'What we\u2019d build, what it would take, and what it wouldn\u2019t touch. Written so you can decide on your own.',
  },
];

export default function AuditOffer({ onCTA }: AuditOfferProps) {
  return (
    <section className="border-t border-ink-200 py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-6">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-5">
            <Reveal>
              <p className="text-xs font-medium uppercase tracking-widest text-accent">The offer</p>
              <h2 className="mt-3 text-3xl font-semibold leading-tight tracking-tight text-bone text-balance sm:text-4xl">
                Start with an Audit
              </h2>
              <p className="mt-5 text-lg leading-relaxed text-bone-muted text-pretty">
                Before any conversation, we review how your team works and where time is being lost. You
                get a short, specific write-up of what we'd automate first.
              </p>
              <div className="mt-8 rounded-xl border border-accent/25 bg-accent/[0.04] p-5">
                <p className="text-sm leading-relaxed text-bone">
                  The audit has value whether or not you work with us further. It's yours to keep.
                </p>
              </div>
              <div className="mt-8">
                <CTAButton onClick={onCTA} />
              </div>
            </Reveal>
          </div>

          <div className="lg:col-span-7">
            <ol className="space-y-px overflow-hidden rounded-2xl border border-ink-200 bg-ink-200">
              {includes.map((item, i) => (
                <Reveal key={item.title} delay={i * 100}>
                  <li className="group flex gap-5 bg-ink p-7 transition-colors duration-300 hover:bg-ink-50 sm:p-8">
                    <span className="flex h-8 w-8 flex-none items-center justify-center rounded-lg border border-ink-300 bg-ink-50 text-sm font-semibold text-accent transition-colors duration-300 group-hover:border-accent/30">
                      {i + 1}
                    </span>
                    <div>
                      <h3 className="text-base font-semibold text-bone">{item.title}</h3>
                      <p className="mt-2 text-sm leading-relaxed text-bone-muted">{item.body}</p>
                    </div>
                  </li>
                </Reveal>
              ))}
            </ol>
          </div>
        </div>
      </div>
    </section>
  );
}
