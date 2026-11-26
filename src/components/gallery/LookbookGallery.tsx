"use client";

import { useState, useMemo } from "react";
import Image from "next/image";
import { motion, AnimatePresence, useReducedMotion } from "framer-motion";
import { Maximize2 } from "lucide-react";
import {
  LOOKBOOK_CATEGORIES,
  LOOKBOOK_ENTRIES,
  type LookbookCategory,
} from "@/data/commonform";
import { GalleryLightbox } from "@/components/gallery/GalleryLightbox";

export function LookbookGallery() {
  const [selectedCategory, setSelectedCategory] =
    useState<LookbookCategory>("ALL STYLES");
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);
  const shouldReduceMotion = useReducedMotion() ?? false;

  const filteredItems = useMemo(() => {
    if (selectedCategory === "ALL STYLES") return LOOKBOOK_ENTRIES;
    return LOOKBOOK_ENTRIES.filter((item) => item.category === selectedCategory);
  }, [selectedCategory]);

  return (
    <div className="space-y-10">
      {/* Category Filters */}
      <div
        role="tablist"
        aria-label="Lookbook style filters"
        className="flex flex-wrap gap-2 border-b border-sand pb-6"
      >
        {LOOKBOOK_CATEGORIES.map((category) => {
          const active = selectedCategory === category;
          return (
            <button
              key={category}
              role="tab"
              aria-selected={active}
              type="button"
              onClick={() => {
                setSelectedCategory(category);
                setLightboxIndex(null);
              }}
              className={`px-4 py-2.5 font-mono text-[11px] tracking-[0.16em] transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-olive ${
                active
                  ? "bg-olive text-ivory font-medium"
                  : "border border-sand bg-cream/60 text-ink/80 hover:border-ink hover:text-ink"
              }`}
            >
              {category}
            </button>
          );
        })}
      </div>

      {/* Responsive Masonry-Style Grid */}
      <motion.div
        layout={!shouldReduceMotion}
        className="columns-1 gap-6 sm:columns-2 lg:columns-3 space-y-6"
      >
        <AnimatePresence mode="popLayout">
          {filteredItems.map((item, idx) => (
            <motion.button
              key={item.id}
              type="button"
              layout={!shouldReduceMotion}
              initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, scale: 0.97 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={shouldReduceMotion ? { opacity: 0 } : { opacity: 0, scale: 0.97 }}
              transition={{ duration: shouldReduceMotion ? 0 : 0.3 }}
              onClick={() => setLightboxIndex(idx)}
              className="group relative block w-full break-inside-avoid text-left border border-sand bg-cream/50 overflow-hidden transition-colors hover:border-olive focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-olive"
            >
              <div
                className={`relative w-full overflow-hidden bg-cream ${
                  item.orientation === "portrait"
                    ? "aspect-[3/4]"
                    : "aspect-[4/3]"
                }`}
              >
                <Image
                  src={item.image}
                  alt={item.imageAlt}
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.03]"
                />
                <span className="absolute top-3 right-3 flex h-9 w-9 items-center justify-center border border-sand bg-ivory/90 text-ink opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                  <Maximize2 className="h-4 w-4" aria-hidden="true" />
                </span>
              </div>

              <div className="p-5 border-t border-sand/80 space-y-1">
                <span className="block font-mono text-[10px] tracking-[0.18em] text-olive uppercase">
                  {item.category}
                </span>
                <h3 className="font-display text-lg font-medium text-ink">
                  {item.title}
                </h3>
              </div>
            </motion.button>
          ))}
        </AnimatePresence>
      </motion.div>

      <GalleryLightbox
        items={filteredItems}
        activeIndex={lightboxIndex}
        onClose={() => setLightboxIndex(null)}
        onNavigate={(nextIdx) => setLightboxIndex(nextIdx)}
      />
    </div>
  );
}
