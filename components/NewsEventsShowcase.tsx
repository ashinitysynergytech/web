import Image, { StaticImageData } from "next/image";
import Link from "next/link";
import { ArrowUpRight, CalendarDays } from "lucide-react";

import algorandBootcamp from "@/public/assets/images/algorand-bootcamp.png";
import algorandPlateau from "@/public/assets/images/algorand-plateau.png";
import algorandSpaces from "@/public/assets/images/algorand-spaces.png";
import aurallyTechcabal from "@/public/assets/images/aurally-techcabal.png";
import blockchainCareers from "@/public/assets/images/blockchain-careers.png";
import meshachTrustTv from "@/public/assets/images/meshach-trusttv.png";
import spendaLaunch from "@/public/assets/images/spenda-launch.png";
import undpEvent from "@/public/assets/images/undp-event.png";

type Update = {
  type: string;
  date: string;
  title: string;
  description: string;
  image: StaticImageData;
  href?: string;
};

const updates: Update[] = [
  {
    type: "Launch",
    date: "May 01, 2025",
    title: "Spenda app launch",
    description:
      "Ashinity’s R&D team built a platform connecting digital assets with everyday payments and financial needs across Africa.",
    image: spendaLaunch,
    href: "https://spenda.africa",
  },
  {
    type: "In conversation",
    date: "May 12, 2025",
    title: "Emerging technology for inclusive growth",
    description:
      "A Trust TV conversation on how AI, blockchain, IoT, and quantum technology can contribute to Africa’s next growth chapter.",
    image: meshachTrustTv,
    href: "https://youtu.be/30E78ArmBDQ",
  },
  {
    type: "Event",
    date: "April 10, 2025",
    title: "Youth innovation with UNDP leaders",
    description:
      "Ashinity joined leaders in Abuja to explore AI, Web3, and partnerships that can unlock youth-led innovation.",
    image: undpEvent,
  },
  {
    type: "Talk",
    date: "August 12, 2024",
    title: "Blockchain careers and opportunities",
    description:
      "Ashinity joined the conversation as guest speakers, highlighting new career paths and the growing need for skilled professionals.",
    image: blockchainCareers,
  },
  {
    type: "Venture",
    date: "May 12, 2025",
    title: "Aurally: global hackathon winner",
    description:
      "A music and Web3 venture created to strengthen artistic ownership through blockchain, real-time rewards, and digital participation.",
    image: aurallyTechcabal,
  },
  {
    type: "Partnership",
    date: "December 12, 2024",
    title: "Plateau State × Algorand",
    description:
      "Ashinity facilitated collaboration around blockchain programmes, practical use cases, and local developer capacity.",
    image: algorandPlateau,
  },
  {
    type: "Programme",
    date: "September 30, 2024",
    title: "Algorand bootcamp",
    description:
      "Ashinity helped teams build blockchain capability and turn early ideas into practical, testable solutions.",
    image: algorandBootcamp,
    href: "https://x.com/ashinitysynergy/status/1708087162976006459",
  },
  {
    type: "Community",
    date: "August 28, 2023",
    title: "Blockchain and creatives",
    description:
      "Ashinity hosted a conversation with M.I Abaga connecting the technology and creative communities around new models of value.",
    image: algorandSpaces,
    href: "https://x.com/algorand_ng/status/1697292953994068241",
  },
];

type NewsEventsShowcaseProps = {
  compact?: boolean;
};

export default function NewsEventsShowcase({
  compact = false,
}: NewsEventsShowcaseProps) {
  const visibleUpdates = compact ? updates.slice(0, 3) : updates;

  return (
    <section className={compact ? "news-section news-section-home" : "news-section"}>
      <div className="site-container">
        <div className="news-heading">
          <div>
            <p className="eyebrow">News & events</p>
            <h2>What we have been building, sharing, and shaping.</h2>
          </div>
          {compact && (
            <Link href="/news-and-events" className="text-link">
              See all updates <ArrowUpRight size={18} aria-hidden="true" />
            </Link>
          )}
        </div>

        <div className={compact ? "news-grid news-grid-compact" : "news-grid"}>
          {visibleUpdates.map((update) => {
            const card = (
              <article className="news-card">
                <div className="news-card-visual">
                  <Image
                    src={update.image}
                    alt=""
                    fill
                    sizes={compact ? "(max-width: 980px) 100vw, 33vw" : "(max-width: 980px) 100vw, 50vw"}
                  />
                  <span className="news-image-shade" />
                  <ArrowUpRight
                    className="news-arrow"
                    size={24}
                    aria-hidden="true"
                  />
                </div>
                <div className="news-card-body">
                  <div className="news-meta">
                    <span>{update.type}</span>
                    <span>
                      <CalendarDays size={13} aria-hidden="true" />
                      {update.date}
                    </span>
                  </div>
                  <h3>{update.title}</h3>
                  <p>{update.description}</p>
                </div>
              </article>
            );

            return update.href ? (
              <Link
                key={update.title}
                href={update.href}
                target="_blank"
                rel="noreferrer"
                aria-label={`${update.title} — opens in a new tab`}
              >
                {card}
              </Link>
            ) : (
              <div key={update.title}>{card}</div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
