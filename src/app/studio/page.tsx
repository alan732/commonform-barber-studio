import type { Metadata } from "next";
import Image from "next/image";
import { ConceptDisclosure } from "@/components/ui/ConceptDisclosure";
import { FinalBookingCTA } from "@/components/sections/FinalBookingCTA";

export const metadata: Metadata = {
  title: "The Studio",
  description:
    "Explore the COMMONFORM Barber Studio concept — modern heritage craftsmanship, natural Australian interiors, and personal consultation.",
};

const STUDIO_SECTIONS = [
  {
    number: "01",
    label: "THE CRAFT",
    title: "TECHNIQUE, SHAPE, TEXTURE AND DETAIL.",
    copy: "Every haircut is approached with patience and structural awareness. Whether working with shears, clippers, or a straight razor, the focus stays on proportion, clean transitions, and how the cut settles naturally day after day.",
    image: "/images/service-scissor.jpg",
    imageAlt: "Precision Japanese texturising shears on a matte studio surface",
  },
  {
    number: "02",
    label: "THE SPACE",
    title: "NATURAL MATERIALS AND CALM NEIGHBOURHOOD HOSPITALITY.",
    copy: "Inspired by contemporary Australian design, warm timber, muted stone, and soft natural light replace harsh fluorescent brightness. The studio is imagined as a welcoming room you look forward to spending an hour in.",
    image: "/images/studio-chairs.jpg",
    imageAlt: "Barbershop interior featuring classic chairs, cabinetry, and mirrors",
  },
  {
    number: "03",
    label: "THE EXPERIENCE",
    title: "CONSULTATION AND COMMUNICATION FIRST.",
    copy: "Good barbering begins by listening. Before anything is trimmed or faded, there is time to talk through what feels right for your routine, your hair texture, and the direction you want your look to take.",
    image: "/images/editorial-session.jpg",
    imageAlt: "Barber consulting and cutting a client's hair in the studio",
  },
];

export default function StudioPage() {
  return (
    <div className="pt-28 bg-ivory">
      <section className="mx-auto max-w-7xl px-6 py-14 lg:px-10 lg:py-20 space-y-10">
        <div className="space-y-5 max-w-4xl">
          <p className="font-mono text-[11px] uppercase tracking-[0.22em] text-olive">
            COMMONFORM / THE STUDIO
          </p>
          <h1 className="font-display text-5xl font-semibold leading-[0.98] tracking-[-0.025em] text-ink sm:text-6xl text-balance">
            A MODERN TAKE ON THE NEIGHBOURHOOD BARBER.
          </h1>
        </div>

        <div className="grid grid-cols-1 gap-8 lg:grid-cols-12 border-t border-sand pt-8">
          <p className="lg:col-span-6 font-display text-2xl leading-snug text-ink text-pretty">
            COMMONFORM was imagined around a simple idea: good barbering does
            not need unnecessary complications.
          </p>
          <div className="lg:col-span-6 space-y-4 text-base leading-relaxed text-ink/80 text-pretty">
            <p>
              It starts with listening, understanding individual style and
              taking care with the details.
            </p>
            <p>
              Our concept celebrates the neighbourhood barber experience through
              a modern lens — thoughtful design, traditional techniques and a
              relaxed environment.
            </p>
          </div>
        </div>

        <ConceptDisclosure variant="banner" />
      </section>

      <section className="border-t border-sand bg-cream/50">
        <div className="mx-auto max-w-7xl divide-y divide-sand px-6 lg:px-10">
          {STUDIO_SECTIONS.map((sec, idx) => (
            <article
              key={sec.number}
              className="grid grid-cols-1 gap-10 py-16 lg:grid-cols-12 lg:items-center lg:gap-14 lg:py-24"
            >
              <div
                className={`lg:col-span-6 ${
                  idx % 2 === 1 ? "lg:order-2" : ""
                }`}
              >
                <div className="relative aspect-[16/10] w-full overflow-hidden border border-sand bg-ivory">
                  <Image
                    src={sec.image}
                    alt={sec.imageAlt}
                    fill
                    sizes="(max-width: 1024px) 100vw, 50vw"
                    className="object-cover"
                  />
                </div>
              </div>

              <div
                className={`lg:col-span-6 space-y-4 ${
                  idx % 2 === 1 ? "lg:order-1" : ""
                }`}
              >
                <span className="font-mono text-xs tracking-[0.2em] text-terracotta uppercase">
                  {sec.number} — {sec.label}
                </span>
                <h2 className="font-display text-3xl font-semibold leading-tight text-ink sm:text-4xl text-balance">
                  {sec.title}
                </h2>
                <p className="text-base leading-relaxed text-ink/80 text-pretty">
                  {sec.copy}
                </p>
              </div>
            </article>
          ))}
        </div>
      </section>

      <FinalBookingCTA />
    </div>
  );
}
