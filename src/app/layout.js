import "./globals.css";

export const metadata = {
  title: "Klyra — Personal Finance App Case Study",
  description:
    "A UI/UX case study showcasing the end-to-end design process of a personal finance application focused on budgeting, savings, expense tracking, and financial insights.",

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

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
