"use client";
import Image from "next/image";
import { FaGithub, FaLinkedin } from "react-icons/fa";

export default function MainCard() {
    return (
        <div className="glass-card relative p-6 md:p-12 flex flex-col-reverse md:flex-row items-center justify-between gap-8 md:gap-12 rounded-3xl w-full max-w-5xl mx-4 md:mx-auto">

            {/* Text Content & Buttons */}
            <div className="flex flex-col items-center md:items-start text-center md:text-left gap-4 flex-1 w-full">
                <h1 className="text-4xl md:text-5xl lg:text-7xl font-bold tracking-tight text-white mb-1">
                    Marcos Iannello
                </h1>
                <h2 className="text-xl md:text-2xl lg:text-4xl font-medium text-gradient">
                    Full Stack Developer
                </h2>

                <p className="text-gray-400 text-base md:text-lg max-w-lg mt-2 leading-relaxed">
                    I build modern, scalable software that feels fast, stays maintainable, and delivers real value.
                </p>

                <div className="flex flex-wrap justify-center md:justify-start items-center gap-4 md:gap-6 mt-6 w-full">
                    <button
                        className="p-3 md:p-4 cursor-pointer bg-white/10 hover:bg-white/20 text-white rounded-full transition-all duration-300 shadow-lg shadow-white/5 border border-white/10 hover:scale-110 hover:shadow-primary/50"
                        onClick={() => window.open("https://github.com/marcosIannello")}
                        aria-label="GitHub"
                    >
                        <FaGithub size={24} className="md:w-7 md:h-7" />
                    </button>
                    <button
                        className="p-3 md:p-4 cursor-pointer bg-white/10 hover:bg-white/20 text-white rounded-full transition-all duration-300 shadow-lg shadow-white/5 border border-white/10 hover:scale-110 hover:shadow-primary/50"
                        onClick={() => window.open("https://linkedin.com/in/marcosIannello")}
                        aria-label="LinkedIn"
                    >
                        <FaLinkedin size={24} className="md:w-7 md:h-7" />
                    </button>
                    <button
                        className="group relative px-6 py-3 md:px-8 md:py-4 bg-white/10 hover:bg-white/20 border border-white/10 rounded-full font-bold text-white transition-all duration-300 shadow-lg shadow-white/5 hover:scale-105 hover:shadow-primary/50"
                    >
                        <a
                            href="https://drive.google.com/uc?export=download&id=1E_qL0pLuJP5EucOwJVUufHIYX0PBRCdR"
                            target="_blank"
                            rel="noreferrer"
                            className="flex items-center gap-3"
                        >
                            <span className="text-sm md:text-base">Download CV</span>
                            <svg className="w-4 h-4 md:w-5 md:h-5 group-hover:translate-y-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" /></svg>
                        </a>
                    </button>
                </div>
            </div>

            {/* Profile Image */}
            <div className="relative group shrink-0">
                <div className="absolute -inset-1 rounded-full blur opacity-25 group-hover:opacity-75 transition duration-1000 group-hover:duration-200 bg-primary"></div>
                <Image
                    src="/MNI.jpg"
                    alt="Marcos Iannello"
                    width={256}
                    height={256}
                    className="relative rounded-full w-40 h-40 md:w-64 md:h-64 object-cover border-4 border-black/20 shadow-2xl transform transition-transform duration-500 group-hover:scale-105"
                    priority
                />
            </div>
        </div>
    )
}