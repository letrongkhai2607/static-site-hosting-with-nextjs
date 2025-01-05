import React from "react";
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
          <div className="container mx-auto px-4 max-w-[768px] bg-white opacity-50 p-4 rounded-md">
            <p className="text-lg">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quaerat
              voluptatibus temporibus perspiciatis ipsum nihil libero molestias
              excepturi distinctio architecto repudiandae! Voluptate sint magni
              magnam aliquam ullam deleniti atque? Quisquam, impedit! Lorem
              ipsum dolor sit, amet consectetur adipisicing elit. Quaerat
              voluptatibus temporibus perspiciatis ipsum nihil libero molestias
              excepturi distinctio architecto repudiandae.
            </p>
          </div>
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
