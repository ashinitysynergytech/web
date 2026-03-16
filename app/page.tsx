import Image from "next/image";
import Link from "next/link";

import heroImg from "../public/assets/images/testimage.svg";
import chartImg from "../public/assets/icons/chart.svg";
import fileImg from "../public/assets/icons/file.svg";
import dataImg from "../public/assets/icons/data.svg";
import partnerImg from "../public/assets/images/ashinity-partner-image.png";

import ContactUs from "@/components/ContactUs";
import RecentProjects from "@/components/RecentProjects";

const capabilities = [
  {
    icon: chartImg,
    title: "Innovation advisory",
    description:
      "Strategy, policy insight, and programme design for institutions and regulated organizations.",
    points: ["Policy research", "Programme design", "Stakeholder alignment"],
  },
  {
    icon: fileImg,
    title: "Product and systems delivery",
    description:
      "Scoped digital initiatives that move from plan to operational reality.",
    points: ["Solution design", "Workflow digitization", "Delivery oversight"],
  },
  {
    icon: dataImg,
    title: "Applied emerging tech",
    description:
      "AI and frontier technology used where they improve the brief, not as marketing decoration.",
    points: ["Technology selection", "Pilot planning", "Measured deployment"],
  },
];

const clientFit = [
  "Governments and public institutions shaping innovation priorities",
  "Ecosystem builders, accelerators, and foundations running programmes",
  "Regulated organizations balancing transformation with operational rigor",
];

const operatingModel = [
  {
    step: "01",
    title: "Clarify the mandate",
    description: "Define the decision, system, or programme that needs to move.",
  },
  {
    step: "02",
    title: "Build the right scope",
    description: "Structure a focused advisory or delivery workstream.",
  },
  {
    step: "03",
    title: "Deliver usable outcomes",
    description: "Leave the client with assets, systems, and next actions that stick.",
  },
];

