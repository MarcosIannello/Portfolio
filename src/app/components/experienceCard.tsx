import Experience from "@/src/model/experience.model"

interface Props extends Experience { }

export default function ExperienceCard({ company, position, description, date, endDate, technologies }: Props) {
    return (
        <div className="flex flex-col items-center justify-between p-4 w-[700px] h-[500px] bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl">
            <h3 className="text-2xl font-bold text-transparent bg-clip-text bg-linear-to-r from-primary to-secondary">{position}</h3>
            <h4 className="text-xl font-bold">{company}</h4>
            <p className="text-sm w-full">{description}</p>
            <div className="flex gap-2 justify-between">
                <p className="text-sm">{date}</p>
                <span className="text-sm"> - </span>
                <p className="text-sm">{endDate}</p>
            </div>
            <div className="grid grid-cols-7 gap-2">
                {
                    technologies.map((tech, index) => (
                        <div
                            key={index}
                            className="bg-white/5 p-1 backdrop-blur-md border flex items-center justify-center text-center border-white/10 rounded-2xl hover:bg-white/10 transition-all transform duration-300 ease-in-out cursor-pointer ">
                            {tech}
                        </div>
                    ))
                }
            </div>
        </div>
    )
}