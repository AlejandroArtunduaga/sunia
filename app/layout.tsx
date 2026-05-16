import type { Metadata } from "next";
import { Open_Sans } from "next/font/google";
import "./globals.css";

const openSans = Open_Sans({
  subsets: ["latin"],
  weight: ["400", "600", "700"],
  variable: "--font-open-sans",
});

export const metadata: Metadata = {
  title: "MHEnergy — Energía Solar para Colombia",
  description:
    "Generación, almacenamiento y gestión inteligente de energía solar. Paneles solares, baterías, cargadores EV y monitoreo IA.",
  icons: {
    icon: "/favicon.png",
  },
   
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="es" className={`${openSans.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
