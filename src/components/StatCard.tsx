import { useInView, useCountUp } from '@/hooks/useReveal';

type StatCardProps = {
  countTo?: number;
  prefix?: string;
  suffix?: string;
  staticValue?: string;
  label: string;
  context: string;
  delay?: number;
};

export default function StatCard({
  countTo,
  prefix = '',
  suffix = '',
  staticValue,
  label,
  context,
  delay = 0,
}: StatCardProps) {
  const { ref, inView } = useInView<HTMLDivElement>();
  const count = useCountUp(countTo ?? 0, 1200, inView);

  return (
    <div
      ref={ref}
      className={`rounded-2xl border border-ink-200 bg-ink-50 p-8 transition-all duration-500 hover:border-accent/30 hover:bg-ink-100 ${
        inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
      }`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      <p className="text-3xl font-semibold tracking-tight text-accent sm:text-4xl">
        {staticValue ?? `${prefix}${count}${suffix}`}
      </p>
      <p className="mt-4 text-base font-medium text-bone">{label}</p>
      <p className="mt-1.5 text-sm text-bone-faint">{context}</p>
    </div>
  );
}
