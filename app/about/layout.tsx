import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "About Ram Surat | Frontend Developer | React.js Expert | 2.5+ Years Experience",
  description: "Learn about Ram Surat - Professional Frontend Developer with 2.5+ years of experience at Phantasm Solutions. Expert in React.js, Next.js, React Native, TypeScript. Computer Science graduate from Sams Institute of Technologies.",
  keywords: [
    "Ram Surat About",
    "Frontend Developer India",
    "React Developer Experience",
    "Phantasm Solutions Developer",
    "Masai School Graduate",
    "Full Stack Developer Journey",
    "React.js Expert India",
    "Next.js Developer Portfolio",
    "Hire Frontend Developer",
    "Remote React Developer"
  ],
  openGraph: {
    title: "About Ram Surat | Frontend Developer Journey & Experience",
    description: "Discover the journey of Ram Surat from Computer Science graduate to leading Frontend Developer. 2.5+ years of experience building enterprise applications.",
    url: "https://ram-surat.dev/about",
  },
};

export default function AboutLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}

