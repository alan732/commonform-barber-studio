import type { Metadata } from "next";
import { TEAM_MEMBERS } from "@/data/commonform";
import { BarberProfileCard } from "@/components/team/BarberProfileCard";
import { ConceptDisclosure } from "@/components/ui/ConceptDisclosure";
import { FinalBookingCTA } from "@/components/sections/FinalBookingCTA";

export const metadata: Metadata = {
  title: "The Team",
  description:
    "Meet the fictional concept barber profiles at COMMONFORM Barber Studio: Noah Bennett, Oliver Hayes, and Jack Turner.",
};

export default function TeamPage() {
  return (
    <div className="pt-28 bg-ivory">
      <section className="mx-auto max-w-7xl px-6 py-14 lg:px-10 lg:py-20 space-y-8">
        <div className="space-y-5 max-w-3xl">
          <p className="font-mono text-[11px] uppercase tracking-[0.22em] text-olive">
            COMMONFORM / THE PEOPLE
          </p>
          <h1 className="font-display text-5xl font-semibold leading-[0.98] tracking-[-0.025em] text-ink sm:text-6xl text-balance">
            THE HANDS BEHIND THE CRAFT.
          </h1>
          <p className="text-base leading-relaxed text-ink/80 sm:text-lg text-pretty">
            Three fictional barber profiles conceived to represent
            COMMONFORM&apos;s core disciplines across contemporary cutting,
            fades, and classic barbering.
          </p>
        </div>

        <ConceptDisclosure
          variant="banner"
          text="Noah Bennett, Oliver Hayes, and Jack Turner are fictional portfolio profiles. They do not represent actual employees or real Australian barbers."
        />
      </section>

      <section className="border-t border-sand bg-cream/50 py-16 lg:py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-10">
          <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
            {TEAM_MEMBERS.map((barber) => (
              <BarberProfileCard key={barber.id} barber={barber} detailed />
            ))}
          </div>
        </div>
      </section>

      <FinalBookingCTA />
    </div>
  );
}
