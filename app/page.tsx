// import Head from "next/head";
import Image from "next/image";
import Link from "next/link";

//images & icons
import logo from "../public/assests/Ashinity.png";
import heroImg from "../public/assests/images/testimage.svg";
import { MdMenu } from "react-icons/md";
// import { BsThreeDots } from "react-icons/bs";
import chartImg from "../public/assests/icons/chart.svg";
import fileImg from "../public/assests/icons/file.svg";
import dataImg from "../public/assests/icons/data.svg";
import partnerImg from "../public/assests/images/ashinity-partner-image.png";
import testImg from "../public/assests/images/stack-books-table-with-smartphone.png";
import schoolImg from "../public/assests/icons/mock-school.svg";
import quickcareImg from "../public/assests/images/quickcare.png";
import spinlotoImg from "../public/assests/images/SpinlottoLogo.png";
import aurallyImg from "../public/assests/images/aurallyLogo.png";
import spendaImg from "../public/assests/images/spenda.png";
import aktivImg from "../public/assests/images/aktiv.png";
import fbImg from "../public/assests/icons/facebook.svg";
import igImg from "../public/assests/icons/instagram.svg";
import twImg from "../public/assests/icons/twitter.svg";
import liImg from "../public/assests/icons/twitter.svg";
import contactImg from "../public/assests/images/contact-us-ashinity.png";

//components

import TextInput from "@/Components/TextInput";
import TextArea from "@/Components/TextArea";
import ServicesCard from "@/Components/ServicesCard/ServicesCard";
import CustomUnderline from "@/Components/CustomUnderline/CustomUnderline";

export const metadata = {
  title: "Ashinity Synergy",
  description:
    "Empowering Your Business with Tech, Policy, and Growth Expertise",
  head: [
    {
      tag: "link",
      rel: "stylesheet",
      href: "https://api.fontshare.com/v2/css?f[]=satoshi@500,700,900&display=swap",
    },
  ],
};

const navdata = [
  {
    name: "Home",
  },
  {
    name: "About Us",
  },
  {
    name: "Our Businesses",
  },
  {
    name: "Partnerships",
  },
  {
    name: "News & Events",
  },
  {
    name: "Contact Us",
  },
];

const patnerData = [
  {
    icon: chartImg,
    title: "Shape Your Industry with Science Policy Expertise",
    description:
      "Science Policy Research and Advocacy: Expert insights and tech analysis for policy influence.",
  },
  {
    icon: fileImg,
    title: "Drive Progress with Cutting-Edge R&D",
    description:
      "Research and Development in Tech and Science: Cutting-edge tech and science innovations.",
  },
  {
    icon: dataImg,
    title: "Grow Smarter with Strategic Scaling Solutions",
    description:
      "Enterprise Scaling Consultation: Strategic tech solutions for business growth.",
  },
];

const testimonials = [
  {
    image: testImg,
    services: ["Web development", "UI/UX design", "Web apps", "Education"],
    project: {
      name: "EIT Campus Platform",
      description:
        "EIT Campus Platform educational platform developed by Smultron Web Development on behalf of EIT Urban Mobility, on...",
    },
    client: "Client name here",
  },
  {
    image: testImg,
    services: ["Web development", "UI/UX design", "Web apps", "Education"],
    project: {
      name: "EIT Campus Platform",
      description:
        "EIT Campus Platform educational platform developed by Smultron Web Development on behalf of EIT Urban Mobility, on...",
    },
    client: "Client name here",
  },
  {
    image: testImg,
    services: ["Web development", "UI/UX design", "Web apps", "Education"],
    project: {
      name: "EIT Campus Platform",
      description:
        "EIT Campus Platform educational platform developed by Smultron Web Development on behalf of EIT Urban Mobility, on...",
    },
    icon: "",
    client: "Client name here",
  },
];

const sponsored = [spinlotoImg, aurallyImg, spendaImg, aktivImg, quickcareImg];

