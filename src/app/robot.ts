// app/robots.ts
import type { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  const baseUrl = "https://arukahhealth.co.ke";

  return {
    rules: [
      {
        userAgent: "*", // Applies to all search engine crawlers (Googlebot, Bingbot, etc.)
        allow: "/", // Allow full access to the entire site
        // disallow: ['/private/', '/admin/'],  // Uncomment & add paths only if you add private sections later
      },
    ],
    sitemap: `${baseUrl}/sitemap.xml`, // Points to your sitemap.ts-generated file
    host: baseUrl, // Optional: reinforces the canonical domain
  };
}
