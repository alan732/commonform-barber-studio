import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { NAV_ITEMS, SERVICES, CONCEPT_DISCLOSURE } from "@/data/commonform";

export function Footer() {
  return (
    <footer className="border-t border-sand bg-cream text-ink">
      <div className="mx-auto max-w-7xl px-6 py-16 lg:px-10 lg:py-20">
        <div className="grid grid-cols-1 gap-12 md:grid-cols-2 lg:grid-cols-12">
          {/* Brand Column */}
          <div className="lg:col-span-4 space-y-4">
            <Link
              href="/"
              className="inline-block font-display text-2xl font-semibold tracking-[0.12em] text-ink"
            >
              COMMONFORM
            </Link>
            <p className="font-mono text-[11px] tracking-[0.18em] text-olive uppercase">
              GOOD CUTS. NO SHORTCUTS.
            </p>
            <p className="font-mono text-[10px] tracking-[0.2em] text-soft-grey uppercase">
              CUT / CRAFT / COMMUNITY
            </p>
            <p className="max-w-sm pt-2 text-sm leading-relaxed text-ink/75 text-pretty">
              {CONCEPT_DISCLOSURE.short}
            </p>
          </div>

          {/* Navigation */}
          <div className="lg:col-span-2 space-y-4">
            <h2 className="font-mono text-[11px] tracking-[0.18em] text-olive uppercase">
              NAVIGATION
            </h2>
            <ul className="space-y-2.5">
              {NAV_ITEMS.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="text-sm text-ink/80 transition-colors hover:text-terracotta"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
              <li>
                <Link
                  href="/contact"
                  className="text-sm text-ink/80 transition-colors hover:text-terracotta"
                >
                  CONTACT
                </Link>
              </li>
              <li>
                <Link
                  href="/privacy"
                  className="text-sm text-ink/80 transition-colors hover:text-terracotta"
                >
                  PRIVACY
                </Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div className="lg:col-span-3 space-y-4">
            <h2 className="font-mono text-[11px] tracking-[0.18em] text-olive uppercase">
              SERVICES (DEMO)
            </h2>
            <ul className="space-y-2.5">
              {SERVICES.map((svc) => (
                <li key={svc.id}>
                  <Link
                    href={`/services#${svc.slug}`}
                    className="flex items-center justify-between text-sm text-ink/80 transition-colors hover:text-terracotta"
                  >
                    <span>{svc.name}</span>
                    <span className="font-mono text-xs text-soft-grey">
                      {svc.priceLabel}
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Booking CTA & Credit */}
          <div className="lg:col-span-3 space-y-5">
            <h2 className="font-mono text-[11px] tracking-[0.18em] text-olive uppercase">
              RESERVATIONS
            </h2>
            <p className="text-sm leading-relaxed text-ink/75 text-pretty">
              Explore the interactive demonstration booking flow — no real
              appointments are scheduled.
            </p>
            <Link
              href="/booking"
              className="inline-flex items-center gap-2 bg-olive px-5 py-3 font-mono text-xs font-medium tracking-[0.16em] text-ivory transition-colors hover:bg-ink"
            >
              <span>BOOK A CUT</span>
              <ArrowUpRight className="h-4 w-4" />
            </Link>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-14 border-t border-sand pt-8 flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
          <div className="space-y-1">
            <p className="font-mono text-[11px] tracking-[0.12em] text-ink/80">
              {CONCEPT_DISCLOSURE.short}
            </p>
            <p className="font-mono text-[10px] tracking-[0.14em] text-soft-grey uppercase">
              {CONCEPT_DISCLOSURE.credit} · &copy; 2026 PORTFOLIO CONCEPT
            </p>
          </div>
          <div className="flex items-center gap-6 font-mono text-[11px] tracking-[0.14em] text-soft-grey">
            <Link href="/privacy" className="hover:text-ink transition-colors">
              PRIVACY POLICY
            </Link>
            <Link href="/contact" className="hover:text-ink transition-colors">
              CONTACT &amp; FAQ
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
