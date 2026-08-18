import type { Metadata } from "next";
import EditorialPage from "@/components/EditorialPage";

export const metadata: Metadata = {
  title: "Partnerships",
  description:
    "Partner with Ashinity on programmes, products, research, and venture-building initiatives.",
};

export default function PartnershipsPage() {
  return (
    <EditorialPage
      eyebrow="Partnerships"
      title="Better work is built together."
      intro="We partner with public institutions, ecosystem leaders, experts, and ambitious teams whose capabilities complement our own."
      statement="A partnership should make the work more credible, more useful, or more possible."
      statementCopy="We begin with alignment: a shared outcome, clear roles, and a practical way to combine strengths. From there, we design the collaboration around the work—not the other way around."
      items={[
        {
          label: "Co-delivery",
          title: "One team around the outcome.",
          copy: "Combine specialist expertise to deliver research, programmes, products, and transformation initiatives with a unified client experience.",
        },
        {
          label: "Knowledge",
          title: "Turn expertise into public value.",
          copy: "Shape convenings, learning experiences, and thought leadership that help important ideas travel further.",
        },
        {
          label: "Ventures",
          title: "Build the ecosystem around the opportunity.",
          copy: "Connect technology, market access, and operating support around ventures with the potential to create durable value.",
        },
      ]}
      ctaTitle="Let’s find the shared opportunity."
      ctaCopy="Tell us what you are building and why partnership would make the outcome stronger."
      ctaLabel="Propose a partnership"
      ctaHref="mailto:info@ashinity.com?subject=Partnership%20with%20Ashinity"
    />
  );
}
