import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://commonform-barber-concept.example";
  const routes = [
    "",
    "/services",
    "/studio",
    "/team",
    "/lookbook",
    "/booking",
    "/contact",
    "/privacy",
  ];

  return routes.map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date("2026-11-26"),
    changeFrequency: "monthly",
    priority: route === "" ? 1.0 : 0.8,
  }));
}
