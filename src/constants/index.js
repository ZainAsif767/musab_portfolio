import {
  sustainability,
  video,
  eco,
  AI,
  environment,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  docker,
  pizza,
  DigiPersona,
  GameKahani,
  electric,
  carrent,
  jobit,
  tripguide,
  threejs,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
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
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Redux Toolkit",
    icon: redux,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "figma",
    icon: figma,
  },
  {
    name: "docker",
    icon: docker,
  },
];

const experiences = [
  {
    title: "General Manager",
    company_name: "Digi Persona Pvt Lt",
    icon: DigiPersona,
    iconBg: "#383E56",
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
    iconBg: "#383E56",
    date: "Jan 2021 - Dec 2021",
    points: [
      "Edited Video according to the script",
    ],
  },
  {
    title: "Owner (CEO)",
    company_name: "Junaidi's Pizzeria",
    icon: pizza,
    iconBg: "#E6DEDD",
    date: "Jan 2023 - Present",
    points: [
      "Manage the day to day operations of the outlet.",
    ],
  },
  {
    title: "Project Manager",
    company_name: "Ecological Welfare Organization",
    icon: eco,
    iconBg: "#E6DEDD",
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
    name: "Car Rent",
    description:
      "Web-based platform that allows users to search, book, and manage car rentals from various providers, providing a convenient and efficient solution for transportation needs.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "mongodb",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: carrent,
    source_code_link: "https://github.com/",
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
