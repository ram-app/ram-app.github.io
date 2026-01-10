import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Experience | Ram Surat | Frontend Developer at Phantasm Solutions",
  description: "Professional experience of Ram Surat - Frontend Developer at Phantasm Solutions Pvt Ltd. Leading 5+ frontend teams, building ERP systems, e-commerce platforms, mobile applications using React.js, Next.js, React Native.",
  keywords: [
    "Frontend Developer Experience",
    "React.js Work Experience",
    "Phantasm Solutions Developer",
    "Masai School Graduate",
    "ERP System Developer",
    "E-commerce Developer Experience",
    "Mobile App Developer",
    "React Native Experience",
    "Team Lead Frontend",
    "Enterprise Application Developer",
    "Professional Frontend Developer",
    "2.5 Years Experience React",
    "Full Stack Developer Experience"
  ],
  openGraph: {
    title: "Professional Experience | Ram Surat - Frontend Developer",
    description: "2.5+ years of frontend development experience at Phantasm Solutions. Building enterprise ERP systems, e-commerce platforms, and mobile applications.",
    url: "https://ram-surat.dev/experience",
  },
};

export default function ExperienceLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}

