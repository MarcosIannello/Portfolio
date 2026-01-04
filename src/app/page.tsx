import Image from "next/image";
import MainCard from "./components/mainCard";
import NextPage from "./components/nextPage";
import CardContainer from "./components/cardContainer";


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
        <div className="flex justify-center items-center">
          <CardContainer />
        </div>
        <div className="absolute bottom-10">
          <NextPage name="Certifications" />
        </div>
      </section>
      <section id="certifications" className="flex flex-col gap-52 items-center justify-center h-screen w-full">

      </section>
      <section id="contact" className="flex flex-col gap-52 items-center justify-center h-screen w-full">
        Contact
        {/* Footer */}
      </section>
    </main>
  );
}
