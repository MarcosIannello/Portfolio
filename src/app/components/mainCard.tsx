"use client";
import Image from "next/image";
import { FaGithub, FaLinkedin } from "react-icons/fa";

export default function MainCard() {
    return (
        <div className="relative bg-white/5 backdrop-blur-xl border border-white/10 p-12 flex flex-col-reverse md:flex-row items-center justify-between gap-12 rounded-3xl shadow-2xl shadow-black/20 max-w-5xl mx-auto">

            {/* Text Content & Buttons */}
            <div className="flex flex-col items-center md:items-start text-center md:text-left gap-4 flex-1">
                <h1 className="text-5xl md:text-7xl font-bold tracking-tight text-white mb-1">
                    Marcos Iannello
                </h1>
                <h2 className="text-2xl md:text-4xl font-medium text-transparent bg-clip-text bg-gradient-to-r from-primary via-secondary to-primary bg-300% animate-gradient">
                    Full Stack Developer
                </h2>

                <p className="text-gray-400 text-lg max-w-lg mt-2 leading-relaxed">
                    I build modern, scalable software that feels fast, stays maintainable, and delivers real value.
                </p>

                <div className="flex items-center gap-6 mt-6">
                    <button
                        className="p-4 cursor-pointer bg-white/10 hover:bg-white/20 text-white rounded-full transition-all duration-300 shadow-lg shadow-white/5 border border-white/10 hover:scale-110 hover:shadow-primary/50"
                        onClick={() => window.open("https://github.com/marcosIannello")}
                        aria-label="GitHub"
                    >
                        <FaGithub size={28} />
                    </button>
                    <button
                        className="p-4 cursor-pointer bg-white/10 hover:bg-white/20 text-white rounded-full transition-all duration-300 shadow-lg shadow-white/5 border border-white/10 hover:scale-110 hover:shadow-primary/50"
                        onClick={() => window.open("https://linkedin.com/in/marcosIannello")}
                        aria-label="LinkedIn"
                    >
                        <FaLinkedin size={28} />
                    </button>
                    <button
                        className="group relative px-8 py-4 bg-white/10 hover:bg-white/20 border border-white/10 rounded-full font-bold text-white transition-all duration-300 shadow-lg shadow-white/5 hover:scale-105 hover:shadow-primary/50"
                    >
                        <a
                            href="https://drive.google.com/uc?export=download&id=1E_qL0pLuJP5EucOwJVUufHIYX0PBRCdR"
                            target="_blank"
                            rel="noreferrer"
                            className="flex items-center gap-3"
                        >
                            <span>Download CV</span>
                            <svg className="w-5 h-5 group-hover:translate-y-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" /></svg>
                        </a>
                    </button>
                </div>
            </div>

            {/* Profile Image */}
            <div className="relative group shrink-0">
                <div className="absolute -inset-1 rounded-full blur opacity-25 group-hover:opacity-75 transition duration-1000 group-hover:duration-200"></div>
                <Image
                    src="/MNI.jpg"
                    alt="Marcos Iannello"
                    width={256}
                    height={256}
                    className="relative rounded-full w-48 h-48 md:w-64 md:h-64 object-cover border-4 border-black/20 shadow-2xl transform transition-transform duration-500 group-hover:scale-105"
                    priority
                />
            </div>
        </div>
    )
}