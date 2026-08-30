import { useEffect, useState } from 'react';

type HeaderProps = {
  onCTA: () => void;
};

export default function Header({ onCTA }: HeaderProps) {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-40 transition-all duration-300 ${
        scrolled
          ? 'border-b border-ink-200 bg-ink/80 backdrop-blur-md'
          : 'border-b border-transparent'
      }`}
    >
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <span className="text-sm font-semibold tracking-tight text-bone">Meridian Automation</span>
        <button
          onClick={onCTA}
          className="rounded-lg border border-ink-400 px-4 py-2 text-xs font-semibold text-bone transition-colors hover:border-accent hover:text-accent"
        >
          Request an Automation Audit
        </button>
      </div>
    </header>
  );
}
