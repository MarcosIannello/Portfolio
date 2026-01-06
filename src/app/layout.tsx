import type { Metadata } from "next";
import { Geist, Geist_Mono, Ubuntu } from "next/font/google"; // Import Ubuntu
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

const ubuntu = Ubuntu({
  variable: "--font-ubuntu",
  weight: ["300", "400", "500", "700"],
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "Marcos Iannello | Full Stack Developer",
    template: "%s | Marcos Iannello",
  },
  description: "Portfolio of Marcos Iannello, a Full Stack Developer specializing in building modern, scalable web applications.",
  keywords: ["Full Stack Developer", "Web Development", "React", "Next.js", "TypeScript", "Software Engineer", "Portfolio"],
  authors: [{ name: "Marcos Iannello" }],
  creator: "Marcos Iannello",
  metadataBase: new URL("https://marcosiannelloportfolio.vercel.app"),
  openGraph: {
    title: "Marcos Iannello | Full Stack Developer",
    description: "Portfolio of Marcos Iannello, a Full Stack Developer specializing in building modern, scalable web applications.",
    url: "https://marcosiannelloportfolio.vercel.app",
    siteName: "Marcos Iannello Portfolio",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "/MNI.jpg",
        width: 800,
        height: 600,
        alt: "Marcos Iannello Portfolio",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Marcos Iannello | Full Stack Developer",
    description: "Portfolio of Marcos Iannello, a Full Stack Developer specializing in building modern, scalable web applications.",
    images: ["/MNI.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${geistSans.variable} ${geistMono.variable} ${ubuntu.variable}`}>
      <body className="antialiased">
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
