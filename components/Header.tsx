"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { ArrowUpRight, Menu, X } from "lucide-react";

import logo from "@/public/assets/Ashinity.png";

const navigation = [
  { name: "About", href: "/about-us" },
  { name: "Partnerships", href: "/partnerships" },
  { name: "Programs", href: "/programs" },
  { name: "Ideas", href: "/news-and-events" },
];

export default function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  return (
    <header className="brand-header">
      <nav className="site-container brand-nav" aria-label="Primary navigation">
        <Link href="/" className="brand-logo" aria-label="Ashinity home">
          <Image src={logo} alt="Ashinity" priority />
        </Link>

        <div className="desktop-nav">
          {navigation.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={pathname === item.href ? "active" : ""}
            >
              {item.name}
            </Link>
          ))}
        </div>

        <Link href="/#contact" className="nav-cta">
          Work with us <ArrowUpRight size={16} aria-hidden="true" />
        </Link>

        <button
          type="button"
          className="menu-toggle"
          aria-label={open ? "Close navigation menu" : "Open navigation menu"}
          aria-expanded={open}
          onClick={() => setOpen((value) => !value)}
        >
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </nav>

      {open && (
        <div className="mobile-nav">
          <div className="site-container">
            {navigation.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={pathname === item.href ? "active" : ""}
                onClick={() => setOpen(false)}
              >
                {item.name}
              </Link>
            ))}
            <Link href="/#contact" onClick={() => setOpen(false)}>
              Work with us
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
