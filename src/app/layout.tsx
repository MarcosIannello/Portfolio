import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import TopMenu from "./components/topMenu";
import "./app.css";


const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Marcos Iannello Portfolio",
  description: "Portfolio of Marcos Iannello",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <div className="relative min-h-screen overflow-hidden bg-zinc-950">
          {/* luces */}
          <div className="pointer-events-none absolute -top-40 left-1/2 h-[520px] w-[520px] -translate-x-1/2 rounded-full bg-fuchsia-500/25 blur-[120px]" />
          <div className="pointer-events-none absolute -bottom-40 right-[-120px] h-[560px] w-[560px] rounded-full bg-indigo-500/25 blur-[140px]" />
          <div className="pointer-events-none absolute top-1/3 left-[-160px] h-[520px] w-[520px] rounded-full bg-cyan-400/15 blur-[140px]" />

          {/* capa "cristal" */}
          <div className="relative">
            <TopMenu />
            {children}
          </div>
        </div>
      </body>
    </html>
  );
}
