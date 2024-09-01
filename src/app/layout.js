import { Inter } from "next/font/google";
import "./globals.css";
import NavbarSimple from "./components/Navbar";
import Footer from "./components/Footer";
import { Analytics } from "@vercel/analytics/react";

export const metadata = {
  title: "Muratone | DJ Producer",
  description: "Bass house, house, techno and pop producer",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <NavbarSimple />
        {children}
        <Footer />
        <Analytics />
      </body>
    </html>
  );
}
