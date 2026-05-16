import { Metadata } from 'next';
import { absoluteUrl, OG_IMAGE_PATH, siteUrl } from '@/lib/site-config';

const experienceOgDescription =
  'Professional experience: Frontend Developer at Phantasm Solutions Pvt Ltd — 3 years of frontend work across web and mobile, leading 5+ teams on enterprise ERP, e-commerce platforms, and React Native applications. Earlier: Masai School full-stack program; Sams Institute of Technologies (CSE).';

export const metadata: Metadata = {
  title: "Experience | Ram Surat | Frontend Developer at Phantasm Solutions",
  description: experienceOgDescription,
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
    "3 Years Frontend Web Mobile",
    "Full Stack Developer Experience",
    "Vijayawada Frontend Developer",
    "Firebase React Native",
  ],
  openGraph: {
    title: "Professional Experience | Ram Surat - Frontend Developer",
    description: experienceOgDescription,
    url: `${siteUrl}/experience`,
    images: [
      {
        url: absoluteUrl(OG_IMAGE_PATH),
        width: 1200,
        height: 630,
        alt: "Ram Surat — Experience, Phantasm Solutions",
        type: 'image/png',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: "Experience | Ram Surat | Phantasm Solutions",
    description: experienceOgDescription,
    images: [absoluteUrl(OG_IMAGE_PATH)],
  },
};

export default function ExperienceLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
