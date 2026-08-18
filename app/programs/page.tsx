import type { Metadata } from "next";
import EditorialPage from "@/components/EditorialPage";

export const metadata: Metadata = {
  title: "Programs",
  description:
    "Explore Nexus by Ashinity, a platform for technology dialogue, learning, and community-led impact.",
};

export default function ProgramsPage() {
  return (
    <EditorialPage
      eyebrow="Nexus by Ashinity"
      title="A meeting place for ideas that shape tomorrow."
      intro="Nexus is Ashinity’s platform for global technology dialogue—bringing together live conversations, useful perspectives, and people turning emerging ideas into real-world impact."
      statement="The future becomes more useful when more people can take part in shaping it."
      statementCopy="Nexus closes the distance between frontier technology and everyday relevance. It creates room to learn, question, connect, and move from insight to action."
      items={[
        {
          label: "Visibility",
          title: "Give important ideas a wider stage.",
          copy: "Amplify builders, researchers, and leaders contributing meaningfully to Africa’s technology ecosystem.",
        },
        {
          label: "Relevance",
          title: "Connect trends to real conditions.",
          copy: "Explore AI, quantum, Web3, and other shifts through the lens of practical application and public value.",
        },
        {
          label: "Community",
          title: "Create relationships that compound.",
          copy: "Bring developers, entrepreneurs, experts, and policymakers into conversations that can lead to new work.",
        },
      ]}
      ctaTitle="Join the next conversation."
      ctaCopy="Follow Nexus for upcoming sessions, new perspectives, and opportunities to contribute."
      ctaLabel="Follow Nexus on X"
      ctaHref="https://x.com/nexusbyashinity"
    />
  );
}
