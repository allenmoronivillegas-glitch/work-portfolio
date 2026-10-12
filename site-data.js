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
  { type: "badge",       badge: "", image: "", title: "", description: "", date: "", link: "", linkLabel: "" },
  { type: "badge",       badge: "", image: "", title: "", description: "", date: "", link: "", linkLabel: "" },
  { type: "certificate", badge: "", image: "", title: "", description: "", date: "", link: "", linkLabel: "" },
  { type: "certificate", badge: "", image: "", title: "", description: "", date: "", link: "", linkLabel: "" },
  { type: "details",     badge: "", image: "", title: "", description: "", date: "", link: "", linkLabel: "" },
  { type: "details",     badge: "", image: "", title: "", description: "", date: "", link: "", linkLabel: "" }
];
