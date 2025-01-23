import React, { useState } from "react";
import Intro from "./components/Intro";
import { useCounterStore } from "@/stores/useCountStore";

export default function Home() {
  const { count } = useCounterStore();
  const renderContent = () => {
    switch (count) {
      default:
        return <Intro />;
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
