import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = "https://eduflows.kr";
  return [
    { url: base,           lastModified: new Date(), changeFrequency: "weekly",  priority: 1 },
    { url: `${base}/contact`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.8 },
  ];
}
