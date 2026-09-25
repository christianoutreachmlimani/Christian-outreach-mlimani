import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Callout, MinistryGrid, PageHero, Schedule, SectionHeading } from "@/components/shared";
import { church, navigation } from "@/lib/content";

type Props = { params: Promise<{ section: string }> };
const validSections = navigation.map((item) => item.href.slice(1)).filter(Boolean);

export function generateStaticParams() { return validSections.map((section) => ({ section })); }

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { section } = await params;
  const item = navigation.find((nav) => nav.href === `/${section}`);
  return item ? { title: item.label } : {};
}

export default async function SectionPage({ params }: Props) {
  const { section } = await params;
  if (!validSections.includes(section)) notFound();
  switch (section) {
    case "about": return <AboutPage />;
    case "leadership": return <LeadershipPage />;
    case "ministries": return <MinistriesPage />;
    case "programs": return <ProgramsPage />;
    case "sermons": return <SermonsPage />;
    case "watch": return <WatchPage />;
    case "gallery": return <GalleryPage />;
    case "giving": return <GivingPage />;
    case "contact": return <ContactPage />;
    default: notFound();
  }
}

function AboutPage() {
  return <main><PageHero eyebrow="WHO WE ARE" title="A church family growing together in Christ." description="A place to worship, learn God's Word, pray and serve in Mlimani and beyond." />
    <section className="section"><div className="container intro-grid"><div><span className="eyebrow dark">WELCOME TO MLIMANI</span><h2>Faith lived together.</h2><p>Christian Outreach Ministries Worldwide – Mlimani welcomes people to worship, learn God&apos;s Word, pray and serve. We want our church family and visitors to stay connected with our services, ministries and online platforms.</p><p>Our home is in Mlimani Market, near St. Augustine Secondary School, in Mautuma Ward, Kakamega County.</p><Link className="text-link" href="/contact">Plan your visit <span aria-hidden="true">→</span></Link></div><div className="mission-panel"><span className="ornament">✦</span><span className="eyebrow dark">OUR MISSION</span><h3>“Divine understanding and knowledge are treasures.”</h3><p>We seek spiritual understanding and knowledge that equip God&apos;s people for faithful Christian living and service.</p></div></div></section>
    <section className="section vision-section"><div className="container vision-grid"><div><span className="eyebrow">OUR VISION</span><h2>Persistently call on God.</h2><p>“Persistently call on God till He establishes His dominion in our land and beyond.”</p><span className="verse-reference">ISAIAH 62:1–6</span></div><img src="/church-logo.jpg" alt="Christian Outreach Ministries Worldwide logo" /></div></section>
    <section className="section"><div className="container"><SectionHeading eyebrow="LIFE TOGETHER" title="Worship. Prayer. Teaching. Fellowship. Outreach." description="These shared practices shape our weekly gatherings and the ways we serve." /><div className="value-grid">{["Worship", "Prayer", "Teaching", "Fellowship", "Outreach"].map((value, index) => <div key={value}><span>0{index + 1}</span><h3>{value}</h3></div>)}</div></div></section>
    <Callout eyebrow="YOU ARE WELCOME" title="Come worship with us." description="Find the weekly program and visit us in Mlimani." href="/programs" label="See service times" /></main>;
}

function LeadershipPage() {
  return <main><PageHero eyebrow="OUR LEADERSHIP" title="Serving the church with faith and care." description="Meet the leaders currently featured by Christian Outreach Ministries Worldwide – Mlimani." />
    <section className="section soft-section"><div className="container"><SectionHeading eyebrow="MEET THE TEAM" title="Our leaders" description="Get to know the people serving our church family." /><div className="leader-grid"><article className="leader-card"><img src="/pastor-francis.jpg" alt="Rev. Francis Muniu speaking at church" /><div><span className="eyebrow dark">PASTOR</span><h3>Rev. Francis Muniu</h3><p>Church Pastor</p></div></article><article className="leader-card"><img src="/mrs-gladys.jpg" alt="Mrs. Gladys Muniu" /><div><span className="eyebrow dark">CHURCH LEADERSHIP</span><h3>Mrs. Gladys Muniu</h3><p>Pastor&apos;s wife</p></div></article></div></div></section>
    <Callout eyebrow="VISIT US" title="We would love to meet you." description="Join a service or reach out to the church directly." href="/contact" label="Get in touch" /></main>;
}

function MinistriesPage() {
  return <main><PageHero eyebrow="MINISTRIES" title="There is a place for you." description="Discover opportunities for participation, growth and service in our church family." />
    <section className="section"><div className="container"><SectionHeading eyebrow="FIND YOUR PLACE" title="Grow and serve together." description="Select a ministry to learn more, then contact us if you would like to get involved." /><MinistryGrid /></div></section>
    <Callout eyebrow="TAKE THE NEXT STEP" title="Interested in a ministry?" description="Connect with us and we will help you find your place." href="/contact" label="Contact the church" /></main>;
}

function ProgramsPage() {
  return <main><PageHero eyebrow="WEEKLY PROGRAMS" title="Come and worship with us." description="Our regular schedule for worship, prayer, teaching and fellowship." />
    <section className="section programs-section"><div className="container"><SectionHeading eyebrow="OUR GATHERINGS" title="A week rooted in faith." description="All times are East Africa Time. Contact the church if you need help planning a visit." /><Schedule /></div></section>
    <section className="section"><div className="container arrival-panel"><div><span className="eyebrow dark">FIND US</span><h2>Visit us in Mlimani.</h2><p>{church.address}</p></div><div className="stacked-actions"><a className="button button-purple" href={church.maps} target="_blank" rel="noopener noreferrer">Open map <span aria-hidden="true">↗</span></a><Link className="text-link" href="/contact">Contact us <span aria-hidden="true">→</span></Link></div></div></section></main>;
}

