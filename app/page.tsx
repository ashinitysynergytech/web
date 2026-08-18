import Link from "next/link";
import {
  ArrowDownRight,
  ArrowUpRight,
  Blocks,
  CircleCheck,
  Compass,
  Landmark,
  Sparkles,
} from "lucide-react";

import ContactUs from "@/components/ContactUs";
import NewsEventsShowcase from "@/components/NewsEventsShowcase";
import RecentProjects from "@/components/RecentProjects";

const services = [
  {
    number: "01",
    icon: Landmark,
    title: "Strategy & policy",
    description:
      "Clear direction for institutions navigating technology, markets, and public value.",
    details: ["Research and insight", "Programme design", "Stakeholder alignment"],
  },
  {
    number: "02",
    icon: Blocks,
    title: "Products & systems",
    description:
      "Useful digital infrastructure shaped around the way your teams and customers actually work.",
    details: ["Service design", "Product delivery", "Workflow transformation"],
  },
  {
    number: "03",
    icon: Sparkles,
    title: "Frontier technology",
    description:
      "Practical exploration of AI and emerging technology, grounded in a real operating need.",
    details: ["Opportunity mapping", "Prototype planning", "Responsible adoption"],
  },
];

const process = [
  {
    step: "Discover",
    title: "Find the decision beneath the brief.",
    copy: "We bring the right questions, listen closely, and define the change that matters.",
  },
  {
    step: "Design",
    title: "Shape the smallest credible path forward.",
    copy: "Strategy, service, and technology become one clear, executable scope.",
  },
  {
    step: "Deliver",
    title: "Leave behind something that works.",
    copy: "A decision, programme, or system your team can own and move forward with.",
  },
];

export default function Home() {
  return (
    <main>
      <section className="hero-shell">
        <div className="site-container hero-grid">
          <div className="hero-copy">
            <p className="eyebrow">Independent strategy + build studio</p>
            <h1>
              Ambition,
              <span className="hero-accent"> made operational.</span>
            </h1>
            <p className="hero-intro">
              Ashinity turns complex mandates into clear strategy, useful
              systems, and measurable progress.
            </p>
            <div className="hero-actions">
              <Link href="#contact" className="button button-primary">
                Start a project <ArrowUpRight size={18} aria-hidden="true" />
              </Link>
              <Link href="#capabilities" className="button button-ghost">
                Explore our work <ArrowDownRight size={18} aria-hidden="true" />
              </Link>
            </div>
          </div>

          <div className="hero-board" aria-label="Ashinity delivery model">
            <div className="board-topline">
              <span>One connected practice</span>
              <span className="live-dot">Strategy to delivery</span>
            </div>
            <div className="board-statement">
              <span>We bring</span>
              <strong>policy fluency</strong>
              <strong>product judgment</strong>
              <strong>delivery discipline</strong>
              <span>to the same table.</span>
            </div>
            <div className="board-footer">
              <div className="orbit-mark" aria-hidden="true">
                <span />
                <span />
                <span />
              </div>
              <p>Built for institutions and ventures doing consequential work.</p>
            </div>
          </div>
        </div>
        <div className="site-container hero-index">
          <span>Policy</span>
          <span>Product</span>
          <span>Technology</span>
          <span>Delivery</span>
        </div>
      </section>

      <section id="capabilities" className="section section-mist">
        <div className="site-container">
          <div className="section-heading">
            <div>
              <p className="eyebrow">How we help</p>
              <h2>From hard questions to working answers.</h2>
            </div>
            <p>
              Ashinity works across the distance between what an organisation
              wants to change and what it takes to change it.
            </p>
          </div>

          <div className="service-grid">
            {services.map((service) => {
              const Icon = service.icon;
              return (
                <article className="service-card" key={service.title}>
                  <div className="service-card-top">
                    <span>{service.number}</span>
                    <Icon size={24} strokeWidth={1.8} aria-hidden="true" />
                  </div>
                  <h3>{service.title}</h3>
                  <p>{service.description}</p>
                  <ul>
                    {service.details.map((detail) => (
                      <li key={detail}>
                        <CircleCheck size={15} aria-hidden="true" /> {detail}
                      </li>
                    ))}
                  </ul>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      <section className="section section-ink">
        <div className="site-container split-statement">
          <div>
            <p className="eyebrow eyebrow-light">Our point of view</p>
            <h2>Progress needs an operating shape.</h2>
          </div>
          <div className="statement-copy">
            <p>
              The best strategy does not sit on a shelf. It changes a decision,
              a service, or a system.
            </p>
            <p>
              That is why our work joins senior thinking with the discipline to
              make things real.
            </p>
            <Link href="/about-us" className="text-link text-link-light">
              More about Ashinity <ArrowUpRight size={18} aria-hidden="true" />
            </Link>
          </div>
        </div>
      </section>

      <section className="section section-warm">
        <div className="site-container">
          <div className="section-heading process-heading">
            <div>
              <p className="eyebrow">A simple engagement model</p>
              <h2>Clarity at every step.</h2>
            </div>
            <Compass size={48} strokeWidth={1.25} aria-hidden="true" />
          </div>

          <div className="process-list">
            {process.map((item, index) => (
              <article key={item.step}>
                <div className="process-number">0{index + 1}</div>
                <p className="process-step">{item.step}</p>
                <h3>{item.title}</h3>
                <p>{item.copy}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <NewsEventsShowcase compact />

      <section className="section ventures-section">
        <div className="site-container">
          <div className="section-heading compact-heading">
            <div>
              <p className="eyebrow">Built close to the work</p>
              <h2>Experience shaped by ventures, not theory alone.</h2>
            </div>
            <p>
              Our portfolio and partnerships keep our advice grounded in the
              realities of building, launching, and growing.
            </p>
          </div>
          <RecentProjects />
        </div>
      </section>

      <ContactUs />
    </main>
  );
}
