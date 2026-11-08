"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import ActionLink from "./ActionLink";
import Brand from "./Brand";
import { advisoryHref } from "@/lib/site";
const links = [
  { href: "/", label: "Inicio" },
  { href: "/asesorias", label: "Asesorías" },
  { href: "/casos", label: "Casos" },
  { href: "/#sobre-mi", label: "Sobre mí" },
];
export default function SiteHeader() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const button = useRef<HTMLButtonElement>(null);
  useEffect(() => {
    function closeOnEscape(event: KeyboardEvent) {
      if (event.key === "Escape" && open) {
        setOpen(false);
        button.current?.focus();
      }
    }
    document.addEventListener("keydown", closeOnEscape);
    return () => document.removeEventListener("keydown", closeOnEscape);
  }, [open]);
  return (
    <header className="rf-header">
      <div className="rf-header-inner rf-wrap">
        <Brand />
        <button
          ref={button}
          type="button"
          className="rf-menu-toggle"
          aria-expanded={open}
          aria-controls="site-navigation"
          onClick={() => setOpen(!open)}
        >
          Menú <span aria-hidden="true">{open ? "−" : "+"}</span>
        </button>
        <nav
          id="site-navigation"
          className={`rf-nav${open ? " rf-open" : ""}`}
          aria-label="Navegación principal"
        >
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setOpen(false)}
              aria-current={
                link.href === pathname ||
                (link.href === "/casos" && pathname.startsWith("/casos/"))
                  ? "page"
                  : undefined
              }
            >
              {link.label}
            </Link>
          ))}
        </nav>
        <div className="rf-header-cta">
          <ActionLink href={advisoryHref()}>Hablemos</ActionLink>
        </div>
      </div>
    </header>
  );
}
