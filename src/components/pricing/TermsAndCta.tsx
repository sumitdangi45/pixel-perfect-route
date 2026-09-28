import { CreditCard, Phone, ShieldCheck, Sparkles, MessageCircle } from "lucide-react";

const apiCosts = [
  "WhatsApp API / Meta charges (official message templates)",
  "Payment Gateway convenience/transaction charges (per txn)",
  "SMS / OTP gateway charges (if applicable)",
  "AI API tokens (OpenAI, Gemini, etc. for custom AI bot)",
];
const terms = [
  "Monthly subscription must be paid 100% in advance for each billing month.",
  "Zero lock-in period — you retain full ownership of your data and customer records.",
  "All cloud hosting, security patches, backups, and maintenance remain active during subscription.",
  "Custom feature expansions or unique workflow additions can be integrated anytime.",
];

function Bullets({ items }: { items: string[] }) {
  return (
    <ul className="space-y-2.5">
      {items.map((t) => (
        <li key={t} className="flex gap-3 text-[15px] leading-snug text-ink-soft">
          <span className="mt-[7px] h-[7px] w-[7px] shrink-0 rounded-full bg-brand" />
          {t}
        </li>
      ))}
    </ul>
  );
}

export function TermsAndCta() {
  return (
    <section className="mx-auto max-w-[1520px] px-5 sm:px-10">
      <div className="grid gap-8 md:grid-cols-2">
        <div className="rounded-[24px] border border-border bg-card p-8 sm:px-9 sm:py-10">
          <h3 className="flex items-center gap-3 text-[20px] font-bold text-ink">
            <CreditCard className="h-6 w-6 text-brand" /> Third-Party / API Costs (Paid by Client)
          </h3>
          <p className="mb-5 mt-4 text-[17px] leading-relaxed text-ink-soft">
            To keep subscription costs minimal, external provider charges are billed directly as per actual usage:
          </p>
          <Bullets items={apiCosts} />
        </div>
        <div className="rounded-[24px] border border-border bg-card p-8 sm:px-9 sm:py-10">
          <h3 className="mb-5 flex items-center gap-3 text-[20px] font-bold text-ink">
            <ShieldCheck className="h-6 w-6 text-brand" /> Transparent Pricing & Service Terms
          </h3>
          <Bullets items={terms} />
        </div>
      </div>

      <div className="mt-16 flex flex-col gap-8 rounded-[28px] bg-[image:var(--gradient-cta-dark)] p-8 sm:px-12 sm:py-12 lg:flex-row lg:items-center lg:justify-between">
        <div className="max-w-[830px]">
          <span className="inline-flex items-center gap-2 rounded-full border border-brand/60 bg-brand/15 px-4 py-1.5 text-[14px] font-bold text-brand-light">
            <Sparkles className="h-4 w-4" /> 100% Custom Business Architecture
          </span>
          <h2 className="mt-4 text-[30px] font-extrabold leading-tight text-primary-foreground sm:text-[38px]">
            Have specific requirements for your business?
          </h2>
          <p className="mt-3 text-[17px] leading-relaxed text-primary-foreground/85">
            Every business is unique. Whether you need multi-branch operations, specific appointment slots, customized intake forms, or ERP integration — we tailor the entire system to match your daily workflow.
          </p>
        </div>
        <div className="flex flex-col gap-4 sm:flex-row">
          <a href="#" className="inline-flex h-[60px] items-center justify-center gap-2.5 whitespace-nowrap rounded-full bg-brand px-8 text-[17px] font-bold text-primary-foreground shadow-cta">
            <MessageCircle className="h-6 w-6" /> Discuss on WhatsApp
          </a>
          <a href="tel:07554601839" className="inline-flex h-[60px] items-center justify-center gap-2.5 whitespace-nowrap rounded-full border border-primary-foreground/20 bg-primary-foreground/10 px-8 text-[17px] font-bold text-primary-foreground">
            <Phone className="h-5 w-5" /> Call: 0755-4601839
          </a>
        </div>
      </div>
    </section>
  );
}
