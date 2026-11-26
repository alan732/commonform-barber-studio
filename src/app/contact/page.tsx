import type { Metadata } from "next";
import { ContactForm } from "@/components/forms/ContactForm";
import { FAQAccordion } from "@/components/forms/FAQAccordion";
import { ConceptDisclosure } from "@/components/ui/ConceptDisclosure";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Demonstration contact form and FAQ for COMMONFORM Barber Studio, a fictional Australian portfolio concept by Alan Dsouza.",
};

export default function ContactPage() {
  return (
    <div className="pt-28 pb-24 bg-ivory">
      <section className="mx-auto max-w-7xl px-6 py-12 lg:px-10 space-y-12">
        <div className="space-y-4 max-w-3xl">
          <p className="font-mono text-[11px] uppercase tracking-[0.22em] text-olive">
            COMMONFORM / CONTACT &amp; FAQ
          </p>
          <h1 className="font-display text-5xl font-semibold leading-[0.98] tracking-[-0.025em] text-ink sm:text-6xl text-balance">
            LET&apos;S TALK ABOUT YOUR NEXT CUT.
          </h1>
          <p className="text-base leading-relaxed text-ink/80 sm:text-lg text-pretty">
            Explore frequently asked questions or test the contact form
            demonstration below.
          </p>
        </div>

        <ConceptDisclosure
          variant="banner"
          text="COMMONFORM Barber Studio is a fictional portfolio concept by Alan Dsouza. It has no physical Australian address, phone number, or operating studio."
        />

        <div className="grid grid-cols-1 gap-12 lg:grid-cols-12">
          <div className="lg:col-span-6">
            <ContactForm />
          </div>

          <div className="lg:col-span-6 space-y-6">
            <div className="space-y-2">
              <p className="font-mono text-[11px] uppercase tracking-[0.2em] text-olive">
                FAQ
              </p>
              <h2 className="font-display text-3xl font-semibold text-ink">
                COMMON QUESTIONS.
              </h2>
            </div>
            <FAQAccordion />
          </div>
        </div>
      </section>
    </div>
  );
}
