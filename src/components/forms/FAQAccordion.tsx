"use client";

import { useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { Plus, Minus } from "lucide-react";
import { FAQS } from "@/data/commonform";

export function FAQAccordion() {
  const [openId, setOpenId] = useState<string | null>(FAQS[0]?.id ?? null);
  const shouldReduceMotion = useReducedMotion() ?? false;

  return (
    <div className="divide-y divide-sand border border-sand bg-ivory">
      {FAQS.map((faq) => {
        const isOpen = openId === faq.id;
        return (
          <div key={faq.id}>
            <button
              type="button"
              aria-expanded={isOpen}
              aria-controls={`faq-panel-${faq.id}`}
              id={`faq-trigger-${faq.id}`}
              onClick={() => setOpenId(isOpen ? null : faq.id)}
              className="flex w-full items-center justify-between gap-4 px-6 py-5 text-left transition-colors hover:bg-cream/50 focus-visible:outline-2 focus-visible:outline-offset-[-2px] focus-visible:outline-olive"
            >
              <span className="font-display text-lg font-medium text-ink">
                {faq.question}
              </span>
              <span className="flex h-8 w-8 shrink-0 items-center justify-center border border-sand text-olive">
                {isOpen ? (
                  <Minus className="h-4 w-4" aria-hidden="true" />
                ) : (
                  <Plus className="h-4 w-4" aria-hidden="true" />
                )}
              </span>
            </button>

            <AnimatePresence initial={false}>
              {isOpen && (
                <motion.div
                  id={`faq-panel-${faq.id}`}
                  role="region"
                  aria-labelledby={`faq-trigger-${faq.id}`}
                  initial={shouldReduceMotion ? { opacity: 1 } : { height: 0, opacity: 0 }}
                  animate={shouldReduceMotion ? { opacity: 1 } : { height: "auto", opacity: 1 }}
                  exit={shouldReduceMotion ? { opacity: 0 } : { height: 0, opacity: 0 }}
                  transition={{ duration: shouldReduceMotion ? 0 : 0.22 }}
                  className="overflow-hidden"
                >
                  <div className="border-t border-sand/60 px-6 py-5 text-sm leading-relaxed text-ink/80 text-pretty">
                    {faq.answer}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        );
      })}
    </div>
  );
}
