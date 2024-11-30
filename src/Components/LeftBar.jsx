import React from "react";
import { FaHeart } from "react-icons/fa";
import { VscLibrary } from "react-icons/vsc";
import { NavLink } from "react-router-dom";

export default function LeftBar() {
  return (
    <>
      <div className="flex bg-black h-[75vh] fixed left-0 top-[10%]">
        <div className="bg-[#121212] px-1 py-5 flex flex-col items-center gap-3 ml-2 rounded-lg">
          <div>
            <NavLink>
              <VscLibrary className="text-garylight hover:text-white text-4xl" />
            </NavLink>
          </div>
          <div className="w-16 h-16 hover:bg-[#1C1C1C] flex justify-center items-center rounded-md">
            <NavLink  to="/like">
              <button className="iconbackground px-4 py-4 text-white rounded-md">
                <FaHeart />
              </button>
            </NavLink>
          </div>
          <div className="w-16 h-16 hover:bg-[#1C1C1C] flex justify-center items-center rounded-md">
            <img
              className="rounded-full w-[80%] h-[80%]"
              src="/public/image/Tanishk.webp"
              alt=""
            />
          </div>
          <div className="w-16 h-16 hover:bg-[#1C1C1C] flex justify-center items-center rounded-md">
            <img
              className="rounded-full w-[80%] h-[80%]"
              src="/public/image/AtifAslam.webp"
              alt=""
            />
          </div>
          <div className="w-16 h-16 hover:bg-[#1C1C1C] flex justify-center items-center rounded-md">
            <img
              className="rounded-full w-[80%] h-[80%]"
              src="/public/image/Arijitsingh.webp"
              alt=""
            />
          </div>
        </div>
      </div>
    </>
  );
}
