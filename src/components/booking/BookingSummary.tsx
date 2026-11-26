import { Calendar, Clock, Scissors, User } from "lucide-react";
import type { BarberItem, ServiceItem } from "@/data/commonform";

interface BookingSummaryProps {
  service: ServiceItem | null;
  barber: BarberItem | "any" | null;
  dateLabel: string | null;
  timeSlot: string | null;
}

export function BookingSummary({
  service,
  barber,
  dateLabel,
  timeSlot,
}: BookingSummaryProps) {
  const barberLabel =
    barber === "any"
      ? "No preference"
      : barber
        ? `${barber.name} — ${barber.specialty}`
        : "Not selected";

  return (
    <aside
      aria-label="Booking summary"
      className="border border-sand bg-cream p-6 lg:p-8 space-y-6 lg:sticky lg:top-28"
    >
      <div className="flex items-center justify-between border-b border-sand pb-4">
        <h2 className="font-mono text-xs font-medium tracking-[0.18em] text-ink uppercase">
          BOOKING SUMMARY
        </h2>
        <span className="font-mono text-[10px] tracking-[0.16em] text-terracotta uppercase">
          DEMO ONLY
        </span>
      </div>

      <dl className="space-y-4 text-sm">
        <div className="flex items-start gap-3">
          <Scissors className="h-4 w-4 text-olive shrink-0 mt-0.5" aria-hidden="true" />
          <div className="flex-1">
            <dt className="font-mono text-[10px] tracking-[0.14em] text-soft-grey uppercase">
              SERVICE
            </dt>
            <dd className="mt-0.5 font-medium text-ink">
              {service ? service.name : "Not selected"}
            </dd>
          </div>
        </div>

        <div className="flex items-start gap-3">
          <User className="h-4 w-4 text-olive shrink-0 mt-0.5" aria-hidden="true" />
          <div className="flex-1">
            <dt className="font-mono text-[10px] tracking-[0.14em] text-soft-grey uppercase">
              FICTIONAL BARBER
            </dt>
            <dd className="mt-0.5 font-medium text-ink">{barberLabel}</dd>
          </div>
        </div>

        <div className="flex items-start gap-3">
          <Calendar className="h-4 w-4 text-olive shrink-0 mt-0.5" aria-hidden="true" />
          <div className="flex-1">
            <dt className="font-mono text-[10px] tracking-[0.14em] text-soft-grey uppercase">
              DEMO DATE
            </dt>
            <dd className="mt-0.5 font-medium text-ink">
              {dateLabel ?? "Not selected"}
            </dd>
          </div>
        </div>

        <div className="flex items-start gap-3">
          <Clock className="h-4 w-4 text-olive shrink-0 mt-0.5" aria-hidden="true" />
          <div className="flex-1">
            <dt className="font-mono text-[10px] tracking-[0.14em] text-soft-grey uppercase">
              DEMO TIME
            </dt>
            <dd className="mt-0.5 font-medium text-ink">
              {timeSlot ?? "Not selected"}
            </dd>
          </div>
        </div>
      </dl>

      <div className="border-t border-sand pt-5 flex items-baseline justify-between">
        <div>
          <span className="block font-mono text-[10px] tracking-[0.14em] text-soft-grey uppercase">
            ILLUSTRATIVE PRICE
          </span>
          <span className="font-mono text-[10px] text-soft-grey">
            {service ? service.duration : "Select a service"}
          </span>
        </div>
        <span className="font-display text-2xl font-semibold text-ink">
          {service ? service.priceLabel : "A$0"}
        </span>
      </div>

      <p className="border border-sand bg-ivory/80 p-3 font-mono text-[10px] leading-relaxed tracking-[0.1em] text-ink/75 uppercase">
        SIMULATED DEMONSTRATION: NO REAL APPOINTMENT IS BOOKED AND NO DATA IS STORED.
      </p>
    </aside>
  );
}
