import Image from "next/image";
import { RevealSection } from "@/components/ui/RevealSection";
import { SectionHeading } from "@/components/ui/SectionHeading";

export function BrandIntroduction() {
  return (
    <section
      id="brand-introduction"
      className="border-t border-sand bg-cream py-20 lg:py-28"
    >
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 lg:items-center lg:gap-16">
          {/* Portrait Photograph */}
          <RevealSection className="lg:col-span-5">
            <div className="relative aspect-[3/4] w-full overflow-hidden border border-sand bg-ivory">
              <Image
                src="/images/intro-portrait.jpg"
                alt="Close-up portrait of precision comb-over-clipper barbering craft"
                fill
                sizes="(max-width: 1024px) 100vw, 42vw"
                className="object-cover"
              />
            </div>
          </RevealSection>

          {/* Editorial Text Column */}
          <RevealSection delay={0.1} className="lg:col-span-7 space-y-8">
            <SectionHeading
              label="OUR PHILOSOPHY"
              title="BUILT ON THE BASICS. FINED BY THE DETAILS."
            />

            <div className="space-y-5 max-w-xl text-base leading-relaxed text-ink/80 sm:text-lg text-pretty">
              <p>
                At COMMONFORM, we believe a good haircut should feel personal.
                Every appointment starts with understanding what works for you —
                your style, your routine and the details that make the
                difference.
              </p>
              <p>
                We bring traditional barbering techniques together with a
                contemporary approach to men&apos;s grooming.
              </p>
            </div>

            <div className="pt-4 border-t border-sand flex flex-wrap items-center justify-between gap-4">
              <span className="font-display text-lg italic text-olive">
                Cut / Craft / Community
              </span>
              <span className="font-mono text-[11px] tracking-[0.18em] text-soft-grey uppercase">
                FICTIONAL AUSTRALIAN STUDIO CONCEPT
              </span>
            </div>
          </RevealSection>
        </div>
      </div>
    </section>
  );
}
