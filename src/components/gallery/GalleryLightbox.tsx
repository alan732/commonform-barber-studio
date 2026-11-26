"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { X, ChevronLeft, ChevronRight } from "lucide-react";
import type { LookbookEntry } from "@/data/commonform";

interface GalleryLightboxProps {
  items: LookbookEntry[];
  activeIndex: number | null;
  onClose: () => void;
  onNavigate: (nextIndex: number) => void;
}

export function GalleryLightbox({
  items,
  activeIndex,
  onClose,
  onNavigate,
}: GalleryLightboxProps) {
  const shouldReduceMotion = useReducedMotion() ?? false;
  const touchStartX = useRef<number | null>(null);
  const activeItem = activeIndex !== null ? items[activeIndex] : null;

  useEffect(() => {
    if (activeIndex === null) return;
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowRight") onNavigate((activeIndex + 1) % items.length);
      if (e.key === "ArrowLeft")
        onNavigate((activeIndex - 1 + items.length) % items.length);
    };
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", handleKey);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", handleKey);
    };
  }, [activeIndex, items.length, onClose, onNavigate]);

  return (
    <AnimatePresence>
      {activeItem && activeIndex !== null && (
        <motion.div
          initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: shouldReduceMotion ? 0 : 0.2 }}
          className="fixed inset-0 z-50 flex items-center justify-center bg-ink/90 p-4 sm:p-8 backdrop-blur-sm"
          role="dialog"
          aria-modal="true"
          aria-label={`Lookbook preview: ${activeItem.title}`}
          onClick={onClose}
        >
          <div
            className="relative flex w-full max-w-5xl flex-col overflow-hidden border border-sand bg-ivory lg:grid lg:grid-cols-12"
            onClick={(e) => e.stopPropagation()}
            onTouchStart={(e) => {
              touchStartX.current = e.touches[0]?.clientX ?? null;
            }}
            onTouchEnd={(e) => {
              if (touchStartX.current === null) return;
              const deltaX = (e.changedTouches[0]?.clientX ?? 0) - touchStartX.current;
              if (deltaX > 50) {
                onNavigate((activeIndex - 1 + items.length) % items.length);
              } else if (deltaX < -50) {
                onNavigate((activeIndex + 1) % items.length);
              }
              touchStartX.current = null;
            }}
          >
            <div className="relative aspect-[4/3] lg:aspect-[3/4] max-h-[65vh] lg:max-h-[80vh] w-full bg-cream lg:col-span-7">
              <Image
                src={activeItem.image}
                alt={activeItem.imageAlt}
                fill
                sizes="(max-width: 1024px) 100vw, 58vw"
                className="object-cover"
              />
            </div>

            <div className="flex flex-col justify-between p-6 lg:col-span-5 lg:p-10">
              <div className="flex items-start justify-between gap-4">
                <span className="font-mono text-xs tracking-[0.18em] text-olive uppercase">
                  {activeItem.category}
                </span>
                <button
                  type="button"
                  onClick={onClose}
                  aria-label="Close lightbox"
                  className="flex h-10 w-10 items-center justify-center border border-sand text-ink transition-colors hover:border-ink"
                >
                  <X className="h-5 w-5" />
                </button>
              </div>

              <div className="my-8 space-y-4">
                <h3 className="font-display text-2xl font-semibold text-ink sm:text-3xl">
                  {activeItem.title}
                </h3>
                <p className="text-sm leading-relaxed text-ink/80 text-pretty">
                  {activeItem.description}
                </p>
                <p className="font-mono text-[10px] tracking-[0.14em] text-soft-grey uppercase">
                  REFERENCE PHOTOGRAPHY — NOT AN ACTUAL COMMONFORM CUSTOMER
                </p>
              </div>

              <div className="flex items-center justify-between border-t border-sand pt-6">
                <span className="font-mono text-xs text-soft-grey">
                  0{activeIndex + 1} / 0{items.length}
                </span>
                <div className="flex items-center gap-2">
                  <button
                    type="button"
                    onClick={() =>
                      onNavigate((activeIndex - 1 + items.length) % items.length)
                    }
                    aria-label="Previous lookbook image"
                    className="flex h-10 w-10 items-center justify-center border border-sand text-ink transition-colors hover:border-ink"
                  >
                    <ChevronLeft className="h-4 w-4" />
                  </button>
                  <button
                    type="button"
                    onClick={() => onNavigate((activeIndex + 1) % items.length)}
                    aria-label="Next lookbook image"
                    className="flex h-10 w-10 items-center justify-center border border-sand text-ink transition-colors hover:border-ink"
                  >
                    <ChevronRight className="h-4 w-4" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
