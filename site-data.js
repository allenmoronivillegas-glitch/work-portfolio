/* =====================================================================
   EDIT THIS FILE TO UPDATE YOUR PORTFOLIO (no need to touch index.html)
   1) EMAILJS_CONFIG  -> paste your EmailJS keys (see README.md)
   2) PROJECTS        -> add / edit / delete project cards
   3) ACHIEVEMENTS    -> add / edit / delete achievement cards
   Leave a field as "" to show a placeholder. Keep the commas and quotes.
   ===================================================================== */

/* ---- 1. EmailJS (public values only, safe to keep in frontend code) ----
   Until you replace all three YOUR_... values, the contact form keeps
   using your existing Web3Forms setup. */
const EMAILJS_CONFIG = {
  publicKey:  "YOUR_EMAILJS_PUBLIC_KEY",
  serviceId:  "YOUR_EMAILJS_SERVICE_ID",
  templateId: "YOUR_EMAILJS_TEMPLATE_ID"
};

/* ---- 2. Projects ----
   image : path or URL of a screenshot, e.g. "images/hopegive.png" ("" = placeholder)
   tech  : list of technologies, e.g. ["Flutter", "Dart", "Firebase"] ([] = placeholder)
   status: e.g. "In development", "Prototype", "Published" ("" = placeholder)
   github / demo: full links, or "" to hide the button */
const PROJECTS = [
  {
    name: "HopeGive App",
    type: "Android / mobile application",
    description: "",
    image: "",
    tech: ["Android"],
    status: "",
    github: "",
    demo: ""
  },
  {
    name: "UlamShare App",
    type: "Mobile application",
    description: "",
    image: "",
    tech: [],
    status: "",
    github: "",
    demo: ""
  },
  {
    name: "Future Project",
    type: "Your next application",
    description: "",
    image: "",
    tech: [],
    status: "",
    github: "",
    demo: ""
  }
];

/* ---- 3. Achievements ----
   category must be one of the names in ACHIEVEMENT_CATEGORIES.
   date : a year or date, e.g. "2025" or "Mar 2025"
   link : certificate or verification URL ("" = no button)
   image: certificate image path or URL ("" = none)
   placeholder: true shows a dashed "add yours here" card */
const ACHIEVEMENT_CATEGORIES = [
  "Professional achievements",
  "Career milestones",
  "Completed projects",
  "Certificates and training",
  "Technical accomplishments"
];

const ACHIEVEMENTS = [
  {
    category: "Professional achievements",
    title: "Handled 200+ orders every day",
    description: "Processed and managed customer orders in Amazon Seller Central as Order Processor for Pawblefy / Marblefy.",
    date: "2024 - 2026", link: "", linkLabel: "", image: ""
  },
  {
    category: "Career milestones",
    title: "Started remote client work",
    description: "Began as a Lead Generation & Data Research Specialist at Virtual Pal.",
    date: "Feb 2023", link: "", linkLabel: "", image: ""
  },
  {
    category: "Career milestones",
    title: "Moved into e-commerce operations",
    description: "Started as Order Processor, working with Amazon Seller Central.",
    date: "Dec 2024", link: "", linkLabel: "", image: ""
  },
  {
    category: "Technical accomplishments",
    title: "Built verified lead lists with research and scraping tools",
    description: "Used LinkedIn Sales Navigator, Apollo, RocketReach and Octoparse to source and verify prospect data.",
    date: "2023 - 2025", link: "", linkLabel: "", image: ""
  },
  {
    category: "Completed projects",
    title: "Your completed project",
    description: "Add a short description of a finished project.",
    date: "Year", link: "", linkLabel: "", image: "", placeholder: true
  },
  {
    category: "Certificates and training",
    title: "Your certificate or training",
    description: "Add the course or certificate name and what it covered.",
    date: "Year", link: "", linkLabel: "View certificate", image: "", placeholder: true
  }
];
