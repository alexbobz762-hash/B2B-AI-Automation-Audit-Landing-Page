type CTAButtonProps = {
  onClick: () => void;
  label?: string;
  variant?: 'primary' | 'ghost';
  className?: string;
};

export default function CTAButton({
  onClick,
  label = 'Request an Automation Audit',
  variant = 'primary',
  className = '',
}: CTAButtonProps) {
  const base =
    'inline-flex items-center justify-center rounded-lg px-6 py-3.5 text-sm font-semibold transition-all duration-200 hover:scale-[1.02] active:scale-[0.98] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-ink';
  const styles =
    variant === 'primary'
      ? 'bg-accent text-ink hover:bg-accent-soft hover:shadow-lg hover:shadow-accent/20 focus:ring-accent/50'
      : 'border border-ink-400 text-bone hover:border-accent hover:text-accent focus:ring-accent/40';

  return (
    <button onClick={onClick} className={`${base} ${styles} ${className}`}>
      {label}
    </button>
  );
}
