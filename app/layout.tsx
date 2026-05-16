import type { Metadata } from "next";
import { Roboto, Roboto_Mono, Pacifico } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/providers/ThemeProvider";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { OG_IMAGE_PATH, ogImageAbsoluteUrl, siteUrl } from "@/lib/site-config";

const pacifico = Pacifico({
  weight: '400',
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-pacifico',
})

const roboto = Roboto({
  variable: "--font-roboto",
  subsets: ["latin"],
  weight: ["100", "300", "400", "500", "700", "900"],
  style: ["normal", "italic"],
  display: "swap",
});

const robotoMono = Roboto_Mono({
  variable: "--font-roboto-mono",
  subsets: ["latin"],
  display: "swap",
});

const ogDescription =
  "Frontend Developer with 3 years of hands-on frontend experience across web and mobile. Phantasm Solutions Pvt Ltd: leading 5+ frontend teams on ERP, e-commerce, and React Native apps. Proficient in React.js, Next.js, JavaScript, Firebase, and performance-focused UI.";

/** Local file: public/Gemini_Generated_Image_ghxrhkghxrhkghxr.png → live: https://ram-surat.dev/… (via siteUrl + OG_IMAGE_PATH) */
const ogShareImage = ogImageAbsoluteUrl;
const ogImageWidth = 1200;
const ogImageHeight = 630;

