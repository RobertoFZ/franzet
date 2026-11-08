import type { MetadataRoute } from "next";
import { cases } from "@/lib/cases";
import { site } from "@/lib/site";
export default function sitemap(): MetadataRoute.Sitemap {
  return [
    "",
    "/asesorias",
    "/casos",
    "/privacidad",
    ...cases.map((project) => `/casos/${project.slug}`),
  ].map((path) => ({
    url: `${site.url}${path}`,
    changeFrequency: "monthly",
    priority: path === "" ? 1 : path === "/privacidad" ? 0.3 : 0.8,
  }));
}
