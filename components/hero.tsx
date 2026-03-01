import Image from "next/image"
import Link from "next/link"
import { ArrowRight, ShieldCheck } from "lucide-react"
import { Button } from "@/components/ui/button"

export function Hero() {
  return (
    <section className="relative flex min-h-screen items-center overflow-hidden">
      <Image
        src="/images/hero-bg.jpg"
        alt=""
        fill
        className="object-cover"
        priority
        quality={90}
      />
      <div className="absolute inset-0 bg-background/80" />

      <div className="relative mx-auto max-w-7xl px-6 pb-20 pt-32">
        <div className="max-w-3xl">
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-border bg-secondary/60 px-4 py-1.5">
            <ShieldCheck className="h-4 w-4 text-primary" />
            <span className="text-xs font-medium tracking-wide text-muted-foreground uppercase">
              Trusted by Fortune 500 companies
            </span>
          </div>

          <h1 className="font-heading text-4xl font-bold leading-tight tracking-tight text-foreground sm:text-5xl lg:text-7xl text-balance">
            We find vulnerabilities before attackers do
          </h1>

          <p className="mt-6 max-w-xl text-lg leading-relaxed text-muted-foreground">
            Enterprise-grade risk assessment and penetration testing services that protect your
            critical infrastructure. Stay ahead of threats with proactive security.
          </p>

          <div className="mt-10 flex flex-col gap-4 sm:flex-row">
            <Button size="lg" asChild className="gap-2">
              <Link href="#contact">
                Schedule Assessment
                <ArrowRight className="h-4 w-4" />
              </Link>
            </Button>
            <Button size="lg" variant="outline" asChild>
              <Link href="#services">Explore Services</Link>
            </Button>
          </div>

          <div className="mt-16 grid grid-cols-3 gap-8 border-t border-border/50 pt-8">
            <div>
              <p className="font-heading text-3xl font-bold text-foreground">500+</p>
              <p className="mt-1 text-sm text-muted-foreground">Security Audits</p>
            </div>
            <div>
              <p className="font-heading text-3xl font-bold text-foreground">99.8%</p>
              <p className="mt-1 text-sm text-muted-foreground">Threat Detection</p>
            </div>
            <div>
              <p className="font-heading text-3xl font-bold text-foreground">24/7</p>
              <p className="mt-1 text-sm text-muted-foreground">SOC Monitoring</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
