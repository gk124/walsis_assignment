import React from "react";
import { BsPlusLg } from "react-icons/bs";
import { FaSave } from "react-icons/fa";
import { FaSearch } from "react-icons/fa";

const Sidebar = () => {
  return (
    <div className="flex lg:flex-col md:flex-row">
      <div className="border border-red-700 px-20 py-14 m-2 rounded"></div>
      <div className="border border-black px-16 py-10 m-2 rounded">
        <div className="flex items-center justify-center">
          <BsPlusLg className="text-4xl" />
        </div>
      </div>
      <div className="flex flex-col mt-auto px-2">
        <input
          type="text"
          placeholder="🔍 Search library"
          className="input input-bordered mb-3 sm:mb-0 sm:mr-3 relative pl-8 m-2"
        />
        <button className="btn btn-wide mb-3 bg-purple-500">
          <FaSave /> Add Question
        </button>
      </div>
    </div>
  );
};

export default Sidebar;
