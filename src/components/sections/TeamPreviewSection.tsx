import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { TEAM_MEMBERS } from "@/data/commonform";
import { BarberProfileCard } from "@/components/team/BarberProfileCard";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { ConceptDisclosure } from "@/components/ui/ConceptDisclosure";
import { RevealSection } from "@/components/ui/RevealSection";

export function TeamPreviewSection() {
  return (
    <section className="border-t border-sand bg-cream py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-6 lg:px-10 space-y-12">
        <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
          <SectionHeading
            label="THE PEOPLE"
            title="GOOD PEOPLE. GOOD HANDS."
          />

          <Link
            href="/team"
            className="inline-flex items-center gap-2 border border-sand bg-ivory px-5 py-3 font-mono text-xs tracking-[0.16em] text-ink transition-colors hover:border-ink self-start lg:self-auto"
          >
            <span>MEET THE TEAM</span>
            <ArrowUpRight className="h-4 w-4" />
          </Link>
        </div>

        <RevealSection className="grid grid-cols-1 gap-6 md:grid-cols-3">
          {TEAM_MEMBERS.map((barber) => (
            <BarberProfileCard key={barber.id} barber={barber} />
          ))}
        </RevealSection>

        <ConceptDisclosure
          variant="inline"
          text="Noah Bennett, Oliver Hayes, and Jack Turner are fictional concept representations created for portfolio demonstration."
        />
      </div>
    </section>
  );
}
