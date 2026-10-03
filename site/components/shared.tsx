import Link from "next/link";
import { midweekProgram, ministries, sundayProgram } from "@/lib/content";
import { Icon } from "@/components/icon";

export function PageHero({ eyebrow, title, description }: { eyebrow: string; title: string; description: string }) {
  return <section className="page-hero"><div className="container"><span className="eyebrow">{eyebrow}</span><h1>{title}</h1><p>{description}</p></div></section>;
}
export function SectionHeading({ eyebrow, title, description }: { eyebrow: string; title: string; description?: string }) {
  return <div className="section-heading"><div><span className="eyebrow dark">{eyebrow}</span><h2>{title}</h2></div>{description && <p>{description}</p>}</div>;
}
export function Schedule({ compact = false }: { compact?: boolean }) {
  return <div className={`schedule-grid${compact ? " compact" : ""}`}>
    <article className="schedule-card"><div className="schedule-top"><span>01 / SUNDAY · COME WORSHIP WITH US</span><h3>A Sunday for your soul.</h3></div><ul>{sundayProgram.map((item) => <li key={item.time}><time>{item.time}</time><span>{item.name}</span></li>)}</ul></article>
    <article className="schedule-card"><div className="schedule-top"><span>02 / MIDWEEK · KEEP GROWING</span><h3>Faith for the everyday.</h3></div><ul>{midweekProgram.map((item) => <li key={item.time}><time>{item.time}</time><span>{item.name}</span></li>)}</ul></article>
  </div>;
}
export function MinistryGrid({ limit }: { limit?: number }) {
  const icons = ["book", "sun", "people", "heart", "sun", "cross", "people"] as const;
  return <div className="ministry-grid">{ministries.slice(0, limit).map((item, index) => <Link className="ministry-card" href={`/ministries/${item.slug}`} key={item.slug}><span className="ministry-icon"><Icon name={icons[index]} /></span><span className="card-number">{item.number}</span><h3>{item.title}</h3><p>{item.description}</p><span className="card-arrow">Find your place <Icon name="arrow" /></span></Link>)}{!limit && <Link href="/contact" className="ministry-card future-card"><span className="ministry-icon"><Icon name="heart" /></span><h3>Ready to serve?</h3><p>Let’s find a way to use your gifts and grow together.</p><span className="card-arrow">Let’s connect <Icon name="arrow" /></span></Link>}</div>;
}
export function Callout({ eyebrow, title, description, href, label }: { eyebrow: string; title: string; description: string; href: string; label: string }) {
  return <section className="callout-section"><div className="container callout"><div><span className="eyebrow">{eyebrow}</span><h2>{title}</h2><p>{description}</p></div><Link className="button button-orange" href={href}>{label}<Icon name="arrow" /></Link></div></section>;
}
