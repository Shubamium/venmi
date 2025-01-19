import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.scss";
import { Lilita_One } from "next/font/google";
import { Outfit } from "next/font/google";
import Navigation from "./components/navigation/Navigation";

const lilita = Lilita_One({
  weight: ["400"],
  subsets: ["latin"],
  variable: "--fontH",
});
const outfit = Outfit({
  weight: ["100", "200", "300", "400", "500", "600", "800"],
  subsets: ["latin"],
  variable: "--fontP",
});
export const metadata: Metadata = {
  title: "-] Venmi ₍ᐢ. .ᐢ₎ ",
  description: "Hello",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${lilita.variable} ${outfit.variable}`}>
        <Navigation />
        {children}
      </body>
    </html>
  );
}
