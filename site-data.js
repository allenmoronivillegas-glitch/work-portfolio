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
  publicKey:  "HZKiXCtLuEoypVADK",
  serviceId:  "service_m4j3e2f",
  templateId: "template_wa9pj6d"
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
    description: "HopeGive is a mobile giving app project that presents fundraising campaigns for community causes. Its interface highlights initiatives such as tree planting and school supplies for students, with campaign details, progress indicators, and amounts raised.",
    image: "images/hopegive-app.webp",
    tech: ["Android"],
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

/* ---- 3. Achievements (all placeholders until you add your own) ----
   type: "badge"       -> round badge image + details
         "certificate" -> certificate image + details
         "details"     -> text-only card
   badge / image: path or URL of your badge or certificate picture,
                  e.g. "images/badges/my-badge.png" ("" = placeholder)
   title, description, date: your text ("" = placeholder)
   link     : certificate verification URL ("" = placeholder, optional)
   linkLabel: button text, e.g. "Verify certificate" ("" = default)
   To add one: copy a { ... } block, paste it with a comma between blocks.
   To remove one: delete its { ... } block. */
const ACHIEVEMENTS = [
  {
    type: "badge",
    badge: "images/ms-word-associate-badge.webp",
    image: "",
    title: "Microsoft Office Specialist: Word Associate",
    description: "Microsoft Office Specialist badge for Word Associate in Microsoft 365 Apps.",
    date: "",
    link: "",
    linkLabel: ""
  },
  {
    type: "certificate",
    badge: "",
    image: "images/codecraft-expo-2026.webp",
    title: "CodeCraft Expo 2026 — Certificate of Participation",
    description: "Recognized for active participation in CodeCraft Expo 2026, including presenting a developed system and showcasing creativity, collaboration, and technical skills.",
    date: "May 28, 2026",
    link: "https://docs.google.com/presentation/d/1Ahgq5_r7xPXvhyrOLk0CPQKWsTCh29-XaDObevVNLto/edit?slide=id.p1#slide=id.p1",
    linkLabel: "View Certificate"
  },
  {
    type: "certificate",
    badge: "",
    image: "images/ai-literacy-responsible-use.webp",
    title: "Introduction to AI Literacy and Responsible Use",
    description: "Completed a self-paced micro-credential course on AI literacy and responsible use, involving up to five hours of study and aligned with PQF Level 6 descriptors.",
    date: "September 15, 2026",
    link: "",
    linkLabel: ""
  }
];
