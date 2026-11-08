import Link from "next/link";
export default function Brand() {
  return (
    <Link href="/" className="rf-brand" aria-label="Roberto Franco, inicio">
      <span className="rf-brand-mark" aria-hidden="true">
        rf<span>.</span>
      </span>
      <span>
        Roberto Franco<span className="rf-brand-caption">INGENIERÍA + IA</span>
      </span>
    </Link>
  );
}
