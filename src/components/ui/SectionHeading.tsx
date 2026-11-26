interface SectionHeadingProps {
  label: string;
  title: string;
  description?: string;
  align?: "left" | "center";
  tone?: "light" | "dark";
}

export function SectionHeading({
  label,
  title,
  description,
  align = "left",
  tone = "light",
}: SectionHeadingProps) {
  const isDark = tone === "dark";

  return (
    <div
      className={`space-y-4 ${
        align === "center" ? "mx-auto max-w-2xl text-center" : "max-w-2xl"
      }`}
    >
      <p
        className={`font-mono text-[11px] uppercase tracking-[0.22em] ${
          isDark ? "text-sand" : "text-olive"
        }`}
      >
        {label}
      </p>
      <h2
        className={`font-display text-3xl font-semibold leading-[1.06] tracking-[-0.02em] sm:text-5xl text-balance ${
          isDark ? "text-ivory" : "text-ink"
        }`}
      >
        {title}
      </h2>
      {description && (
        <p
          className={`text-base leading-relaxed sm:text-lg text-pretty ${
            isDark ? "text-ivory/80" : "text-ink/75"
          }`}
        >
          {description}
        </p>
      )}
    </div>
  );
}
