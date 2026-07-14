import "./globals.css";
import Script from "next/script";

export const metadata = {
  title: "Klyra — Personal Finance App Case Study",
  description:
    "A UI/UX case study showcasing the end-to-end design process of a personal finance application focused on budgeting, savings, expense tracking, and financial insights.",
  verification: {google: "3zTDXL5u5yLpdWx4En-lxeAKeEXH4WEC-XnmPlcu8R4"},
  keywords: [
    "Klyra",
    "Personal Finance App",
    "Finance App",
    "Budgeting",
    "Expense Tracking",
    "Savings",
    "Financial Insights",
    "UI/UX Design",
    "Case Study",
    "Product Design",
    "Mobile App",
    "User Experience",
    "User Interface",
    "Portfolio",
  ],

  authors: [
    {
      name: "Aprizal Triansyah",
      url: "https://klyra-case-study.vercel.app",
    },
  ],

  creator: "Aprizal Triansyah",

  publisher: "Aprizal Triansyah",

  robots: {
    index: true,
    follow: true,
  },

  alternates: {
    canonical: "https://klyra-case-study.vercel.app/",
  },

  openGraph: {
    title: "Klyra — Personal Finance App Case Study",
    description:
      "A UI/UX case study showcasing the design process of a personal finance application focused on budgeting, savings, and financial management.",
    url: "https://klyra-case-study.vercel.app",
    siteName: "Klyra",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Klyra UI/UX Case Study",
      },
    ],
    locale: "en_US",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "Klyra — Personal Finance App Case Study",
    description:
      "A UI/UX case study showcasing the design process of a personal finance application.",
    images: ["/og-image.png"],
  },
};

const schema = {
  "@context": "https://schema.org",

  "@graph": [
    {
      "@type": "WebSite",

      "@id": "https://klyra-case-study.vercel.app/#website",

      url: "https://klyra-case-study.vercel.app",

      name: "Klyra Case Study",

      description:
        "A UI/UX case study showcasing the end-to-end design process of a personal finance application.",

      inLanguage: "en",

      publisher: {
        "@id": "https://klyra-case-study.vercel.app/#person",
      },
    },

    {
      "@type": "Person",

      "@id": "https://klyra-case-study.vercel.app/#person",

      name: "Aprizal Triansyah",

      url: "https://klyra-case-study.vercel.app/",

      jobTitle: "UI/UX Designer",

      image:
        "https://klyra-case-study.vercel.app/og-image.png",

      knowsAbout: [
        "UI Design",
        "UX Design",
        "Mobile App Design",
        "Financial Technology",
        "Design System",
        "Wireframing",
        "Prototyping",
      ],
    },

    {
      "@type": "CreativeWork",

      "@id": "https://klyra-case-study.vercel.app/#project",

      name: "Klyra",

      headline: "Klyra — Personal Finance App UI/UX Case Study",

      description:
        "Klyra is a UI/UX case study of a personal finance application focused on budgeting, expense tracking, savings, and financial insights. The project documents the complete UX process from research to high-fidelity interface design.",

      author: {
        "@id": "https://klyra-case-study.vercel.app/#person",
      },

      creator: {
        "@id": "https://klyra-case-study.vercel.app/#person",
      },

      publisher: {
        "@id": "https://klyra-case-study.vercel.app/#person",
      },

      url: "https://klyra-case-study.vercel.app",

      image:
        "https://klyra-case-study.vercel.app/og-image.png",

      inLanguage: "en",

      genre: "UI/UX Case Study",

      keywords: [
        "UI Design",
        "UX Design",
        "Finance App",
        "Budgeting",
        "Expense Tracking",
        "Personal Finance",
        "Case Study",
      ],

      about: [
        {
          "@type": "Thing",
          name: "Personal Finance",
        },
        {
          "@type": "Thing",
          name: "Expense Tracking",
        },
        {
          "@type": "Thing",
          name: "Financial Management",
        },
      ],
    },
  ],
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        {/* Structured Data */}
        <Script
          id="structured-data"
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(schema),
          }}
        /> {children}</body>
    </html>
  );
}
