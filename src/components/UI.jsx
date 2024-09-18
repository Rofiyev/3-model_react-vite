import React from "react";
import { atom, useAtom } from "jotai";

export const currentPageAtom = atom("intro");

const UI = () => {
  const [currentPage, setCurrentPage] = useAtom(currentPageAtom);

  return (
    <div className="fixed inset-0 pointer-events-none">
      <section
        className={`flex w-full h-full flex-col items-center justify-center duration-500 ${
          currentPage === "home" ? "" : "opacity-0"
        }`}
      >
        <div className="h-[66%]"></div>
        <button
          onClick={() => setCurrentPage("store")}
          className="pointer-events-auto py-4 px-8 bg-orange-400 text-white font-black rounded-full hover:bg-orange-500 transition"
        >
          ENTER
        </button>
      </section>
    </div>
  );
};

export default UI;
