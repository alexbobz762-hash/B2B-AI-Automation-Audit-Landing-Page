type SectionHeadingProps = {
  eyebrow?: string;
  title: string;
  className?: string;
};

export default function SectionHeading({ eyebrow, title, className = '' }: SectionHeadingProps) {
  return (
    <div className={className}>
      {eyebrow && (
        <p className="text-xs font-medium uppercase tracking-widest text-accent">{eyebrow}</p>
      )}
      <h2 className="mt-3 text-3xl font-semibold leading-tight tracking-tight text-bone text-balance sm:text-4xl">
        {title}
      </h2>
    </div>
  );
}
