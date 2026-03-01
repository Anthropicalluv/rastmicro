import { ShieldAlert, Search, FileWarning, Lock, Server, Bug } from "lucide-react"

const services = [
  {
    icon: ShieldAlert,
    title: "Penetration Testing",
    description:
      "Simulated cyber attacks on your systems to identify exploitable vulnerabilities before malicious actors can discover them.",
  },
  {
    icon: Search,
    title: "Vulnerability Assessment",
    description:
      "Comprehensive scanning and analysis of your entire infrastructure to map out security weaknesses and prioritize remediation.",
  },
  {
    icon: FileWarning,
    title: "Risk Assessment",
    description:
      "Strategic evaluation of your security posture, identifying threats and quantifying potential business impact of security incidents.",
  },
  {
    icon: Lock,
    title: "Compliance Auditing",
    description:
      "Ensure your organization meets regulatory requirements including SOC 2, ISO 27001, PCI DSS, HIPAA, and GDPR standards.",
  },
  {
    icon: Server,
    title: "Cloud Security",
    description:
      "Protect your cloud infrastructure across AWS, Azure, and GCP with configuration reviews, access audits, and architecture assessment.",
  },
  {
    icon: Bug,
    title: "Incident Response",
    description:
      "Rapid containment and investigation when breaches occur. Our team provides forensic analysis and recovery planning around the clock.",
  },
]

export function Services() {
  return (
    <section id="services" className="py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6">
        <div className="max-w-2xl">
          <p className="text-sm font-medium tracking-wide text-primary uppercase">
            What we do
          </p>
          <h2 className="mt-3 font-heading text-3xl font-bold tracking-tight text-foreground sm:text-4xl text-balance">
            Comprehensive security services for the modern enterprise
          </h2>
          <p className="mt-4 text-lg leading-relaxed text-muted-foreground">
            Our services cover every stage of the security lifecycle, from proactive assessment to incident response.
          </p>
        </div>

        <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service) => (
            <div
              key={service.title}
              className="group rounded-xl border border-border bg-card p-8 transition-colors hover:border-primary/30 hover:bg-secondary/50"
            >
              <div className="flex h-11 w-11 items-center justify-center rounded-lg bg-primary/10">
                <service.icon className="h-5 w-5 text-primary" />
              </div>
              <h3 className="mt-5 font-heading text-lg font-semibold text-foreground">
                {service.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                {service.description}
              </p>
              <span className="mt-4 inline-block text-sm font-medium text-primary opacity-0 transition-opacity group-hover:opacity-100">
                {"Learn more ->"}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
