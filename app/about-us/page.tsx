import type { Metadata } from "next";
import EditorialPage from "@/components/EditorialPage";

export const metadata: Metadata = {
  title: "About",
  description:
    "Meet Ashinity, an independent strategy and build partner connecting technology, enterprise, and public value.",
};

export default function AboutUsPage() {
  return (
    <EditorialPage
      eyebrow="About Ashinity"
      title="We work where ambition meets complexity."
      intro="Ashinity is a diversified innovation company connecting technology, enterprise, and public value. We pair a wide-angle view with the focus to move one important mandate at a time."
      statement="We believe good ideas become valuable when people can use them."
      statementCopy="Our role is to connect insight with action: clarifying the challenge, shaping the right intervention, and staying close enough to delivery to protect the outcome."
      items={[
        {
          label: "Perspective",
          title: "See the whole system.",
          copy: "We consider policy, people, markets, and technology together—because meaningful change rarely lives in one discipline.",
        },
        {
          label: "Practice",
          title: "Build for real conditions.",
          copy: "Our recommendations account for the teams, constraints, incentives, and operating realities that determine whether a plan survives.",
        },
        {
          label: "Partnership",
          title: "Stay close to the outcome.",
          copy: "We work with senior involvement, honest communication, and a shared interest in leaving the organisation stronger.",
        },
      ]}
      ctaTitle="Bring us the hard question."
      ctaCopy="If the challenge crosses strategy, systems, and technology, that is usually a good place to begin."
      ctaLabel="Start a conversation"
      ctaHref="/#contact"
    />
  );
}
