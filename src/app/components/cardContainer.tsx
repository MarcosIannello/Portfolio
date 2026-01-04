"use client";
import Experience from "@/src/model/experience.model"
import { MyExperience } from "../constants/experience"
import ExperienceCard from "./experienceCard";

export default function CardContainer() {

    const ExperienceCards: Experience[] = MyExperience;

    return (
        <div className="flex justify-center items-center gap-10 p-10">
            {
                ExperienceCards.map((job, index) => (
                    <ExperienceCard
                        key={index}
                        company={job.company}
                        position={job.position}
                        description={job.description}
                        date={job.date}
                        endDate={job.endDate}
                        technologies={job.technologies}
                    />
                ))
            }
        </div>
    )
}