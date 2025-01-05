import React from "react";

const About = ({ setStep }: { setStep: any }) => {
  return (
    <div className="bg-main-background-image w-full h-screen bg-cover bg-no-repeat bg-center flex justify-center items-center">
      <section id="Intro" className="py-16 absolute p-4">
        <h2 className="text-4xl font-bold mb-6 text-center">About me</h2>
        <div className="flex flex-row gap-4 items-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            onClick={() => setStep(1)}
            className="size-6 cursor-pointer"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M15.75 19.5 8.25 12l7.5-7.5"
            />
          </svg>

          <div className="container mx-auto px-4 max-w-[768px] bg-white opacity-50 p-4 rounded-md">
            <p className="text-lg">
              I'm a passionate React.js developer transitioning into the DevOps
              field. With 4 years of frontend experience, I'm now diving into
              AWS and containerization technologies to broaden my skillset.
            </p>
          </div>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            onClick={() => setStep(3)}
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

export default About;
