// import Head from "next/head";
import Image from "next/image";

//images & icons

import heroImg from "../public/assets/images/testimage.svg";
// import { BsThreeDots } from "react-icons/bs";
import chartImg from "../public/assets/icons/chart.svg";
import fileImg from "../public/assets/icons/file.svg";
import dataImg from "../public/assets/icons/data.svg";
import partnerImg from "../public/assets/images/ashinity-partner-image.png";
import testImg from "../public/assets/images/stack-books-table-with-smartphone.png";
import schoolImg from "../public/assets/icons/mock-school.svg";

//components
import ServicesCard from "@/components/ServicesCard/ServicesCard";
import CustomUnderline from "@/components/CustomUnderline";
import ContactUs from "@/components/ContactUs";
import RecentProjects from "@/components/RecentProjects";

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
          <RecentProjects />
          <ContactUs />
        </main>
      </div>
    </>
  );
}
