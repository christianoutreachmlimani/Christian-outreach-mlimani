import Link from "next/link";
import { church } from "@/lib/content";
import { Icon } from "@/components/icon";
export function Footer() {
  return <footer className="site-footer"><div className="container footer-grid">
    <div className="footer-intro"><Link className="brand" href="/"><img src="/church-logo-small.webp" width="60" height="60" alt="Christian Outreach Ministries Worldwide logo" loading="lazy" /><span className="brand-words"><strong>Christian Outreach</strong><small>MINISTRIES WORLDWIDE · MLIMANI</small></span></Link><p>Rooted in faith. Growing in love.<br />Together in Christ.</p><span className="footer-location"><Icon name="pin" /> Mlimani, Kakamega County, Kenya</span></div>
    <div><h2>Our church</h2><Link href="/about">About us</Link><Link href="/leadership">Our leadership</Link><Link href="/ministries">Our ministries</Link><Link href="/gallery">Church gallery</Link><Link href="/giving">Giving</Link></div>
    <div><h2>Take a step</h2><Link href="/contact">Plan your visit</Link><Link href="/programs">Service times</Link><Link href="/sermons">Sermons & teachings</Link><Link href="/watch">Watch & connect</Link><a href={church.whatsapp} target="_blank" rel="noopener noreferrer">Message on WhatsApp ↗</a></div>
    <div className="footer-contact"><h2>Let’s stay connected</h2><a href={church.phoneHref}>{church.phone}</a><a href={church.emailHref}>{church.email}</a><div className="social-links"><a href={church.youtube} target="_blank" rel="noopener noreferrer">YouTube ↗</a><a href={church.facebook} target="_blank" rel="noopener noreferrer">Facebook ↗</a><a href={church.tiktok} target="_blank" rel="noopener noreferrer">TikTok ↗</a></div></div>
  </div><div className="container footer-bottom"><span>© {new Date().getFullYear()} Christian Outreach Ministries Worldwide – Mlimani</span><span>Faith. Family. Purpose.</span></div></footer>;
}
