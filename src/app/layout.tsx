import type { Metadata } from "next";
import { Outfit } from "next/font/google";
import "./globals.css";

const outfit = Outfit({
  subsets: ["latin"],
  variable: "--font-outfit",
});

const siteUrl = "https://huzain.work";

export const metadata: Metadata = {
  title: {
    default: "Huzain Koleosho | Frontend Engineer",
    template: "%s | Huzain Koleosho",
  },
  description:
    "Frontend engineer based in Nigeria. Building products, shipping code, and paying attention to the details.",
  metadataBase: new URL(siteUrl),
  authors: [{ name: "Huzain Koleosho", url: siteUrl }],
  creator: "Huzain Koleosho",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: siteUrl,
    siteName: "Huzain Koleosho",
    title: "Huzain Koleosho | Frontend Engineer",
    description:
      "Frontend engineer based in Nigeria. Building products, shipping code, and paying attention to the details.",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Huzain Koleosho - Frontend Engineer",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Huzain Koleosho | Frontend Engineer",
    description:
      "Frontend engineer based in Nigeria. Building products, shipping code, and paying attention to the details.",
    creator: "@kolhuz",
    images: ["/og-image.png"],
  },
  robots: {
    index: true,
    follow: true,
  },
  icons: {
    icon: [
      { url: "/images/favicon.ico", sizes: "any" },
      { url: "/images/favicon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/images/favicon-32x32.png", sizes: "32x32", type: "image/png" },
    ],
    apple: [
      {
        url: "/images/apple-touch-icon.png",
        sizes: "180x180",
        type: "image/png",
      },
    ],
  },
  manifest: "/images/site.webmanifest",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${outfit.variable} font-outfit antialiased`}>
        {children}
      </body>
    </html>
  );
}
