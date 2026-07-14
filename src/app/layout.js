import "./globals.css";

export const metadata = {
  title: "Klyra",
  description: "Klyra portfolio case study",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
