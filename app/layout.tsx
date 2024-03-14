import type { Metadata } from "next";
import { Raleway } from "next/font/google"
import "./globals.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Newslatter from "./components/Newslatter";
import ActiclesProvider from "./Providers/ActiclesProvider";

const raleway = Raleway({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Bloggify",
  description: "Get your self updated with the latest news and articles",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <ActiclesProvider>
        <body className={raleway.className}>
          <Navbar />
          {children}
          <Newslatter />
          <Footer />
        </body>
      </ActiclesProvider>
    </html>
  );
}
