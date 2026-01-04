export default function TopMenu() {
    return (
        <header className="fixed top-0 left-0 right-0 z-50 bg-transparent shadow-sm h-10 flex items-center justify-center rounded-b-xl">
            <nav className="flex items-center justify-center">
                <div className="flex gap-4">
                    <a href="#home" className="hover:text-lg transition-all duration-300">Home</a>
                    <a href="#experience" className="hover:text-lg transition-all duration-300">Experience</a>
                    <a href="#certifications" className="hover:text-lg transition-all duration-300">Certifications</a>
                    <a href="#contact" className="hover:text-lg transition-all duration-300">Contact</a>
                </div>
            </nav>
        </header>
    )
}