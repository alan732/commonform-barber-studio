"use client";

import { useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { X, ArrowUpRight } from "lucide-react";
import { NAV_ITEMS, CONCEPT_DISCLOSURE } from "@/data/commonform";

interface MobileNavigationProps {
  isOpen: boolean;
  onClose: () => void;
}

export function MobileNavigation({ isOpen, onClose }: MobileNavigationProps) {
  const pathname = usePathname();
  const shouldReduceMotion = useReducedMotion() ?? false;

  useEffect(() => {
    if (!isOpen) return;
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", handleKey);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", handleKey);
    };
  }, [isOpen, onClose]);

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: shouldReduceMotion ? 0 : 0.22 }}
          className="fixed inset-0 z-50 flex flex-col bg-ivory lg:hidden"
          role="dialog"
          aria-modal="true"
          aria-label="Mobile navigation"
        >
          <div className="flex items-center justify-between border-b border-sand px-6 py-5">
            <Link
              href="/"
              onClick={onClose}
              className="font-display text-xl font-semibold tracking-[0.14em] text-ink"
            >
              COMMONFORM
            </Link>
            <button
              type="button"
              onClick={onClose}
              aria-label="Close navigation menu"
              className="flex h-10 w-10 items-center justify-center border border-sand text-ink transition-colors hover:border-ink"
            >
              <X className="h-5 w-5" />
            </button>
          </div>

          <nav
            aria-label="Mobile primary navigation"
            className="flex flex-1 flex-col justify-between px-6 py-8 overflow-y-auto"
          >
            <ul className="divide-y divide-sand/70">
              {NAV_ITEMS.map((item, idx) => {
                const active = pathname === item.href;
                return (
                  <li key={item.href}>
                    <Link
                      href={item.href}
                      onClick={onClose}
                      className={`flex items-center justify-between py-4 font-display text-2xl font-medium transition-colors ${
                        active ? "text-terracotta" : "text-ink hover:text-olive"
                      }`}
                    >
                      <span>{item.label}</span>
                      <span className="font-mono text-xs text-soft-grey">
                        0{idx + 1}
                      </span>
                    </Link>
                  </li>
                );
              })}
              <li>
                <Link
                  href="/contact"
                  onClick={onClose}
                  className={`flex items-center justify-between py-4 font-display text-2xl font-medium transition-colors ${
                    pathname === "/contact"
                      ? "text-terracotta"
                      : "text-ink hover:text-olive"
                  }`}
                >
                  <span>CONTACT</span>
                  <span className="font-mono text-xs text-soft-grey">06</span>
                </Link>
              </li>
            </ul>

            <div className="mt-8 space-y-5">
              <Link
                href="/booking"
                onClick={onClose}
                className="flex w-full items-center justify-between bg-olive px-6 py-4 font-mono text-xs font-medium tracking-[0.16em] text-ivory transition-colors hover:bg-ink"
              >
                <span>BOOK A CUT</span>
                <ArrowUpRight className="h-4 w-4" />
              </Link>
              <p className="font-mono text-[10px] leading-relaxed tracking-[0.12em] text-soft-grey uppercase">
                {CONCEPT_DISCLOSURE.short}
              </p>
            </div>
          </nav>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
