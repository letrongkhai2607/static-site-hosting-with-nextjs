import { useCounterStore } from "@/stores/useCountStore";
import { ChildrenNode } from "@/types/element";
import React from "react";

const useCouter = () => {
  const { count, increment, decrement } = useCounterStore();
  console.log("count = ", count);
  const IncreaseButton = (children: ChildrenNode = <p>Increase</p>) => {
    return (
      <button onClick={() => increment()}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="size-6 cursor-pointer"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="m8.25 4.5 7.5 7.5-7.5 7.5"
          />
        </svg>
      </button>
    );
  };
  const DecreaseButton = (children: ChildrenNode = <p>Decrease</p>) => {
    return (
      <button onClick={() => decrement()}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="size-6 cursor-pointer"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M15.75 19.5 8.25 12l7.5-7.5"
          />
        </svg>
      </button>
    );
  };

  return {
    count: count,
    IncreaseButton: IncreaseButton(),
    DecreaseButton: DecreaseButton(),
  };
};

export default useCouter;
