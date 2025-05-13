import Link from "next/link";
import React from "react";
import { MdMenu } from "react-icons/md";
import Image from "next/image";
import logo from "@/public/assets/Ashinity.png";


const navdata = [
  {
    name: "Home",
    href: "/",
  },
  {
    name: "About Us",
    href: "/about-us",
  },
  {
    name: "Our Businesses",
    href: "#",
  },
  {
    name: "Partnerships",
    href: "#",
  },
  {
    name: "News & Events",
    href: "#",
  },
  {
    name: "Contact Us",
    href: "#",
  },
];

function Header() {
  return (
    <header>
      <nav className="py-10 border-b border-b-[var(--color-primary)]/10 shadow-xs">
        <div className="max-w-7xl mx-auto flex items-center justify-between px-6 sm:px-8 md:px-10 lg:px-12 xl:px-0">
          <h1 className="text-3xl font-bold">
            <Image src={logo} alt="logo" />
          </h1>

          <ul className="hidden lg:flex items-center justify-center">
            <li>
              {navdata.map((item, index) => {
                return (
                  <Link
                    key={index + 1}
                    href={item.href}
                    className="px-3 text-[var(--color-primary)] text-sm font-medium tracking-wider"
                  >
                    {item.name}
                  </Link>
                );
              })}
            </li>
          </ul>
          <MdMenu size={32} className="lg:hidden" />
        </div>
      </nav>
    </header>
  );
}

export default Header;
