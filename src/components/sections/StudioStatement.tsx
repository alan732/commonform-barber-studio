import { RevealSection } from "@/components/ui/RevealSection";

export function StudioStatement() {
  return (
    <section className="border-t border-sand bg-olive text-ivory py-24 lg:py-32">
      <div className="mx-auto max-w-5xl px-6 lg:px-10 text-center space-y-6">
        <RevealSection className="space-y-6">
          <span className="inline-block font-mono text-[11px] uppercase tracking-[0.24em] text-sand">
            CUT / CRAFT / COMMUNITY
          </span>
          <h2 className="font-display text-4xl font-semibold leading-[1.04] tracking-[-0.02em] text-ivory sm:text-6xl text-balance">
            GOOD BARBERING.
            <br />
            GOOD CONVERSATION.
            <br />
            GOOD COMPANY.
          </h2>
          <p className="mx-auto max-w-xl text-base leading-relaxed text-ivory/85 sm:text-lg text-pretty">
            A modern take on the neighbourhood barber — built around good work,
            genuine conversations and the little details that bring people back.
          </p>
        </RevealSection>
      </div>
    </section>
  );
}