export const metadata: Metadata = {
  // Site origin only. Open Graph `images[].url` uses OG_IMAGE_PATH; Next joins this + path → full image URL.
  metadataBase: new URL(siteUrl),
  title: {
    default: "Ram Surat | Frontend Developer | Web & Mobile | React.js & Next.js Expert | Hire Frontend Developer India",
    template: "%s | Ram Surat - Frontend Developer"
  },
  description: `Ram Surat — ${ogDescription} Skilled in HTML, CSS, TypeScript, Node.js, and Express. Product experience includes coupons, checkout, authentication, and performance-focused interfaces, with clean reusable UI and close backend collaboration.`,
  keywords: [
    // Primary Keywords
    "Frontend Developer",
    "Front End Developer",
    "Front-End Developer",
    "React Developer",
    "React.js Developer",
    "ReactJS Developer",
    "Next.js Developer",
    "NextJS Developer",
    "React Native Developer",
    
    // Technical Skills
    "JavaScript Developer",
    "TypeScript Developer",
    "HTML CSS Developer",
    "Tailwind CSS Developer",
    "Redux Developer",
    "Node.js Developer",
    "MERN Stack Developer",
    "Full Stack Developer",
    "Web Developer",
    
    // Job Related
    "Hire Frontend Developer",
    "Hire React Developer",
    "Hire React.js Developer",
    "Freelance Frontend Developer",
    "Remote Frontend Developer",
    "Frontend Developer India",
    "React Developer India",
    "Frontend Developer Uttar Pradesh",
    "Frontend Developer Mirzapur",
    
    // Expertise Areas
    "Responsive Web Design",
    "Single Page Application Developer",
    "SPA Developer",
    "Progressive Web App Developer",
    "PWA Developer",
    "Mobile App Developer",
    "Cross Platform Developer",
    "UI Developer",
    "UI/UX Developer",
    
    // Technologies
    "Chakra UI Developer",
    "Material UI Developer",
    "Bootstrap Developer",
    "Framer Motion Developer",
    "REST API Integration",
    "GraphQL Developer",
    "MongoDB Developer",
    "Express.js Developer",
    
    // Service Keywords
    "Web Application Development",
    "Frontend Development Services",
    "React Development Services",
    "Custom Web Development",
    "E-commerce Website Developer",
    "Portfolio Website Developer",
    "Landing Page Developer",
    
    // Name Variations
    "Ram Surat",
    "Ram Surat Developer",
    "Ram Surat Portfolio",
    "Ram Surat Frontend Developer",
    "Ram Surat React Developer",
    "Phantasm Solutions",
    "3 Years Frontend Web Mobile",
    "React Native Firebase",
    "Team Lead Frontend"
  ],
  authors: [{ name: "Ram Surat", url: siteUrl }],
  creator: "Ram Surat",
  publisher: "Ram Surat",
  icons: {
    icon: '/ram-new.jpeg',
    apple: '/ram-new.jpeg',
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: siteUrl,
    title: "Ram Surat | Frontend Developer | 3 Years Web & Mobile | React.js & Next.js Expert",
    description: ogDescription,
    siteName: "Ram Surat - Frontend Developer Portfolio",
    images: [
      {
        url: OG_IMAGE_PATH,
        width: ogImageWidth,
        height: ogImageHeight,
        alt: "Ram Surat — Frontend Developer, Web & Mobile, 3+ years experience",
        type: "image/png",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Ram Surat | Frontend Developer | 3 Years Web & Mobile",
    description: ogDescription,
    creator: "@ramsurat",
    site: "@ramsurat",
    images: {
      url: OG_IMAGE_PATH,
      width: ogImageWidth,
      height: ogImageHeight,
      alt: "Ram Surat — Frontend Developer, Web & Mobile",
    },
  },
  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: false,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: "your-google-verification-code",
  },
  alternates: {
    canonical: siteUrl,
  },
  category: "technology",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const structuredData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Person",
        "@id": `${siteUrl}/#person`,
        name: "Ram Surat",
        givenName: "Ram",
        familyName: "Surat",
        jobTitle: "Frontend Developer",
        image: ogShareImage,
        description:
          "Frontend Developer with 3 years of hands-on frontend experience across web and mobile, including team leadership at Phantasm Solutions on ERP, e-commerce, and React Native applications. Proficient in React.js, Next.js, JavaScript, HTML, CSS, Firebase, and integrations such as payments, checkout, and authentication.",
        url: siteUrl,
        email: "surajkumar2315@gmail.com",
        telephone: "+91 9793814970",
        address: {
          "@type": "PostalAddress",
          addressLocality: "Mirzapur",
          addressRegion: "Uttar Pradesh",
          addressCountry: "India",
        },
        sameAs: [
          "https://github.com/masaiff210880",
          "https://www.linkedin.com/in/ram-surat-542877203/",
          "https://twitter.com/ramsurat",
        ],
        knowsAbout: [
          "Frontend Development",
          "React.js",
          "Next.js",
          "React Native",
          "JavaScript",
          "TypeScript",
          "HTML5",
          "CSS3",
          "Tailwind CSS",
          "Redux",
          "Node.js",
          "Express.js",
          "MongoDB",
          "REST API",
          "Firebase",
          "Responsive Web Design",
          "Single Page Applications",
          "Progressive Web Apps",
          "Mobile App Development",
          "UI/UX Design",
          "Git",
          "Agile Development",
        ],
        alumniOf: {
          "@type": "EducationalOrganization",
          name: "Sams Institute of Technologies",
        },
        worksFor: {
          "@type": "Organization",
          name: "Phantasm Solutions Pvt Ltd",
        },
      },
      {
        "@type": "WebSite",
        "@id": `${siteUrl}/#website`,
        url: siteUrl,
        name: "Ram Surat - Frontend Developer Portfolio",
        description:
          "Portfolio of Ram Surat — Frontend Developer with 3 years across web and mobile: React.js, Next.js, React Native, Firebase, and enterprise delivery at Phantasm Solutions.",
        publisher: {
          "@id": `${siteUrl}/#person`,
        },
        potentialAction: {
          "@type": "SearchAction",
          target: `${siteUrl}/?s={search_term_string}`,
          "query-input": "required name=search_term_string",
        },
      },
      {
        "@type": "ProfilePage",
        "@id": `${siteUrl}/#profilepage`,
        url: siteUrl,
        name: "Ram Surat - Frontend Developer",
        primaryImageOfPage: {
          "@type": "ImageObject",
          url: ogShareImage,
        },
        isPartOf: {
          "@id": `${siteUrl}/#website`,
        },
        about: {
          "@id": `${siteUrl}/#person`,
        },
        mainEntity: {
          "@id": `${siteUrl}/#person`,
        },
      },
      {
        "@type": "Service",
        "@id": `${siteUrl}/#service`,
        name: "Frontend Development Services",
        description:
          "Professional frontend development services for web and mobile, including React.js, Next.js, React Native, responsive design, and single page applications.",
        provider: {
          "@id": `${siteUrl}/#person`,
        },
        serviceType: [
          "Frontend Development",
          "React.js Development",
          "Next.js Development",
          "React Native Development",
          "Web Application Development",
          "Mobile App Development",
          "UI/UX Development",
        ],
        areaServed: {
          "@type": "Country",
          name: "Worldwide",
        },
      },
    ],
  };

  return (
    <html lang="en" suppressHydrationWarning={true}>
      <head>
        <link rel="icon" type="image/jpeg" href="/ram-new.jpeg" />
        <link rel="apple-touch-icon" href="/ram-new.jpeg" />
        <link rel="manifest" href="/manifest.json" />
        <meta name="theme-color" content="#667eea" />
        <meta property="og:image" content={ogShareImage} />
        <meta property="og:image:secure_url" content={ogShareImage} />
        <meta property="og:image:type" content="image/png" />
        <meta property="og:image:width" content={String(ogImageWidth)} />
        <meta property="og:image:height" content={String(ogImageHeight)} />
        <meta name="twitter:image" content={ogShareImage} />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(structuredData),
          }}
        />
      </head>
      <body
        className={`${roboto.variable} ${robotoMono.variable} ${pacifico.variable} antialiased`}
      >
        <ThemeProvider>
          <div id="app-content">
            <Header />
            <main className="pt-16">
              {children}
            </main>
            <Footer />
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
