import Image from "next/image";

import aktivImg from "@/public/assets/images/aktiv.png";
import farmerseaImg from "@/public/assets/images/farmersea-logo.svg";
import omnipoolImg from "@/public/assets/images/omnipool-logo.svg";
import oscirisImg from "@/public/assets/images/osciris-logo.svg";
import quickcareImg from "@/public/assets/images/quickcare.png";
import spendaImg from "@/public/assets/images/spenda.png";
import spinlotoImg from "@/public/assets/images/SpinlottoLogo.png";
import veriagentPayImg from "@/public/assets/images/veriagent-pay-logo.svg";

const ventures = [
  { image: farmerseaImg, name: "Farmersea" },
  { image: oscirisImg, name: "OSCIRIS" },
  { image: veriagentPayImg, name: "VeriAgent Pay" },
  { image: omnipoolImg, name: "Omnipool" },
  { image: spinlotoImg, name: "Spinlotto" },
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
