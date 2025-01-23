import React from "react";
import ContentContainer from "../containers/ContentContainer";
type IntroProps = {
  setStep: (step: number) => void;
};
const Intro: React.FC<IntroProps> = ({ setStep }) => {
  return (
    <div className="bg-main-background-image w-full h-screen bg-cover bg-no-repeat bg-center flex justify-center items-center">
      <section id="Intro" className="py-16 absolute p-4">
        <h2 className="text-4xl font-bold mb-6 text-center">Introdution</h2>
        <div className="flex  md:flex-row gap-4 items-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="size-6 cursor-pointer pointer-events-none"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M15.75 19.5 8.25 12l7.5-7.5"
            />
          </svg>
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
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            onClick={() => setStep(2)}
            className="size-6 cursor-pointer"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="m8.25 4.5 7.5 7.5-7.5 7.5"
            />
          </svg>
        </div>
      </section>
    </div>
  );
};

export default Intro;
