"use client";
import Image from "next/image";
import { FaGithub, FaLinkedin } from "react-icons/fa";

export default function MainCard() {
    return (
        <div className="bg-white/5 backdrop-blur-md border border-white/10 min-h-72 p-6 flex flex-col items-center justify-center gap-4 rounded-xl shadow-lg shadow-primary">
            <div className="flex flex-row-reverse gap-4">
                <Image
                    src="/MNI.jpg"
                    alt="Marcos Iannello"
                    width={128}
                    height={128}
                    className="rounded-full w-32 h-32 object-cover shadow shadow-white"
                    priority
                />
                <div className="flex flex-col items-center justify-center">
                    <h1 className="text-5xl font-bold text-transparent bg-clip-text bg-linear-to-r from-primary to-secondary">Marcos Iannello</h1>
                    <h2 className="text-4xl font-bold">Full Stack Developer</h2>

                    <p className="">
                        I build modern, scalable software that feels fast, stays maintainable, and delivers real value.
                    </p>
                </div>
            </div>
            <div className="flex gap-12">
                <button
                    className="button-hero"
                    onClick={() => window.open("https://github.com/marcosIannello")}
                >
                    <FaGithub />
                </button>
                <button
                    className="button-hero"
                    onClick={() => window.open("https://linkedin.com/in/marcosIannello")}
                >
                    <FaLinkedin />
                </button>
                <button
                    className="button-hero"


                >
                    <a
                        href="https://drive.google.com/uc?export=download&id=1E_qL0pLuJP5EucOwJVUufHIYX0PBRCdR"
                        target="_blank"
                        rel="noreferrer"
                    >
                        CV
                    </a>
                </button>
            </div>
        </div>
    )
}