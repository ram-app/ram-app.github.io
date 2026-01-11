
import type { Metadata } from "next";
import { Roboto, Roboto_Mono, Pacifico } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/providers/ThemeProvider";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";

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

export const metadata: Metadata = {
  metadataBase: new URL('https://ram-surat.dev'),
  title: {
    default: "Ram Surat | Frontend Developer | React.js & Next.js Expert | Hire Frontend Developer India",
    template: "%s | Ram Surat - Frontend Developer"
  },
  description: "Ram Surat - Frontend Developer with 2.5+ years of hands-on experience in building responsive, scalable, and user-friendly web applications. Proficient in React.js, Next.js, JavaScript, HTML, CSS, and modern UI libraries. Experienced in developing complex features such as coupon & discount logic, checkout flows, authentication (login/guest mode), and performance-optimized interfaces. Familiar with TypeScript, Node.js, and Express.js, with the ability to collaborate effectively with backend teams. Passionate about clean code, reusable components, and delivering high-quality user experiences in fast-paced environments.",
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
    "Ram Surat React Developer"
  ],
  authors: [{ name: "Ram Surat", url: "https://ram-surat.dev" }],
  creator: "Ram Surat",
  publisher: "Ram Surat",
  icons: {
    icon: '/ram.png',
    apple: '/ram.png',
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://ram-surat.dev",
    title: "Ram Surat | Frontend Developer | 2.5+ Years Experience | React.js & Next.js Expert",
    description: "Frontend Developer with 2.5+ years of hands-on experience in building responsive, scalable, and user-friendly web applications. Proficient in React.js, Next.js, JavaScript, HTML, CSS. Experienced in coupon & discount logic, checkout flows, authentication, and performance-optimized interfaces. Passionate about clean code and high-quality user experiences.",
    siteName: "Ram Surat - Frontend Developer Portfolio",
    images: [
      {
        url: "https://ram-surat.dev/ram.png",
        width: 1200,
        height: 630,
        alt: "Ram Surat - Frontend Developer with 2.5+ Years Experience",
        type: "image/png",
      }
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Ram Surat | Frontend Developer | 2.5+ Years Experience",
    description: "Frontend Developer with 2.5+ years of hands-on experience. Proficient in React.js, Next.js, JavaScript. Experienced in complex features like checkout flows, authentication, and performance-optimized interfaces. Passionate about clean code and high-quality UX.",
    creator: "@ramsurat",
    site: "@ramsurat",
    images: {
      url: "https://ram-surat.dev/ram.png",
      alt: "Ram Surat - Frontend Developer",
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
    canonical: "https://ram-surat.dev",
  },
  category: "technology",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning={true}>
      <head>
        <link rel="icon" type="image/png" href="/ram.png" />
        <link rel="apple-touch-icon" href="/ram.png" />
        <link rel="manifest" href="/manifest.json" />
        <meta name="theme-color" content="#667eea" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@graph": [
                {
                  "@type": "Person",
                  "@id": "https://ram-surat.dev/#person",
                  name: "Ram Surat",
                  givenName: "Ram",
                  familyName: "Surat",
                  jobTitle: "Frontend Developer",
                  description: "Frontend Developer with 2.5+ years of hands-on experience in building responsive, scalable, and user-friendly web applications. Proficient in React.js, Next.js, JavaScript, HTML, CSS, and modern UI libraries. Experienced in developing complex features such as coupon & discount logic, checkout flows, authentication (login/guest mode), and performance-optimized interfaces.",
                  url: "https://ram-surat.dev",
                  email: "surajkumar2315@gmail.com",
                  telephone: "+91 9793814970",
                  address: {
                    "@type": "PostalAddress",
                    addressLocality: "Mirzapur",
                    addressRegion: "Uttar Pradesh",
                    addressCountry: "India"
                  },
                  sameAs: [
                    "https://github.com/masaiff210880",
                    "https://www.linkedin.com/in/ram-surat-542877203/",
                    "https://twitter.com/ramsurat"
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
                    "Responsive Web Design",
                    "Single Page Applications",
                    "Progressive Web Apps",
                    "Mobile App Development",
                    "UI/UX Design",
                    "Git",
                    "Agile Development"
                  ],
                  alumniOf: {
                    "@type": "EducationalOrganization",
                    name: "Sams Institute of Technologies"
                  },
                  worksFor: {
                    "@type": "Organization",
                    name: "Phantasm Solutions Pvt Ltd"
                  }
                },
                {
                  "@type": "WebSite",
                  "@id": "https://ram-surat.dev/#website",
                  url: "https://ram-surat.dev",
                  name: "Ram Surat - Frontend Developer Portfolio",
                  description: "Portfolio website of Ram Surat, Expert Frontend Developer specializing in React.js, Next.js, and React Native development.",
                  publisher: {
                    "@id": "https://ram-surat.dev/#person"
                  },
                  potentialAction: {
                    "@type": "SearchAction",
                    target: "https://ram-surat.dev/?s={search_term_string}",
                    "query-input": "required name=search_term_string"
                  }
                },
                {
                  "@type": "ProfilePage",
                  "@id": "https://ram-surat.dev/#profilepage",
                  url: "https://ram-surat.dev",
                  name: "Ram Surat - Frontend Developer",
                  isPartOf: {
                    "@id": "https://ram-surat.dev/#website"
                  },
                  about: {
                    "@id": "https://ram-surat.dev/#person"
                  },
                  mainEntity: {
                    "@id": "https://ram-surat.dev/#person"
                  }
                },
                {
                  "@type": "Service",
                  "@id": "https://ram-surat.dev/#service",
                  name: "Frontend Development Services",
                  description: "Professional frontend development services including React.js, Next.js, React Native development, responsive web design, and single page applications.",
                  provider: {
                    "@id": "https://ram-surat.dev/#person"
                  },
                  serviceType: [
                    "Frontend Development",
                    "React.js Development",
                    "Next.js Development",
                    "React Native Development",
                    "Web Application Development",
                    "Mobile App Development",
                    "UI/UX Development"
                  ],
                  areaServed: {
                    "@type": "Country",
                    name: "Worldwide"
                  }
                }
              ]
            })
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
