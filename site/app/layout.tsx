import type { Metadata } from "next";
import { Footer } from "@/components/footer";
import { Header } from "@/components/header";
import { church } from "@/lib/content";
import "./globals.css";

export const metadata: Metadata = {
  title: { default: church.name, template: `%s | ${church.shortName}` },
  description: "A Christ-centered church serving Mlimani, Mautuma Ward, Kakamega County and beyond. Worship, prayer, teaching, fellowship and outreach.",
  icons: { icon: "/church-logo.jpg" },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en"><body><Header />{children}<Footer /></body></html>;
}
