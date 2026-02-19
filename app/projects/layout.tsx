import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Projects | Ram Surat | React.js & Next.js Portfolio | Web Development Projects",
  description: "Explore Ram Surat's portfolio of web development projects including HealthKart clone, MedZ+ healthcare platform, Yaatra travel booking, and Glamour Beauty e-commerce. Built with React.js, Next.js, Redux, Node.js, MongoDB.",
  keywords: [
    "React.js Projects",
    "Next.js Projects",
    "Frontend Development Projects",
    "Web Development Portfolio",
    "E-commerce Website Projects",
    "Healthcare Web Application",
    "Travel Booking Website",
    "MERN Stack Projects",
    "Redux Projects",
    "Chakra UI Projects",
    "React Developer Portfolio",
    "Full Stack Projects India",
    "HealthKart Clone",
    "MedZ Plus Project",
    "Yaatra Clone",
    "Glamour Beauty E-commerce"
  ],
  openGraph: {
    title: "Web Development Projects | Ram Surat - Frontend Developer",
    description: "Browse through professional web development projects built with React.js, Next.js, Node.js, MongoDB. E-commerce, Healthcare, Travel booking applications.",
    url: "https://ram-surat.dev/projects",
  },
};

export default function ProjectsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}


