import type { Metadata } from "next";
import { LookbookGallery } from "@/components/gallery/LookbookGallery";
import { ConceptDisclosure } from "@/components/ui/ConceptDisclosure";
import { FinalBookingCTA } from "@/components/sections/FinalBookingCTA";

export const metadata: Metadata = {
  title: "Lookbook",
  description:
    "Explore cuts, shapes, and finishes in the COMMONFORM Barber Studio lookbook across skin fades, textured cuts, classic styles, long hair, and beard styling.",
};

export default function LookbookPage() {
  return (
    <div className="pt-28 bg-ivory">
      <section className="mx-auto max-w-7xl px-6 py-14 lg:px-10 lg:py-20 space-y-8">
        <div className="space-y-5 max-w-3xl">
          <p className="font-mono text-[11px] uppercase tracking-[0.22em] text-olive">
            COMMONFORM / STYLE COLLECTION
          </p>
          <h1 className="font-display text-5xl font-semibold leading-[0.98] tracking-[-0.025em] text-ink sm:text-6xl text-balance">
            STYLE IS PERSONAL.
          </h1>
          <p className="text-base leading-relaxed text-ink/80 sm:text-lg text-pretty">
            Explore different cuts, shapes and finishes in the COMMONFORM style
            collection.
          </p>
        </div>

        <ConceptDisclosure
          variant="banner"
          text="Images shown in this lookbook are curated reference photography for portfolio demonstration and do not represent real customers or work performed by an operating business."
        />

        <LookbookGallery />
      </section>

      <FinalBookingCTA />
    </div>
  );
}
