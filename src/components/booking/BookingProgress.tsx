const STEPS = [
  { step: 1, label: "SERVICE" },
  { step: 2, label: "BARBER" },
  { step: 3, label: "DATE" },
  { step: 4, label: "TIME" },
  { step: 5, label: "DETAILS" },
  { step: 6, label: "REVIEW" },
  { step: 7, label: "CONFIRMED" },
] as const;

interface BookingProgressProps {
  currentStep: number;
}

export function BookingProgress({ currentStep }: BookingProgressProps) {
  return (
    <nav
      aria-label="Booking progress"
      className="border border-sand bg-cream/60 p-4 sm:p-5"
    >
      <ol className="grid grid-cols-4 gap-2 sm:grid-cols-7">
        {STEPS.map((item) => {
          const isCurrent = currentStep === item.step;
          const isCompleted = currentStep > item.step;
          return (
            <li
              key={item.step}
              className={`flex flex-col gap-1 border-t-2 pt-2 transition-colors ${
                isCurrent
                  ? "border-terracotta"
                  : isCompleted
                    ? "border-olive"
                    : "border-sand"
              }`}
            >
              <span
                className={`font-mono text-[10px] tracking-[0.16em] ${
                  isCurrent
                    ? "text-terracotta font-medium"
                    : isCompleted
                      ? "text-olive"
                      : "text-soft-grey"
                }`}
              >
                0{item.step}
              </span>
              <span
                className={`font-mono text-[10px] tracking-[0.12em] hidden sm:block ${
                  isCurrent ? "text-ink font-medium" : "text-soft-grey"
                }`}
              >
                {item.label}
              </span>
            </li>
          );
        })}
      </ol>
    </nav>
  );
}
