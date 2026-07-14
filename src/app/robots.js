export default function robots() {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
    },
    sitemap: "https://klyra-case-study.vercel.app/sitemap.xml",
  };
}