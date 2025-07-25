export const PERSONAL_INFO = {
  name: "Ram Surat",
  title: "Full Stack Developer",
  email: "surajkumar2315@gmail.com",
  phone: "+91 9793814970",
  location: "Sabesar,Kachhawa,Mirzapur,U.P",
  bio: "Frontend Developer with 2+ years of experience building responsive web and mobile applications using React.js, Next.js, and React Native. Proficient in creating user-centric interfaces, integrating APIs, and working with Redux, TypeScript, and Tailwind CSS. Focused on delivering scalable, accessible, and high-performance frontend solutions.",
  resume: "/resume.pdf",
  social: {
    github: "https://github.com/masaiff210880",
    linkedin: "https://www.linkedin.com/in/ram-surat-542877203/",
    twitter: "https://twitter.com/alexjohnson",
    website: "https://alexjohnson.dev"
  }
};

export const EXPERIENCE = [
  {
    id: 1,
    title: "Front-end Developer",
    company: "Phantasm Solutions Pvt. Ltd.",
    period: "2022 - Present",
    description: "Led development of enterprise-level web applications using React, Node.js, and AWS. Mentored junior developers and improved team productivity by 40%.",
    technologies: ["React", "Node.js", "TypeScript", "AWS", "PostgreSQL"]
  },
  {
    id: 2,
    title: "Frontend Developer",
    company: "StartupXYZ",
    period: "2020 - 2022",
    description: "Built responsive web applications and mobile apps. Collaborated with UX designers to create intuitive user interfaces.",
    technologies: ["React", "React Native", "JavaScript", "Sass", "Firebase"]
  },
  {
    id: 3,
    title: "Junior Developer",
    company: "WebDev Agency",
    period: "2019 - 2020",
    description: "Developed client websites and learned modern web development practices. Gained experience in both frontend and backend technologies.",
    technologies: ["HTML", "CSS", "JavaScript", "PHP", "MySQL"]
  }
];

export const PROJECTS = [
  {
    id: 1,
    title: "E-Commerce Platform",
    description: "Full-stack e-commerce solution with payment processing, inventory management, and admin dashboard.",
    image: "https://readdy.ai/api/search-image?query=modern%20ecommerce%20platform%20interface%20with%20clean%20design%2C%20shopping%20cart%2C%20product%20grid%2C%20professional%20web%20application%20screenshot%20with%20purple%20and%20blue%20gradient%20colors%2C%20minimal%20UI%20design%2C%20high%20quality&width=600&height=400&seq=ecommerce-1&orientation=landscape",
    technologies: ["Next.js", "TypeScript", "Prisma", "PostgreSQL", "Stripe"],
    github: "https://github.com/alexjohnson/ecommerce-platform",
    live: "https://ecommerce-demo.vercel.app",
    featured: true
  },
  {
    id: 2,
    title: "Task Management App",
    description: "Collaborative task management application with real-time updates, team collaboration, and project tracking.",
    image: "https://readdy.ai/api/search-image?query=modern%20task%20management%20dashboard%20interface%20with%20kanban%20board%2C%20clean%20design%2C%20productivity%20app%20screenshot%20with%20organized%20layout%2C%20purple%20and%20blue%20color%20scheme%2C%20professional%20UI%20design&width=600&height=400&seq=taskapp-1&orientation=landscape",
    technologies: ["React", "Node.js", "Socket.io", "MongoDB", "Express"],
    github: "https://github.com/alexjohnson/task-manager",
    live: "https://taskmanager-demo.vercel.app",
    featured: true
  },
  {
    id: 3,
    title: "Weather Dashboard",
    description: "Beautiful weather application with location-based forecasts, interactive charts, and responsive design.",
    image: "https://readdy.ai/api/search-image?query=modern%20weather%20dashboard%20interface%20with%20beautiful%20weather%20icons%2C%20charts%2C%20clean%20design%2C%20weather%20app%20screenshot%20with%20gradient%20backgrounds%2C%20professional%20UI%20design%2C%20blue%20and%20purple%20colors&width=600&height=400&seq=weather-1&orientation=landscape",
    technologies: ["React", "TypeScript", "OpenWeather API", "Chart.js"],
    github: "https://github.com/alexjohnson/weather-dashboard",
    live: "https://weather-dashboard-demo.vercel.app",
    featured: false
  },
  {
    id: 4,
    title: "Portfolio Website",
    description: "Personal portfolio website built with Next.js, featuring dark mode, animations, and responsive design.",
    image: "https://readdy.ai/api/search-image?query=modern%20portfolio%20website%20interface%20with%20clean%20design%2C%20developer%20portfolio%20layout%2C%20professional%20web%20design%20with%20gradient%20colors%2C%20minimalist%20UI%2C%20purple%20and%20blue%20theme&width=600&height=400&seq=portfolio-1&orientation=landscape",
    technologies: ["Next.js", "Tailwind CSS", "Framer Motion", "TypeScript"],
    github: "https://github.com/alexjohnson/portfolio",
    live: "https://alexjohnson.dev",
    featured: false
  },
  {
    id: 5,
    title: "Chat Application",
    description: "Real-time chat application with message encryption, file sharing, and group chat functionality.",
    image: "https://readdy.ai/api/search-image?query=modern%20chat%20application%20interface%20with%20message%20bubbles%2C%20clean%20design%2C%20messaging%20app%20screenshot%20with%20organized%20layout%2C%20purple%20and%20blue%20color%20scheme%2C%20professional%20UI%20design&width=600&height=400&seq=chat-1&orientation=landscape",
    technologies: ["React", "Socket.io", "Node.js", "MongoDB", "JWT"],
    github: "https://github.com/alexjohnson/chat-app",
    live: "https://chat-demo.vercel.app",
    featured: false
  },
  {
    id: 6,
    title: "Blog Platform",
    description: "Content management system with markdown support, user authentication, and admin panel.",
    image: "https://readdy.ai/api/search-image?query=modern%20blog%20platform%20interface%20with%20clean%20design%2C%20content%20management%20system%20layout%2C%20professional%20web%20application%20screenshot%20with%20typography%20focus%2C%20purple%20and%20blue%20gradient%20colors&width=600&height=400&seq=blog-1&orientation=landscape",
    technologies: ["Next.js", "Prisma", "PostgreSQL", "NextAuth.js"],
    github: "https://github.com/alexjohnson/blog-platform",
    live: "https://blog-demo.vercel.app",
    featured: false
  }
];

