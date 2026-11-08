import Link from "next/link";
import type { ReactNode } from "react";
export function Arrow() {
  return <span aria-hidden="true">↗</span>;
}
export default function ActionLink({
  href,
  children,
  variant = "primary",
}: {
  href: string;
  children: ReactNode;
  variant?: "primary" | "text" | "light" | "outline";
}) {
  const className =
    variant === "text"
      ? "rf-text-link"
      : `rf-action${variant === "primary" ? "" : ` rf-action-${variant}`}`;
  return (
    <Link href={href} className={className}>
      {children}
      <Arrow />
    </Link>
  );
}
