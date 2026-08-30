import { useEffect, useState } from 'react';
import { X } from 'lucide-react';

type AuditModalProps = {
  open: boolean;
  onClose: () => void;
};

type FormData = {
  firstName: string;
  businessName: string;
  email: string;
  process: string;
};

const EMPTY: FormData = {
  firstName: '',
  businessName: '',
  email: '',
  process: '',
};

export default function AuditModal({ open, onClose }: AuditModalProps) {
  const [form, setForm] = useState<FormData>(EMPTY);
  const [submitted, setSubmitted] = useState(false);
  const [errors, setErrors] = useState<Partial<Record<keyof FormData, string>>>({});

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    document.addEventListener('keydown', onKey);
    document.body.style.overflow = 'hidden';
    return () => {
      document.removeEventListener('keydown', onKey);
      document.body.style.overflow = '';
    };
  }, [open, onClose]);

  if (!open) return null;

  const validate = () => {
    const next: Partial<Record<keyof FormData, string>> = {};
    if (!form.firstName.trim()) next.firstName = 'Please enter your first name.';
    if (!form.businessName.trim()) next.businessName = 'Please enter your business name.';
    if (!form.email.trim()) {
      next.email = 'Please enter your email.';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) {
      next.email = 'Please enter a valid email address.';
    }
    if (!form.process.trim()) next.process = 'A sentence or two is all we need.';
    setErrors(next);
    return Object.keys(next).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;
    console.log('Automation Audit request:', form);
    setSubmitted(true);
  };

  const handleClose = () => {
    setSubmitted(false);
    setForm(EMPTY);
    setErrors({});
    onClose();
  };

  const fieldClass = (name: keyof FormData) =>
    `w-full rounded-lg border bg-ink-200 px-4 py-3 text-bone placeholder:text-bone-faint transition-colors focus:outline-none focus:ring-1 ${
      errors[name]
        ? 'border-red-500/60 focus:border-red-500 focus:ring-red-500/40'
        : 'border-ink-400 focus:border-accent focus:ring-accent/40'
    }`;

  return (
    <div
      className="fixed inset-0 z-50 flex items-end justify-center bg-black/70 p-0 backdrop-blur-sm animate-fade-in sm:items-center sm:p-6"
      onClick={handleClose}
      role="dialog"
      aria-modal="true"
      aria-label="Request an Automation Audit"
    >
      <div
        className="relative w-full max-w-lg overflow-hidden rounded-t-2xl border border-ink-300 bg-ink-50 shadow-2xl animate-scale-in sm:rounded-2xl"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={handleClose}
          aria-label="Close"
          className="absolute right-4 top-4 z-10 rounded-md p-1.5 text-bone-muted transition-colors hover:bg-ink-300 hover:text-bone"
        >
          <X className="h-5 w-5" />
        </button>

        {submitted ? (
          <div className="flex min-h-[20rem] flex-col items-center justify-center px-6 py-12 text-center animate-fade-up">
            <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-full border border-accent/40 bg-accent/10">
              <span className="h-2 w-2 rounded-full bg-accent" />
            </div>
            <h3 className="text-xl font-semibold tracking-tight text-bone">
              Thanks — we'll be in touch within one business day.
            </h3>
            <p className="mt-3 max-w-sm text-sm leading-relaxed text-bone-muted">
              We'll review what you shared and reach out with a few specific questions before any
              conversation. No pitch, no follow-up sequence.
            </p>
            <button
              onClick={handleClose}
              className="mt-8 rounded-lg border border-ink-400 px-5 py-2.5 text-sm font-medium text-bone transition-colors hover:bg-ink-200"
            >
              Close
            </button>
          </div>
        ) : (
          <div className="px-6 py-7 sm:px-8 sm:py-8">
            <p className="text-xs font-medium uppercase tracking-widest text-accent">Automation Audit</p>
            <h3 className="mt-2 text-2xl font-semibold tracking-tight text-bone">
              Tell us a little about your operations
            </h3>
            <p className="mt-2 text-sm leading-relaxed text-bone-muted">
              Takes about 60 seconds. We review everything before we reach out.
            </p>

            <form onSubmit={handleSubmit} className="mt-6 space-y-4" noValidate>
              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                <div>
                  <label htmlFor="firstName" className="mb-1.5 block text-xs font-medium text-bone-muted">
                    First name
                  </label>
                  <input
                    id="firstName"
                    type="text"
                    autoComplete="given-name"
                    value={form.firstName}
                    onChange={(e) => setForm({ ...form, firstName: e.target.value })}
                    className={fieldClass('firstName')}
                    placeholder="Jordan"
                  />
                  {errors.firstName && (
                    <p className="mt-1.5 text-xs text-red-400">{errors.firstName}</p>
                  )}
                </div>
                <div>
                  <label htmlFor="businessName" className="mb-1.5 block text-xs font-medium text-bone-muted">
                    Business name
                  </label>
                  <input
                    id="businessName"
                    type="text"
                    autoComplete="organization"
                    value={form.businessName}
                    onChange={(e) => setForm({ ...form, businessName: e.target.value })}
                    className={fieldClass('businessName')}
                    placeholder="Northwind Co."
                  />
                  {errors.businessName && (
                    <p className="mt-1.5 text-xs text-red-400">{errors.businessName}</p>
                  )}
                </div>
              </div>

              <div>
                <label htmlFor="email" className="mb-1.5 block text-xs font-medium text-bone-muted">
                  Email
                </label>
                <input
                  id="email"
                  type="email"
                  autoComplete="email"
                  value={form.email}
                  onChange={(e) => setForm({ ...form, email: e.target.value })}
                  className={fieldClass('email')}
                  placeholder="jordan@northwind.co"
                />
                {errors.email && <p className="mt-1.5 text-xs text-red-400">{errors.email}</p>}
              </div>

              <div>
                <label htmlFor="process" className="mb-1.5 block text-xs font-medium text-bone-muted">
                  What's one process your team does manually that you wish you didn't have to?
                </label>
                <textarea
                  id="process"
                  rows={3}
                  value={form.process}
                  onChange={(e) => setForm({ ...form, process: e.target.value })}
                  className={`${fieldClass('process')} resize-none`}
                  placeholder="Every Friday someone spends the afternoon pulling numbers into a report..."
                />
                {errors.process && <p className="mt-1.5 text-xs text-red-400">{errors.process}</p>}
              </div>

              <button
                type="submit"
                className="w-full rounded-lg bg-accent px-5 py-3.5 text-sm font-semibold text-ink transition-colors hover:bg-accent-soft focus:outline-none focus:ring-2 focus:ring-accent/50 focus:ring-offset-2 focus:ring-offset-ink-50"
              >
                Request my Automation Audit
              </button>
              <p className="text-center text-xs text-bone-faint">
                We'll only use this to prepare your audit. No newsletters, no list.
              </p>
            </form>
          </div>
        )}
      </div>
    </div>
  );
}
