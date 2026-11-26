import { PROCESS_STEPS } from "@/data/commonform";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { RevealSection } from "@/components/ui/RevealSection";

export function ProcessSection() {
  return (
    <section className="border-t border-sand bg-ivory py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-6 lg:px-10 space-y-14">
        <SectionHeading
          label="HOW WE WORK"
          title="SIMPLE PROCESS. CONSIDERED RESULTS."
        />

        <RevealSection className="grid grid-cols-1 gap-px bg-sand border border-sand md:grid-cols-2 lg:grid-cols-4">
          {PROCESS_STEPS.map((step) => (
            <div
              key={step.number}
              className="flex flex-col justify-between bg-ivory p-8 transition-colors hover:bg-cream/60"
            >
              <div className="space-y-4">
                <span className="font-mono text-xs tracking-[0.2em] text-terracotta">
                  {step.number}
                </span>
                <h3 className="font-display text-2xl font-semibold text-ink">
                  {step.title}
                </h3>
              </div>
              <p className="mt-8 text-sm leading-relaxed text-ink/75 text-pretty">
                {step.description}
              </p>
            </div>
          ))}
        </RevealSection>
      </div>
    </section>
  );
}
