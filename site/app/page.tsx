import Link from "next/link";
import { church } from "@/lib/content";
import { Callout, MinistryGrid, Schedule, SectionHeading } from "@/components/shared";

export default function Home() {
  return <main>
    <section className="home-hero">
      <div className="hero-orbit orbit-one" /><div className="hero-orbit orbit-two" />
      <div className="container home-hero-grid">
        <div className="hero-copy"><span className="eyebrow">WELCOME TO OUR CHURCH</span><h1>A place to <em>worship, grow</em> and belong.</h1><p>Christian Outreach Ministries Worldwide – Mlimani is a church family where we pray together, learn God&apos;s Word and share the Gospel of Jesus Christ.</p><div className="button-row"><Link className="button button-gold" href="/programs">View service times <span aria-hidden="true">→</span></Link><Link className="button button-outline" href="/watch">Watch & connect <span aria-hidden="true">↗</span></Link></div><div className="hero-contact"><a href={church.phoneHref}>{church.phone}</a><span className="dot" /><a href={church.emailHref}>Email us</a></div></div>
        <div className="hero-visual"><div className="hero-visual-inner"><img src="/church-logo.jpg" width="350" height="350" alt="Christian Outreach Ministries Worldwide logo" /></div><span className="prayer-center">Prayer Center</span><div className="vision-note"><span>OUR VISION · ISAIAH 62:1–6</span><p>“Persistently call on God till He establishes His dominion in our land and beyond.”</p></div></div>
      </div>
    </section>
    <div className="values-strip"><div className="container">WORSHIP <span>✦</span> PRAYER <span>✦</span> TEACHING <span>✦</span> FELLOWSHIP <span>✦</span> OUTREACH</div></div>
    <section className="section intro-section"><div className="container intro-grid"><div><span className="eyebrow dark">WELCOME HOME</span><h2>A church family growing together in Christ.</h2><p>We welcome people to worship, learn God&apos;s Word, pray and serve. Whether you are visiting for the first time or looking for a church family, there is a place for you here.</p><Link className="text-link" href="/about">Get to know us <span aria-hidden="true">→</span></Link></div><div className="mission-panel"><span className="ornament">✦</span><span className="eyebrow dark">OUR MISSION</span><h3>“Divine understanding and knowledge are treasures.”</h3><p>We seek spiritual understanding and knowledge that equip God&apos;s people for faithful Christian living and service.</p></div></div></section>
    <section className="section"><div className="container"><SectionHeading eyebrow="FIND YOUR PLACE" title="Serve and grow together." description="Every ministry has room for participation, growth and service." /><MinistryGrid limit={4} /><div className="section-end"><Link className="text-link" href="/ministries">Explore all ministries <span aria-hidden="true">→</span></Link></div></div></section>
    <section className="section programs-section"><div className="container"><SectionHeading eyebrow="WEEKLY GATHERINGS" title="Come and worship with us." description="Join us for worship, teaching, prayer and fellowship throughout the week." /><Schedule /><div className="section-end"><Link className="button button-outline" href="/programs">Full weekly program <span aria-hidden="true">→</span></Link></div></div></section>
    <section className="section leadership-preview"><div className="container leadership-preview-grid"><div className="preview-image"><img src="/pastor-francis.jpg" alt="Rev. Francis Muniu speaking at church" /></div><div><span className="eyebrow dark">OUR LEADERSHIP</span><h2>Serving with faith and care.</h2><p>Meet the people featured in the leadership of Christian Outreach Ministries Worldwide – Mlimani.</p><Link className="text-link" href="/leadership">Meet our leaders <span aria-hidden="true">→</span></Link></div></div></section>
    <Callout eyebrow="STAY CONNECTED" title="Join us wherever you are." description="Follow our online platforms and watch our broadcasts when available." href="/watch" label="Watch & connect" />
  </main>;
}
