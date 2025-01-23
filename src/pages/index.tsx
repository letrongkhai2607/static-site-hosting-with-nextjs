import React, { useState } from "react";
import Intro from "./components/Intro";
import About from "./components/About";
export default function Home() {
  const [step, setStep] = useState(1);
  const renderContent = () => {
    switch (step) {
      case 1:
        return <Intro setStep={() => {}} />;

      default:
        return (
          <React.Fragment>
            <div></div>
          </React.Fragment>
        );
    }
  };
  return (
    <>
      <meta charSet="UTF-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <title>Portfolio</title>

      <div>{renderContent()}</div>
    </>
  );
}
