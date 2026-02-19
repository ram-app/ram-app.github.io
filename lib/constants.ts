export const PERSONAL_INFO = {
  name: "Ram Surat",
  title: "Full Stack Developer",
  email: "ram.surat.web@gmail.com",
  phone: "+91 9793814970",
  location: "Sabesar,Kachhawa,Mirzapur,U.P",
  bio: "Frontend Developer with 3 years of hands-on experience in building responsive, scalable, and user-friendly web applications. Proficient in React.js, Next.js, JavaScript, HTML, CSS, and modern UI libraries. Experienced in developing complex features such as coupon & discount logic, checkout flows, authentication (login/guest mode), and performance-optimized interfaces. Familiar with TypeScript, Node.js, and Express.js, with the ability to collaborate effectively with backend teams. Passionate about clean code, reusable components, and delivering high-quality user experiences in fast-paced environments.",
  resume: "https://drive.google.com/file/d/1Aq2Od_m9EhaHS-frJYgDaciQazVD9rzt/view?usp=sharing",
  social: {
    github: "https://github.com/masaiff210880",
    linkedin: "https://www.linkedin.com/in/ram-surat-frontend-developer/",
    twitter: "https://twitter.com/ramsurat",
    website: "https://ram-app.github.io/"
  }
};

export const EXPERIENCE = [
  {
    id: 1,
    title: "Frontend Developer",
    company: "Phantasm Solutions Pvt Ltd",
    period: "2023 - Present",
    description: "Leading 5+ frontend teams for enterprise-level web and mobile application development. Building scalable, responsive applications with modern frontend technologies and best practices.",
    technologies: ["React.js", "Next.js", "React Native", "Docker", "Tailwind CSS", "Material UI", "Bootstrap"]
  },
  {
    id: 2,
    title: "Full Stack Web Development",
    company: "Masai School",
    period: "2022 - 2023",
    description: "Completed intensive full stack web development program. Developed solo and collaborative projects, building real-world applications with modern web technologies.",
    technologies: ["React", "JavaScript", "Node.js", "Express.js", "HTML", "CSS"]
  },
  {
    id: 3,
    title: "Computer Science Engineering",
    company: "Sams Institute of Technologies",
    period: "2019 - 2021",
    description: "Pursued Computer Science Engineering with focus on both frontend and backend development. Gained strong foundation in programming fundamentals, data structures, algorithms, and web technologies.",
    technologies: ["Python", "JavaScript", "Java", "C", "C++", "HTML", "CSS", "PHP"]
  }
];

// Project images
import project1Image from '@/app/assets/projects/Screenshot 2026-01-10 233956.png';
import project2Image from '@/app/assets/projects/Screenshot 2026-01-10 234024.png';
import project3Image from '@/app/assets/projects/Screenshot 2026-01-10 234054.png';
import project4Image from '@/app/assets/projects/Screenshot 2026-01-10 234130.png';

