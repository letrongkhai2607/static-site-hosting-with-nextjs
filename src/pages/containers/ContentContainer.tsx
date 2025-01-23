import React from "react";

const ContentContainer = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="container mx-auto px-4 max-w-[768px] bg-white p-4 rounded-md">
      {children}
    </div>
  );
};

export default ContentContainer;
