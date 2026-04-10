import { ButtonHTMLAttributes } from "react";

type PrimaryButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: "solid" | "ghost" | "light";
};

export function PrimaryButton({
  className = "",
  variant = "solid",
  ...props
}: PrimaryButtonProps) {
  const variantClassName =
    variant === "solid"
      ? "bg-[var(--foreground)] text-white hover:-translate-y-0.5 hover:bg-[#302620]"
      : variant === "ghost"
        ? "border border-[rgba(23,18,15,0.12)] bg-white/40 text-[var(--foreground)] hover:-translate-y-0.5 hover:bg-white/70"
        : "bg-[rgba(255,107,74,0.12)] text-[var(--foreground)] hover:-translate-y-0.5 hover:bg-[rgba(255,107,74,0.18)]";

  return (
    <button
      className={`inline-flex min-h-12 items-center justify-center rounded-full px-5 text-sm font-semibold shadow-[0_10px_24px_rgba(23,18,15,0.08)] ${variantClassName} ${className}`}
      {...props}
    />
  );
}
