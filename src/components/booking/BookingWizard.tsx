"use client";

import { useState, useMemo } from "react";
import { useSearchParams } from "next/navigation";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import {
  ArrowLeft,
  ArrowRight,
  Check,
  CheckCircle2,
  RotateCcw,
} from "lucide-react";
import { SERVICES, TEAM_MEMBERS, type BarberItem } from "@/data/commonform";
import { BookingProgress } from "@/components/booking/BookingProgress";
import { BookingSummary } from "@/components/booking/BookingSummary";

const TIME_SLOTS = [
  "09:00 AM",
  "10:15 AM",
  "11:30 AM",
  "01:00 PM",
  "02:30 PM",
  "04:00 PM",
  "05:15 PM",
];

const customerSchema = z.object({
  fullName: z
    .string()
    .trim()
    .min(2, "Please enter at least 2 characters for your full name."),
  email: z.string().trim().email("Please enter a valid email address."),
  phone: z
    .string()
    .trim()
    .optional()
    .refine(
      (val) => !val || val.length >= 8,
      "If provided, phone number must be at least 8 characters."
    ),
});

type CustomerForm = z.infer<typeof customerSchema>;

function buildDemoDates() {
  const base = new Date();
  const days: {
    iso: string;
    dayName: string;
    dayNum: string;
    month: string;
    full: string;
  }[] = [];

  for (let i = 1; i <= 12; i++) {
    const d = new Date(base);
    d.setDate(base.getDate() + i);
    days.push({
      iso: d.toISOString().split("T")[0],
      dayName: d.toLocaleDateString("en-AU", { weekday: "short" }).toUpperCase(),
      dayNum: d.toLocaleDateString("en-AU", { day: "2-digit" }),
      month: d.toLocaleDateString("en-AU", { month: "short" }).toUpperCase(),
      full: d.toLocaleDateString("en-AU", {
        weekday: "long",
        day: "numeric",
        month: "long",
        year: "numeric",
      }),
    });
  }
  return days;
}

