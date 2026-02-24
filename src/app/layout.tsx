import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Science Night",
  description: "La festa di fine anno accademico dei dipartimenti di scienze e ingegneria all'università di Verona",
  openGraph: {
    type: "website",
    url: "https://sciencenight.it",
    title: "Science Night",
    description: "La festa di fine anno accademico dei dipartimenti di scienze e ingegneria all'università di Verona",
    siteName: "Science Night",
    images: [{url: "https://sciencenight.it/img/logobig.webp"}],
  },
  icons: {
    icon: "/img/logo.png"
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
    <head>
      <link rel={"icon"} type={"image/png"} href={"/img/logo.png"} />
      <script src={"/js/smooth-scroll.js"}></script>
    </head>
    <body className={`${geistSans.variable} ${geistMono.variable}`}>
        {children}
      </body>
    </html>
  );
}
