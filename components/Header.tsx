"use client";

import Link from "next/link";
import React, { useState } from "react";
import { MdMenu, MdClose } from "react-icons/md";
import Image from "next/image";
import logo from "@/public/assets/Ashinity.png";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";

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
    name: "Partnerships",
    href: "/partnerships",
  },
  {
    name: "Programs",
    href: "/programs",
  },
  {
    name: "News & Events",
    href: "/news-and-events",
  },
  // {
  //   name: "Contact Us",
  //   href: "#",
  // },
];

function Header() {
  const pathname = usePathname();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  const isActive = (path: string) => {
    return pathname === path;
  };

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
                    className={cn(
                      "px-3 text-[var(--color-primary)] text-sm font-medium tracking-wider",
                      isActive(item.href) && "text-[#B46E0F]"
                    )}
                  >
                    {item.name}
                  </Link>
                );
              })}
            </li>
          </ul>
          <button
            className="lg:hidden bg-[#B46E0F] rounded-full p-2"
            onClick={toggleMobileMenu}
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? (
              <MdClose size={32} className="text-white" />
            ) : (
              <MdMenu size={32} className="text-white" />
            )}
          </button>
        </div>

        {/* Mobile menu */}
        <div
          className={`lg:hidden absolute top-[92px] left-0 right-0 bg-white z-50 border-b border-b-[var(--color-primary)]/10 shadow-md transition-all duration-300 ease-in-out ${
            mobileMenuOpen
              ? "max-h-[500px] opacity-100"
              : "max-h-0 opacity-0 overflow-hidden"
          }`}
        >
          <ul className="flex flex-col py-4 px-6">
            {navdata.map((item, index) => (
              <li key={index} className="py-2">
                <Link
                  href={item.href}
                  className={cn(
                    "text-[var(--color-primary)] text-sm font-medium tracking-wider block",
                    isActive(item.href) && "text-[#B46E0F]"
                  )}
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {item.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </nav>
    </header>
  );
}

export default Header;
