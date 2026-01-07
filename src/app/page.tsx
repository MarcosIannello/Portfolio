import CardContainer from "./components/cardContainer";
import ContactMe from "./components/contactMe";
import EducationCard from "./components/educationCard";
import ExperienceCard from "./components/experienceCard";
import MainCard from "./components/mainCard";
import NextPage from "./components/nextPage";
import { MyEducation } from "./constants/education";
import { MyExperience } from "./constants/experience";


export default function Home() {
  return (
    <main className="h-screen w-full overflow-y-scroll scroll-smooth">
      <section id="home" className="section-screen pt-24 md:pt-0">
        <MainCard />
        <div className="absolute bottom-10 animate-bounce">
          <NextPage name="Experience" />
        </div>
      </section>
      <section id="experience" className="section-screen gap-8 md:gap-52 pt-20 md:pt-0">
        <h2 className="sr-only">Experience</h2>
        <div className="flex justify-center items-center w-full px-4">
          <CardContainer className="flex flex-col md:flex-row gap-6 md:gap-10 w-full justify-center items-center">
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
        <div className="md:absolute bottom-10 mt-8 md:mt-0">
          <NextPage name="Education" />
        </div>
      </section>
      <section id="education" className="section-screen">
        <h2 className="sr-only">Education</h2>
        <div className="w-full max-w-7xl md:max-h-[80vh] md:overflow-y-auto p-4 md:p-10 scrollbar-hide">
          <CardContainer className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-10">
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
      <section id="contact" className="section-screen p-4" >
        <ContactMe />
      </section>
    </main>
  );
}
