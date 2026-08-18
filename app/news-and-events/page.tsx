import type { Metadata } from "next";
import EditorialPage from "@/components/EditorialPage";
import NewsEventsShowcase from "@/components/NewsEventsShowcase";

export const metadata: Metadata = {
  title: "Ideas",
  description:
    "Perspectives, announcements, and field notes from Ashinity.",
};

export default function NewsEventsPage() {
  return (
    <EditorialPage
      eyebrow="Ideas & updates"
      title="Notes from the work of making progress."
      intro="Perspectives, announcements, and field notes on technology, policy, enterprise, and the practical work between them."
      statement="We are interested in the point where a promising idea encounters the real world."
      statementCopy="That is where trade-offs become visible, assumptions get tested, and better questions emerge. Our ideas platform is a place to share what we are learning there."
      items={[
        {
          label: "Field note",
          title: "Building beyond the strategy deck.",
          copy: "Why the operating model, ownership, and next decision matter as much as the quality of the original recommendation.",
        },
        {
          label: "Perspective",
          title: "The case for policy-aware product teams.",
          copy: "How context, institutions, and incentives shape the products that can create durable public and commercial value.",
        },
        {
          label: "Emerging tech",
          title: "Making frontier technology useful.",
          copy: "A practical lens for choosing where new technology belongs—and where a simpler tool would serve the outcome better.",
        },
      ]}
      ctaTitle="Have something worth exploring?"
      ctaCopy="We welcome thoughtful collaborations, speaking invitations, and ideas grounded in a real challenge."
      ctaLabel="Contact Ashinity"
      ctaHref="mailto:info@ashinity.com?subject=Ideas%20and%20collaboration"
    >
      <NewsEventsShowcase />
    </EditorialPage>
  );
}
