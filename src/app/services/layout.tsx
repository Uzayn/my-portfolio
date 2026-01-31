import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Services",
  description: "Professional web development services - From audit to launch",
};

export default function ServicesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
