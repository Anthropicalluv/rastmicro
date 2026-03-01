import { Star } from "lucide-react"

const testimonials = [
  {
    quote:
      "RAST identified critical vulnerabilities in our payment infrastructure that two previous auditors missed. Their thoroughness is unmatched.",
    name: "Sarah Chen",
    role: "CTO, FinanceCore",
    initials: "SC",
  },
  {
    quote:
      "The team provided clear, actionable reports that our engineering team could immediately act on. Remediation time dropped by 60%.",
    name: "Marcus Webb",
    role: "CISO, Meridian Health",
    initials: "MW",
  },
  {
    quote:
      "Working with RAST was transformative for our security posture. They helped us achieve SOC 2 compliance three months ahead of schedule.",
    name: "Elena Rodriguez",
    role: "VP Engineering, CloudScale",
    initials: "ER",
  },
]

export function Testimonials() {
  return (
    <section id="testimonials" className="py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6">
        <div className="text-center">
          <p className="text-sm font-medium tracking-wide text-primary uppercase">
            Client testimonials
          </p>
          <h2 className="mt-3 font-heading text-3xl font-bold tracking-tight text-foreground sm:text-4xl text-balance">
            Trusted by security-conscious organizations
          </h2>
        </div>

        <div className="mt-16 grid gap-6 md:grid-cols-3">
          {testimonials.map((t) => (
            <div
              key={t.name}
              className="flex flex-col rounded-xl border border-border bg-card p-8"
            >
              <div className="flex gap-1">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star
                    key={i}
                    className="h-4 w-4 fill-primary text-primary"
                  />
                ))}
              </div>
              <blockquote className="mt-4 flex-1 text-sm leading-relaxed text-muted-foreground">
                {`"${t.quote}"`}
              </blockquote>
              <div className="mt-6 flex items-center gap-3 border-t border-border pt-6">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/10 text-sm font-semibold text-primary">
                  {t.initials}
                </div>
                <div>
                  <p className="text-sm font-semibold text-foreground">{t.name}</p>
                  <p className="text-xs text-muted-foreground">{t.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
