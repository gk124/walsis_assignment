import {React,useEffect} from "react";
import { BsPlusLg } from "react-icons/bs";
import { FaRegImage } from "react-icons/fa";
import { GiCheckMark } from "react-icons/gi";

const Questions = () => {
  return (
    <div className="flex justify-center items-center h-full">
      <div className="sm:px-10 md:px-20 lg:px-30 py-5">
        <div className="relative">
          <div className="bg-fuchsia-900 rounded-md p-3 text-white">
            <div className="border border-white rounded-md p-3">
              <div className="flex flex-row gap-2 justify-start items-center">
                <b>B</b> <b>U</b> <b>I</b>
                <label htmlFor="image-input" className="cursor-pointer">
                  <FaRegImage />
                </label>
                <input type="file" id="image-input" className="hidden" />
              </div>
              <div className="pt-3">
                <textarea
                  placeholder="Enter your question here..."
                  className="textarea peer h-full min-h-[100px] resize-none rounded-md input w-full bg-fuchsia-900 text-white"
                ></textarea>
              </div>
            </div>
            <div
              style={{ height: "45vh" }}
              className="p-3 flex flex-auto relative overflow-auto"
            >
              <div className="bg-yellow-500 rounded-md p-3 mx-2">
                <div className="flex flex-row gap-2 justify-start items-center">
                  <b>B</b> <b>U</b> <b>I</b>
                  <label htmlFor="image-input" className="cursor-pointer">
                    <FaRegImage />
                  </label>
                  <input type="file" id="image-input" className="hidden" />
                  <div className=" rounded-full bg-gray-500 p-1 ml-auto cursor-pointer">
                    <GiCheckMark className="text-white w-6 h-6 tg" />
                  </div>
                </div>
                <div className="pt-3">
                  <textarea
                    placeholder="Enter your option here..."
                    className="textarea peer h-full min-h-[100px] resize-none rounded-md input w-full bg-yellow-500 text-white"
                    style={{ paddingBottom: "23vh" }}
                  ></textarea>
                </div>
              </div>
              <div className="bg-green-500 rounded-md p-3 mx-2">
                <div className="flex flex-row gap-2 justify-start items-center">
                  <b>B</b> <b>U</b> <b>I</b>
                  <label htmlFor="image-input" className="cursor-pointer">
                    <FaRegImage />
                  </label>
                  <input type="file" id="image-input" className="hidden" />
                  <div className="rounded-full bg-gray-500 p-1 ml-auto cursor-pointer">
                    <GiCheckMark className="text-white w-6 h-6" />
                  </div>
                </div>
                <div className="pt-3">
                  <textarea
                    placeholder="Enter your option here..."
                    className="textarea peer h-full min-h-[100px] resize-none rounded-md input w-full bg-green-500 text-white"
                    style={{ paddingBottom: "23vh", color: "white" }}
                  ></textarea>
                </div>
              </div>
              <div className="bg-blue-500 rounded-md p-3 mx-2">
                <div className="flex flex-row gap-2 justify-start items-center">
                  <b>B</b> <b>U</b> <b>I</b>
                  <label htmlFor="image-input" className="cursor-pointer">
                    <FaRegImage />
                  </label>
                  <input type="file" id="image-input" className="hidden" />
                  <div className="rounded-full bg-gray-500 p-1 ml-auto cursor-pointer">
                    <GiCheckMark className="text-white w-6 h-6" />
                  </div>
                </div>
                <div className="pt-3">
                  <textarea
                    placeholder="Enter your option here..."
                    className="textarea peer h-full min-h-[100px] resize-none rounded-md input w-full bg-blue-500 text-white"
                    style={{ paddingBottom: "23vh" }}
                  ></textarea>
                </div>
              </div>
              <div className="bg-pink-500 rounded-md p-3 mx-2">
                <div className="flex flex-row gap-2 justify-start items-center">
                  <b>B</b> <b>U</b> <b>I</b>
                  <label htmlFor="image-input" className="cursor-pointer">
                    <FaRegImage />
                  </label>
                  <input type="file" id="image-input" className="hidden" />
                  <div className="rounded-full bg-gray-500 p-1 ml-auto cursor-pointer">
                    <GiCheckMark className="text-white w-6 h-6" />
                  </div>
                </div>
                <div className="pt-3">
                  <textarea
                    placeholder="Enter your option here..."
                    className="textarea peer h-full min-h-[100px] resize-none rounded-md input w-full bg-pink-500 text-white"
                    style={{ paddingBottom: "23vh" }}
                  ></textarea>
                </div>
              </div>
              <div className="flex items-center justify-center">
                <BsPlusLg className="text-4xl" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Questions;
