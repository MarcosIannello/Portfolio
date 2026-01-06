import Image from "next/image";
import MainCard from "./components/mainCard";
import NextPage from "./components/nextPage";
import CardContainer from "./components/cardContainer";
import ExperienceCard from "./components/experienceCard";
import { MyExperience } from "./constants/experience";
import { MyEducation } from "./constants/education";
import EducationCard from "./components/educationCard";
import ContactMe from "./components/contactMe";


export default function Home() {
  return (
    <main className="h-screen w-full snap-y snap-mandatory overflow-y-scroll scroll-smooth">
      <section id="home" className="relative flex flex-col items-center justify-center h-screen w-full">
        <MainCard />
        <div className="absolute bottom-10">
          <NextPage name="Experience" />
        </div>
      </section>
      <section id="experience" className="relative flex flex-col gap-52 items-center justify-center h-screen w-full">
        <h2 className="sr-only">Experience</h2>
        <div className="flex justify-center items-center">
          <CardContainer className="flex gap-10">
            {MyExperience.map((job, index) => (
              <ExperienceCard
                key={index}
                company={job.company}
                position={job.position}
                description={job.description}
                date={job.date}
                endDate={job.endDate}
                technologies={job.technologies}
              />
            ))}
          </CardContainer>
        </div>
        <div className="absolute bottom-10">
          <NextPage name="Education" />
        </div>
      </section>
      <section id="education" className="relative flex flex-col items-center justify-center h-screen w-full">
        <h2 className="sr-only">Education</h2>
        <div className="w-full max-w-7xl max-h-[80vh] overflow-y-auto p-10">
          <CardContainer className="grid grid-cols-1 md:grid-cols-2 gap-10">
            {
              MyEducation.map((education, index) => (
                <EducationCard
                  key={index}
                  program={education.program}
                  institution={education.institution}
                  location={education.location}
                  startDate={education.startDate}
                  endDate={education.endDate}
                  status={education.status}
                  link={education.link}
                  image={education.image}
                  gpa={education.gpa}
                  gpaScale={education.gpaScale}
                  gpaIncludesFails={education.gpaIncludesFails}
                />
              ))
            }
          </CardContainer>
        </div>
        <div className="absolute bottom-10">

          <NextPage name="Contact" />
        </div>
      </section>
      <section id="contact" className="flex flex-col gap-52 items-center justify-center h-screen w-full p-4" >
        <ContactMe />
      </section>
    </main>
  );
}
