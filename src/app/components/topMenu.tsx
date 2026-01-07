import { FaBriefcase, FaEnvelope, FaGraduationCap, FaHome } from "react-icons/fa";

export default function TopMenu() {
    return (
        <header className="fixed top-6 left-0 right-0 z-50 flex items-center justify-center pointer-events-none">
            <nav className="pointer-events-auto flex items-center justify-center px-2 py-2 bg-black/20 backdrop-blur-xl border border-white/10 rounded-full shadow-lg shadow-black/10 hover:border-white/20 transition-all duration-300">
                <div className="flex items-center gap-1">
                    <a href="#home" className="px-3 md:px-5 py-2 text-sm font-medium text-gray-300 hover:text-white hover:bg-white/10 rounded-full transition-all duration-300" aria-label="Home">
                        <span className="hidden md:block">Home</span>
                        <FaHome className="block md:hidden text-lg" />
                    </a>
                    <a href="#experience" className="px-3 md:px-5 py-2 text-sm font-medium text-gray-300 hover:text-white hover:bg-white/10 rounded-full transition-all duration-300" aria-label="Experience">
                        <span className="hidden md:block">Experience</span>
                        <FaBriefcase className="block md:hidden text-lg" />
                    </a>
                    <a href="#education" className="px-3 md:px-5 py-2 text-sm font-medium text-gray-300 hover:text-white hover:bg-white/10 rounded-full transition-all duration-300" aria-label="Education">
                         <span className="hidden md:block">Education</span>
                         <FaGraduationCap className="block md:hidden text-lg" />
                    </a>
                    <a href="#contact" className="px-3 md:px-5 py-2 text-sm font-medium text-gray-300 hover:text-white hover:bg-white/10 rounded-full transition-all duration-300" aria-label="Contact">
                        <span className="hidden md:block">Contact</span>
                        <FaEnvelope className="block md:hidden text-lg" />
                    </a>
                </div>
            </nav>
        </header>
    )
}