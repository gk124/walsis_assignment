import React from "react";
import { FaRegLightbulb } from "react-icons/fa";
import Questions from "./Questions";

const Home = () => {
  return (
    <div className="flex flex-col sm:pb-0">
      <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center p-3">
        <div className="font-bold mb-3 sm:mb-0 sm:mr-4">#Quiz Name</div>
        <div className="flex flex-col sm:flex-row sm:items-center">
          <input
            type="text"
            placeholder="Add a tag"
            className="input input-bordered mb-3 sm:mb-0 sm:mr-3"
          />
          <button className="btn mb-3 sm:mb-0">
            <FaRegLightbulb /> Add explanation
          </button>
        </div>
      </div>

      <div className="flex flex-col sm:flex-row px-5">
        <div className="dropdown dropdown-hover mb-3 sm:mb-0 sm:mr-4">
          <div tabIndex={0} role="button" className="btn mx-1">
            Option Type
          </div>
          <ul
            tabIndex={0}
            className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52"
          >
            <li>
              <a>Single Select</a>
            </li>
            <li>
              <a>Multiple Select</a>
            </li>
          </ul>
        </div>

        <div className="ml-auto">
          <div className="dropdown dropdown-hover mb-3 sm:mb-0 sm:mr-4">
            <div tabIndex={0} role="button" className="btn mx-1">
              Points
            </div>
            <ul
              tabIndex={0}
              className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52"
            >
              <li>
                <a>4 points</a>
              </li>
              <li>
                <a>6 points</a>
              </li>
            </ul>
          </div>

          <div className="dropdown dropdown-hover mb-3 sm:mb-0 sm:mr-4">
            <div tabIndex={0} role="button" className="btn mx-1">
              Time
            </div>
            <ul
              tabIndex={0}
              className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52"
            >
              <li>
                <a>60 seconds</a>
              </li>
              <li>
                <a>70 seconds</a>
              </li>
            </ul>
          </div>

          <div className="dropdown dropdown-hover">
            <div tabIndex={0} role="button" className="btn mx-1">
              Difficulty
            </div>
            <ul
              tabIndex={0}
              className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52"
            >
              <li>
                <a>Easy</a>
              </li>
              <li>
                <a>Medium</a>
              </li>
              <li>
                <a>Hard</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="px-16"><Questions /></div>
      
    </div>
  );
};

export default Home;
