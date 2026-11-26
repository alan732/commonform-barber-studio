import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

export function FinalBookingCTA() {
  return (
    <section className="border-t border-sand bg-ivory py-24 lg:py-32">
      <div className="mx-auto max-w-4xl px-6 text-center space-y-7">
        <span className="inline-block font-mono text-[11px] uppercase tracking-[0.22em] text-terracotta">
          RESERVATIONS (DEMO)
        </span>
        <h2 className="font-display text-4xl font-semibold leading-[1.04] tracking-[-0.02em] text-ink sm:text-6xl text-balance">
          YOUR NEXT CUT STARTS HERE.
        </h2>
        <p className="mx-auto max-w-lg text-base leading-relaxed text-ink/75 sm:text-lg text-pretty">
          Ready for something fresh? Choose your service and reserve a
          demonstration appointment.
        </p>
        <div className="pt-2">
          <Link
            href="/booking"
            className="group inline-flex items-center justify-center gap-2.5 bg-olive px-8 py-4 font-mono text-xs font-medium tracking-[0.18em] text-ivory transition-colors hover:bg-ink focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-olive"
          >
            <span>BOOK YOUR CUT</span>
            <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </Link>
        </div>
      </div>
    </section>
  );
}
