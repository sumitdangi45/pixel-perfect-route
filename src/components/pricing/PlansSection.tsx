import { useState } from "react";
import { ArrowRight, Check, Crown, Gift, Zap } from "lucide-react";
import { cn } from "@/lib/utils";

const industries = [
  { emoji: "🌟", label: "Any Business / Industry", who: ["businesses", "businesses", "brands"] },
  { emoji: "🏥", label: "Health & Clinics", who: ["clinics & doctors", "clinics & hospitals", "multi-branch clinics"] },
  { emoji: "🎓", label: "EdTech & Coaching", who: ["tutors & coaching", "coaching institutes", "ed-tech brands"] },
  { emoji: "🏋️", label: "Gym & Fitness", who: ["trainers & studios", "gyms & studios", "fitness chains"] },
  { emoji: "💇", label: "Salons & Spas", who: ["salons & spas", "salon & spa brands", "salon chains"] },
  { emoji: "🏢", label: "Services & Firms", who: ["consultants & firms", "agencies & firms", "large firms"] },
  { emoji: "🛍️", label: "Retail & Wholesale", who: ["local shops", "retail stores", "retail chains"] },
];

type Currency = "INR" | "USD";

const plans = [
  {
    name: "BASIC PLAN",
    monthly: { INR: 999, USD: 12 },
    tag: "DIGITAL PRESENCE + BASIC MANAGEMENT",
    desc: (w: string) =>
      `Best for small ${w} & individual professionals who want to establish a credible online presence without upfront costs.`,
    features: [
      "Professional 5-page website",
      "Mobile responsive design",
      "Free domain & hosting",
      "Contact & enquiry forms",
      "Google Business setup",
      "Basic client management",
      "Email support",
    ],
    cta: "Get Started",
  },
  {
    name: "STANDARD PLAN",
    popular: true,
    monthly: { INR: 2499, USD: 30 },
    tag: "DIGITAL + AUTOMATION + OPERATIONS",
    desc: (w: string) =>
      `Best for growing ${w} that want to automate everyday operations, reduce no-shows, and accept online payments.`,
    features: [
      "Everything in Basic",
      "Online booking & appointments",
      "WhatsApp & SMS reminders",
      "Online payment gateway",
      "CRM & client records",
      "Monthly performance reports",
      "Priority support",
    ],
    cta: "Get Started",
  },
  {
    name: "PREMIUM PLAN",
    premium: true,
    monthly: { INR: 8499, USD: 99 },
    tag: "DIGITAL + AUTOMATION + GROWTH + AI",
    desc: (w: string) =>
      `Best for established ${w}, high-volume centers & ambitious brands that want aggressive growth, automated reviews, and intelligent AI automation.`,
    features: [
      "Everything in Standard",
      "AI chatbot & lead assistant",
      "Automated Google reviews",
      "Marketing automation & campaigns",
      "Advanced analytics dashboard",
      "Dedicated account manager",
      "24/7 premium support",
    ],
    cta: "Contact Sales",
  },
];

function fmt(n: number, c: Currency) {
  return c === "INR" ? `₹${n.toLocaleString("en-IN")}` : `$${n.toLocaleString("en-US")}`;
}