export default function Home() {
  return (
    <main className="bg-[#f7faf9]">
      <section className="border-b border-[var(--color-primary)]/10 bg-white">
        <div className="max-w-7xl mx-auto px-6 py-20 sm:px-8 md:px-10 lg:px-12 lg:py-28 xl:px-0">
          <div className="grid items-center gap-14 lg:grid-cols-[1.05fr_0.95fr]">
            <div className="max-w-2xl">
              <h1 className="text-5xl font-black uppercase leading-[1.02] text-[var(--color-primary)] lg:text-[72px]">
                Where strategy becomes operating reality.
              </h1>
              <p className="mt-6 max-w-xl text-lg leading-8 text-slate-700">
                Ashinity helps institutions and growth-stage ventures turn
                innovation strategy into deployable systems and measurable
                outcomes.
              </p>
              <div className="mt-9 flex flex-col gap-4 sm:flex-row">
                <Link
                  href="#contact"
                  className="rounded-full bg-[var(--btn-color)] px-6 py-3 text-sm font-semibold tracking-wide text-white transition hover:opacity-90"
                >
                  Request a scoping call
                </Link>
                <Link
                  href="/about-us"
                  className="rounded-full border border-[var(--color-primary)]/20 px-6 py-3 text-sm font-semibold tracking-wide text-[var(--color-secondary)] transition hover:border-[var(--btn-color)] hover:text-[var(--btn-color)]"
                >
                  View firm overview
                </Link>
              </div>
            </div>

            <div className="rounded-[32px] border border-[var(--color-primary)]/10 bg-[linear-gradient(180deg,rgba(170,249,255,0.22),rgba(255,255,255,1))] p-8 shadow-[0_20px_60px_rgba(21,60,63,0.08)]">
              <Image
                src={heroImg}
                width={560}
                height={560}
                priority
                alt="Ashinity consulting illustration"
                className="h-auto w-full"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 lg:py-24">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 md:px-10 lg:px-12 xl:px-0">
          <div className="flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between">
            <div className="max-w-2xl">
              <p className="text-sm font-semibold uppercase tracking-[0.28em] text-[var(--btn-color)]">
                What we do
              </p>
              <h2 className="mt-3 text-4xl font-semibold text-[var(--color-secondary)] lg:text-[48px]">
                Focused support for complex mandates.
              </h2>
            </div>
          </div>

          <div className="mt-12 grid gap-6 lg:grid-cols-3">
            {capabilities.map((item) => (
              <article
                key={item.title}
                className="rounded-[28px] border border-[var(--color-primary)]/10 bg-white p-7 shadow-[0_8px_30px_rgba(21,60,63,0.06)]"
              >
                <div className="flex h-14 w-14 items-center justify-center rounded-full bg-[var(--color-primary)]/10">
                  <Image
                    src={item.icon}
                    alt=""
                    width={28}
                    height={28}
                    className="h-auto w-7"
                  />
                </div>
                <h3 className="mt-6 text-2xl font-semibold text-[var(--color-secondary)]">
                  {item.title}
                </h3>
                <p className="mt-3 text-base leading-7 text-slate-600">
                  {item.description}
                </p>
                <div className="mt-6 flex flex-wrap gap-2">
                  {item.points.map((point) => (
                    <span
                      key={point}
                      className="rounded-full bg-[var(--color-primary)]/8 px-3 py-2 text-sm text-slate-700"
                    >
                      {point}
                    </span>
                  ))}
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white py-20 lg:py-24">
        <div className="max-w-7xl mx-auto grid gap-14 px-6 sm:px-8 md:px-10 lg:grid-cols-[0.9fr_1.1fr] lg:px-12 xl:px-0">
          <div className="rounded-[32px] border border-[var(--color-primary)]/10 bg-[linear-gradient(180deg,rgba(255,255,255,1),rgba(229,243,244,0.9))] p-8">
            <p className="text-sm font-semibold uppercase tracking-[0.28em] text-[var(--btn-color)]">
              Where we are strongest
            </p>
            <h2 className="mt-4 text-4xl font-semibold text-[var(--color-secondary)]">
              Best suited to institutions that need both judgment and execution.
            </h2>
            <div className="mt-8 space-y-4">
              {clientFit.map((item) => (
                <div
                  key={item}
                  className="rounded-2xl border border-[var(--color-primary)]/10 bg-white px-5 py-4 text-base leading-7 text-slate-700"
                >
                  {item}
                </div>
              ))}
            </div>
          </div>

          <div className="grid gap-6 lg:grid-rows-[auto_1fr]">
            <div className="rounded-[32px] bg-slate-950 px-8 py-10 text-white">
              <p className="text-sm font-semibold uppercase tracking-[0.28em] text-[var(--accent-s)]">
                Positioning
              </p>
              <h2 className="mt-4 text-4xl font-semibold leading-tight">
                Innovation strategy should end in a decision, a system, or a
                programme that can run.
              </h2>
              <p className="mt-5 max-w-2xl text-base leading-7 text-slate-300">
                That is the role Ashinity should lead with.
              </p>
            </div>

            <div className="overflow-hidden rounded-[32px] border border-[var(--color-primary)]/10 bg-[#eef6f4] p-8">
              <Image
                src={partnerImg}
                alt="Ashinity collaboration illustration"
                className="h-auto w-full"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 lg:py-24">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 md:px-10 lg:px-12 xl:px-0">
          <div className="flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between">
            <div className="max-w-2xl">
              <p className="text-sm font-semibold uppercase tracking-[0.28em] text-[var(--btn-color)]">
                How we work
              </p>
              <h2 className="mt-3 text-4xl font-semibold text-[var(--color-secondary)] lg:text-[48px]">
                A tighter path from brief to outcome.
              </h2>
            </div>
            <p className="max-w-lg text-base leading-7 text-slate-600">
              Small firms win when the scope is clear, the team is senior, and
              the client knows what happens next.
            </p>
          </div>

          <div className="mt-12 grid gap-6 lg:grid-cols-3">
            {operatingModel.map((item) => (
              <article
                key={item.step}
                className="rounded-[28px] border border-[var(--color-primary)]/10 bg-white p-7 shadow-[0_8px_30px_rgba(21,60,63,0.05)]"
              >
                <p className="text-sm font-semibold uppercase tracking-[0.28em] text-[var(--btn-color)]">
                  {item.step}
                </p>
                <h3 className="mt-4 text-2xl font-semibold text-[var(--color-secondary)]">
                  {item.title}
                </h3>
                <p className="mt-4 text-base leading-7 text-slate-600">
                  {item.description}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="border-y border-[var(--color-primary)]/10 bg-white py-16">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 md:px-10 lg:px-12 xl:px-0">
          <div className="grid gap-8 lg:grid-cols-[1fr_auto] lg:items-center">
            <div className="max-w-3xl">
              <h2 className="text-3xl font-semibold leading-tight text-[var(--color-secondary)] lg:text-4xl">
                Ashinity helps institutions and growth-stage ventures turn
                innovation strategy into deployable systems and measurable
                outcomes.
              </h2>
            </div>
            <Link
              href="#contact"
              className="inline-flex rounded-full border border-[var(--color-primary)]/15 px-6 py-3 text-sm font-semibold tracking-wide text-[var(--color-secondary)] transition hover:border-[var(--btn-color)] hover:text-[var(--btn-color)]"
            >
              Start a conversation
            </Link>
          </div>
        </div>
      </section>

      <RecentProjects />

      <div id="contact">
        <ContactUs />
      </div>
    </main>
  );
}
