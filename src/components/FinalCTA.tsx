import CTAButton from './CTAButton';
import Reveal from './Reveal';

type FinalCTAProps = {
  onCTA: () => void;
};

export default function FinalCTA({ onCTA }: FinalCTAProps) {
  return (
    <section className="border-t border-ink-200 py-24 sm:py-32">
      <div className="mx-auto max-w-3xl px-6 text-center">
        <Reveal>
          <h2 className="text-3xl font-semibold leading-tight tracking-tight text-bone text-balance sm:text-5xl">
            The first step is just a conversation about where your time goes.
          </h2>
          <p className="mt-6 text-lg leading-relaxed text-bone-muted text-pretty">
            Request an audit. We'll review your workflows and send back specific recommendations —
            whether or not we ever work together.
          </p>
          <div className="mt-10 flex justify-center">
            <CTAButton onClick={onCTA} />
          </div>
        </Reveal>
      </div>

      <footer className="mx-auto mt-24 max-w-6xl border-t border-ink-200 px-6 pt-10">
        <div className="flex flex-col items-center gap-2 text-center">
          <p className="text-sm font-medium text-bone">Meridian Automation</p>
          <p className="text-xs text-bone-faint">
            Building the quiet systems that keep a business running.
          </p>
          <p className="mt-4 text-xs text-bone-faint/70">© {new Date().getFullYear()} Meridian Automation</p>
        </div>
      </footer>
    </section>
  );
}