export const PROJECTS = [
  {
    id: 5,
    title: "LMS Learning Management System - User Portal",
    description: "A modern Learning Management System user interface for Sabeel TV where students can browse, enroll, and learn from structured Islamic courses with responsive UI and secure integrations.",
    image: "/user.png",
    technologies: ["Next.js", "Tailwind CSS", "Node.js", "Express.js", "MySQL"],
    github: "https://github.com/articulationpoint/sabeel_learning_frontend",
    live: "https://sabeeltv.com/",
    featured: true
  },
  {
    id: 6,
    title: "LMS Learning Management System - Admin Portal",
    description: "Admin dashboard for managing courses, users, and content for the Sabeel TV platform, with analytics and management tools for instructors and admins.",
    image: "/admin.png",
    technologies: ["React.js", "Tailwind CSS", "Node.js", "Express.js", "MySQL"],
    github: "https://github.com/articulationpoint/sabeel_learning_admin",
    live: "https://admin.sabeeltv.com/dashboard",
    featured: true
  },
  {
    id: 1,
    title: "HealthKart",
    description: "Healthcare is an online platform to provide authentic health and nutritional supplements. Offers protein supplements, weight loss products, gym memberships, and personal trainers on one platform.",
    image: project1Image.src,
    technologies: ["React", "Redux", "Chakra UI", "Node.js", "Express", "MongoDB"],
    github: "https://github.com/masaiff210880/defeated-interest-8343",
    live: "https://frontend-vinaykumar7580.vercel.app/",
    featured: true
  },
  {
    id: 2,
    title: "MedZ+",
    description: "MedZ+ brings to you an online platform, which can be accessed for all your health needs. Get your ayurvedic, homeopathic, vitamins & nutrition supplements health-related products delivered at home.",
    image: project2Image.src,
    technologies: ["React", "Redux", "Chakra UI", "JavaScript", "CSS"],
    github: "https://github.com/masaiff210880/-quick-jelly-9961",
    live: "https://medzplus.vercel.app/",
    featured: true
  },
  {
    id: 3,
    title: "Yaatra",
    description: "Yaatra.com is a leading online travel Web site where travelers can make airline, hotel, and car rental reservations.",
    image: project3Image.src,
    technologies: ["JavaScript", "HTML5", "CSS3", "Netlify"],
    github: "https://github.com/masaiff210880/flaky-suggestion-4282",
    live: "https://joyful-begonia-5f548b.netlify.app/fw22_0277home.html",
    featured: false
  },
  {
    id: 4,
    title: "Glamour Beauty",
    description: "Glamour Beauty one of the most popular online E-commerce platform that sells the cosmetics products. It has a lot of brands and different products.",
    image: project4Image.src,
    technologies: ["React", "Vite", "Netlify", "CSS3"],
    github: "https://github.com/masaiff210880/posh-title-8378/tree/main/GLAMOUR_BEAUTY/glamourbeauty-app",
    live: "https://glamourbeauty-app.vercel.app/",
    featured: false
  }
];

export const SKILLS = {
  frontend: [
    { name: "React.js", level: 95, icon: "ri-reactjs-line" },
    { name: "Next.js", level: 90, icon: "ri-nextjs-line" },
    { name: "React Native", level: 85, icon: "ri-smartphone-line" },
    { name: "JavaScript", level: 95, icon: "ri-javascript-line" },
    { name: "TypeScript", level: 85, icon: "ri-code-s-slash-line" },
    { name: "Angular", level: 75, icon: "ri-angularjs-line" },
    { name: "HTML/CSS", level: 95, icon: "ri-html5-line" },
    { name: "Tailwind CSS", level: 90, icon: "ri-css3-line" }
  ],
  backend: [
    { name: "Node.js", level: 85, icon: "ri-nodejs-line" },
    { name: "Express.js", level: 85, icon: "ri-server-line" },
    { name: "MongoDB", level: 80, icon: "ri-database-line" },
    { name: "REST APIs", level: 90, icon: "ri-api-line" }
  ],
  tools: [
    { name: "Tailwind CSS", level: 90, icon: "ri-css3-line" },
    { name: "Material UI", level: 90, icon: "ri-palette-line" },
    { name: "Bootstrap", level: 90, icon: "ri-layout-grid-line" },
    { name: "Git", level: 90, icon: "ri-git-branch-line" },
    { name: "GitHub", level: 90, icon: "ri-github-line" },
    { name: "Docker", level: 75, icon: "ri-docker-line" },
    { name: "Vercel", level: 85, icon: "ri-cloud-line" },
    { name: "Netlify", level: 85, icon: "ri-global-line" },
    { name: "VS Code", level: 95, icon: "ri-code-line" },
    { name: "Cursor AI", level: 90, icon: "ri-robot-line" },
    { name: "ChatGPT", level: 90, icon: "ri-openai-line" }
  ]
};

export const NAVIGATION_ITEMS = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  { name: "Projects", href: "/projects" },
  { name: "Skills", href: "/skills" },
  { name: "Contact", href: "/contact" }
];