import { Bell, Calendar, Check, CreditCard, FileText, Globe, Minus, Star, TrendingUp, Users } from "lucide-react";
import { cn } from "@/lib/utils";

const steps = [
  { icon: Globe, title: "Discovery", desc: "Customers find you on Google, Social Media, or Referral" },
  { icon: FileText, title: "Modern Website", desc: "High-converting, fast & mobile-friendly branded website" },
  { icon: Calendar, title: "Easy Booking", desc: "Clients book appointments or send service requests online" },
  { icon: Users, title: "Client Database", desc: "Centralized profiles, history, and records in one place" },
  { icon: TrendingUp, title: "Service Delivery", desc: "Track progress, sessions, treatments, or orders easily" },
  { icon: CreditCard, title: "Instant Invoicing", desc: "Collect payments via UPI, Cards, NetBanking with instant receipts", active: true },
  { icon: Bell, title: "Automated Alerts", desc: "Instant WhatsApp confirmations & reminders to stop no-shows" },
  { icon: Star, title: "Review & Retention", desc: "Automated 5-star Google review requests & re-engagement" },
];

type V = boolean | string;
const rows: [string, V, V, V][] = [
  ["Custom Responsive Website", true, true, true],
  ["Free Domain & Cloud Hosting Included", true, true, true],
  ["SSL Security & Daily Backups", true, true, true],
  ["Google Business Profile Setup", true, true, true],
  ["Contact & Enquiry Forms", true, true, true],
  ["Client Management (CRM)", "Basic", "Advanced", "Advanced"],
  ["Online Booking & Appointments", false, true, true],
  ["WhatsApp & SMS Reminders", false, true, true],
  ["Online Payments & Invoicing", false, true, true],
  ["Automated Google Review Requests", false, false, true],
  ["AI Chatbot & Lead Assistant", false, false, true],
  ["Marketing Automation", false, false, true],
  ["Analytics & Reports", "Basic", "Monthly", "Advanced Dashboard"],
  ["AEO (Answer Engine Optimization for ChatGPT/AI Search)", false, false, true],
  ["Custom API & Third-party CRM/ERP Integrations", false, false, true],
  ["Dedicated VIP Account Manager & Priority SLA", "Standard Support", "Priority Support", "VIP Dedicated"],
];

function Cell({ v, hl }: { v: V; hl?: boolean }) {
  return (
    <td className={cn("px-4 py-4 text-center", hl && "bg-brand-soft/60")}>
      {v === true ? (
        <Check className="mx-auto h-5 w-5 text-brand" strokeWidth={2.5} />
      ) : v === false ? (
        <Minus className="mx-auto h-5 w-5 text-ink-soft/40" />
      ) : (
        <span className="text-[14px] font-medium text-ink">{v}</span>
      )}
    </td>
  );
}

export function WorkflowAndMatrix() {
  return (
    <div className="mx-auto max-w-[1520px] space-y-20 pb-10">
      <section className="rounded-[32px] border border-border bg-card px-5 py-12 text-center shadow-card sm:px-12">
        <span className="inline-flex rounded-full border border-brand/20 bg-brand-soft px-5 py-1.5 text-[16px] font-semibold text-brand">
          Workflow System
        </span>
        <h2 className="mt-6 text-[32px] font-bold leading-tight text-ink sm:text-[46px]">
          How Your <span className="text-brand-dark">Automated Workflow Runs</span>
        </h2>
        <p className="mx-auto mt-5 max-w-[640px] text-[17px] text-ink-soft">
          From first discovery to 5-star Google review, every touchpoint is seamless and automated.
        </p>
        <div className="mt-10 grid grid-cols-2 gap-4 sm:grid-cols-4 xl:grid-cols-8">
          {steps.map(({ icon: Icon, title, desc, active }, i) => (
            <div
              key={title}
              className={cn(
                "rounded-[18px] border bg-muted/40 px-4 py-5 transition-colors hover:border-brand/40",
                active ? "border-brand/40 bg-card" : "border-border",
              )}
            >
              <span
                className={cn(
                  "mx-auto flex h-[50px] w-[50px] items-center justify-center rounded-[12px] border",
                  active ? "border-transparent text-brand-foreground" : "border-border bg-card text-brand",
                )}
                style={active ? { backgroundImage: "var(--gradient-brand)" } : undefined}
              >
                <Icon className="h-[22px] w-[22px]" />
              </span>
              <p className="mt-4 text-[13px] font-bold text-brand">STEP {String(i + 1).padStart(2, "0")}</p>
              <p className="mt-1 text-[15px] font-semibold leading-snug text-ink">{title}</p>
              <p className="mt-2 line-clamp-3 text-[13.5px] leading-[1.3] text-ink-soft">{desc}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="overflow-hidden rounded-[32px] border border-border bg-card shadow-card">
        <div className="px-6 py-8 sm:px-10">
          <h3 className="text-[24px] font-bold text-ink sm:text-[26px]">Detailed Feature Comparison Matrix</h3>
          <p className="mt-1 text-[16px] text-ink-soft sm:text-[18px]">
            Compare Basic (₹999), Standard (₹2,499), and Premium (₹8,499) side-by-side
          </p>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full min-w-[720px] border-collapse text-left">
            <thead>
              <tr className="border-y border-border bg-muted/40">
                <th className="px-6 py-5 text-[14px] font-bold tracking-[0.08em] text-ink sm:px-8">FEATURE &amp; CAPABILITIES</th>
                {[["BASIC", "₹999/MO"], ["STANDARD", "₹2,499/MO"], ["PREMIUM", "₹8,499/MO"]].map(([n, p], i) => (
                  <th key={n} className={cn("w-[18%] px-4 py-5 text-center", i === 1 && "bg-brand-soft/60 text-brand")}>
                    <span className="block text-[15px] font-bold">{n}</span>
                    <span className={cn("block text-[13px] font-normal", i === 1 ? "text-brand" : "text-ink-soft")}>{p}</span>
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {rows.map(([f, a, b, c]) => (
                <tr key={f} className="border-b border-border last:border-0">
                  <td className="px-6 py-4 text-[16px] font-medium text-ink sm:px-8">{f}</td>
                  <Cell v={a} />
                  <Cell v={b} hl />
                  <Cell v={c} />
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>
    </div>
  );
}
