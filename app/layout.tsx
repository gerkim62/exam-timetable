import type { Metadata } from "next";
import { Open_Sans } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";

const openSansFont = Open_Sans({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${openSansFont.className} bg-gradient-to-br  from-purple-400 to-pink-600 text-white`}
      >
        <Navbar items={
          [
            { href: "/", label: "Home" },
            { href: "/about", label: "About" },
            { href: "/contact", label: "Contact" },
          ]
        }/>
        {children}
      </body>
    </html>
  );
}
