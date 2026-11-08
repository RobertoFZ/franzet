import Link from "next/link";
import Brand from "./Brand";
import { site } from "@/lib/site";
export default function SiteFooter() {
  return (
    <footer className="rf-footer rf-wrap">
      <Brand />
      <p>Software, proyectos y conocimiento compartido.</p>
      <div className="rf-footer-links">
        <a href={`mailto:${site.email}`}>Correo</a>
        <a href="https://www.linkedin.com/in/robertofz/">LinkedIn</a>
        <a href="https://github.com/RobertoFZ">GitHub</a>
        <Link href="/privacidad">Privacidad</Link>
      </div>
      <span>© {new Date().getFullYear()} · FRANZET.COM</span>
    </footer>
  );
}
