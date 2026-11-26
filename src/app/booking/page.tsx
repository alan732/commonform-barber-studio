import { Suspense } from "react";
import type { Metadata } from "next";
import { BookingWizard } from "@/components/booking/BookingWizard";
import { ConceptDisclosure } from "@/components/ui/ConceptDisclosure";

export const metadata: Metadata = {
  title: "Book a Cut",
  description:
    "Interactive 7-step simulated booking demonstration for COMMONFORM Barber Studio. No real appointments are booked or stored.",
};

export default function BookingPage() {
  return (
    <div className="pt-28 pb-24 bg-ivory">
      <section className="mx-auto max-w-7xl px-6 py-12 lg:px-10 space-y-10">
        <div className="space-y-4 max-w-3xl">
          <p className="font-mono text-[11px] uppercase tracking-[0.22em] text-olive">
            COMMONFORM / BOOKING DEMONSTRATION
          </p>
          <h1 className="font-display text-5xl font-semibold leading-[0.98] tracking-[-0.025em] text-ink sm:text-6xl text-balance">
            BOOK A CUT.
          </h1>
          <p className="text-base leading-relaxed text-ink/80 sm:text-lg text-pretty">
            Select a service, choose a fictional barber, and walk through the
            simulated reservation flow.
          </p>
        </div>

        <ConceptDisclosure
          variant="banner"
          text="This is a fictional booking demonstration. Availability is simulated, no real appointment is booked with an operating business, and no personal information is stored or transmitted."
        />

        <Suspense
          fallback={
            <div className="border border-sand bg-cream p-12 text-center font-mono text-xs tracking-[0.16em] text-soft-grey uppercase">
              LOADING BOOKING DEMONSTRATION...
            </div>
          }
        >
          <BookingWizard />
        </Suspense>
      </section>
    </div>
  );
}
