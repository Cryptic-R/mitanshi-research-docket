import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Mitanshi Khandelwal | Research Docket",
  description:
    "Professional portfolio of Mitanshi Khandelwal, a fifth-year law student at Symbiosis Law School, Noida, with interests in corporate law and cyber law.",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
