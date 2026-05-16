import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Projects | Ram Surat | React.js & Next.js Portfolio | Web Development Projects",
  description: "Explore Ram Surat's portfolio: React Native mobile apps (LMS with Zoom & streaming, NoteTracker workflow), Firebase e-commerce (American Distributors, Smokevana, Green Street Distro), plus React/Next.js web projects, MERN builds, and more.",
  keywords: [
    "React Native Projects",
    "Firebase Mobile Apps",
    "LMS Mobile App",
    "E-commerce React Native",
    "Zoom SDK",
    "Razorpay Integration",
    "American Distributors App",
    "Smokevana",
    "Green Street Distro",
    "React.js Projects",
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
    title: "Projects | Ram Surat | Web & Mobile Portfolio",
    description: "React Native mobile apps, Firebase e-commerce, and React/Next.js web projects—LMS, workflow tooling, and full-stack applications.",
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


