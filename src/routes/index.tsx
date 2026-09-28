import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Anni Web Solutions Pvt. Ltd." },
      { name: "description", content: "Anni Web Solutions — websites, AI automation and digital marketing." },
      { property: "og:title", content: "Anni Web Solutions Pvt. Ltd." },
      { property: "og:description", content: "Websites, AI automation and digital marketing." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: () => <div className="min-h-screen" />,
});
