"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import { church, navigation } from "@/lib/content";
import { Icon } from "@/components/icon";

export function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const menuButton = useRef<HTMLButtonElement>(null);
  useEffect(() => { setOpen(false); }, [pathname]);
  useEffect(() => {
    const close = (event: KeyboardEvent) => { if (event.key === "Escape" && open) { setOpen(false); menuButton.current?.focus(); } };
    document.addEventListener("keydown", close);
    return () => document.removeEventListener("keydown", close);
  }, [open]);
  return <>
    <a className="skip-link" href="#main-content">Skip to content</a>
    <div className="announcement"><div className="container"><span><span className="announcement-dot" /> A place where everybody is somebody</span><Link href="/programs">Join us this Sunday <Icon name="arrow" /></Link></div></div>
    <header className="site-header"><div className="container header-inner">
      <Link className="brand" href="/" onClick={() => setOpen(false)} aria-label={`${church.name} home`}><img src="/church-logo-small.webp" width="60" height="60" alt="" /><span className="brand-words"><strong>Christian Outreach</strong><small>MINISTRIES WORLDWIDE · MLIMANI</small></span></Link>
      <nav className="desktop-nav" aria-label="Main navigation">{navigation.filter(item => ["/", "/about", "/ministries", "/programs", "/sermons"].includes(item.href)).map(item => <Link key={item.href} href={item.href} className={pathname === item.href || (item.href === "/ministries" && pathname.startsWith("/ministries/")) ? "active" : ""} aria-current={pathname === item.href ? "page" : undefined}>{item.label === "About" ? "About us" : item.label}</Link>)}</nav>
      <div className="header-actions"><Link className="give-link" href="/giving">Give <Icon name="heart" /></Link><Link className="button button-orange header-visit" href="/contact">Plan a visit <Icon name="up-right" /></Link><button ref={menuButton} className="menu-button" type="button" aria-label={open ? "Close menu" : "Open menu"} aria-expanded={open} aria-controls="mobile-navigation" onClick={() => setOpen(!open)}><span className={open ? "menu-lines is-open" : "menu-lines"}><i /><i /></span></button></div>
      <nav id="mobile-navigation" className={`mobile-nav${open ? " is-open" : ""}`} aria-label="More navigation" inert={!open}>{navigation.map(item => <Link key={item.href} href={item.href} onClick={() => setOpen(false)} aria-current={pathname === item.href ? "page" : undefined}>{item.label}<Icon name="up-right" /></Link>)}</nav>
    </div></header>
  </>;
}
