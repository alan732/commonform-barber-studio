"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { CheckCircle2, Loader2, Send } from "lucide-react";

const contactSchema = z.object({
  fullName: z.string().trim().min(2, "Please enter at least 2 characters."),
  email: z.string().trim().email("Please enter a valid email address."),
  subject: z.string().trim().min(3, "Please enter a brief subject."),
  message: z
    .string()
    .trim()
    .min(10, "Please enter at least 10 characters for your message."),
});

type ContactFormValues = z.infer<typeof contactSchema>;

export function ContactForm() {
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<ContactFormValues>({
    resolver: zodResolver(contactSchema),
    defaultValues: {
      fullName: "",
      email: "",
      subject: "",
      message: "",
    },
  });

  const onSubmit = async () => {
    setSubmitting(true);
    await new Promise((resolve) => setTimeout(resolve, 450));
    setSubmitting(false);
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div className="border border-olive bg-cream p-8 space-y-5">
        <div className="flex items-center gap-3 text-olive">
          <CheckCircle2 className="h-6 w-6" aria-hidden="true" />
          <span className="font-mono text-xs font-medium tracking-[0.18em] uppercase">
            SIMULATED MESSAGE SENT
          </span>
        </div>
        <h3 className="font-display text-2xl font-semibold text-ink">
          DEMONSTRATION ENQUIRY RECEIVED.
        </h3>
        <p className="text-sm leading-relaxed text-ink/80 text-pretty">
          This contact form is a frontend demonstration for the COMMONFORM
          portfolio concept. No message was transmitted or stored.
        </p>
        <button
          type="button"
          onClick={() => {
            reset();
            setSubmitted(false);
          }}
          className="border border-sand bg-ivory px-5 py-3 font-mono text-xs tracking-[0.16em] text-ink transition-colors hover:border-ink"
        >
          SEND ANOTHER DEMO MESSAGE
        </button>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      noValidate
      className="border border-sand bg-cream/50 p-6 sm:p-8 space-y-5"
    >
      <div className="space-y-1 border-b border-sand pb-4">
        <span className="font-mono text-[10px] tracking-[0.18em] text-olive uppercase">
          CONTACT FORM DEMONSTRATION
        </span>
        <h2 className="font-display text-2xl font-semibold text-ink">
          SEND A MESSAGE (DEMO)
        </h2>
      </div>

      <div>
        <label
          htmlFor="contact-fullName"
          className="block font-mono text-[11px] tracking-[0.14em] text-ink uppercase mb-2"
        >
          FULL NAME *
        </label>
        <input
          id="contact-fullName"
          type="text"
          placeholder="Your name"
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
          htmlFor="contact-email"
          className="block font-mono text-[11px] tracking-[0.14em] text-ink uppercase mb-2"
        >
          EMAIL ADDRESS *
        </label>
        <input
          id="contact-email"
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
          htmlFor="contact-subject"
          className="block font-mono text-[11px] tracking-[0.14em] text-ink uppercase mb-2"
        >
          SUBJECT *
        </label>
        <input
          id="contact-subject"
          type="text"
          placeholder="e.g. Portfolio enquiry"
          {...register("subject")}
          className="w-full border border-sand bg-ivory px-4 py-3 text-sm text-ink placeholder:text-soft-grey/70 focus:border-olive focus:outline-none"
        />
        {errors.subject && (
          <p className="mt-1.5 font-mono text-xs text-terracotta" role="alert">
            {errors.subject.message}
          </p>
        )}
      </div>

      <div>
        <label
          htmlFor="contact-message"
          className="block font-mono text-[11px] tracking-[0.14em] text-ink uppercase mb-2"
        >
          MESSAGE *
        </label>
        <textarea
          id="contact-message"
          rows={4}
          placeholder="Write your demonstration message..."
          {...register("message")}
          className="w-full border border-sand bg-ivory px-4 py-3 text-sm text-ink placeholder:text-soft-grey/70 focus:border-olive focus:outline-none"
        />
        {errors.message && (
          <p className="mt-1.5 font-mono text-xs text-terracotta" role="alert">
            {errors.message.message}
          </p>
        )}
      </div>

      <button
        type="submit"
        disabled={submitting}
        className="inline-flex w-full items-center justify-center gap-2 bg-olive px-6 py-4 font-mono text-xs font-medium tracking-[0.16em] text-ivory transition-colors hover:bg-ink disabled:opacity-60"
      >
        {submitting ? (
          <>
            <Loader2 className="h-4 w-4 animate-spin" aria-hidden="true" />
            <span>SENDING DEMO...</span>
          </>
        ) : (
          <>
            <span>SUBMIT DEMO MESSAGE</span>
            <Send className="h-4 w-4" aria-hidden="true" />
          </>
        )}
      </button>
    </form>
  );
}
