"use client";

import { useEffect, useState } from "react";

const slides = [
  {
    src: "/church-service.webp",
    width: 1337,
    height: 761,
    alt: "Church leaders speaking at the pulpit during a service",
  },
  {
    src: "/church-worship.webp",
    width: 1319,
    height: 741,
    alt: "Worship team singing and leading praise at church",
  },
];

export function HeroCarousel() {
  const [active, setActive] = useState(0);
  const [hovered, setHovered] = useState(false);
  const [focused, setFocused] = useState(false);
  const [reducedMotion, setReducedMotion] = useState(false);

  useEffect(() => {
    const preference = window.matchMedia("(prefers-reduced-motion: reduce)");
    const updatePreference = () => setReducedMotion(preference.matches);
    updatePreference();
    preference.addEventListener("change", updatePreference);
    return () => preference.removeEventListener("change", updatePreference);
  }, []);

  useEffect(() => {
    if (hovered || focused || reducedMotion) return;
    const timeout = window.setTimeout(() => setActive((current) => (current + 1) % slides.length), 5500);
    return () => window.clearTimeout(timeout);
  }, [active, hovered, focused, reducedMotion]);

  return (
    <div
      className="hero-carousel"
      role="region"
      aria-roledescription="carousel"
      aria-label="Church life in Mlimani"
      onPointerEnter={(event) => { if (event.pointerType === "mouse") setHovered(true); }}
      onPointerLeave={(event) => { if (event.pointerType === "mouse") setHovered(false); }}
      onFocusCapture={() => setFocused(true)}
      onBlurCapture={(event) => { if (!event.currentTarget.contains(event.relatedTarget)) setFocused(false); }}
    >
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
        <button type="button" aria-label="Previous photo" onClick={() => setActive((current) => (current - 1 + slides.length) % slides.length)}>←</button>
        <button type="button" aria-label="Next photo" onClick={() => setActive((current) => (current + 1) % slides.length)}>→</button>
      </div>
    </div>
  );
}
