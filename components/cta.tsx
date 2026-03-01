import Link from "next/link"
import { ArrowRight, Shield } from "lucide-react"
import { Button } from "@/components/ui/button"

export function CTA() {
  return (
    <section id="contact" className="border-t border-border bg-secondary/30 py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mx-auto max-w-3xl text-center">
          <div className="mx-auto mb-6 flex h-14 w-14 items-center justify-center rounded-2xl border border-border bg-card">
            <Shield className="h-7 w-7 text-primary" />
          </div>

          <h2 className="font-heading text-3xl font-bold tracking-tight text-foreground sm:text-4xl lg:text-5xl text-balance">
            Ready to secure your organization?
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-lg leading-relaxed text-muted-foreground">
            Get a free initial consultation with our security experts. We will assess your current
            posture and recommend a tailored engagement plan.
          </p>

          <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Button size="lg" asChild className="gap-2">
              <Link href="mailto:contact@rast.security">
                Request Consultation
                <ArrowRight className="h-4 w-4" />
              </Link>
            </Button>
            <Button size="lg" variant="outline" asChild>
              <Link href="tel:+18005551234">Call 1-800-555-1234</Link>
            </Button>
          </div>

          <p className="mt-6 text-xs text-muted-foreground">
            No commitment required. All conversations are confidential and NDA-protected.
          </p>
        </div>

        <div className="mx-auto mt-16 grid max-w-4xl gap-6 sm:grid-cols-3">
          <div className="rounded-xl border border-border bg-card p-6 text-center">
            <p className="font-heading text-2xl font-bold text-foreground">{"< 24h"}</p>
            <p className="mt-1 text-sm text-muted-foreground">Response Time</p>
          </div>
          <div className="rounded-xl border border-border bg-card p-6 text-center">
            <p className="font-heading text-2xl font-bold text-foreground">Free</p>
            <p className="mt-1 text-sm text-muted-foreground">Initial Assessment</p>
          </div>
          <div className="rounded-xl border border-border bg-card p-6 text-center">
            <p className="font-heading text-2xl font-bold text-foreground">NDA</p>
            <p className="mt-1 text-sm text-muted-foreground">Protected Engagement</p>
          </div>
        </div>
      </div>
    </section>
  )
}
