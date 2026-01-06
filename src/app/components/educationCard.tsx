import Education from "@/src/model/education.model";

interface Props extends Education { }

export default function EducationCard({ program, institution, location, startDate, endDate, status, link, image, gpa, gpaScale, gpaIncludesFails }: Props) {
    return (
        <div className="relative group flex flex-col items-center justify-between p-4 w-full bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl overflow-hidden hover:shadow-lg hover:shadow-primary/20 transition-all duration-300">
            <h3 className="text-2xl font-bold text-transparent bg-clip-text bg-linear-to-r from-primary to-secondary">{program}</h3>
            <h4 className="text-xl font-bold">{institution}</h4>
            {gpa && (
                <p className="text-sm w-full text-center">GPA: {gpa}{gpaScale ? ` / ${gpaScale}` : ''}</p>
            )}
            <div className="flex gap-2 justify-between">
                <p className="text-sm">{startDate}</p>
                <span className="text-sm"> - </span>
                <p className="text-sm">{endDate}</p>
            </div>

            {link && (
                <a
                    href={link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="absolute backdrop-blur-3xl inset-0 flex items-center justify-center bg-black/60  opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl z-20"
                >
                    <span className="text-white font-semibold text-lg tracking-wide hover:scale-105 transition-transform">
                        Click para ver certificado
                    </span>
                </a>
            )}
        </div>
    )
}