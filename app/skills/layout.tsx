import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Skills | Ram Surat | React.js, Next.js, TypeScript, Node.js Expert",
  description: "Technical skills of Ram Surat - Frontend Developer. Expert in React.js, Next.js, React Native, TypeScript, JavaScript, Redux, Tailwind CSS, Node.js, Express.js, MongoDB. Modern web development technologies.",
  keywords: [
    "React.js Skills",
    "Next.js Developer Skills",
    "React Native Expert",
    "TypeScript Developer",
    "JavaScript Expert",
    "Redux Developer",
    "Tailwind CSS Expert",
    "Node.js Skills",
    "Express.js Developer",
    "MongoDB Developer",
    "Frontend Skills",
    "Full Stack Skills",
    "Chakra UI Developer",
    "Material UI Expert",
    "Bootstrap Developer",
    "REST API Skills",
    "Git Expert",
    "Docker Skills",
    "Vercel Deployment",
    "Netlify Deployment"
  ],
  openGraph: {
    title: "Technical Skills | Ram Surat - Frontend Developer",
    description: "Comprehensive technical skills in React.js, Next.js, React Native, TypeScript, Node.js, and modern web development technologies.",
    url: "https://ram-surat.dev/skills",
  },
};

export default function SkillsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}

