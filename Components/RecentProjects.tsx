import React from "react";
import quickcareImg from "../public/assets/images/quickcare.png";
import spinlotoImg from "../public/assets/images/SpinlottoLogo.png";
import aurallyImg from "../public/assets/images/aurallyLogo.png";
import spendaImg from "../public/assets/images/spenda.png";
import aktivImg from "../public/assets/images/aktiv.png";
import Image from "next/image";

const sponsored = [spinlotoImg, aurallyImg, spendaImg, aktivImg, quickcareImg];

function RecentProjects() {
  return (
    <section className="py-10 border-y border-[var(--color-primary)]/20 mb-24">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 md:px-10 lg:px-12 xl:px-0">
        <div className="flex items-center justify-center flex-wrap gap-8 md:justify-between">
          {sponsored.map((item, index) => (
            <div key={index + 1}>
              <Image src={item} alt="" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default RecentProjects;
