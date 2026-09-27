import { createFileRoute } from "@tanstack/react-router";
import {
  ArrowRight,
  BadgeIndianRupee,
  BarChart3,
  Check,
  CircleCheck,
  Crown,
  Gem,
  Headphones,
  PlayCircle,
  ShieldCheck,
  Star,
  Users,
} from "lucide-react";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Pricing — Anni Web Solutions Pvt. Ltd." },
      {
        name: "description",
        content:
          "Simple, transparent pricing for startups, growing businesses and enterprises. No hidden charges, no surprises — just real value.",
      },
      { property: "og:title", content: "Pricing — Anni Web Solutions Pvt. Ltd." },
      {
        property: "og:description",
        content:
          "Plans for every stage of growth. Starter, Growth and Enterprise packages with transparent monthly pricing.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: PricingPage,
});

const navItems = [
  { label: "Prebuilt", active: false },
  { label: "Customized", active: false },
  { label: "AI Automation", active: false },
  { label: "Digital Marketing", active: false },
  { label: "Pricing", active: true },
  { label: "Contact Us", active: false },
];

const highlights = [
  { icon: BadgeIndianRupee, line1: "Affordable", line2: "Plans" },
  { icon: Gem, line1: "Feature-Rich", line2: "Solutions" },
  { icon: ShieldCheck, line1: "No Hidden", line2: "Charges" },
  { icon: Headphones, line1: "Dedicated", line2: "Support" },
];

const stats = [
  { icon: Users, value: "500+", label: "Happy Clients" },
  { icon: BarChart3, value: "1000+", label: "Projects Delivered" },
  { icon: Star, value: "4.9/5", label: "Client Satisfaction" },
  { icon: ShieldCheck, value: "100%", label: "Transparent Pricing" },
];

