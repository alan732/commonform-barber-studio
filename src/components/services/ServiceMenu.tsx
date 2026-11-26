import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { SERVICES } from "@/data/commonform";
import { ServiceCard } from "@/components/services/ServiceCard";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { ConceptDisclosure } from "@/components/ui/ConceptDisclosure";
import { RevealSection } from "@/components/ui/RevealSection";

export function ServiceMenu() {
  return (
    <section id="services" className="border-t border-sand bg-ivory py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-6 lg:px-10 space-y-12">
        <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
          <SectionHeading
            label="THE MENU"
            title="THE RIGHT CUT. THE RIGHT DETAIL."
          />

          <Link
            href="/services"
            className="inline-flex items-center gap-2 border border-sand bg-cream/60 px-5 py-3 font-mono text-xs tracking-[0.16em] text-ink transition-colors hover:border-ink hover:bg-cream self-start lg:self-auto"
          >
            <span>VIEW ALL SERVICES</span>
            <ArrowUpRight className="h-4 w-4" />
          </Link>
        </div>

        <RevealSection className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {SERVICES.map((service) => (
            <ServiceCard key={service.id} service={service} />
          ))}
        </RevealSection>

        <ConceptDisclosure
          variant="inline"
          text="All prices (A$30–A$75) and appointment durations shown are fictional demonstration figures for portfolio purposes."
        />
      </div>
    </section>
  );
}
