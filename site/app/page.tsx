import Link from "next/link";
import { church } from "@/lib/content";
import { Callout, MinistryGrid, Schedule, SectionHeading } from "@/components/shared";
import { Icon } from "@/components/icon";

export default function Home() {
  return <main id="main-content">
    <section className="home-hero">
      <div className="container home-hero-grid">
        <div className="hero-copy">
          <span className="welcome-pill"><span /> A CHURCH. A FAMILY. A PLACE FOR YOU.</span>
          <h1>Rooted in faith.<br />Growing in love.<br /><em>Together in Christ.</em></h1>
          <p>Life is better when we walk together. Discover a welcoming church family in Mlimani, where we worship, grow, and share the love of Jesus.</p>
          <div className="button-row"><Link className="button button-orange" href="/contact">Plan your visit <Icon name="arrow" /></Link><Link className="watch-link" href="/watch"><span className="play-circle"><Icon name="play" /></span> Watch & connect</Link></div>
          <div className="hero-location"><Icon name="pin" /><span>Mlimani, Kakamega County, Kenya</span></div>
        </div>
        <div className="hero-visual">
          <img className="hero-photo" src="/worship-hero.webp" width="1536" height="1024" alt="Illustration of a congregation gathered in warm light for worship" fetchPriority="high" />
          <div className="hero-photo-caption"><span className="caption-line" /> ONE FAITH. ONE FAMILY. ONE PURPOSE.</div>
          <Link className="sunday-float" href="/programs"><span className="float-icon"><Icon name="calendar" /></span><span><small>THERE’S A SEAT FOR YOU</small><strong>See you this Sunday</strong><span>Worship from 8:00 AM · Main service at noon</span></span><Icon name="up-right" /></Link>
        </div>
      </div>
    </section>
    <section className="quick-section" aria-label="Your next step"><div className="container quick-grid">
      <Link href="/contact" className="quick-card"><span className="quick-icon peach"><Icon name="heart" /></span><div><h2>New here? Welcome home.</h2><p>Everything you need for your first visit.</p></div><Icon name="up-right" /></Link>
      <Link href="/programs" className="quick-card"><span className="quick-icon sage"><Icon name="clock" /></span><div><h2>Let’s gather together.</h2><p>Find a service that fits your week.</p></div><Icon name="up-right" /></Link>
      <Link href="/ministries" className="quick-card"><span className="quick-icon sand"><Icon name="people" /></span><div><h2>Find your people.</h2><p>There’s a place for every season of life.</p></div><Icon name="up-right" /></Link>
    </div></section>
    <section className="section intro-section"><div className="container intro-grid">
      <div><span className="eyebrow dark">MORE THAN A SUNDAY</span><h2>A living faith.<br />A loving <span className="serif-accent">family.</span></h2></div>
      <div className="intro-copy"><p className="lead">We’re a community of everyday people, brought together by an extraordinary God.</p><p>At Christian Outreach Ministries Worldwide – Mlimani, we believe there is a place for you. Wherever you are on your journey, come discover the joy of knowing Jesus and doing life together.</p><Link className="text-link" href="/about">A little more about us <Icon name="arrow" /></Link></div>
    </div><div className="container values-line"><span>Faith at the heart of everything</span><div>Worship <i>✦</i> Prayer <i>✦</i> Teaching <i>✦</i> Fellowship <i>✦</i> Outreach</div></div></section>
    <section className="section ministries-section"><div className="container"><div className="heading-with-link"><SectionHeading eyebrow="THERE’S A PLACE FOR YOU" title="Find connection. Grow in faith." /><Link className="text-link" href="/ministries">All ministries <Icon name="arrow" /></Link></div><MinistryGrid limit={4} /></div></section>
    <section className="section programs-section"><div className="container"><SectionHeading eyebrow="MAKE ROOM FOR WHAT MATTERS" title="A week of worship. A life of faith." description="From Sunday worship to midweek prayer, we would love to share the journey with you. All times are East Africa Time." /><Schedule /><div className="gathering-bottom"><span><Icon name="pin" /> Mlimani Market · Near St. Augustine Secondary School</span><a className="text-link light-link" href={church.maps} target="_blank" rel="noopener noreferrer">Get directions <Icon name="up-right" /></a></div></div></section>
    <section className="section leadership-preview"><div className="container leadership-preview-grid"><div className="leader-portrait"><img className="pastor-photo" src="/pastor-francis.webp" width="1254" height="1254" loading="lazy" alt="Rev. Francis Muniu holding a microphone" /><div><span>MEET OUR PASTOR</span><strong>Rev. Francis Muniu</strong></div></div><div><span className="eyebrow dark">A HEART FOR GOD. A HEART FOR PEOPLE.</span><h2>Walking with you.<br /><span className="serif-accent">Growing together.</span></h2><p>Our church is a family, and every person matters. Get to know the leaders who serve, encourage, and walk alongside our community in faith.</p><blockquote>“Persistently call on God till He establishes His dominion in our land and beyond.”<cite>OUR VISION · ISAIAH 62:1–6</cite></blockquote><Link className="text-link" href="/leadership">Meet our leadership <Icon name="arrow" /></Link></div></div></section>
    <Callout eyebrow="YOUR NEXT CHAPTER STARTS HERE" title="Come as you are. You belong here." description="A warm welcome, a place to grow, and a family to walk with. We look forward to meeting you this Sunday." href="/contact" label="Let’s plan your visit" />
  </main>;
}