function SermonsPage() {
  return <main><PageHero eyebrow="SERMONS & TEACHINGS" title="Grow through the Word." description="Stay connected with messages and teaching from Christian Outreach Ministries Worldwide – Mlimani." />
    <section className="section"><div className="container sermon-layout"><div><span className="eyebrow dark">LISTEN & LEARN</span><h2>Teaching for the journey.</h2><p>Sermon videos, audio messages, notes and Bible studies can be added here as they become available. For now, visit the church&apos;s YouTube channel for its published videos.</p><a className="button button-purple" href={church.youtube} target="_blank" rel="noopener noreferrer">Visit our YouTube channel <span aria-hidden="true">↗</span></a></div><div className="media-placeholder"><span className="play-mark" aria-hidden="true">▶</span><strong>Messages from Mlimani</strong><p>Watch available church videos on YouTube.</p></div></div></section>
    <Callout eyebrow="GATHER WITH US" title="Learn together in person." description="Teaching is part of our Sunday program for children, youth and adults." href="/programs" label="See weekly programs" /></main>;
}

function WatchPage() {
  return <main><PageHero eyebrow="WATCH & CONNECT" title="Stay connected wherever you are." description="Follow the church online and join broadcasts when available." />
    <section className="section"><div className="container"><SectionHeading eyebrow="OUR ONLINE PLATFORMS" title="Find us online." description="Follow these channels for church videos and updates. Live broadcasts are available when the church is streaming." /><div className="platform-grid"><a href={church.youtube} target="_blank" rel="noopener noreferrer"><span>▶</span><h3>YouTube</h3><p>Watch videos and available broadcasts.</p><b>Visit channel ↗</b></a><a href={church.facebook} target="_blank" rel="noopener noreferrer"><span>f</span><h3>Facebook</h3><p>Connect with the church community.</p><b>Visit page ↗</b></a><a href={church.tiktok} target="_blank" rel="noopener noreferrer"><span>♪</span><h3>TikTok</h3><p>Follow short videos and updates.</p><b>Visit profile ↗</b></a></div></div></section>
    <Callout eyebrow="IN PERSON" title="There is a place for you here." description="Join our worship and prayer gatherings in Mlimani." href="/programs" label="See service times" /></main>;
}

function GalleryPage() {
  return <main><PageHero eyebrow="GALLERY" title="Moments from our church family." description="A small collection of the images currently shared by the church." />
    <section className="section soft-section"><div className="container"><SectionHeading eyebrow="OUR COMMUNITY" title="Faces of Mlimani." description="More church photos can be added as they become available." /><div className="gallery-grid"><figure><img src="/pastor-francis.jpg" alt="Rev. Francis Muniu speaking at church" /><figcaption>Rev. Francis Muniu</figcaption></figure><figure><img src="/mrs-gladys.jpg" alt="Mrs. Gladys Muniu" /><figcaption>Mrs. Gladys Muniu</figcaption></figure><figure className="logo-tile"><img src="/church-logo.jpg" alt="Christian Outreach Ministries Worldwide logo" /><figcaption>Christian Outreach Ministries Worldwide</figcaption></figure></div></div></section>
    <Callout eyebrow="STAY CONNECTED" title="See more on our social channels." description="Visit our online platforms for church videos and updates." href="/watch" label="Watch & connect" /></main>;
}

function GivingPage() {
  return <main><PageHero eyebrow="GIVING" title="Support the work of the ministry." description="Use the church payment details below for giving and offerings." />
    <section className="section giving-section"><div className="container giving-layout"><div><span className="eyebrow dark">GIVE TO THE CHURCH</span><h2>Your generosity supports ministry.</h2><p>Thank you for supporting the work of Christian Outreach Ministries Worldwide – Mlimani. Please use the payment details shown here.</p><p>If you have questions about giving, contact the church directly.</p><Link className="text-link" href="/contact">Contact us <span aria-hidden="true">→</span></Link></div><div className="payment-card"><span>CHURCH PAYMENT DETAILS</span><div><small>PAYBILL</small><strong>247247</strong></div><div><small>ACCOUNT NUMBER</small><strong>1090297494643</strong></div></div></div></section></main>;
}

function ContactPage() {
  return <main><PageHero eyebrow="CONTACT US" title="We would love to hear from you." description="Visit us, call us or connect with us online." />
    <section className="section soft-section"><div className="container contact-layout"><div><span className="eyebrow dark">COME AS YOU ARE</span><h2>Let&apos;s connect.</h2><p>Worship with us and become part of the church family. We are in Mlimani Market, Mautuma Ward, Kakamega County.</p><div className="contact-cards"><a href={church.phoneHref}><span>PHONE</span><strong>{church.phone}</strong><b>Call us ↗</b></a><a href={church.emailHref}><span>EMAIL</span><strong>{church.email}</strong><b>Write to us ↗</b></a><a href={church.maps} target="_blank" rel="noopener noreferrer"><span>LOCATION</span><strong>{church.address}</strong><b>Open map ↗</b></a></div></div><div className="contact-aside"><span className="contact-cross">✝</span><h3>We look forward to meeting you.</h3><p>Join our Sunday service or send us a message before your visit.</p><a className="button button-gold" href={church.whatsapp} target="_blank" rel="noopener noreferrer">Message on WhatsApp <span aria-hidden="true">↗</span></a><Link className="text-link" href="/programs">View weekly programs <span aria-hidden="true">→</span></Link></div></div></section></main>;
}
