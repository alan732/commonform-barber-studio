"use client";

import Image from "next/image";
import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";
import { ArrowUpRight, ArrowDown } from "lucide-react";

export function HeroSection() {
  const shouldReduceMotion = useReducedMotion() ?? false;

  return (
    <section
      aria-label="COMMONFORM Barber Studio Hero"
      className="relative bg-ivory pt-28 pb-16 lg:pt-32 lg:pb-24 overflow-hidden"
    >
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 lg:items-center lg:gap-14">
          {/* Left: Editorial Typography */}
          <motion.div
            initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: shouldReduceMotion ? 0 : 0.65,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="lg:col-span-6 space-y-7"
          >
            <div className="flex items-center gap-3">
              <span className="h-[1px] w-8 bg-terracotta" aria-hidden="true" />
              <p className="font-mono text-[11px] uppercase tracking-[0.22em] text-olive">
                INDEPENDENT BARBERING / AUSTRALIA
              </p>
            </div>

            <h1 className="font-display text-5xl font-semibold leading-[0.98] tracking-[-0.025em] text-ink sm:text-6xl lg:text-[4.5rem] text-balance">
              GOOD CUTS.
              <br />
              NO SHORTCUTS.
            </h1>

            <p className="max-w-lg text-base leading-relaxed text-ink/80 sm:text-lg text-pretty">
              Great barbering is about more than a fresh cut. It&apos;s about
              understanding your style, getting the details right and leaving
              with a look that feels unmistakably yours.
            </p>

            <div className="flex flex-col gap-3.5 pt-2 sm:flex-row sm:items-center">
              <Link
                href="/booking"
                className="group inline-flex items-center justify-center gap-2.5 bg-olive px-7 py-4 font-mono text-xs font-medium tracking-[0.16em] text-ivory transition-colors hover:bg-ink focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-olive"
              >
                <span>BOOK YOUR CUT</span>
                <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </Link>

              <Link
                href="/studio"
                className="inline-flex items-center justify-center gap-2 border border-sand bg-cream/60 px-7 py-4 font-mono text-xs font-medium tracking-[0.16em] text-ink transition-colors hover:border-ink hover:bg-cream focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-olive"
              >
                <span>EXPLORE THE STUDIO</span>
              </Link>
            </div>

            <div className="pt-4 flex items-center justify-between border-t border-sand/80">
              <span className="font-mono text-[10px] tracking-[0.18em] text-soft-grey uppercase">
                CUT / CRAFT / COMMUNITY
              </span>
              <a
                href="#brand-introduction"
                className="inline-flex items-center gap-1.5 font-mono text-[10px] tracking-[0.18em] text-olive hover:text-terracotta transition-colors uppercase"
              >
                <span>SCROLL</span>
                <ArrowDown className="h-3.5 w-3.5" aria-hidden="true" />
              </a>
            </div>
          </motion.div>

          {/* Right: Editorial Barbering Photograph */}
          <motion.div
            initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, scale: 0.98 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              duration: shouldReduceMotion ? 0 : 0.75,
              delay: shouldReduceMotion ? 0 : 0.1,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="lg:col-span-6"
          >
            <div className="relative aspect-[4/3] lg:aspect-[5/4] w-full overflow-hidden border border-sand bg-cream">
              <Image
                src="/images/hero-barber.jpg"
                alt="Barber carefully cutting hair with comb and clippers in warm natural light"
                fill
                priority
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover"
              />
            </div>
            <div className="mt-3 flex items-center justify-between font-mono text-[10px] tracking-[0.16em] text-soft-grey uppercase">
              <span>MODERN HERITAGE CONCEPT</span>
              <span>PORTFOLIO BY ALAN DSOUZA</span>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
