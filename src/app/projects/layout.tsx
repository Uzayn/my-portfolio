import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Projects",
  description:
    "A collection of projects built by Huzain Koleosho — from landing pages to scheduling engines and collaboration tools.",
  openGraph: {
    title: "Projects | Huzain Koleosho",
    description:
      "A collection of projects built by Huzain Koleosho — from landing pages to scheduling engines and collaboration tools.",
  },
};

export default function ProjectsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
