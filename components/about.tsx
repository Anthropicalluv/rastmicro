import Image from "next/image"
import { CheckCircle2 } from "lucide-react"

const capabilities = [
  "OWASP Top 10 coverage and beyond",
  "CREST and OSCP certified professionals",
  "Real-time threat intelligence integration",
  "Executive-ready reporting and dashboards",
]

export function About() {
  return (
    <section id="about" className="border-y border-border bg-secondary/30 py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid items-center gap-16 lg:grid-cols-2">
          <div className="relative aspect-[4/3] overflow-hidden rounded-2xl">
            <Image
              src="/images/about-team.jpg"
              alt="RAST security operations center with team monitoring threats"
              fill
              className="object-cover"
              quality={85}
            />
            <div className="absolute inset-0 bg-primary/10" />
          </div>

          <div>
            <p className="text-sm font-medium tracking-wide text-primary uppercase">
              About RAST
            </p>
            <h2 className="mt-3 font-heading text-3xl font-bold tracking-tight text-foreground sm:text-4xl text-balance">
              A decade of protecting critical infrastructure
            </h2>
            <p className="mt-4 text-base leading-relaxed text-muted-foreground">
              Founded by former military cybersecurity specialists, RAST brings elite security
              expertise to organizations of every size. We combine cutting-edge tooling with
              deep human insight to deliver actionable security intelligence.
            </p>

            <ul className="mt-8 flex flex-col gap-4">
              {capabilities.map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-primary" />
                  <span className="text-sm text-foreground">{item}</span>
                </li>
              ))}
            </ul>

            <div className="mt-10 grid grid-cols-2 gap-6">
              <div className="rounded-xl border border-border bg-card p-6">
                <p className="font-heading text-3xl font-bold text-foreground">12+</p>
                <p className="mt-1 text-sm text-muted-foreground">Years Experience</p>
              </div>
              <div className="rounded-xl border border-border bg-card p-6">
                <p className="font-heading text-3xl font-bold text-foreground">200+</p>
                <p className="mt-1 text-sm text-muted-foreground">Enterprise Clients</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
