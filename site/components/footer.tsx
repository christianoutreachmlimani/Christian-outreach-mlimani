import Link from "next/link";
import { church } from "@/lib/content";

export function Footer() {
  return (
    <footer className="site-footer">
      <div className="container footer-grid">
        <div className="footer-intro">
          <div className="footer-brand">Christian Outreach<br />Ministries Worldwide – Mlimani</div>
          <p>Persistently calling on God till He establishes His dominion in our land and beyond.</p>
          <span>Isaiah 62:1–6</span>
        </div>
        <div><h2>Explore</h2><Link href="/about">About us</Link><Link href="/leadership">Leadership</Link><Link href="/ministries">Ministries</Link><Link href="/programs">Weekly programs</Link><Link href="/contact">Plan a visit</Link></div>
        <div><h2>Connect</h2><a href={church.youtube} target="_blank" rel="noopener noreferrer">YouTube ↗</a><a href={church.facebook} target="_blank" rel="noopener noreferrer">Facebook ↗</a><a href={church.tiktok} target="_blank" rel="noopener noreferrer">TikTok ↗</a><a href={church.phoneHref}>{church.phone}</a><a href={church.emailHref}>{church.email}</a></div>
      </div>
      <div className="container footer-bottom"><span>© {new Date().getFullYear()} {church.name}</span><span>Mlimani, Kakamega County, Kenya</span></div>
    </footer>
  );
}
