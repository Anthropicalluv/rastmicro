import Link from "next/link"
import { Shield } from "lucide-react"

const footerLinks = {
  Services: [
    { label: "Penetration Testing", href: "#services" },
    { label: "Vulnerability Assessment", href: "#services" },
    { label: "Risk Assessment", href: "#services" },
    { label: "Compliance Auditing", href: "#services" },
    { label: "Cloud Security", href: "#services" },
  ],
  Company: [
    { label: "About Us", href: "#about" },
    { label: "Careers", href: "#" },
    { label: "Blog", href: "#" },
    { label: "Contact", href: "#contact" },
  ],
  Legal: [
    { label: "Privacy Policy", href: "#" },
    { label: "Terms of Service", href: "#" },
    { label: "Responsible Disclosure", href: "#" },
  ],
}

export function Footer() {
  return (
    <footer className="border-t border-border bg-card">
      <div className="mx-auto max-w-7xl px-6 py-16">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4">
          <div>
            <Link href="/" className="flex items-center gap-2">
              <Shield className="h-6 w-6 text-primary" />
              <span className="font-heading text-lg font-bold text-foreground">RAST</span>
            </Link>
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-muted-foreground">
              Enterprise-grade cybersecurity solutions protecting organizations worldwide since 2014.
            </p>
            <p className="mt-4 text-sm text-muted-foreground">
              contact@rast.security
            </p>
          </div>

          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category}>
              <h3 className="text-sm font-semibold tracking-wide text-foreground uppercase">
                {category}
              </h3>
              <ul className="mt-4 flex flex-col gap-3">
                {links.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="text-sm text-muted-foreground transition-colors hover:text-foreground"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-16 flex flex-col items-center justify-between gap-4 border-t border-border pt-8 sm:flex-row">
          <p className="text-xs text-muted-foreground">
            {`\u00A9 ${new Date().getFullYear()} RAST Security. All rights reserved.`}
          </p>
          <div className="flex items-center gap-6">
            <Link href="#" className="text-xs text-muted-foreground transition-colors hover:text-foreground">
              LinkedIn
            </Link>
            <Link href="#" className="text-xs text-muted-foreground transition-colors hover:text-foreground">
              Twitter
            </Link>
            <Link href="#" className="text-xs text-muted-foreground transition-colors hover:text-foreground">
              GitHub
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
