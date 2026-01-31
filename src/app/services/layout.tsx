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
  return (
    <>
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      <link
        href="https://fonts.googleapis.com/css2?family=Google+Sans:ital,opsz,wght@0,17..18,400..700;1,17..18,400..700&display=swap"
        rel="stylesheet"
      />
      <div style={{ fontFamily: '"Google Sans", sans-serif' }}>
        {children}
      </div>
    </>
  );
}