export function BookingWizard() {
  const searchParams = useSearchParams();
  const shouldReduceMotion = useReducedMotion() ?? false;

  const initialServiceId = searchParams.get("service");
  const initialBarberId = searchParams.get("barber");

  const [step, setStep] = useState<number>(1);
  const [selectedServiceId, setSelectedServiceId] = useState<string | null>(
    SERVICES.some((s) => s.id === initialServiceId) ? initialServiceId : null
  );
  const [selectedBarber, setSelectedBarber] = useState<
    BarberItem | "any" | null
  >(() => {
    const found = TEAM_MEMBERS.find((b) => b.id === initialBarberId);
    return found ?? null;
  });
  const [selectedDateIso, setSelectedDateIso] = useState<string | null>(null);
  const [selectedTime, setSelectedTime] = useState<string | null>(null);
  const [customerDetails, setCustomerDetails] = useState<CustomerForm | null>(
    null
  );
  const [demoRef, setDemoRef] = useState<string>("");

  const demoDates = useMemo(() => buildDemoDates(), []);

  const selectedService = useMemo(
    () => SERVICES.find((s) => s.id === selectedServiceId) ?? null,
    [selectedServiceId]
  );

  const selectedDateObj = useMemo(
    () => demoDates.find((d) => d.iso === selectedDateIso) ?? null,
    [demoDates, selectedDateIso]
  );

  const {
    register,
    handleSubmit,
    reset: resetForm,
    formState: { errors },
  } = useForm<CustomerForm>({
    resolver: zodResolver(customerSchema),
    defaultValues: {
      fullName: "",
      email: "",
      phone: "",
    },
  });

  const onSubmitCustomer = (data: CustomerForm) => {
    setCustomerDetails(data);
    setStep(6);
  };

  const handleConfirm = () => {
    const code = Math.floor(1000 + Math.random() * 9000);
    setDemoRef(`CF-DEMO-${code}`);
    setStep(7);
  };

  const handleRestart = () => {
    setStep(1);
    setSelectedServiceId(null);
    setSelectedBarber(null);
    setSelectedDateIso(null);
    setSelectedTime(null);
    setCustomerDetails(null);
    setDemoRef("");
    resetForm();
  };

  return (
    <div className="space-y-8">
      <BookingProgress currentStep={step} />

      <div className="grid grid-cols-1 gap-10 lg:grid-cols-12 lg:items-start">
        <div className="lg:col-span-8 border border-sand bg-cream/40 p-6 sm:p-10">
          <AnimatePresence mode="wait">
            <motion.div
              key={step}
              initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={shouldReduceMotion ? { opacity: 0 } : { opacity: 0, y: -10 }}
              transition={{ duration: shouldReduceMotion ? 0 : 0.22 }}
            >
              {/* STEP 1 — SELECT A SERVICE */}
              {step === 1 && (
                <div className="space-y-6">
                  <div className="space-y-1.5">
                    <span className="font-mono text-[11px] tracking-[0.18em] text-olive uppercase">
                      STEP 01 — SELECT A SERVICE
                    </span>
                    <h2 className="font-display text-2xl font-semibold text-ink sm:text-3xl">
                      CHOOSE YOUR SERVICE.
                    </h2>
                  </div>

                  <div className="grid grid-cols-1 gap-3.5">
                    {SERVICES.map((svc) => {
                      const active = selectedServiceId === svc.id;
                      return (
                        <button
                          key={svc.id}
                          type="button"
                          onClick={() => setSelectedServiceId(svc.id)}
                          className={`flex flex-col gap-2 border p-5 text-left transition-colors sm:flex-row sm:items-center sm:justify-between ${
                            active
                              ? "border-olive bg-olive/10"
                              : "border-sand bg-ivory hover:border-ink"
                          }`}
                        >
                          <div className="space-y-1">
                            <div className="flex items-center gap-2.5">
                              <span className="font-mono text-xs text-terracotta">
                                {svc.number}
                              </span>
                              <span className="font-display text-lg font-semibold text-ink">
                                {svc.name}
                              </span>
                            </div>
                            <p className="text-sm text-ink/75">
                              {svc.shortDescription}
                            </p>
                            <span className="inline-block font-mono text-[10px] tracking-[0.14em] text-soft-grey uppercase">
                              {svc.duration} (ILLUSTRATIVE)
                            </span>
                          </div>
                          <div className="flex items-center justify-between sm:flex-col sm:items-end gap-1 shrink-0">
                            <span className="font-mono text-lg font-medium text-ink">
                              {svc.priceLabel}
                            </span>
                            <span className="font-mono text-[10px] text-soft-grey uppercase">
                              DEMO AUD
                            </span>
                          </div>
                        </button>
                      );
                    })}
                  </div>

                  <div className="flex justify-end pt-3">
                    <button
                      type="button"
                      disabled={!selectedServiceId}
                      onClick={() => setStep(2)}
                      className="inline-flex items-center gap-2 bg-olive px-7 py-3.5 font-mono text-xs font-medium tracking-[0.16em] text-ivory transition-colors hover:bg-ink disabled:cursor-not-allowed disabled:opacity-40"
                    >
                      <span>NEXT: BARBER</span>
                      <ArrowRight className="h-4 w-4" />
                    </button>
                  </div>
                </div>
              )}

              {/* STEP 2 — SELECT A BARBER */}
              {step === 2 && (
                <div className="space-y-6">
                  <div className="space-y-1.5">
                    <span className="font-mono text-[11px] tracking-[0.18em] text-olive uppercase">
                      STEP 02 — SELECT A BARBER (FICTIONAL)
                    </span>
                    <h2 className="font-display text-2xl font-semibold text-ink sm:text-3xl">
                      CHOOSE A CONCEPT BARBER.
                    </h2>
                  </div>

                  <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                    {TEAM_MEMBERS.map((barber) => {
                      const active =
                        selectedBarber !== "any" &&
                        selectedBarber?.id === barber.id;
                      return (
                        <button
                          key={barber.id}
                          type="button"
                          onClick={() => setSelectedBarber(barber)}
                          className={`border p-5 text-left transition-colors space-y-2 ${
                            active
                              ? "border-olive bg-olive/10"
                              : "border-sand bg-ivory hover:border-ink"
                          }`}
                        >
                          <div className="flex items-center justify-between">
                            <span className="font-mono text-[10px] tracking-[0.14em] text-soft-grey uppercase">
                              FICTIONAL PROFILE
                            </span>
                            {active && <Check className="h-4 w-4 text-olive" />}
                          </div>
                          <h3 className="font-display text-xl font-semibold text-ink">
                            {barber.name}
                          </h3>
                          <p className="font-mono text-xs text-terracotta">
                            {barber.specialty}
                          </p>
                          <p className="text-xs leading-relaxed text-ink/75">
                            {barber.preferredStyle}
                          </p>
                        </button>
                      );
                    })}

                    <button
                      type="button"
                      onClick={() => setSelectedBarber("any")}
                      className={`border p-5 text-left transition-colors space-y-2 ${
                        selectedBarber === "any"
                          ? "border-olive bg-olive/10"
                          : "border-sand bg-ivory hover:border-ink"
                      }`}
                    >
                      <div className="flex items-center justify-between">
                        <span className="font-mono text-[10px] tracking-[0.14em] text-soft-grey uppercase">
                          FLEXIBLE
                        </span>
                        {selectedBarber === "any" && (
                          <Check className="h-4 w-4 text-olive" />
                        )}
                      </div>
                      <h3 className="font-display text-xl font-semibold text-ink">
                        NO PREFERENCE
                      </h3>
                      <p className="font-mono text-xs text-olive">
                        First Available (Demo)
                      </p>
                      <p className="text-xs leading-relaxed text-ink/75">
                        Pair with any available fictional studio barber.
                      </p>
                    </button>
                  </div>

                  <div className="flex items-center justify-between pt-3">
                    <button
                      type="button"
                      onClick={() => setStep(1)}
                      className="inline-flex items-center gap-2 border border-sand bg-ivory px-5 py-3.5 font-mono text-xs tracking-[0.14em] text-ink hover:border-ink"
                    >
                      <ArrowLeft className="h-4 w-4" />
                      <span>BACK</span>
                    </button>
                    <button
                      type="button"
                      disabled={!selectedBarber}
                      onClick={() => setStep(3)}
                      className="inline-flex items-center gap-2 bg-olive px-7 py-3.5 font-mono text-xs font-medium tracking-[0.16em] text-ivory transition-colors hover:bg-ink disabled:cursor-not-allowed disabled:opacity-40"
                    >
                      <span>NEXT: DATE</span>
                      <ArrowRight className="h-4 w-4" />
                    </button>
                  </div>
                </div>
              )}

              {/* STEP 3 — CHOOSE A DATE */}
              {step === 3 && (
                <div className="space-y-6">
                  <div className="space-y-1.5">
                    <span className="font-mono text-[11px] tracking-[0.18em] text-olive uppercase">
                      STEP 03 — CHOOSE A DATE (DEMO)
                    </span>
                    <h2 className="font-display text-2xl font-semibold text-ink sm:text-3xl">
                      SELECT A DEMONSTRATION DAY.
                    </h2>
                  </div>

                  <div className="grid grid-cols-3 gap-3 sm:grid-cols-4">
                    {demoDates.map((d) => {
                      const active = selectedDateIso === d.iso;
                      return (
                        <button
                          key={d.iso}
                          type="button"
                          onClick={() => setSelectedDateIso(d.iso)}
                          className={`flex flex-col items-center justify-center border py-4 px-2 transition-colors ${
                            active
                              ? "border-olive bg-olive text-ivory"
                              : "border-sand bg-ivory text-ink hover:border-ink"
                          }`}
                        >
                          <span
                            className={`font-mono text-[10px] tracking-[0.14em] ${
                              active ? "text-ivory/80" : "text-soft-grey"
                            }`}
                          >
                            {d.dayName}
                          </span>
                          <span className="font-display text-2xl font-semibold my-0.5">
                            {d.dayNum}
                          </span>
                          <span
                            className={`font-mono text-[10px] tracking-[0.14em] ${
                              active ? "text-sand" : "text-terracotta"
                            }`}
                          >
                            {d.month}
                          </span>
                        </button>
                      );
                    })}
                  </div>

                  <div className="flex items-center justify-between pt-3">
                    <button
                      type="button"
                      onClick={() => setStep(2)}
                      className="inline-flex items-center gap-2 border border-sand bg-ivory px-5 py-3.5 font-mono text-xs tracking-[0.14em] text-ink hover:border-ink"
                    >
                      <ArrowLeft className="h-4 w-4" />
                      <span>BACK</span>
                    </button>
                    <button
                      type="button"
                      disabled={!selectedDateIso}
                      onClick={() => setStep(4)}
                      className="inline-flex items-center gap-2 bg-olive px-7 py-3.5 font-mono text-xs font-medium tracking-[0.16em] text-ivory transition-colors hover:bg-ink disabled:cursor-not-allowed disabled:opacity-40"
                    >
                      <span>NEXT: TIME</span>
                      <ArrowRight className="h-4 w-4" />
                    </button>
                  </div>
                </div>
              )}

              {/* STEP 4 — CHOOSE A TIME */}
              {step === 4 && (
                <div className="space-y-6">
                  <div className="space-y-1.5">
                    <span className="font-mono text-[11px] tracking-[0.18em] text-olive uppercase">
                      STEP 04 — CHOOSE A TIME (DEMO)
                    </span>
                    <h2 className="font-display text-2xl font-semibold text-ink sm:text-3xl">
                      SELECT A DEMONSTRATION SLOT.
                    </h2>
                  </div>

                  <div className="grid grid-cols-2 gap-3 sm:grid-cols-3">
                    {TIME_SLOTS.map((slot) => {
                      const active = selectedTime === slot;
                      return (
                        <button
                          key={slot}
                          type="button"
                          onClick={() => setSelectedTime(slot)}
                          className={`border py-4 px-4 font-mono text-xs tracking-[0.14em] transition-colors ${
                            active
                              ? "border-olive bg-olive text-ivory font-medium"
                              : "border-sand bg-ivory text-ink hover:border-ink"
                          }`}
                        >
                          {slot}
                        </button>
                      );
                    })}
                  </div>

                  <div className="flex items-center justify-between pt-3">
                    <button
                      type="button"
                      onClick={() => setStep(3)}
                      className="inline-flex items-center gap-2 border border-sand bg-ivory px-5 py-3.5 font-mono text-xs tracking-[0.14em] text-ink hover:border-ink"
                    >
                      <ArrowLeft className="h-4 w-4" />
                      <span>BACK</span>
                    </button>
                    <button
                      type="button"
                      disabled={!selectedTime}
                      onClick={() => setStep(5)}
                      className="inline-flex items-center gap-2 bg-olive px-7 py-3.5 font-mono text-xs font-medium tracking-[0.16em] text-ivory transition-colors hover:bg-ink disabled:cursor-not-allowed disabled:opacity-40"
                    >
                      <span>NEXT: DETAILS</span>
                      <ArrowRight className="h-4 w-4" />
                    </button>
                  </div>
                </div>
              )}

              {/* STEP 5 — CUSTOMER DETAILS */}
              {step === 5 && (
                <form
                  onSubmit={handleSubmit(onSubmitCustomer)}
                  noValidate
                  className="space-y-6"
                >
                  <div className="space-y-1.5">
                    <span className="font-mono text-[11px] tracking-[0.18em] text-olive uppercase">
                      STEP 05 — CUSTOMER DETAILS (SESSION ONLY)
                    </span>
                    <h2 className="font-display text-2xl font-semibold text-ink sm:text-3xl">
                      ENTER DEMONSTRATION DETAILS.
                    </h2>
                    <p className="text-xs text-ink/70">
                      Validated locally in your browser. Nothing is stored or
                      transmitted.
                    </p>
                  </div>

                  <div className="space-y-4">
                    <div>
                      <label
                        htmlFor="cf-fullName"
                        className="block font-mono text-[11px] tracking-[0.14em] text-ink uppercase mb-2"
                      >
                        FULL NAME *
                      </label>
                      <input
                        id="cf-fullName"
                        type="text"
                        placeholder="e.g. Sam Taylor"
                        {...register("fullName")}
                        className="w-full border border-sand bg-ivory px-4 py-3 text-sm text-ink placeholder:text-soft-grey/70 focus:border-olive focus:outline-none"
                      />
                      {errors.fullName && (
                        <p className="mt-1.5 font-mono text-xs text-terracotta" role="alert">
                          {errors.fullName.message}
                        </p>
                      )}
                    </div>

                    <div>
                      <label
                        htmlFor="cf-email"
                        className="block font-mono text-[11px] tracking-[0.14em] text-ink uppercase mb-2"
                      >
                        EMAIL ADDRESS *
                      </label>
                      <input
                        id="cf-email"
                        type="email"
                        placeholder="name@example.com"
                        {...register("email")}
                        className="w-full border border-sand bg-ivory px-4 py-3 text-sm text-ink placeholder:text-soft-grey/70 focus:border-olive focus:outline-none"
                      />
                      {errors.email && (
                        <p className="mt-1.5 font-mono text-xs text-terracotta" role="alert">
                          {errors.email.message}
                        </p>
                      )}
                    </div>

                    <div>
                      <label
                        htmlFor="cf-phone"
                        className="block font-mono text-[11px] tracking-[0.14em] text-ink uppercase mb-2"
                      >
                        PHONE NUMBER (OPTIONAL)
                      </label>
                      <input
                        id="cf-phone"
                        type="tel"
                        placeholder="Optional demonstration number"
                        {...register("phone")}
                        className="w-full border border-sand bg-ivory px-4 py-3 text-sm text-ink placeholder:text-soft-grey/70 focus:border-olive focus:outline-none"
                      />
                      {errors.phone && (
                        <p className="mt-1.5 font-mono text-xs text-terracotta" role="alert">
                          {errors.phone.message}
                        </p>
                      )}
                    </div>
                  </div>

                  <div className="flex items-center justify-between pt-3">
                    <button
                      type="button"
                      onClick={() => setStep(4)}
                      className="inline-flex items-center gap-2 border border-sand bg-ivory px-5 py-3.5 font-mono text-xs tracking-[0.14em] text-ink hover:border-ink"
                    >
                      <ArrowLeft className="h-4 w-4" />
                      <span>BACK</span>
                    </button>
                    <button
                      type="submit"
                      className="inline-flex items-center gap-2 bg-olive px-7 py-3.5 font-mono text-xs font-medium tracking-[0.16em] text-ivory transition-colors hover:bg-ink"
                    >
                      <span>REVIEW BOOKING</span>
                      <ArrowRight className="h-4 w-4" />
                    </button>
                  </div>
                </form>
              )}

              {/* STEP 6 — REVIEW */}
              {step === 6 && (
                <div className="space-y-6">
                  <div className="space-y-1.5">
                    <span className="font-mono text-[11px] tracking-[0.18em] text-olive uppercase">
                      STEP 06 — REVIEW
                    </span>
                    <h2 className="font-display text-2xl font-semibold text-ink sm:text-3xl">
                      CHECK YOUR DEMONSTRATION SUMMARY.
                    </h2>
                  </div>

                  <div className="divide-y divide-sand border border-sand bg-ivory">
                    <div className="flex justify-between p-4 text-sm">
                      <span className="font-mono text-xs text-soft-grey uppercase">
                        SERVICE
                      </span>
                      <span className="font-medium text-ink">
                        {selectedService?.name} ({selectedService?.priceLabel})
                      </span>
                    </div>
                    <div className="flex justify-between p-4 text-sm">
                      <span className="font-mono text-xs text-soft-grey uppercase">
                        BARBER
                      </span>
                      <span className="font-medium text-ink">
                        {selectedBarber === "any"
                          ? "No preference"
                          : selectedBarber?.name}
                      </span>
                    </div>
                    <div className="flex justify-between p-4 text-sm">
                      <span className="font-mono text-xs text-soft-grey uppercase">
                        DEMO DATE &amp; TIME
                      </span>
                      <span className="font-medium text-ink text-right">
                        {selectedDateObj?.full} · {selectedTime}
                      </span>
                    </div>
                    <div className="flex justify-between p-4 text-sm">
                      <span className="font-mono text-xs text-soft-grey uppercase">
                        GUEST (SESSION)
                      </span>
                      <span className="font-medium text-ink text-right">
                        {customerDetails?.fullName} ({customerDetails?.email})
                        {customerDetails?.phone ? ` · ${customerDetails.phone}` : ""}
                      </span>
                    </div>
                  </div>

                  <div className="flex items-center justify-between pt-3">
                    <button
                      type="button"
                      onClick={() => setStep(5)}
                      className="inline-flex items-center gap-2 border border-sand bg-ivory px-5 py-3.5 font-mono text-xs tracking-[0.14em] text-ink hover:border-ink"
                    >
                      <ArrowLeft className="h-4 w-4" />
                      <span>EDIT DETAILS</span>
                    </button>
                    <button
                      type="button"
                      onClick={handleConfirm}
                      className="inline-flex items-center gap-2 bg-olive px-7 py-3.5 font-mono text-xs font-medium tracking-[0.16em] text-ivory transition-colors hover:bg-ink"
                    >
                      <span>CONFIRM DEMO BOOKING</span>
                      <Check className="h-4 w-4" />
                    </button>
                  </div>
                </div>
              )}

              {/* STEP 7 — CONFIRMATION */}
              {step === 7 && (
                <div className="space-y-6 py-2">
                  <div className="flex items-center gap-3 text-olive">
                    <CheckCircle2 className="h-7 w-7" aria-hidden="true" />
                    <span className="font-mono text-xs font-medium tracking-[0.18em] uppercase">
                      STEP 07 — SIMULATED CONFIRMATION
                    </span>
                  </div>

                  <h2 className="font-display text-3xl font-semibold text-ink sm:text-4xl">
                    DEMONSTRATION BOOKING COMPLETE.
                  </h2>

                  <p className="text-sm leading-relaxed text-ink/80 text-pretty">
                    Thank you, {customerDetails?.fullName}. This is a simulated
                    confirmation for the COMMONFORM portfolio demonstration — no
                    real appointment has been booked and no personal data was
                    saved or transmitted.
                  </p>

                  <div className="border border-olive bg-ivory p-6 space-y-3">
                    <div className="flex items-center justify-between">
                      <span className="font-mono text-[11px] tracking-[0.16em] text-soft-grey uppercase">
                        DEMO REFERENCE
                      </span>
                      <span className="font-mono text-sm font-medium text-terracotta">
                        {demoRef}
                      </span>
                    </div>
                    <div className="flex items-center justify-between text-sm">
                      <span className="text-ink/70">Service</span>
                      <span className="font-medium text-ink">
                        {selectedService?.name} ({selectedService?.priceLabel})
                      </span>
                    </div>
                    <div className="flex items-center justify-between text-sm">
                      <span className="text-ink/70">Barber</span>
                      <span className="font-medium text-ink">
                        {selectedBarber === "any"
                          ? "No preference"
                          : selectedBarber?.name}
                      </span>
                    </div>
                    <div className="flex items-center justify-between text-sm">
                      <span className="text-ink/70">Demo Schedule</span>
                      <span className="font-medium text-ink">
                        {selectedDateObj?.full} at {selectedTime}
                      </span>
                    </div>
                  </div>

                  <button
                    type="button"
                    onClick={handleRestart}
                    className="inline-flex items-center gap-2 border border-sand bg-ivory px-6 py-3.5 font-mono text-xs tracking-[0.16em] text-ink transition-colors hover:border-ink"
                  >
                    <RotateCcw className="h-4 w-4" />
                    <span>RESTART BOOKING DEMO</span>
                  </button>
                </div>
              )}
            </motion.div>
          </AnimatePresence>
        </div>

        <div className="lg:col-span-4">
          <BookingSummary
            service={selectedService}
            barber={selectedBarber}
            dateLabel={selectedDateObj?.full ?? null}
            timeSlot={selectedTime}
          />
        </div>
      </div>
    </div>
  );
}
