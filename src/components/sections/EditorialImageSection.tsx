import Image from "next/image";
import { RevealSection } from "@/components/ui/RevealSection";

export function EditorialImageSection() {
  return (
    <section className="border-t border-sand bg-cream py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-6 lg:px-10 space-y-10">
        <RevealSection className="grid grid-cols-1 gap-6 lg:grid-cols-12 lg:items-end">
          <div className="lg:col-span-7">
            <p className="font-mono text-[11px] uppercase tracking-[0.22em] text-olive mb-3">
              CRAFT IN MOTION
            </p>
            <h2 className="font-display text-3xl font-semibold leading-[1.06] tracking-[-0.02em] text-ink sm:text-5xl text-balance">
              A GOOD CUT IS NEVER JUST A CUT.
            </h2>
          </div>
          <p className="lg:col-span-5 text-base leading-relaxed text-ink/80 sm:text-lg text-pretty">
            It&apos;s the consultation, the conversation, the craft and the
            confidence that comes with getting it right.
          </p>
        </RevealSection>

        <RevealSection delay={0.1}>
          <div className="relative aspect-[16/9] w-full overflow-hidden border border-sand bg-ivory">
            <Image
              src="/images/editorial-session.jpg"
              alt="Barber working carefully with a client in a warm studio environment"
              fill
              sizes="100vw"
              className="object-cover"
            />
          </div>
        </RevealSection>
      </div>
    </section>
  );
}