export function PlansSection() {
  const [industry, setIndustry] = useState(0);
  const [annual, setAnnual] = useState(true);
  const [currency, setCurrency] = useState<Currency>("INR");

  return (
    <section className="mx-auto mt-16 max-w-[1520px] pb-10 text-center sm:mt-24">
      <span className="inline-flex rounded-full border border-brand/20 bg-brand-soft px-5 py-1.5 text-[15px] font-semibold text-brand sm:text-[17px]">
        Annual Value Packages
      </span>
      <h2 className="mt-5 text-[34px] font-bold leading-tight text-brand-dark sm:text-[50px]">
        Tailored To Your Business
      </h2>
      <p className="mx-auto mt-5 max-w-[760px] text-[17px] font-light leading-[1.6] text-ink-soft sm:text-[23px]">
        Zero heavy upfront development costs. Complete website, client management, automation, and
        ongoing support with flexible billing options.
      </p>

      <div className="mx-auto mt-8 flex max-w-[900px] flex-wrap justify-center gap-3">
        {industries.map((it, i) => (
          <button
            key={it.label}
            onClick={() => setIndustry(i)}
            className={cn(
              "inline-flex items-center gap-2 rounded-full border px-4 py-2 text-[15px] font-medium transition-colors sm:px-5 sm:py-2.5 sm:text-[17px]",
              industry === i
                ? "border-transparent text-brand-foreground shadow-cta"
                : "border-border bg-card text-ink hover:bg-brand-soft",
            )}
            style={industry === i ? { backgroundImage: "var(--gradient-brand)" } : undefined}
          >
            <span aria-hidden>{it.emoji}</span>
            {it.label}
          </button>
        ))}
      </div>
      <p className="mt-4 text-[13px] italic text-ink-soft sm:text-[14px]">
        *Have a custom business model? We customize all features, forms, and workflows according to
        your specific requirements.
      </p>

      <div className="mt-12 flex flex-wrap items-center justify-center gap-6">
        <div className="inline-flex rounded-full border border-border bg-muted p-1">
          <button
            onClick={() => setAnnual(false)}
            className={cn(
              "rounded-full px-6 py-3 text-[16px] font-semibold",
              !annual ? "text-brand-foreground shadow-cta" : "text-ink",
            )}
            style={!annual ? { backgroundImage: "var(--gradient-brand)" } : undefined}
          >
            Monthly Billing
          </button>
          <button
            onClick={() => setAnnual(true)}
            className={cn(
              "inline-flex items-center gap-2 rounded-full px-6 py-3 text-[16px] font-semibold",
              annual ? "text-brand-foreground shadow-cta" : "text-ink",
            )}
            style={annual ? { backgroundImage: "var(--gradient-brand)" } : undefined}
          >
            Annual Billing
            <span className="rounded-full bg-card px-2 py-0.5 text-[11px] font-bold text-brand">
              2 MOS FREE
            </span>
          </button>
        </div>
        <div className="flex items-center gap-3">
          <span className="text-[14px] font-semibold tracking-[0.12em] text-ink-soft">CURRENCY:</span>
          <div className="inline-flex rounded-full border border-border bg-muted p-1">
            {(["INR", "USD"] as Currency[]).map((c) => (
              <button
                key={c}
                onClick={() => setCurrency(c)}
                className={cn(
                  "rounded-full px-4 py-2 text-[14px] font-bold",
                  currency === c ? "text-brand-foreground" : "text-ink",
                )}
                style={currency === c ? { backgroundImage: "var(--gradient-brand)" } : undefined}
              >
                {c === "INR" ? "INR (₹)" : "USD ($)"}
              </button>
            ))}
          </div>
        </div>
      </div>

      <div className="mt-12 grid gap-8 text-left lg:grid-cols-3 lg:gap-10">
        {plans.map((p, idx) => {
          const m = p.monthly[currency];
          const price = annual ? m * 10 : m;
          const save = m * 12 - m * 10;
          return (
            <article
              key={p.name}
              className={cn(
                "relative overflow-hidden rounded-[28px] bg-card p-7 sm:p-10",
                p.popular ? "border-2 border-brand shadow-card-lg lg:-mt-2" : "border border-border shadow-card",
              )}
            >
              {p.popular && (
                <span
                  className="absolute right-0 top-0 inline-flex items-center gap-1.5 rounded-bl-[18px] px-6 py-2 text-[14px] font-bold text-brand-foreground"
                  style={{ backgroundImage: "var(--gradient-brand)" }}
                >
                  <Zap className="h-4 w-4 fill-current" /> MOST POPULAR
                </span>
              )}
              <div className={cn("flex items-center justify-between gap-3", p.popular && "mt-4 justify-start")}>
                <span
                  className={cn(
                    "inline-flex items-center gap-2 rounded-full px-4 py-1.5 text-[15px] font-bold tracking-wide",
                    p.popular ? "bg-brand-soft text-brand" : p.premium ? "bg-gold-soft text-gold" : "bg-muted text-ink",
                  )}
                >
                  {p.premium && <Crown className="h-4 w-4" />}
                  {p.name}
                </span>
                {annual && (
                  <span className="inline-flex items-center gap-1.5 rounded-full border border-success/30 bg-success-soft px-3 py-1 text-[13px] font-bold text-success">
                    <Gift className="h-3.5 w-3.5" /> 2 Mos Free
                  </span>
                )}
              </div>
              <p className="mt-6">
                <span className="text-[44px] font-extrabold tracking-tight text-ink sm:text-[58px]">
                  {fmt(price, currency)}
                </span>
                <span className="ml-1 text-[18px] text-ink-soft">/ {annual ? "year" : "month"}</span>
              </p>
              {annual ? (
                <p className="text-[14px] sm:text-[15px]">
                  <span className="font-semibold text-success">
                    Save {fmt(save, currency)} (2 Mos Free)
                  </span>
                  <span className="text-ink-soft"> • Equivalent to {fmt(Math.round(price / 12), currency)}/mo</span>
                </p>
              ) : (
                <p className="text-[14px] text-ink-soft sm:text-[15px]">
                  Billed monthly • Switch to annual & get 2 months free
                </p>
              )}
              <p className="mt-6 text-[15px] font-bold text-brand">{p.tag}</p>
              <p className="mt-4 text-[16px] leading-[1.75] text-ink-soft sm:text-[17px]">
                {p.desc(industries[industry]?.who[idx] ?? "businesses")}
              </p>
              <hr className="my-7 border-border" />
              <ul className="space-y-3.5">
                {p.features.map((f) => (
                  <li key={f} className="flex items-start gap-3 text-[15px] text-ink sm:text-[16px]">
                    <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-success-soft text-success">
                      <Check className="h-3 w-3" strokeWidth={3.5} />
                    </span>
                    {f}
                  </li>
                ))}
              </ul>
              <a
                href="#"
                className={cn(
                  "mt-8 flex h-[54px] items-center justify-center gap-2 rounded-[12px] text-[17px] font-semibold transition-transform hover:-translate-y-0.5",
                  p.popular ? "text-brand-foreground shadow-cta" : "border border-brand/40 text-brand hover:bg-brand-soft",
                )}
                style={p.popular ? { backgroundImage: "var(--gradient-brand)" } : undefined}
              >
                {p.cta} <ArrowRight className="h-[18px] w-[18px]" strokeWidth={2.5} />
              </a>
            </article>
          );
        })}
      </div>
    </section>
  );
}
