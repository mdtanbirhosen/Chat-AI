import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "CHAT.AI",
  description: "Generated by create next app",
  icons: {
    icon: "/logo.png"
  }

};

export default function RootLayout({ children }) {

  return (
    <html lang="en" data-theme="light">
      <head>
        <link rel="icon" href="/logo.png" />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-[#F6F0F0]`}
      >
        <header>
          <Navbar></Navbar>
        </header>
        <main>
          {children}
        </main>
      </body>
    </html>
  );
}
