import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

type EditorialItem = {
  label: string;
  title: string;
  copy: string;
};

type EditorialPageProps = {
  eyebrow: string;
  title: string;
  intro: string;
  statement: string;
  statementCopy: string;
  items: EditorialItem[];
  ctaTitle: string;
  ctaCopy: string;
  ctaLabel: string;
  ctaHref: string;
  children?: React.ReactNode;
};

export default function EditorialPage({
  eyebrow,
  title,
  intro,
  statement,
  statementCopy,
  items,
  ctaTitle,
  ctaCopy,
  ctaLabel,
  ctaHref,
  children,
}: EditorialPageProps) {
  return (
    <main>
      <section className="inner-hero">
        <div className="site-container inner-hero-grid">
          <div>
            <p className="eyebrow">{eyebrow}</p>
            <h1>{title}</h1>
          </div>
          <div className="inner-intro">
            <p>{intro}</p>
            <div className="inner-motif" aria-hidden="true">
              <span />
              <span />
              <span />
            </div>
          </div>
        </div>
      </section>

      <section className="section inner-statement-section">
        <div className="site-container inner-statement">
          <p className="eyebrow eyebrow-light">What guides us</p>
          <h2>{statement}</h2>
          <p>{statementCopy}</p>
        </div>
      </section>

      <section className="section section-mist">
        <div className="site-container">
          <div className="editorial-grid">
            {items.map((item, index) => (
              <article key={item.title}>
                <div className="editorial-card-index">0{index + 1}</div>
                <p className="eyebrow">{item.label}</p>
                <h3>{item.title}</h3>
                <p>{item.copy}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {children}

      <section className="editorial-cta">
        <div className="site-container">
          <div>
            <p className="eyebrow">Next step</p>
            <h2>{ctaTitle}</h2>
          </div>
          <div>
            <p>{ctaCopy}</p>
            <Link className="button button-primary" href={ctaHref}>
              {ctaLabel} <ArrowUpRight size={18} aria-hidden="true" />
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
