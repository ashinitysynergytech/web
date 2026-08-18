import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

import logo from "@/public/assets/Ashinity.png";

const links = [
  { label: "About", href: "/about-us" },
  { label: "Partnerships", href: "/partnerships" },
  { label: "Programs", href: "/programs" },
  { label: "Ideas", href: "/news-and-events" },
];

export default function Footer() {
  return (
    <footer className="brand-footer">
      <div className="site-container footer-main">
        <div className="footer-brand">
          <Image src={logo} alt="Ashinity" />
          <p>Strategy, systems, and technology for consequential work.</p>
        </div>
        <div className="footer-links">
          <p>Explore</p>
          {links.map((item) => (
            <Link href={item.href} key={item.href}>
              {item.label}
            </Link>
          ))}
        </div>
        <div className="footer-links">
          <p>Connect</p>
          <Link href="mailto:info@ashinity.com">
            Email us <ArrowUpRight size={15} aria-hidden="true" />
          </Link>
          <Link href="https://x.com/ashinitysynergy/" target="_blank">
            X / Twitter <ArrowUpRight size={15} aria-hidden="true" />
          </Link>
          <Link href="https://www.instagram.com/ashinitysynergy" target="_blank">
            Instagram <ArrowUpRight size={15} aria-hidden="true" />
          </Link>
        </div>
      </div>
      <div className="site-container footer-base">
        <span>© {new Date().getFullYear()} Ashinity Synergy</span>
        <span>Made for progress.</span>
      </div>
    </footer>
  );
}
