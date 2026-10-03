"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { Icon } from "@/components/icon";

const slides = [
  {
    src: "/church-service.webp",
    width: 1337,
    height: 761,
    alt: "Church leaders speaking at the pulpit during a service",
    heading: ["Rooted in faith.", "Growing in love.", "Together in Christ."],
    description: "Life is better when we walk together. Discover a welcoming church family in Mlimani, where we worship, grow, and share the love of Jesus.",
  },
  {
    src: "/church-worship.webp",
    width: 1319,
    height: 741,
    alt: "Worship team singing and leading praise at church",
    heading: ["Lift your voice.", "Open your heart.", "Worship together."],
    description: "Come praise, pray, and celebrate the love of Jesus with us. There’s a place for you in our church family, and a seat waiting this Sunday.",
  },
];

export function HeroCarousel() {
  const [active, setActive] = useState(0);
  const [hovered, setHovered] = useState(false);
  const [focused, setFocused] = useState(false);
  const [reducedMotion, setReducedMotion] = useState(false);
  const [paused, setPaused] = useState(false);

  useEffect(() => {
    const preference = window.matchMedia("(prefers-reduced-motion: reduce)");
    const updatePreference = () => setReducedMotion(preference.matches);
    updatePreference();
    preference.addEventListener("change", updatePreference);
    return () => preference.removeEventListener("change", updatePreference);
  }, []);

  useEffect(() => {
    if (hovered || focused || reducedMotion || paused) return;
    const timeout = window.setTimeout(() => setActive((current) => (current + 1) % slides.length), 5500);
    return () => window.clearTimeout(timeout);
  }, [active, hovered, focused, reducedMotion, paused]);

  return (
    <div
      className="container home-hero-grid"
      role="region"
      aria-roledescription="carousel"
      aria-label="Church life in Mlimani"
      onPointerEnter={(event) => { if (event.pointerType === "mouse") setHovered(true); }}
      onPointerLeave={(event) => { if (event.pointerType === "mouse") setHovered(false); }}
      onFocusCapture={() => setFocused(true)}
      onBlurCapture={(event) => { if (!event.currentTarget.contains(event.relatedTarget)) setFocused(false); }}
    >
      <div className="hero-copy">
        <span className="welcome-pill"><span /> A CHURCH. A FAMILY. A PLACE FOR YOU.</span>
        <div className="hero-messages" aria-live={paused || focused || reducedMotion ? "polite" : "off"}>
          {slides.map((slide, index) => (
            <div className={`hero-message${index === active ? " is-active" : ""}`} key={slide.src} aria-hidden={index !== active}>
              <h1>{slide.heading[0]}<br />{slide.heading[1]}<br /><em>{slide.heading[2]}</em></h1>
              <p>{slide.description}</p>
            </div>
          ))}
        </div>
        <div className="button-row"><Link className="button button-orange" href="/contact">Plan your visit <Icon name="arrow" /></Link><Link className="watch-link" href="/watch"><span className="play-circle"><Icon name="play" /></span> Watch & connect</Link></div>
        <div className="hero-location"><Icon name="pin" /><span>Mlimani, Kakamega County, Kenya</span></div>
      </div>
      <div className="hero-visual">
      <div className="hero-carousel">
      <div className="hero-carousel-track" style={{ transform: `translateX(-${active * 100}%)` }}>
        {slides.map((slide, index) => (
          <div className="hero-slide" key={slide.src} aria-hidden={index !== active}>
            <img
              src={slide.src}
              width={slide.width}
              height={slide.height}
              alt={slide.alt}
              loading="eager"
              fetchPriority={index === 0 ? "high" : undefined}
            />
          </div>
        ))}
      </div>
      <div className="hero-carousel-controls">
        <span aria-hidden="true">0{active + 1} / 0{slides.length}</span>
        <button type="button" aria-label={paused ? "Play slideshow" : "Pause slideshow"} aria-pressed={paused} onClick={() => setPaused((current) => !current)}>{paused ? "▷" : "Ⅱ"}</button>
        <button type="button" aria-label="Previous photo" onClick={() => setActive((current) => (current - 1 + slides.length) % slides.length)}>←</button>
        <button type="button" aria-label="Next photo" onClick={() => setActive((current) => (current + 1) % slides.length)}>→</button>
      </div>
      </div>
      <div className="hero-photo-caption"><span className="caption-line" /> ONE FAITH. ONE FAMILY. ONE PURPOSE.</div>
      <Link className="sunday-float" href="/programs"><span className="float-icon"><Icon name="calendar" /></span><span><small>THERE’S A SEAT FOR YOU</small><strong>See you this Sunday</strong><span>Worship from 8:00 AM · Main service at noon</span></span><Icon name="up-right" /></Link>
      </div>
    </div>
  );
}
