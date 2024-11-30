import React from "react";
import { MdHomeFilled } from "react-icons/md";
import { PiMagnifyingGlass } from "react-icons/pi";
import { MdOutlineOpenInBrowser } from "react-icons/md";
import { GrUploadOption } from "react-icons/gr";
import { MdNotificationsNone } from "react-icons/md";
import { NavLink } from "react-router-dom";

export default function Header() {
  return (
    <>
      <div className="bg-black py-1 fixed w-full z-50">
        <div className="w-[97%] mx-auto flex items-center">
          <div className="w-[35%]">
            <NavLink to="/" >
              <img className="w-[35px]" src="/public/image/logo.png" alt="" />
            </NavLink>
          </div>
          <div className="w-[45%] flex items-center gap-5">
            <div className="w-12 h-12 bg-lightblack flex items-center justify-center rounded-full">
              <MdHomeFilled className="text-white text-3xl" />
            </div>
            <div className="flex items-center bg-lightblack py-2 px-3 rounded-full group transition-all ease-in-out duration-700">
              <div className="text-[#b3b3b3] group-hover:text-white text-3xl">
                <PiMagnifyingGlass />
              </div>
              <div>
                <input
                  className="bg-transparent placeholder-[#b3b3b3] group-hover:placeholder-white font-spotify outline-none w-[400px] pl-2"
                  type="search"
                  placeholder="What do you want to play?"
                />
              </div>
              <div className="text-[#b3b3b3] text-3xl border-l-[1px] border-[#b3b3b3] pl-5 group-hover:text-white">
                <MdOutlineOpenInBrowser />
              </div>
            </div>
          </div>
          <div className="w-[45%] flex justify-end items-center gap-5">
            <div>
              <button className="text-sm font-bold text-black bg-white px-2 py-1.5 font-spotify rounded-full">
                Explore Premium
              </button>
            </div>
            <div>
              <div className="text-white flex items-center gap-1 text-sm font-semibold font-spotify">
                <GrUploadOption className="text-lg" /> Install App
              </div>
            </div>
            <div className="text-2xl text-[#b3b3b3] hover:text-white">
              <MdNotificationsNone />
            </div>
            <div className="w-14 h-14 rounded-full bg-lightblack flex items-center justify-center">
              <button className="text-xl text-white font-spotify bg-[#F3729F] py-1 px-2  rounded-full">
                M
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
