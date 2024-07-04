import type { Metadata } from "next";
import { Playfair_Display, Archivo_Narrow, Open_Sans } from "next/font/google";
import "./globals.css";
import Header from "./components/header";
import Footer from "./components/footer";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const playfairDisplay = Playfair_Display({ weight: "600", subsets: ["latin"] });
const archivoNarrow = Archivo_Narrow({ weight: "700", subsets: ["latin"] });
const openSans = Open_Sans({ weight: "400", subsets: ["latin"] });

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
      <body
        className={`${playfairDisplay.className} ${archivoNarrow.className} ${openSans.className}  `}
      >
        <Header />
        <main>{children}</main>

        <Footer />
      </body>
    </html>
  );
}
