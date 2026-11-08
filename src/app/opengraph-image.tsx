import { ImageResponse } from "next/og";
export const alt = "Roberto Franco · Asesorías de software e IA";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";
export default function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          background: "#f6f3ec",
          color: "#26372f",
          padding: "60px 72px",
        }}
      >
        <div style={{ display: "flex", fontSize: 26 }}>
          Roberto Franco / SOFTWARE + IA
        </div>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            fontSize: 78,
            lineHeight: 1.1,
            letterSpacing: "-3px",
          }}
        >
          <div style={{ display: "flex" }}>Lleva la IA a tu proyecto.</div>
          <div style={{ display: "flex", color: "#c9553d" }}>Con criterio.</div>
        </div>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            fontSize: 25,
          }}
        >
          <span>Asesorías sobre proyectos reales</span>
          <span>franzet.com ↗</span>
        </div>
      </div>
    ),
    size,
  );
}
