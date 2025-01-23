import React from "react";
import ContentContainer from "../containers/ContentContainer";
import useCouter from "@/hooks/useCouter";
type IntroProps = {};
const Intro: React.FC<IntroProps> = () => {
  const { IncreaseButton, DecreaseButton } = useCouter();
  return (
    <div className="bg-main-background-image w-full h-screen bg-cover bg-no-repeat bg-center flex justify-center items-center">
      <section id="Intro" className="py-16 absolute p-4">
        <h2 className="text-4xl font-bold mb-6 text-center">Introdution</h2>
        <div className="flex  md:flex-row gap-4 items-center">
          {DecreaseButton}
          <ContentContainer>
            <p className="text-lg">
              Experienced Software Developer with over 4 years of hands-on
              expertise in developing scalable and performant web applications.
              Skilled in defining project architectures, establishing coding
              standards, mentoring junior developers. Adept at collaborating
              with cross-functional teams to deliver user-centric software
              solutions. Proficient in modern JavaScript frameworks like React,
              Redux, Nodejs, Nestjs, and have experience with Docker, and
              RESTful services.
            </p>
          </ContentContainer>
          {IncreaseButton}
        </div>
      </section>
    </div>
  );
};

export default Intro;