export const SKILLS = {
  frontend: [
    { name: "React", level: 95, icon: "ri-reactjs-line" },
    { name: "Next.js", level: 90, icon: "ri-nextjs-line" },
    { name: "TypeScript", level: 85, icon: "ri-code-line" },
    { name: "JavaScript", level: 95, icon: "ri-javascript-line" },
    { name: "HTML/CSS", level: 90, icon: "ri-html5-line" },
    { name: "Tailwind CSS", level: 85, icon: "ri-css3-line" },
    { name: "Sass", level: 80, icon: "ri-css3-line" },
    { name: "Vue.js", level: 70, icon: "ri-vuejs-line" }
  ],
  backend: [
    { name: "Node.js", level: 90, icon: "ri-nodejs-line" },
    { name: "Express.js", level: 85, icon: "ri-server-line" },
    { name: "Python", level: 80, icon: "ri-code-line" },
    { name: "PostgreSQL", level: 85, icon: "ri-database-line" },
    { name: "MongoDB", level: 80, icon: "ri-database-line" },
    { name: "Redis", level: 75, icon: "ri-database-line" },
    { name: "GraphQL", level: 70, icon: "ri-code-line" },
    { name: "REST APIs", level: 90, icon: "ri-api-line" }
  ],
  tools: [
    { name: "Git", level: 90, icon: "ri-git-branch-line" },
    { name: "Docker", level: 80, icon: "ri-docker-line" },
    { name: "AWS", level: 75, icon: "ri-cloud-line" },
    { name: "Vercel", level: 85, icon: "ri-cloud-line" },
    { name: "Figma", level: 70, icon: "ri-palette-line" },
    { name: "VS Code", level: 95, icon: "ri-code-line" },
    { name: "Webpack", level: 75, icon: "ri-settings-line" },
    { name: "Jest", level: 80, icon: "ri-test-tube-line" }
  ]
};

export const NAVIGATION_ITEMS = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  { name: "Projects", href: "/projects" },
  { name: "Skills", href: "/skills" },
  { name: "Contact", href: "/contact" }
];