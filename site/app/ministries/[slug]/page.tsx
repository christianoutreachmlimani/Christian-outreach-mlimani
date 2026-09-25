import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Callout, PageHero } from "@/components/shared";
import { ministries } from "@/lib/content";

type Props = { params: Promise<{ slug: string }> };
export function generateStaticParams() { return ministries.map(({ slug }) => ({ slug })); }
export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const ministry = ministries.find((item) => item.slug === slug);
  return ministry ? { title: ministry.title, description: ministry.description } : {};
}
export default async function MinistryPage({ params }: Props) {
  const { slug } = await params;
  const ministry = ministries.find((item) => item.slug === slug);
  if (!ministry) notFound();
  return <main><PageHero eyebrow={`MINISTRY / ${ministry.number}`} title={ministry.title} description={ministry.description} />
    <section className="section"><div className="container ministry-detail"><div><Link className="back-link" href="/ministries">← All ministries</Link><span className="eyebrow dark">GROW & SERVE</span><h2>A place to participate.</h2><p>{ministry.detail}</p><p>Every ministry has room for participation, growth and service. If you would like to learn more or get involved, reach out to the church.</p><Link className="button button-purple" href="/contact">Ask about this ministry <span aria-hidden="true">→</span></Link></div><div className="ministry-detail-mark"><span>{ministry.number}</span><strong>{ministry.title}</strong></div></div></section>
    <Callout eyebrow="JOIN THE CHURCH FAMILY" title="We would love to meet you." description="Come worship with us in Mlimani." href="/programs" label="See service times" /></main>;
}
