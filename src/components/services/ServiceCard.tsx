import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import type { ServiceItem } from "@/data/commonform";

interface ServiceCardProps {
  service: ServiceItem;
}

export function ServiceCard({ service }: ServiceCardProps) {
  return (
    <article className="group flex flex-col justify-between border border-sand bg-cream/40 transition-colors duration-300 hover:border-olive hover:bg-cream">
      <div>
        <div className="relative aspect-[16/10] w-full overflow-hidden border-b border-sand bg-cream">
          <Image
            src={service.image}
            alt={service.imageAlt}
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.03]"
          />
          <span className="absolute top-3 left-3 border border-sand bg-ivory/95 px-2.5 py-1 font-mono text-[11px] tracking-[0.18em] text-ink">
            {service.number}
          </span>
        </div>

        <div className="p-6 space-y-3">
          <div className="flex items-baseline justify-between gap-3">
            <h3 className="font-display text-xl font-semibold text-ink group-hover:text-olive transition-colors">
              {service.name}
            </h3>
            <span className="font-mono text-base font-medium text-terracotta shrink-0">
              {service.priceLabel}
            </span>
          </div>

          <p className="text-sm leading-relaxed text-ink/75 text-pretty">
            {service.shortDescription}
          </p>
        </div>
      </div>

      <div className="border-t border-sand/80 px-6 py-4 flex items-center justify-between">
        <span className="font-mono text-[11px] tracking-[0.14em] text-soft-grey uppercase">
          {service.duration} (DEMO)
        </span>
        <Link
          href={`/booking?service=${service.id}`}
          className="inline-flex items-center gap-1.5 font-mono text-xs font-medium tracking-[0.16em] text-ink transition-colors group-hover:text-terracotta"
        >
          <span>BOOK</span>
          <ArrowUpRight className="h-3.5 w-3.5" />
        </Link>
      </div>
    </article>
  );
}
