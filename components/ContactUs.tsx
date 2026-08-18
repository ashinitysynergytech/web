import Link from "next/link";
import { ArrowUpRight, Mail } from "lucide-react";

export default function ContactUs() {
  return (
    <section id="contact" className="contact-section">
      <div className="site-container contact-grid">
        <div>
          <p className="eyebrow eyebrow-light">Start with the mandate</p>
          <h2>What are you trying to move forward?</h2>
        </div>
        <div className="contact-copy">
          <p>
            Share the challenge, the opportunity, or the question. We will help
            you identify a useful starting point.
          </p>
          <div className="contact-actions">
            <Link
              href="mailto:info@ashinity.com?subject=New%20Ashinity%20project"
              className="button contact-button"
            >
              <Mail size={18} aria-hidden="true" /> Send a project brief
            </Link>
            <Link
              href="https://wa.me/2347066246674"
              className="contact-link"
              target="_blank"
              rel="noreferrer"
            >
              Chat directly <ArrowUpRight size={17} aria-hidden="true" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
