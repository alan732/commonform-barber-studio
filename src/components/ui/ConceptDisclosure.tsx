import { Info } from "lucide-react";
import { CONCEPT_DISCLOSURE } from "@/data/commonform";

interface ConceptDisclosureProps {
  variant?: "banner" | "inline";
  text?: string;
  className?: string;
}

export function ConceptDisclosure({
  variant = "inline",
  text,
  className = "",
}: ConceptDisclosureProps) {
  const message =
    text ??
    (variant === "banner" ? CONCEPT_DISCLOSURE.full : CONCEPT_DISCLOSURE.short);

  return (
    <div
      role="note"
      aria-label="Fictional portfolio concept notice"
      className={`flex items-start gap-3 border border-sand bg-cream/70 px-4 py-3 text-xs text-ink/85 ${className}`}
    >
      <Info
        className="h-4 w-4 text-terracotta shrink-0 mt-0.5"
        aria-hidden="true"
      />
      <p className="leading-relaxed text-pretty">
        <span className="font-mono text-[10px] uppercase tracking-[0.16em] text-olive font-medium mr-2">
          PORTFOLIO CONCEPT:
        </span>
        {message}
      </p>
    </div>
  );
}
