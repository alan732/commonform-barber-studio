import type { Metadata } from "next";
import Link from "next/link";
import { CONCEPT_DISCLOSURE } from "@/data/commonform";
import { ConceptDisclosure } from "@/components/ui/ConceptDisclosure";

export const metadata: Metadata = {
  title: "Privacy & Concept Notice",
  description:
    "Privacy and portfolio concept disclosure for COMMONFORM Barber Studio by Alan Dsouza.",
};

export default function PrivacyPage() {
  return (
    <div className="pt-28 pb-24 bg-ivory">
      <section className="mx-auto max-w-4xl px-6 py-12 lg:px-10 space-y-10">
        <div className="space-y-4">
          <p className="font-mono text-[11px] uppercase tracking-[0.22em] text-olive">
            COMMONFORM / LEGAL &amp; PORTFOLIO NOTICE
          </p>
          <h1 className="font-display text-4xl font-semibold leading-[1.02] tracking-[-0.02em] text-ink sm:text-5xl text-balance">
            PRIVACY &amp; CONCEPT DISCLOSURE.
          </h1>
        </div>

        <ConceptDisclosure variant="banner" />

        <div className="space-y-8 border-t border-sand pt-8 text-base leading-relaxed text-ink/85 text-pretty">
          <section className="space-y-2">
            <h2 className="font-display text-2xl font-semibold text-ink">
              1. Fictional Portfolio Concept
            </h2>
            <p>{CONCEPT_DISCLOSURE.full}</p>
          </section>

          <section className="space-y-2">
            <h2 className="font-display text-2xl font-semibold text-ink">
              2. No Data Collection or Transmission
            </h2>
            <p>
              Both the interactive booking demonstration and the contact form
              operate exclusively in your local browser session. Any details
              typed into form fields are validated on the client side and are
              never sent to a server, stored in a database, or shared with third
              parties.
            </p>
          </section>

          <section className="space-y-2">
            <h2 className="font-display text-2xl font-semibold text-ink">
              3. Attribution
            </h2>
            <p>
              Concept, brand direction, and web development by{" "}
              <strong className="font-semibold text-ink">Alan Dsouza</strong>.
            </p>
          </section>
        </div>

        <div className="pt-4">
          <Link
            href="/"
            className="inline-flex items-center border border-sand bg-cream px-6 py-3 font-mono text-xs tracking-[0.16em] text-ink transition-colors hover:border-ink"
          >
            RETURN HOME
          </Link>
        </div>
      </section>
    </div>
  );
}
