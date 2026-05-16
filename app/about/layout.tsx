import { Metadata } from 'next';
import { absoluteUrl, OG_IMAGE_PATH, siteUrl } from '@/lib/site-config';

const aboutOgDescription =
  'About Ram Surat — Frontend Developer with 3 years across web and mobile. Phantasm Solutions Pvt Ltd: leads 5+ frontend teams on ERP, e-commerce, and React Native. Masai School graduate; Computer Science from Sams Institute of Technologies.';

export const metadata: Metadata = {
  title: "About Ram Surat | Frontend Developer | Web & Mobile | 3 Years Experience",
  description: aboutOgDescription,
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
    "Remote React Developer",
    "React Native Team Lead",
    "ERP Frontend Developer",
    "E-commerce Developer India",
  ],
  openGraph: {
    title: "About Ram Surat | Frontend Developer Journey & Experience",
    description: aboutOgDescription,
    url: `${siteUrl}/about`,
    images: [
      {
        url: absoluteUrl(OG_IMAGE_PATH),
        width: 1200,
        height: 630,
        alt: "Ram Surat — Frontend Developer, Web & Mobile",
        type: 'image/png',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: "About Ram Surat | Frontend Developer Journey",
    description: aboutOgDescription,
    images: [absoluteUrl(OG_IMAGE_PATH)],
  },
};

export default function AboutLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
