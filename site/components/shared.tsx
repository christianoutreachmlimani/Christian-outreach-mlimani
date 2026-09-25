import Link from "next/link";
import { midweekProgram, ministries, sundayProgram } from "@/lib/content";

export function PageHero({ eyebrow, title, description }: { eyebrow: string; title: string; description: string }) {
  return <section className="page-hero"><div className="container"><span className="eyebrow">{eyebrow}</span><h1>{title}</h1><p>{description}</p></div></section>;
}

export function SectionHeading({ eyebrow, title, description }: { eyebrow: string; title: string; description?: string }) {
  return <div className="section-heading"><div><span className="eyebrow dark">{eyebrow}</span><h2>{title}</h2></div>{description && <p>{description}</p>}</div>;
}

export function Schedule({ compact = false }: { compact?: boolean }) {
  return <div className={`schedule-grid${compact ? " compact" : ""}`}>
    <article className="schedule-card"><div className="schedule-top"><span>01 / SUNDAY</span><h3>Sunday worship</h3></div><ul>{sundayProgram.map((item) => <li key={item.time}><time>{item.time}</time><span>{item.name}</span></li>)}</ul></article>
    <article className="schedule-card"><div className="schedule-top"><span>02 / MIDWEEK</span><h3>Gather during the week</h3></div><ul>{midweekProgram.map((item) => <li key={item.time}><time>{item.time}</time><span>{item.name}</span></li>)}</ul></article>
  </div>;
}

export function MinistryGrid({ limit }: { limit?: number }) {
  return <div className="ministry-grid">{ministries.slice(0, limit).map((item) => <Link className="ministry-card" href={`/ministries/${item.slug}`} key={item.slug}><span className="card-number">{item.number}</span><h3>{item.title}</h3><p>{item.description}</p><span className="card-arrow" aria-hidden="true">↗</span></Link>)}{!limit && <div className="ministry-card future-card"><span className="card-number">+</span><h3>More to come</h3><p>There is room for more ways to serve as our church family grows.</p></div>}</div>;
}

export function Callout({ eyebrow, title, description, href, label }: { eyebrow: string; title: string; description: string; href: string; label: string }) {
  return <section className="callout-section"><div className="container callout"><div><span className="eyebrow">{eyebrow}</span><h2>{title}</h2><p>{description}</p></div><Link className="button button-gold" href={href}>{label}<span aria-hidden="true">→</span></Link></div></section>;
}