export default function Home() {
  return (
    <>
      {/* <Head>
        <link
          href="https://api.fontshare.com/v2/css?f[]=satoshi@500,700,900&display=swap"
          rel="stylesheet"
        />
      </Head> */}

      <div>
        <header>
          <nav className="py-10 border-b border-b-[var(--color-primary)]/10 shadow-xs">
            <div className="max-w-7xl mx-auto flex items-center justify-between px-6 sm:px-8 md:px-10 lg:px-12 xl:px-0">
              <h1 className="text-3xl font-bold">
                <Image src={logo} alt="logo" />
              </h1>

              <ul className="hidden lg:flex items-center justify-center">
                <li>
                  {navdata.map((item, index) => {
                    return (
                      <Link
                        key={index + 1}
                        href="/"
                        className="px-3 text-[var(--color-primary)] text-sm font-medium tracking-wider"
                      >
                        {item.name}
                      </Link>
                    );
                  })}
                </li>
              </ul>
              <MdMenu size={32} className="lg:hidden" />
            </div>
          </nav>
        </header>
        <main>
          <section className="py-24">
            <div className="max-w-7xl mx-auto px-6 sm:px-8 md:px-10 lg:px-12 xl:px-0">
              <div className="flex items-center justify-between gap-6">
                <div className="w-full md:w-1/2">
                  <div className="max-w-md flex flex-col space-y-5">
                    <h2 className="text-5xl lg:text-[64px] text-[var(--color-primary)] font-black uppercase leading-normal">
                      Innovate, Advocate, Scale...
                    </h2>
                    <p className="text-base font-normal">
                      Ashinity empowers your business with tech, policy, and
                      growth expertise.
                    </p>
                    <div className="flex items-center gap-4">
                      <button className="px-3 py-2 rounded-full bg-[var(--btn-color)] hover:bg- text-white tracking-wide">
                        Book free consultation
                      </button>
                      <button className="px-3 py-2 rounded-full border border-[var(--btn-color)] text-[var(--btn-color)] tracking-wide">
                        Explore our services
                      </button>
                    </div>
                  </div>
                </div>
                <div className="w-1/2 hidden md:block">
                  <Image src={heroImg} alt="Ahsinity" />
                </div>
              </div>
            </div>
          </section>
          <section className="py-24 bg-[var(--color-primary)]/10">
            <div className="max-w-7xl mx-auto px-6 sm:px-8 md:px-10 lg:px-12 xl:px-0">
              <h3 className="text-[42px] font-bold text-[var(--color-primary)]">
                What We Do!
              </h3>
              <p className="max-w-md text-base mb-10">
                From ideation to deployment, we engineer solutions that drive
                growth, efficiency, and innovation.
              </p>
              <CustomUnderline />
              <div>
                <ServicesCard />
              </div>
            </div>
          </section>
          <section className="py-24">
            <div className="max-w-7xl mx-auto px-6 sm:px-8 md:px-10 lg:px-12 xl:px-0">
              <div className="flex flex-col lg:flex-row items-center gap-24">
                <div className="w-full lg:w-1/2">
                  <Image src={partnerImg} alt="" className="w-full h-auto" />
                </div>
                <div className="w-full lg:w-1/2">
                  <h3 className="text-[42px] font-bold text-[var(--color-primary)]">
                    Why Partner with Ashinity?
                  </h3>
                  <CustomUnderline className="w-[85%]" />
                  <p className="text-base mb-3">
                    At Ashinity, we empower our partners with innovative
                    solutions and expert insights through our specialized
                    services. When you choose to collaborate with us, you gain a
                    dedicated ally committed to fueling your success. Here’s why
                    partnering with Ashinity is the smart choice:
                  </p>
                  <div>
                    <ul className="space-y-6">
                      {patnerData.map((item, index) => {
                        return (
                          <li
                            key={index + 1}
                            className="flex items-center gap-6"
                          >
                            <div className="w-12 h-12 aspect-square p-2 bg-[var(--color-primary)]/10  rounded-full flex items-center justify-center">
                              <Image
                                src={item.icon}
                                alt=""
                                className="w-6 h-6 aspect-square"
                              />
                            </div>
                            <div>
                              <h4 className="text-xl font-bold">
                                {item.title}
                              </h4>
                              <p className="text-base">{item.description}</p>
                            </div>
                          </li>
                        );
                      })}
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </section>
          <section className="py-24">
            <div className="max-w-7xl mx-auto px-6 sm:px-8 md:px-10 lg:px-12 xl:px-0">
              <h3 className="text-[42px] font-bold text-[var(--color-primary)]">
                Trusted by Innovators
              </h3>
              <CustomUnderline className="max-w-[417px]" />
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {testimonials.map((item, index) => {
                  return (
                    <div key={index + 1} className="">
                      <div className="h-48">
                        <Image
                          src={item.image}
                          alt=""
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <div className="p-6 bg-[var(--color-primary)]/10 space-y-6">
                        <div>
                          {item.services.map((service, index) => (
                            <span key={index} className="text-sm">
                              {service}
                              {index < item.services.length - 1 && (
                                <span className="mx-2 text-[var(--color-primary)]">
                                  •
                                </span>
                              )}
                            </span>
                          ))}
                        </div>
                        <hr className="text-[var(--color-primary)]" />
                        <div className="text-xl text-[var(--color-primary)] font-bold">
                          {item.project.name}
                        </div>
                        <div className="text-base font-normal ">
                          {item.project.description}
                        </div>
                        <hr className="text-[var(--color-primary)]" />
                        <div className="flex items-center gap-3">
                          <Image src={schoolImg} alt={""} />
                          <span>{item.client}</span>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </section>
          <section className="py-10 border-y border-[var(--color-primary)]/20 mb-24">
            <div className="max-w-7xl mx-auto px-6 sm:px-8 md:px-10 lg:px-12 xl:px-0">
              <div className="flex items-center justify-center flex-wrap gap-8 md:justify-between">
                {sponsored.map((item, index) => (
                  <div key={index + 1}>
                    <Image src={item} alt="" />
                  </div>
                ))}
              </div>
            </div>
          </section>
          <section className="py-24">
            <div className="max-w-7xl mx-auto px-6 sm:px-8 md:px-10 lg:px-12 xl:px-0">
              <div className="relative bg-[var(--color-secondary)] flex p-8">
                <div className="hidden lg:block absolute top-1/2 transform -translate-y-1/2">
                  <Image
                    src={contactImg}
                    alt="contact us"
                    className="w-72 h-72 xl:w-full xl:h-full"
                  />
                </div>
                <div className="absolute top-6 right-32 rounded-full size-16 border border-[var(--color-primary)] flex items-center justify-center">
                  <div className="relative rounded-full bg-yellow-500 size-8" />
                </div>
                <div className="absolute bottom-28 right-12 rounded-full size-6 border border-[var(--color-primary)] flex items-center justify-center" />
                <div className="absolute bottom-18 right-32 rounded-full size-6 bg-[var(--accent-p)] flex items-center justify-center" />
                <div className="absolute bottom-6 right-12 rounded-full size-16 bg-yellow-500 flex items-center justify-center" />
                <div className="hidden lg:block w-[40%]" />
                <div className="w-full lg:w-[60%]">
                  <h3 className="text-[42px] font-bold text-[var(--color-primary)]">
                    Let’s talk
                  </h3>
                  <p className="flex flex-col text-[var(--text-white)] mb-6">
                    <span>Are you in need of an experienced tech team?</span>
                    <span>Let's have a conversation.</span>
                  </p>
                  <div>
                    <form
                      action="post"
                      className="text-sm text-[var(--text-white)] lg:w-96 space-y-2"
                    >
                      <div className="w-full flex flex-col lg:flex-row lg:items-center gap-2 lg:gap-0">
                        Hey, my name is
                        <TextInput
                          placeholder="your name"
                          className="w-full sm:w-lg lg:w-28 lg:mx-2"
                        />
                        and i am looking for
                      </div>
                      <div>
                        <TextArea
                          placeholder="your message"
                          className="w-full sm:w-lg lg:w-96 h-42 lg:h-fit"
                        />
                      </div>
                      <div className="w-full flex flex-col lg:flex-row lg:items-center gap-2 lg:gap-0">
                        here's my email
                        <TextInput
                          placeholder="your email"
                          className="w-full sm:w-lg lg:w-28 lg:mx-2"
                        />
                        and my phone no
                      </div>
                      <TextInput
                        placeholder="your phone"
                        className="w-full sm:w-lg lg:w-28"
                      />
                      <button className="px-4 py-2 bg-[var(--btn-color)] text-white rounded-full mt-6 lg:mt-0">
                        Submit
                      </button>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Footer Section */}
          <footer>
            <section className="py-10 border-y border-[var(--color-primary)]/20">
              <div className="max-w-7xl mx-auto flex items-center justify-between px-6 sm:px-8 md:px-10 lg:px-12 xl:px-0">
                <Image src={logo} alt="" />
                <div className="flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-4">
                  <span className="tracking-wider">Stay connected:</span>
                  <div className="flex items-center gap-4">
                    <a href="">
                      <Image src={fbImg} alt="" />
                    </a>
                    <a href="">
                      <Image src={twImg} alt="" />
                    </a>
                    <a href="">
                      <Image src={igImg} alt="" />
                    </a>
                    <a href="">
                      <Image src={liImg} alt="" />
                    </a>
                  </div>
                </div>
              </div>
            </section>
            <section className="py-12">
              <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 lg:gap-28 px-6 sm:px-8 md:px-10 lg:px-12 xl:px-0">
                <div className="">
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipiscing elit Ut et
                    massa mi. Aliquam in hendrerit urna. Pellentesque sit amet
                    sapien.
                  </p>
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipiscing elit Ut et
                    massa mi. Aliquam in hendrerit urna. Pellentesque sit amet
                    sapien.
                  </p>
                </div>
                <div>
                  <h4 className="text-base font-bold text-[var(--color-primary)] uppercase tracking-wider mb-3">
                    Services
                  </h4>
                  <ul>
                    <li>Science Policy Research and Advocacy</li>
                    <li>Research and Development in Tech and Science</li>
                    <li>Enterprise Scaling Consultation</li>
                  </ul>
                </div>
                <div>
                  <h4 className="text-base font-bold text-[var(--color-primary)] uppercase tracking-wider mb-3">
                    Our Businesses
                  </h4>
                  <ul>
                    <li>Harretz</li>
                    <li>Yeshiva</li>
                    <li>Apinature</li>
                  </ul>
                </div>
              </div>
            </section>

            <section className="bg-[var(--color-secondary)] flex items-center h-20 w-full">
              <div className="w-full max-w-7xl mx-auto text-xs tracking-wider text-white flex flex-col md:flex-row items-center justify-center md:justify-between gap-2 md:gap-0  px-6 sm:px-8 md:px-10 lg:px-12 xl:px-0">
                <span>
                  © Copyright 2024. All Rights Reserved. Ashinity Symergy
                </span>
                <div className="flex items-center gap-5">
                  <Link href={""}>Privacy Policy</Link>
                  <Link href={""}>Terms of Service</Link>
                </div>
              </div>
            </section>
          </footer>
        </main>
      </div>
    </>
  );
}
