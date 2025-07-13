import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Theme, ThemePanel } from "@radix-ui/themes";
import "@radix-ui/themes/styles.css";
import SessionWrapper from "./components/SessionWrapper";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import NavbarSpacer from "./components/NavbarSpacer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "CopyMint",
  description: "AI content generator for solopreneurs and small businesses",
  icons: {
    icon: "/icon2.png",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <SessionWrapper>
          <Navbar />
          <Theme appearance="dark" accentColor="orange" grayColor="sage">
            <main className="transition-colors">{children}</main>
            {/* <ThemePanel /> */}
          </Theme>
          <Footer />
        </SessionWrapper>
      </body>
    </html>
  );
}
