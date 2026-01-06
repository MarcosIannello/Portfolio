export default function TopMenu() {
    return (
        <header className="fixed top-6 left-0 right-0 z-50 flex items-center justify-center pointer-events-none">
            <nav className="pointer-events-auto flex items-center justify-center px-2 py-2 bg-black/20 backdrop-blur-xl border border-white/10 rounded-full shadow-lg shadow-black/10 hover:border-white/20 transition-all duration-300">
                <div className="flex items-center gap-1">
                    <a href="#home" className="px-5 py-2 text-sm font-medium text-gray-300 hover:text-white hover:bg-white/10 rounded-full transition-all duration-300">Home</a>
                    <a href="#experience" className="px-5 py-2 text-sm font-medium text-gray-300 hover:text-white hover:bg-white/10 rounded-full transition-all duration-300">Experience</a>
                    <a href="#education" className="px-5 py-2 text-sm font-medium text-gray-300 hover:text-white hover:bg-white/10 rounded-full transition-all duration-300">Education</a>
                    <a href="#contact" className="px-5 py-2 text-sm font-medium text-gray-300 hover:text-white hover:bg-white/10 rounded-full transition-all duration-300">Contact</a>
                </div>
            </nav>
        </header>
    )
}