import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import AudioElements from "@/components/AudioElements";

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
      <body className="bg-base-200">
        <AudioElements />
        <div className="flex flex-col min-h-screen">
          <Header />
          <main className="container max-w-4xl m-auto px-4 overflow-clip flex-grow">
            {children}
          </main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
