import React from "react";

interface HelloProps {}

export const Hello: React.FC<HelloProps> = ({}) => {
  return (
    <h1 className="text-2xl font-bold">
      <span>👋</span> Hello!
    </h1>
  );
};
