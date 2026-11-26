import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import type { BarberItem } from "@/data/commonform";

interface BarberProfileCardProps {
  barber: BarberItem;
  detailed?: boolean;
}

export function BarberProfileCard({
  barber,
  detailed = false,
}: BarberProfileCardProps) {
  return (
    <article className="group flex flex-col justify-between border border-sand bg-ivory transition-colors hover:border-olive">
      <div>
        <div className="relative aspect-[3/4] w-full overflow-hidden border-b border-sand bg-cream">
          <Image
            src={barber.image}
            alt={barber.imageAlt}
            fill
            sizes="(max-width: 768px) 100vw, 33vw"
            className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.03]"
          />
          <span className="absolute top-3 left-3 border border-sand bg-ivory/95 px-2.5 py-1 font-mono text-[10px] tracking-[0.16em] text-soft-grey uppercase">
            FICTIONAL PROFILE
          </span>
        </div>

        <div className="p-6 space-y-3">
          <h3 className="font-display text-2xl font-semibold text-ink">
            {barber.name}
          </h3>
          <p className="font-mono text-xs tracking-[0.16em] text-olive uppercase">
            {barber.specialty}
          </p>
          {detailed && (
            <p className="font-mono text-[11px] tracking-[0.12em] text-terracotta uppercase">
              PREFERRED: {barber.preferredStyle}
            </p>
          )}
          <p className="text-sm leading-relaxed text-ink/75 text-pretty">
            {barber.bio}
          </p>
        </div>
      </div>

      <div className="border-t border-sand/80 px-6 py-4 flex items-center justify-between">
        <span className="font-mono text-[10px] tracking-[0.14em] text-soft-grey uppercase">
          CONCEPT PERSONA
        </span>
        <Link
          href={`/booking?barber=${barber.id}`}
          className="inline-flex items-center gap-1.5 font-mono text-xs font-medium tracking-[0.14em] text-ink transition-colors group-hover:text-terracotta"
        >
          <span>SELECT</span>
          <ArrowUpRight className="h-3.5 w-3.5" />
        </Link>
      </div>
    </article>
  );
}
