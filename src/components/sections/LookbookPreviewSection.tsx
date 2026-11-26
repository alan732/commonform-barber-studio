import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { LOOKBOOK_ENTRIES } from "@/data/commonform";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { ConceptDisclosure } from "@/components/ui/ConceptDisclosure";
import { RevealSection } from "@/components/ui/RevealSection";

export function LookbookPreviewSection() {
  return (
    <section className="border-t border-sand bg-ivory py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-6 lg:px-10 space-y-12">
        <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
          <SectionHeading
            label="THE LOOKBOOK"
            title="FIND YOUR NEXT LOOK."
            description="Reference cuts, textures, and beard shapes curated for the COMMONFORM style collection."
          />

          <Link
            href="/lookbook"
            className="inline-flex items-center gap-2 border border-sand bg-cream/60 px-5 py-3 font-mono text-xs tracking-[0.16em] text-ink transition-colors hover:border-ink hover:bg-cream self-start lg:self-auto"
          >
            <span>EXPLORE THE LOOKBOOK</span>
            <ArrowUpRight className="h-4 w-4" />
          </Link>
        </div>

        {/* Mixed Portrait & Landscape Editorial Grid */}
        <RevealSection className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {LOOKBOOK_ENTRIES.map((entry) => (
            <Link
              key={entry.id}
              href="/lookbook"
              className="group block border border-sand bg-cream/40 overflow-hidden transition-colors hover:border-olive"
            >
              <div
                className={`relative w-full overflow-hidden bg-cream ${
                  entry.orientation === "portrait"
                    ? "aspect-[3/4]"
                    : "aspect-[4/3]"
                }`}
              >
                <Image
                  src={entry.image}
                  alt={entry.imageAlt}
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.03]"
                />
              </div>
              <div className="p-5 flex items-center justify-between gap-2 border-t border-sand/80">
                <div>
                  <span className="block font-mono text-[10px] tracking-[0.18em] text-olive uppercase">
                    {entry.category}
                  </span>
                  <h3 className="font-display text-lg font-medium text-ink">
                    {entry.title}
                  </h3>
                </div>
                <ArrowUpRight className="h-4 w-4 text-soft-grey transition-colors group-hover:text-terracotta shrink-0" />
              </div>
            </Link>
          ))}
        </RevealSection>

        <ConceptDisclosure
          variant="inline"
          text="Lookbook imagery is curated reference photography for portfolio demonstration and does not represent actual COMMONFORM customers."
        />
      </div>
    </section>
  );
}
