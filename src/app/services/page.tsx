import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, Check } from "lucide-react";
import { SERVICES } from "@/data/commonform";
import { ConceptDisclosure } from "@/components/ui/ConceptDisclosure";
import { FAQAccordion } from "@/components/forms/FAQAccordion";
import { FinalBookingCTA } from "@/components/sections/FinalBookingCTA";

export const metadata: Metadata = {
  title: "Services",
  description:
    "Explore COMMONFORM Barber Studio's grooming menu with illustrative AUD pricing and durations for portfolio demonstration.",
};

export default function ServicesPage() {
  return (
    <div className="pt-28 bg-ivory">
      <section className="mx-auto max-w-7xl px-6 py-14 lg:px-10 lg:py-20 space-y-8">
        <div className="space-y-5 max-w-3xl">
          <p className="font-mono text-[11px] uppercase tracking-[0.22em] text-olive">
            COMMONFORM / THE MENU
          </p>
          <h1 className="font-display text-5xl font-semibold leading-[0.98] tracking-[-0.025em] text-ink sm:text-6xl text-balance">
            GOOD WORK STARTS WITH A GOOD CUT.
          </h1>
          <p className="text-base leading-relaxed text-ink/80 sm:text-lg text-pretty">
            Every style is different. Explore our grooming menu and find the
            service that fits your look.
          </p>
        </div>

        <ConceptDisclosure
          variant="banner"
          text="All service prices (A$30–A$75) and appointment durations (25–65 minutes) shown below are illustrative demonstration figures."
        />
      </section>

      {/* Detailed Service Rows */}
      <section className="border-t border-sand bg-cream/40">
        <div className="mx-auto max-w-7xl divide-y divide-sand px-6 lg:px-10">
          {SERVICES.map((service) => (
            <article
              key={service.id}
              id={service.slug}
              className="grid grid-cols-1 gap-10 py-14 lg:grid-cols-12 lg:gap-14 lg:py-20 scroll-mt-24"
            >
              <div className="lg:col-span-5">
                <div className="relative aspect-[4/3] w-full overflow-hidden border border-sand bg-cream">
                  <Image
                    src={service.image}
                    alt={service.imageAlt}
                    fill
                    sizes="(max-width: 1024px) 100vw, 42vw"
                    className="object-cover"
                  />
                  <span className="absolute top-3 left-3 border border-sand bg-ivory/95 px-2.5 py-1 font-mono text-xs tracking-[0.18em] text-ink">
                    {service.number}
                  </span>
                </div>
              </div>

              <div className="lg:col-span-7 flex flex-col justify-between space-y-6">
                <div className="space-y-4">
                  <div className="flex flex-wrap items-baseline justify-between gap-4 border-b border-sand pb-4">
                    <h2 className="font-display text-3xl font-semibold text-ink">
                      {service.name}
                    </h2>
                    <div className="text-right">
                      <span className="font-mono text-2xl font-medium text-terracotta">
                        {service.priceLabel}
                      </span>
                      <span className="block font-mono text-[10px] tracking-[0.14em] text-soft-grey uppercase">
                        DEMO · {service.duration}
                      </span>
                    </div>
                  </div>

                  <p className="text-base leading-relaxed text-ink/80 text-pretty">
                    {service.fullDescription}
                  </p>

                  <div className="pt-2 space-y-2.5">
                    <h3 className="font-mono text-[11px] tracking-[0.18em] text-olive uppercase">
                      EXAMPLE SERVICE DETAILS
                    </h3>
                    <ul className="grid grid-cols-1 gap-2 sm:grid-cols-2">
                      {service.details.map((detail) => (
                        <li
                          key={detail}
                          className="flex items-start gap-2.5 text-sm text-ink/80"
                        >
                          <Check
                            className="h-4 w-4 text-olive shrink-0 mt-0.5"
                            aria-hidden="true"
                          />
                          <span>{detail}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className="pt-2">
                  <Link
                    href={`/booking?service=${service.id}`}
                    className="inline-flex items-center gap-2.5 bg-olive px-7 py-3.5 font-mono text-xs font-medium tracking-[0.16em] text-ivory transition-colors hover:bg-ink"
                  >
                    <span>BOOK {service.name}</span>
                    <ArrowUpRight className="h-4 w-4" />
                  </Link>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* Services FAQ */}
      <section className="border-t border-sand bg-cream py-16 lg:py-24">
        <div className="mx-auto max-w-4xl px-6 lg:px-10 space-y-8">
          <div className="space-y-2">
            <p className="font-mono text-[11px] uppercase tracking-[0.22em] text-olive">
              QUESTIONS
            </p>
            <h2 className="font-display text-3xl font-semibold text-ink">
              FREQUENTLY ASKED QUESTIONS.
            </h2>
          </div>
          <FAQAccordion />
        </div>
      </section>

      <FinalBookingCTA />
    </div>
  );
}
