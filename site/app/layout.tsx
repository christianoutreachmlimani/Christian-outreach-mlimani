import type { Metadata, Viewport } from "next";
import { Footer } from "@/components/footer";
import { Header } from "@/components/header";
import { church } from "@/lib/content";
import "./globals.css";

export const metadata: Metadata = {
  title: { default: church.name, template: `%s | ${church.shortName}` },
  description: "A Christ-centered church serving Mlimani, Mautuma Ward, Kakamega County and beyond. Worship, prayer, teaching, fellowship and outreach.",
  icons: { icon: "/favicon.png", apple: "/church-logo-small.webp" },
};

export const viewport: Viewport = { themeColor: "#513965" };

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en"><body>
    <div className="site-opening" aria-hidden="true">
      <div className="site-opening-mark"><img src="/church-logo-small.webp" width="88" height="88" alt="" /><strong>Christian Outreach</strong><span>WELCOME HOME</span></div>
    </div>
    <Header />{children}<Footer />
  </body></html>;
}
