import React from "react";
import { Hello } from "$/components/Hello";

interface AppProps {}

export const App: React.FC<AppProps> = () => {
  return (
    <div className="bg-gray-300 min-h-screen flex p-10 sm:px-[15%] lg:px-[20%] 2xl:px-[25%]">
      <div className="bg-white rounded shadow-md flex flex-col flex-1 space-y-4 justify-center items-center text-center">
        <Hello />
        <p>Start building with React, TypeScript, TailwindCSS, and Vite!</p>
      </div>
    </div>
  );
};
