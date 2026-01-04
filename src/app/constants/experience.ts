import type Experience from "@/src/model/experience.model"

export const MyExperience: Experience[] = [
    {
        company: "CartaSur Cards S.A.U.",
        position: "Software Developer (Full Stack)",
        description:
            "Develop and maintain web/desktop applications and REST APIs, focusing on maintainability, refactors/migrations, and production stability. Implemented event-driven integrations and improvements across business modules, collaborating with cross-functional teams.",
        date: "Apr 2023",
        endDate: "Present",
        technologies: [
            "Angular",
            "TypeScript",
            "NgRx",
            "RxJS",
            "Electron",
            "NodeJS",
            "NextJS",
            ".NET",
            ".NET Core",
            "C#",
            "SQL Server",
            "EF",
            "MongoDB",
            "RabbitMQ",
            "MassTransit",
            "Git",
            "Scrum",
            "Jira",
        ],
    },
    {
        company: "Government of the City of Buenos Aires",
        position: "QA / Tester",
        description:
            "Worked as a tester supporting software delivery through functional testing and quality assurance practices, helping ensure stable releases and improving overall product reliability.",
        date: "2021",
        endDate: "2023",
        technologies: ["Python", "Selenium", "WebDriver", "Jira", "BDD", "Git", "Scrum"],
    },
];
