"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { church, navigation } from "@/lib/content";

export function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  return (
    <header className="site-header">
      <div className="container header-inner">
        <Link className="brand" href="/" onClick={() => setOpen(false)} aria-label={`${church.name} home`}>
          <img src="/church-logo.jpg" width="52" height="52" alt="" />
          <span className="brand-words"><strong>Christian Outreach</strong><small>Ministries Worldwide · Mlimani</small></span>
        </Link>
        <button className="menu-button" type="button" aria-label={open ? "Close menu" : "Open menu"} aria-expanded={open} aria-controls="main-navigation" onClick={() => setOpen(!open)}>
          <span aria-hidden="true">{open ? "✕" : "☰"}</span>
        </button>
        <nav id="main-navigation" className={`main-nav${open ? " is-open" : ""}`} aria-label="Main navigation">
          {navigation.map((item) => (
            <Link key={item.href} href={item.href} className={pathname === item.href || (item.href === "/ministries" && pathname.startsWith("/ministries/")) ? "active" : ""} onClick={() => setOpen(false)} aria-current={pathname === item.href ? "page" : undefined}>
              {item.label}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
}
