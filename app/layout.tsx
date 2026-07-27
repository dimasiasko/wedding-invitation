import type { Metadata } from "next";
import { Geist, Geist_Mono, Qwitcher_Grypen, Montserrat } from "next/font/google";
import localFont from "next/font/local";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});


const slight = localFont({
  src: "../public/fonts/Slight.otf",
  variable: "--font-slight",
  display: "swap",
});

const qwitcher = Qwitcher_Grypen({
  variable: "--font-qwitcher",
  subsets: ["latin"],
  weight: "400"
});

const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
  weight: "400"
});
const laluxes = localFont({
  src: "../public/fonts/LaLuxes.otf",
  variable: "--font-laluxes",
});

export const metadata: Metadata = {
  title: "Дмитро та Ірина | Wedding Invitation",
  description: "Запрошуємо вас розділити з нами наш особливий день - день нашого весілля. Для нас дуже важливо, щоб поруч були люди, які займають особливе місце в нашому серці.",
  openGraph: {
    title: 'Дмитро та Ірина | Wedding Invitation',
    description: 'Запрошуємо вас розділити з нами наш особливий день - день нашого весілля.',
    images: [
      {
        url: '/opengraph.jpg',
        width: 1200,
        height: 630,
        alt: 'Wedding Invitation',
      },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} ${slight.variable} ${qwitcher.variable} ${montserrat.variable} ${laluxes.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col ">{children}</body>
    </html>
  );
}
