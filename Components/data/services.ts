type IServicesData = {
  policy: {
    id: string;
    title: string;
    description: string;
  }[];
  research: {
    id: string;
    title: string;
    description: string;
  }[];
  enterprise: {
    id: string;
    title: string;
    description: string;
  }[];
};

export const ServicesData: IServicesData = {
  policy: [
    {
      id: "policy-research",
      title: "Policy Research:",
      description:
        "In-depth analysis of science and technology policies to inform stakeholders.",
    },
    {
      id: "advocacy-campaigns",
      title: "Advocacy Campaigns:",
      description:
        "Promoting policies that support innovation and scientific advancement.",
    },
    {
      id: "consulting-services",
      title: "Consulting Services:",
      description:
        "Expert advice for policymakers, organizations, and institutions on science policy.",
    },
    {
      id: "technology-integration",
      title: "Technology Integration:",
      description:
        "Using AI and data analytics to provide policy insights and impact assessments.",
    },
  ],

  research: [
    {
      id: "ai-machine-learning",
      title: "AI & Machine Learning:",
      description:
        "Custom models to automate decisions, predict trends, and optimize operations.",
    },
    {
      id: "quantum-computing",
      title: "Quantum Computing:",
      description:
        "Research and development of quantum algorithms for optimization, cryptography, and simulations.",
    },
    {
      id: "blockchain-web3",
      title: "Blockchain & Web3:",
      description:
        "Decentralized applications (dApps), smart contracts, and tokenized ecosystems.",
    },
    {
      id: "software-development",
      title: "Software Development:",
      description:
        "Advanced applications tailored for scientific research and technological innovation.",
    },
  ],

  enterprise: [
    {
      id: "custom-saas",
      title: "Custom SaaS Development:",
      description:
        "Tailored platforms with cloud integration and real-time analytics for workflow automation.",
    },
    {
      id: "itsm-transformation",
      title: "ITSM & Digital Transformation:",
      description:
        "Modernizing IT systems, streamlining workflows, and automating service management.",
    },
    {
      id: "mobile-web-apps",
      title: "Mobile & Web Apps:",
      description:
        "User-centric applications for iOS, Android, and web, built for speed, security, and scalability.",
    },
    {
      id: "strategic-planning",
      title: "Strategic Planning:",
      description:
        "Guidance on scaling businesses through technology and innovation strategies.",
    },
  ],
};
