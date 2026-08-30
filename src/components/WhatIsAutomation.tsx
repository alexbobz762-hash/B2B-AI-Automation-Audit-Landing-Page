import { Workflow, Clock, Link2 } from 'lucide-react';
import Reveal from './Reveal';

export default function WhatIsAutomation() {
  const points = [
    {
      icon: Link2,
      title: 'Tools that talk to each other',
      body: 'Automation means connecting the tools you already use so information moves without someone manually moving it. A sale in one system shows up in the next without a copy-paste in between.',
    },
    {
      icon: Clock,
      title: 'Time returned, not just saved',
      body: 'A task that takes your team three hours on Friday happens on its own by Monday morning. The work still gets done — it just stops requiring a person to shepherd it through.',
    },
    {
      icon: Workflow,
      title: 'Built around how you work',
      body: "This isn\u2019t a new platform your team has to learn. It\u2019s a layer underneath the tools you already use, quietly handling the repetitive steps in between.",
    },
  ];

  return (
    <section className="border-t border-ink-200 bg-ink-50/30 py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-6">
        <Reveal>
          <div className="max-w-2xl">
            <p className="text-xs font-medium uppercase tracking-widest text-accent">In practice</p>
            <h2 className="mt-3 text-3xl font-semibold leading-tight tracking-tight text-bone text-balance sm:text-4xl">
              What automation actually means for a business
            </h2>
            <p className="mt-5 text-lg leading-relaxed text-bone-muted text-pretty">
              Not a buzzword, not a platform — just the quiet removal of manual work from the spaces
              between your tools.
            </p>
          </div>
        </Reveal>

        <div className="mt-14 grid grid-cols-1 gap-px overflow-hidden rounded-2xl border border-ink-200 bg-ink-200 sm:grid-cols-3">
          {points.map((p, i) => {
            const Icon = p.icon;
            return (
              <Reveal key={p.title} delay={i * 100}>
                <div className="group h-full bg-ink p-8 transition-colors duration-300 hover:bg-ink-50 sm:p-10">
                  <div className="flex h-11 w-11 items-center justify-center rounded-xl border border-ink-300 bg-ink-50 text-accent transition-colors duration-300 group-hover:border-accent/30">
                    <Icon className="h-5 w-5" strokeWidth={1.5} />
                  </div>
                  <h3 className="mt-6 text-lg font-semibold text-bone">{p.title}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-bone-muted">{p.body}</p>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
