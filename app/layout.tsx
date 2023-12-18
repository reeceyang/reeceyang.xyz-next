import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Reece Yang",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html data-theme="retro" lang="en">
      <head>
        <link rel="stylesheet" href="https://use.typekit.net/baw1rzu.css" />
      </head>
      <body>
        <Header />
        <main className="container max-w-4xl m-auto px-4 overflow-clip">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
