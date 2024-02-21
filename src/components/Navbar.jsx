import React from "react";
import { IoChevronBackOutline } from "react-icons/io5";
import { FaSave,FaPlay } from "react-icons/fa";

const Navbar = () => {
  return (
    <div className="flex flex-row p-3">
      <div className="border border-black rounded-md bg-gray items-center justify-center cursor-pointer  w-10 h-10">
        <IoChevronBackOutline className="w-6 h-6" style={{ margin: 'auto' }}/>
      </div>
      <span
        style={{ fontFamily: "'Lobster', cursive" }}
        className="p-2 font-extrabold"
      >
        QUIZARD
      </span>

      <div className="flex flex-col sm:flex-row sm:items-center ml-auto">
        <button className="btn mr-2 mb-3 sm:mb-0">
          <FaPlay /> Preview
        </button>
        <button className="btn mb-3 sm:mb-0 bg-black text-white hover:text-black">
          <FaSave /> Publish
        </button>
      </div>
    </div>
  );
};

export default Navbar;
