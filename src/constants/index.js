import {
  sustainability,
  video,
  eco,
  AI,
  environment,
  davinci,
  wordpress,
  midjourney,
  youtube,
  google,
  facebook,
  twitter,
  wise,
  runway,
  pizza,
  DigiPersona,
  GameKahani,
  electric,
  janah,
  jobit,
  tripguide,
  binance,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "experience",
    title: "Experience",
  },
  {
    id: "projects",
    title: "Projects",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Environmental Advocate",
    icon: environment,
  },
  {
    title: "Sustainability Champion",
    icon: sustainability,
  },
  {
    title: "Video Creator",
    icon: video,
  },
  {
    title: "AI Enthusiast",
    icon: AI,
  },
];

const technologies = [
  {
    name: "Midjourney",
    icon: midjourney,
  },
  {
    name: "YouTube",
    icon: youtube,
  },
  {
    name: "Davinci Resolve",
    icon: davinci,
  },
  {
    name: "Wordpress",
    icon: wordpress,
  },
  {
    name: "Google",
    icon: google,
  },
  {
    name: "Facebook",
    icon: facebook,
  },
  {
    name: "X Corp",
    icon: twitter,
  },
  {
    name: "Wise",
    icon: wise,
  },
  {
    name: "Runway ML",
    icon: runway,
  },
  {
    name: "Binance",
    icon: binance,
  },
];

const experiences = [
  {
    title: "General Manager",
    company_name: "Digi Persona Pvt Lt",
    icon: DigiPersona,
    iconBg: "#000000",
    date: "August 2023 - Present",
    points: [
      "Manage onboard resources.",
      "Engage with clients for feedback and satisfaction.",
      "Collaboration with Development team for improved client feedback.",
      "Working as a Performance marketer.",
    ],
  },
  {
    title: "Editor",
    company_name: "Game Kahani",
    icon: GameKahani,
    iconBg: "#E6DEDD",
    date: "Jan 2022 - Present",
    points: [
      "Plan and Edit videos.",
      "Manage digital assets as well as generate assets for the channel.",
    ],
  },
  {
    title: "Video Editor",
    company_name: "Electric Aviation",
    icon: electric,
    iconBg: "#ffffff",
    date: "Jan 2021 - Dec 2021",
    points: [
      "Edited Video according to the script",
    ],
  },
  {
    title: "Owner (CEO)",
    company_name: "Junaidi's Pizzeria",
    icon: pizza,
    iconBg: "#000000",
    date: "Jan 2023 - Present",
    points: [
      "Manage the day to day operations of the outlet.",
    ],
  },
  {
    title: "Project Manager",
    company_name: "Ecological Welfare Organization",
    icon: eco,
    iconBg: "#FFFFFF",
    date: "Jan 2017 - 2018",
    points: [
      "Delivered the eco-blocks project of UNDP where we produced",
      "Eco-friendly bricks with leftover materials.",
      "Manage all the plantation drives conducted by NGO",
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
    name: "Sara Lee",
    designation: "CFO",
    company: "Acme Co",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Rick does.",
    name: "Chris Brown",
    designation: "COO",
    company: "DEF Corp",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "Lisa Wang",
    designation: "CTO",
    company: "456 Enterprises",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];

const projects = [
  {
    name: "Janah Al Saqar",
    description:
      "Web Application made on wordpress that enable users to book for cargo and logistics around the world, the application provides services.",
    tags: [
      {
        name: "WordPress",
        color: "blue-text-gradient",
      }
    ],
    image: janah,
    source_code_link: "https://janahalsaqar.com",
  },
  {
    name: "Job IT",
    description:
      "Web application that enables users to search for job openings, view estimated salary ranges for positions, and locate available jobs based on their current location.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "restapi",
        color: "green-text-gradient",
      },
      {
        name: "scss",
        color: "pink-text-gradient",
      },
    ],
    image: jobit,
    source_code_link: "https://github.com/",
  },
  {
    name: "Trip Guide",
    description:
      "A comprehensive travel booking platform that allows users to book flights, hotels, and rental cars, and offers curated recommendations for popular destinations.",
    tags: [
      {
        name: "nextjs",
        color: "blue-text-gradient",
      },
      {
        name: "supabase",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    image: tripguide,
    source_code_link: "https://github.com/",
  },
];

export { services, technologies, experiences, testimonials, projects };
