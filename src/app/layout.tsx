import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ThemeToggleButton from "@/components/ThemeButton";
import App from "./App";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Scrap",
  description: "This is scrap website",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <App>
        <body className={inter.className}>
          <div className=" dark:bg-slate-950 bg-white dark:text-white text-black">
            <Navbar />
          </div>
          <div>
            <ThemeToggleButton />
          </div>
          {children}

          <div className="relative w-full flex items-center justify-center  dark:bg-slate-950 bg-white dark:text-white text-black">
            <Footer />
          </div>
        </body>
      </App>
    </html>
  );
}