function PricingPage() {
  return (
    <div
      className="min-h-screen w-full overflow-x-hidden"
      style={{ background: "var(--gradient-hero)" }}
    >
      {/* Nav */}
      <header className="w-full bg-white">
        <div className="mx-auto flex h-[90px] max-w-[1536px] items-center justify-between px-[60px]">
          <a href="/" className="flex items-center gap-3">
            <svg width="40" height="40" viewBox="0 0 40 40" fill="none" aria-hidden="true">
              <path
                d="M19 4 3 34h9.5L21 16.5 27 30h-7l3.5 7H37L23.5 8 19 4Z"
                fill="url(#annigrad)"
              />
              <defs>
                <linearGradient id="annigrad" x1="3" y1="4" x2="37" y2="37">
                  <stop stopColor="#E0233B" />
                  <stop offset="1" stopColor="#8C1024" />
                </linearGradient>
              </defs>
            </svg>
            <span className="leading-none">
              <span className="block text-[34px] font-bold tracking-tight text-ink">Anni</span>
              <span className="mt-0.5 block text-[10.5px] font-bold tracking-[0.13em] text-ink">
                WEB SOLUTIONS PVT. LTD.
              </span>
            </span>
          </a>

          <nav className="hidden items-center gap-9 lg:flex">
            {navItems.map((item) => (
              <a
                key={item.label}
                href="#"
                className={
                  item.active
                    ? "relative py-[34px] text-[15px] font-medium text-brand after:absolute after:inset-x-0 after:bottom-0 after:h-[3px] after:rounded-full after:bg-brand after:content-['']"
                    : "py-[34px] text-[15px] font-normal text-ink transition-colors hover:text-brand"
                }
              >
                {item.label}
              </a>
            ))}
          </nav>

          <a
            href="#"
            className="inline-flex h-[54px] items-center gap-3 rounded-[10px] px-7 text-[16px] font-semibold text-brand-foreground shadow-cta transition-transform hover:-translate-y-0.5"
            style={{ backgroundImage: "var(--gradient-brand)" }}
          >
            Get a Free Quote
            <ArrowRight className="h-[18px] w-[18px]" strokeWidth={2.5} />
          </a>
        </div>
      </header>

      {/* Hero */}
      <main className="relative mx-auto max-w-[1536px] pl-[76px] pr-[60px]">
        <div className="grid items-start gap-10 pt-[60px] lg:grid-cols-[minmax(0,640px)_minmax(0,1fr)]">
          {/* Left */}
          <div>
            <span className="inline-flex items-center gap-2 rounded-full bg-brand-soft px-5 py-[10px] text-[15px] font-semibold text-brand">
              <TagIcon />
              Simple &amp; Transparent Pricing
            </span>

            <h1 className="mt-9 text-[80px] font-bold leading-[1.0] tracking-[-0.02em] text-ink">
              Plans for Every
              <br />
              <span className="text-brand-dark">Stage of Growth</span>
            </h1>

            <p className="mt-6 max-w-[620px] text-[19px] leading-[1.62] text-ink-soft">
              Whether you&apos;re a startup, a growing business, or an enterprise, we have the right
              plan for you. No hidden charges, no surprises — just real value.
            </p>

            <ul className="mt-9 flex flex-nowrap items-center gap-x-6">
              {highlights.map(({ icon: Icon, line1, line2 }) => (
                <li key={line1} className="flex items-center gap-3">
                  <span className="flex h-[48px] w-[48px] items-center justify-center rounded-full bg-brand-soft text-brand">
                    <Icon className="h-[19px] w-[19px]" strokeWidth={2} />
                  </span>
                  <span className="whitespace-nowrap text-[16px] font-normal leading-[1.45] text-ink">
                    {line1}
                    <br />
                    {line2}
                  </span>
                </li>
              ))}
            </ul>

            <div className="mt-10 flex flex-nowrap items-center gap-5">
              <a
                href="#"
                className="inline-flex h-[62px] shrink-0 items-center gap-4 rounded-[10px] px-7 text-[19px] font-semibold text-brand-foreground shadow-cta transition-transform hover:-translate-y-0.5"
                style={{ backgroundImage: "var(--gradient-brand)" }}
              >
                Get a Free Consultation
                <ArrowRight className="h-5 w-5" strokeWidth={2.5} />
              </a>
              <a
                href="#"
                className="inline-flex h-[62px] shrink-0 items-center gap-3 rounded-[10px] border border-brand/35 bg-white px-8 text-[19px] font-semibold text-ink transition-colors hover:bg-brand-soft"
              >
                <PlayCircle className="h-[26px] w-[26px] text-brand" strokeWidth={1.8} />
                Watch Pricing Guide
              </a>
            </div>
          </div>

          {/* Right: cards */}
          <div className="relative min-h-[660px]">
            <div
              aria-hidden="true"
              className="absolute left-1/2 top-[40px] h-[540px] w-[540px] -translate-x-1/2 rounded-full opacity-70"
              style={{
                background:
                  "radial-gradient(circle at 50% 50%, oklch(0.9 0.06 300 / .55), transparent 68%)",
              }}
            />

            {/* Handwriting top */}
            <div className="pointer-events-none absolute left-[120px] top-0 hidden w-[230px] rotate-[-6deg] text-center font-hand text-[30px] font-bold leading-[1.15] text-ink xl:block">
              Invest
              <br />
              in a Smarter
              <br />
              Tomorrow
            </div>
            <ArrowCurveDown className="absolute left-[330px] top-[52px] hidden text-ink xl:block" />
            <Scribble className="absolute left-[55px] top-[110px] hidden text-[#2b3a8f] xl:block" />
            <ScribbleRed className="absolute right-[8px] top-[70px] hidden text-brand xl:block" />

            <div className="relative flex items-start justify-center pt-[105px]">
              {/* Starter */}
              <article className="mt-[35px] w-[240px] -rotate-[5deg] rounded-[22px] bg-white p-7 shadow-card">
                <h3 className="text-[21px] font-bold text-ink">Starter</h3>
                <p className="mt-1 text-[13.5px] text-ink-soft">For Small Businesses</p>
                <p className="mt-4">
                  <span className="text-[30px] font-extrabold tracking-tight text-ink">₹2,999</span>
                  <span className="ml-1 text-[14px] font-medium text-ink-soft">/month</span>
                </p>
                <ul className="mt-5 space-y-[13px]">
                  {["Essenting Features", "Basic Support", "Standard Plugins", "Ideal for Startups"].map(
                    (f) => (
                      <li key={f} className="flex items-center gap-2.5 text-[14px] text-ink">
                        <span className="flex h-[17px] w-[17px] items-center justify-center rounded-[5px] bg-violet/85 text-violet-foreground">
                          <Check className="h-[11px] w-[11px]" strokeWidth={3.5} />
                        </span>
                        {f}
                      </li>
                    ),
                  )}
                </ul>
                <a
                  href="#"
                  className="mt-6 flex h-[46px] items-center justify-center gap-2 rounded-[10px] border border-brand/40 text-[15px] font-semibold text-brand transition-colors hover:bg-brand-soft"
                >
                  Get Started
                  <ArrowRight className="h-4 w-4" strokeWidth={2.5} />
                </a>
              </article>

              {/* Growth */}
              <article className="relative z-10 -mx-4 w-[272px] rounded-[26px] bg-white p-8 pt-12 text-center shadow-card-lg">
                <span
                  className="absolute -top-[22px] left-1/2 inline-flex h-[44px] -translate-x-1/2 items-center gap-2 whitespace-nowrap rounded-full px-6 text-[15px] font-semibold text-violet-foreground"
                  style={{ backgroundImage: "var(--gradient-violet)" }}
                >
                  <Crown className="h-[17px] w-[17px] fill-current" strokeWidth={1.5} />
                  Most Popular
                </span>
                <h3 className="text-[25px] font-bold text-ink">Growth</h3>
                <p className="mt-1.5 text-[14.5px] text-ink-soft">For Growing Businesses</p>
                <p className="mt-5">
                  <span className="text-[38px] font-extrabold tracking-tight text-ink">₹7,999</span>
                  <span className="ml-1 text-[15px] font-medium text-ink-soft">/month</span>
                </p>
                <ul className="mt-6 space-y-[14px] text-left">
                  {[
                    "Everything in Starter",
                    "Advanced Features",
                    "Priority Support",
                    "Growth Focused Tools",
                  ].map((f) => (
                    <li key={f} className="flex items-center gap-2.5 text-[15px] text-ink">
                      <CircleCheck className="h-[19px] w-[19px] text-violet" strokeWidth={2} />
                      {f}
                    </li>
                  ))}
                </ul>
                <a
                  href="#"
                  className="mt-7 flex h-[54px] items-center justify-center gap-3 rounded-[12px] text-[17px] font-semibold text-violet-foreground shadow-cta-violet transition-transform hover:-translate-y-0.5"
                  style={{ backgroundImage: "var(--gradient-violet)" }}
                >
                  Get Started
                  <ArrowRight className="h-[18px] w-[18px]" strokeWidth={2.5} />
                </a>
              </article>

              {/* Enterprise */}
              <article className="mt-[52px] w-[244px] rotate-[5deg] rounded-[22px] bg-white p-7 shadow-card">
                <h3 className="text-[21px] font-bold text-ink">Enterprise</h3>
                <p className="mt-1 text-[13.5px] text-ink-soft">For Large Organizations</p>
                <p className="mt-4">
                  <span className="text-[30px] font-extrabold tracking-tight text-ink">₹19,999</span>
                  <span className="ml-1 text-[14px] font-medium text-ink-soft">/month</span>
                </p>
                <ul className="mt-5 space-y-[13px]">
                  {[
                    "Custom Solutions",
                    "Dedicated Manager",
                    "Advanced Security",
                    "Scalable Infrastructure",
                  ].map((f) => (
                    <li key={f} className="flex items-center gap-2.5 text-[14px] text-ink">
                      <CircleCheck className="h-[17px] w-[17px] text-violet" strokeWidth={2} />
                      {f}
                    </li>
                  ))}
                </ul>
                <a
                  href="#"
                  className="mt-6 flex h-[46px] items-center justify-center gap-2 rounded-[10px] border border-brand/40 text-[15px] font-semibold text-brand transition-colors hover:bg-brand-soft"
                >
                  Contact Sales
                  <ArrowRight className="h-4 w-4" strokeWidth={2.5} />
                </a>
              </article>
            </div>

            {/* Handwriting bottom */}
            <div className="pointer-events-none absolute bottom-[10px] right-[10px] hidden w-[220px] rotate-[-8deg] text-center font-hand text-[29px] font-bold leading-[1.15] text-ink xl:block">
              Flexible Plans
              <br />
              Real Results
            </div>
            <ArrowCurveLeft className="absolute bottom-[42px] right-[230px] hidden text-ink xl:block" />
          </div>
        </div>

        {/* Stats */}
        <section className="mt-6 rounded-[26px] bg-white/70 p-6 pb-8">
          <div className="grid grid-cols-2 gap-y-8 rounded-[20px] bg-white/60 px-4 py-8 lg:grid-cols-4">
            {stats.map(({ icon: Icon, value, label }, i) => (
              <div
                key={label}
                className={`flex items-center justify-center gap-5 ${
                  i > 0 ? "lg:border-l lg:border-border" : ""
                }`}
              >
                <span className="flex h-[68px] w-[68px] items-center justify-center rounded-full bg-brand-soft text-brand">
                  <Icon className="h-[30px] w-[30px] fill-current" strokeWidth={2} />
                </span>
                <span>
                  <span className="block text-[29px] font-extrabold leading-none text-ink">
                    {value}
                  </span>
                  <span className="mt-1.5 block text-[16px] text-ink-soft">{label}</span>
                </span>
              </div>
            ))}
          </div>
        </section>
        <div className="h-16" />
      </main>
    </div>
  );
}

function TagIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path
        d="M20.6 13.4 12.2 21.8a2 2 0 0 1-2.8 0l-7.2-7.2a2 2 0 0 1-.6-1.4V4a2 2 0 0 1 2-2h9.2a2 2 0 0 1 1.4.6l6.4 6.4a2 2 0 0 1 0 2.8Z"
        stroke="currentColor"
        strokeWidth="2"
      />
      <circle cx="7.5" cy="7.5" r="1.6" fill="currentColor" />
    </svg>
  );
}

function ArrowCurveDown({ className }: { className?: string }) {
  return (
    <svg width="70" height="70" viewBox="0 0 70 70" fill="none" className={className}>
      <path
        d="M4 6c14 6 28 20 40 42"
        stroke="currentColor"
        strokeWidth="2.4"
        strokeLinecap="round"
      />
      <path
        d="M36 44c4 2 7 4 8 4 1-2 1-6 2-10"
        stroke="currentColor"
        strokeWidth="2.4"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function ArrowCurveLeft({ className }: { className?: string }) {
  return (
    <svg width="80" height="46" viewBox="0 0 80 46" fill="none" className={className}>
      <path
        d="M78 40C60 42 30 36 6 14"
        stroke="currentColor"
        strokeWidth="2.4"
        strokeLinecap="round"
      />
      <path
        d="M4 12c1 5 2 9 2 11 3-1 8-2 12-2"
        stroke="currentColor"
        strokeWidth="2.4"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function Scribble({ className }: { className?: string }) {
  return (
    <svg width="34" height="34" viewBox="0 0 34 34" fill="none" className={className}>
      <path d="M4 4 12 24" stroke="currentColor" strokeWidth="3" strokeLinecap="round" />
      <path d="M24 4 24 22" stroke="currentColor" strokeWidth="3" strokeLinecap="round" />
    </svg>
  );
}

function ScribbleRed({ className }: { className?: string }) {
  return (
    <svg width="54" height="46" viewBox="0 0 54 46" fill="none" className={className}>
      <path d="M2 4 22 22" stroke="currentColor" strokeWidth="3" strokeLinecap="round" />
      <path d="M14 2 30 18" stroke="currentColor" strokeWidth="3" strokeLinecap="round" />
      <path d="M28 4 40 20" stroke="currentColor" strokeWidth="3" strokeLinecap="round" />
    </svg>
  );
}
