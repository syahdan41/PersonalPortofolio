import { ExperienceData } from "../types";

export const experienceData: ExperienceData[] = [
  {
    id: "exp-1",
    company: "PT Ifabula Digital Kreasi",
    location: "Tangerang, Banten",
    role: "Software Developer",
    duration: "Jan 2023 - Present",
    description: "Worked across four enterprise engagements under this role, specializing in OutSystems enterprise application development.",
    responsibilities: [
      "Bank Syariah Indonesia (BSI): Served as OutSystems Principal Developer in an international team delivering a mortgage financing platform. Integrated multiple external enterprise APIs supporting financing workflows and CRM communication. Refactored legacy modules into a layered architecture aligned with OutSystems best practices. Led recovery and redesign of the Counter Offer financing workflow, resolving logic inconsistencies and coordinating API contracts. Implemented asynchronous processes with OutSystems BPT and robust exception handling for financing approval pipelines.",
      "Tokio Marine Indonesia: Implemented Firebase Cloud Messaging (FCM) integration within an OutSystems mobile insurance app for real-time push notifications. Developed a multilingual mobile interface with dynamic switching between Indonesian and English. Built features for a micro-insurance platform supporting SME partners across mobile and PWA onboarding flows. Implemented secure URL tokenization and encryption for WhatsApp-distributed quotation links redirecting to PWA workflows. Built asynchronous background processes using timers to automate reward notifications and user engagement messaging.",
      "FIF Group: Developed a mobile stock-opname application from scratch using the OutSystems mobile framework for internal inventory tracking. Implemented token-based API authentication and backend integration for secure inventory synchronization. Designed SQL-based data processing logic for item filtering, stock validation, and reporting. Implemented offline-first mobile capability with automatic sync upon network reconnection. Collaborated with cross-vendor engineering teams to coordinate API usage and database access.",
      "NFC Flazz Integration Research: Engineered a Cordova-compatible mobile plugin enabling BCA Flazz NFC functionality within an OutSystems hybrid mobile app. Translated native vendor components using JNI (C to Java integration) for Android compatibility. Converted vendor-provided ARM native libraries and header files into a functional Cordova plugin architecture. Validated Android NFC card interaction end-to-end through the integrated plugin."
    ],
    technologies: ["OutSystems", "REST APIs", "Firebase Cloud Messaging", "SQL", "Cordova", "JNI", "Android", "BPT"]
  },
  {
    id: "exp-2",
    company: "Tsuki Software House",
    location: "Bandung, Jawa Barat",
    role: "Lead Front End Developer",
    duration: "Nov 2022 - Dec 2022",
    description: "Collaborated directly with a UI/UX designer and backend developer to build scalable front-end solutions.",
    responsibilities: [
      "Built the Sura-Link interface using React.js, implementing dynamic form handling and document preview features.",
      "Automated a document creation workflow that was previously manual, significantly reducing error rates and generation time.",
      "Built and deployed Percik's company profile website using React.js with full responsiveness across devices."
    ],
    technologies: ["React.js", "Frontend Architecture", "Responsive Design"]
  },
  {
    id: "exp-3",
    company: "PT Rama Karya Digma",
    location: "Jakarta Timur",
    role: "Website Developer Intern",
    duration: "Jul 2021 - Aug 2021",
    description: "Developed and deployed a responsive company profile website presenting the organization's vision, mission, product offerings, and contact information.",
    responsibilities: [
      "Built the interface using HTML, CSS, and Bootstrap with responsive layouts across desktop and mobile.",
      "Translated company branding and content requirements into a structured, user-friendly web interface.",
      "Configured domain registration and hosting deployment for a live production environment."
    ],
    technologies: ["HTML", "CSS", "Bootstrap", "Web Hosting"]
  },
  {
    id: "exp-4",
    company: "PT Telkom Indonesia, Tbk. (Wilayah Telkom Bogor)",
    location: "Bogor, West Java",
    role: "CCNA Intern",
    duration: "Jul 2020 - Aug 2020",
    description: "Developed a Telegram Bot-based customer support automation system for IndiHome services.",
    responsibilities: [
      "Integrated the bot with QR codes installed on customer routers to simplify complaint reporting.",
      "Designed a workflow redirecting customers to a structured Google Form for submitting service complaints.",
      "Implemented bot interaction logic connecting router-based QR access points with digital reporting channels."
    ],
    technologies: ["Telegram Bot API", "Google Forms", "Networking"]
  }
];
