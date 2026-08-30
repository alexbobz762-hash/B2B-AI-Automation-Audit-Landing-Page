import CTAButton from './CTAButton';

type HeroProps = {
  onCTA: () => void;
};

export default function Hero({ onCTA }: HeroProps) {
  return (
    <section className="relative overflow-hidden">
      <div className="pointer-events-none absolute inset-0 bg-dot-grid bg-grid-sm opacity-60" />
      <div className="pointer-events-none absolute inset-x-0 top-0 h-64 bg-gradient-to-b from-ink-50/40 to-transparent" />

      <div className="relative mx-auto flex max-w-4xl flex-col items-center px-6 pb-28 pt-36 text-center sm:pt-44 sm:pb-36">
        <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-ink-300 bg-ink-50/60 px-4 py-1.5 text-xs font-medium text-bone-muted animate-fade-up">
          <span className="h-1.5 w-1.5 rounded-full bg-accent" />
          Free Automation Audit — no pitch, no obligation
        </div>

        <h1
          className="max-w-3xl text-4xl font-semibold leading-[1.1] tracking-tightest text-bone text-balance animate-fade-up sm:text-6xl"
          style={{ animationDelay: '60ms' }}
        >
          Your team is capable of more than copy-pasting between spreadsheets.
        </h1>

        <p
          className="mt-7 max-w-2xl text-lg leading-relaxed text-bone-muted text-pretty animate-fade-up sm:text-xl"
          style={{ animationDelay: '120ms' }}
        >
          We build automation around the workflows you already run — connecting the tools your team
          uses so information moves on its own. No new platform to learn, no overhaul. Just less
          manual work, quietly removed.
        </p>

        <div
          className="mt-10 flex flex-col items-center gap-4 animate-fade-up"
          style={{ animationDelay: '180ms' }}
        >
          <CTAButton onClick={onCTA} className="w-full sm:w-auto" />
          <p className="text-xs text-bone-faint">60 seconds to fill out. We review before we reach out.</p>
        </div>
      </div>

      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-ink-300 to-transparent" />
    </section>
  );
}
