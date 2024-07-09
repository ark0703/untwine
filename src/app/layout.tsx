import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import "./globals.css";
import Header from "./components/header";
import Footer from "./components/footer";

const montserrat = Montserrat({ weight: ["400", "600", "700"], subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Life Talk | Holistic Wellness",
  description: "We will put it later",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
      </head>
      <body className={montserrat.className}>
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
