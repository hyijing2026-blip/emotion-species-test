type SiteBadgeProps = {
  label: string;
};

export function SiteBadge({ label }: SiteBadgeProps) {
  return (
    <span className="inline-flex items-center rounded-full border border-[rgba(23,18,15,0.1)] bg-white/55 px-3 py-1 text-xs font-medium tracking-[0.18em] text-[var(--ink-soft)] uppercase">
      {label}
    </span>
  );
}
