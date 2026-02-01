import { Metadata } from "next";

// Target keywords:
// Primary: web designer, web developer, website design, freelance web developer, hire web developer
// Problem-based: fix my website, website redesign, outdated website, slow website, website not mobile friendly
// Service-based: custom website design, small business website, professional website, modern website design
// Intent-based: need a new website, get a website built, website for my business, affordable web design
// Long-tail: someone to build my website, website that brings customers, website that converts

export const metadata: Metadata = {
  title:
    "Professional Web Design & Development Services | Freelance Web Developer",
  description:
    "Need a website that actually brings you customers? I design and build fast, modern, mobile-friendly websites for small businesses. Custom web design, SEO setup, and ongoing support. Get a free website audit today.",
  keywords: [
    // Primary keywords
    "web designer",
    "web developer",
    "freelance web developer",
    "freelance web designer",
    "website design",
    "website development",
    "hire web developer",
    "hire web designer",
    // Service keywords
    "custom website design",
    "professional website design",
    "small business website",
    "business website design",
    "modern website design",
    "responsive web design",
    "mobile-friendly website",
    "affordable web design",
    // Problem keywords
    "website redesign",
    "fix my website",
    "update my website",
    "outdated website",
    "slow website",
    "website makeover",
    // Intent keywords
    "need a new website",
    "get a website built",
    "website for small business",
    "website that converts",
    "website quote",
    "website pricing",
    // Long-tail keywords
    "someone to build my website",
    "professional to fix my website",
    "website that brings customers",
    "fast loading website",
    "SEO friendly website",
  ],
  authors: [{ name: "Huzain Koleosho" }],
  creator: "Huzain Koleosho",
  publisher: "Huzain Koleosho",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://huzain.work/services",
    siteName: "Huzain Koleosho - Web Designer & Developer",
    title:
      "Professional Web Design & Development Services | Get a Website That Works",
    description:
      "Stop losing customers to a bad website. I build fast, modern, mobile-friendly websites for small businesses. Custom design, SEO setup, and support included. Free website audit available.",
    images: [
      {
        url: "/og-services.png",
        width: 1200,
        height: 630,
        alt: "Professional Web Design Services by Huzain Koleosho",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Professional Web Design & Development Services",
    description:
      "Need a website that brings you customers? Custom web design for small businesses. Fast, modern, mobile-friendly. Get a free audit.",
    images: ["/og-services.png"],
    creator: "@huzkol",
  },
  alternates: {
    canonical: "https://huzain.work/services",
  },
  category: "Web Development Services",
};

export default function ServicesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link
        rel="preconnect"
        href="https://fonts.gstatic.com"
        crossOrigin="anonymous"
      />
      <link
        href="https://fonts.googleapis.com/css2?family=Google+Sans:ital,opsz,wght@0,17..18,400..700;1,17..18,400..700&display=swap"
        rel="stylesheet"
      />
      <div style={{ fontFamily: '"Google Sans", sans-serif' }}>{children}</div>
    </>
  );
}
