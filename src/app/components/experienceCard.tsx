import Experience from "@/src/model/experience.model"

interface Props extends Experience { }

export default function ExperienceCard({ company, position, description, date, endDate, technologies }: Props) {
    return (
        <div className="flex flex-col items-center justify-between p-6 w-full max-w-2xl min-h-[400px] md:h-[500px] glass-card rounded-2xl transition-all duration-300 hover:border-white/20">
            <div className="flex flex-col items-center w-full gap-2 text-center">
                <h3 className="text-xl md:text-2xl font-bold bg-clip-text text-transparent bg-linear-to-r from-primary to-secondary">{position}</h3>
                <h4 className="text-lg md:text-xl font-bold text-white/90">{company}</h4>
            </div>
            
            <p className="text-sm md:text-base w-full text-gray-300 leading-relaxed text-balance text-center">{description}</p>
            
            <div className="flex gap-2 justify-center w-full text-gray-400 font-mono text-xs md:text-sm">
                <p>{date}</p>
                <span>-</span>
                <p>{endDate}</p>
            </div>
            
            <div className="flex flex-wrap justify-center gap-2 w-full">
                {
                    technologies.map((tech, index) => (
                        <div
                            key={index}
                            className="bg-white/5 px-3 py-1 backdrop-blur-md border border-white/10 rounded-full text-xs md:text-sm text-gray-300 hover:bg-white/10 hover:text-white transition-all transform duration-300 cursor-default">
                            {tech}
                        </div>
                    ))
                }
            </div>
        </div>
    )
}