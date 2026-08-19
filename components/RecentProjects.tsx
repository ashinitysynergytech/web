import Image from "next/image";

import aktivImg from "@/public/assets/images/aktiv.png";
import aurallyImg from "@/public/assets/images/aurallyLogo.png";
import farmerseaImg from "@/public/assets/images/farmersea-logo.svg";
import oscirisImg from "@/public/assets/images/osciris-logo.svg";
import quickcareImg from "@/public/assets/images/quickcare.png";
import spendaImg from "@/public/assets/images/spenda.png";
import spinlotoImg from "@/public/assets/images/SpinlottoLogo.png";

const ventures = [
  { image: farmerseaImg, name: "Farmersea" },
  { image: oscirisImg, name: "OSCIRIS" },
  { image: spinlotoImg, name: "Spinlotto" },
  { image: aurallyImg, name: "Aurally" },
  { image: spendaImg, name: "Spenda" },
  { image: aktivImg, name: "Aktiv" },
  { image: quickcareImg, name: "Quickcare" },
];

export default function RecentProjects() {
  return (
    <div className="venture-grid" aria-label="Brands Ashinity partners with">
      {ventures.map((venture) => (
        <div key={venture.name}>
          <Image src={venture.image} alt={venture.name} />
        </div>
      ))}
    </div>
  );
}
