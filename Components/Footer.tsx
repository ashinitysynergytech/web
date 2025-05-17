import React from "react";
import Image from "next/image";
import Link from "next/link";
import logo from "../public/assets/Ashinity.png";
import fbImg from "../public/assets/icons/facebook.svg";
import igImg from "../public/assets/icons/instagram.svg";
import twImg from "../public/assets/icons/twitter.svg";

function Footer() {
  return (
    <footer>
      <section className="py-10 border-y border-[var(--color-primary)]/20">
        <div className="max-w-7xl mx-auto flex items-center justify-between px-6 sm:px-8 md:px-10 lg:px-12 xl:px-0">
          <Image src={logo} alt="" />
          <div className="flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-4">
            <span className="tracking-wider">Stay connected:</span>
            <div className="flex items-center gap-4">
              <a href="https://web.facebook.com/ashinitysynergy/">
                <Image src={fbImg} alt="" />
              </a>
              <a href="https://x.com/ashinitysynergy/">
                <Image src={twImg} alt="" />
              </a>
              <a href="https://www.instagram.com/ashinitysynergy?igsh=bjZkdmtsemdldWlq">
                <Image src={igImg} alt="" />
              </a>
              {/* <a href="">
                <Image src={liImg} alt="" />
              </a> */}
            </div>
          </div>
        </div>
      </section>
      <section className="py-12">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 lg:gap-28 px-6 sm:px-8 md:px-10 lg:px-12 xl:px-0">
          <div className="">
            <p>
            Ashinity empowers your business with tech, policy, and growth expertise..
            </p> <br />
            <p className="text-base font-bold text-[var(--color-primary)] uppercase tracking-wider mb-3">
             Email: <a href="mailto:info@ashinity.com">
                info@ashinity.com
              </a> <br/>
            
             Contact: <a href="https://wa.me/07066246674">
                Chat us directly!
              </a>
            </p>
          </div>
          <div>
            <h4 className="text-base font-bold text-[var(--color-primary)] uppercase tracking-wider mb-3">
              Services
            </h4>
            <ul>
              <li>Science Policy Research and Advocacy</li>
              <li>Research and Development in Tech and Science</li>
              <li>Enterprise Scaling Consultation</li>
            </ul>
          </div>
          <div>
            <h4 className="text-base font-bold text-[var(--color-primary)] uppercase tracking-wider mb-3">
              Our Businesses
            </h4>
            <ul>
              <li>Harretz</li>
              <li>Yeshiva</li>
              <li>Apinature</li>
            </ul>
          </div>
        </div>
      </section>

      <section className="bg-[var(--color-secondary)] flex items-center h-20 w-full">
        <div className="w-full max-w-7xl mx-auto text-xs tracking-wider text-white flex flex-col md:flex-row items-center justify-center md:justify-between gap-2 md:gap-0  px-6 sm:px-8 md:px-10 lg:px-12 xl:px-0">
          <span>© Copyright 2025. All Rights Reserved. Ashinity Symergy</span>
          <div className="flex items-center gap-5">
            <Link href={""}>Privacy Policy</Link>
            <Link href={""}>Terms of Service</Link>
          </div>
        </div>
      </section>
    </footer>
  );
}

export default Footer;
