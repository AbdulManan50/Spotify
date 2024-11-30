import React from "react";
import { IoMdPlay } from "react-icons/io";
import { FaListUl } from "react-icons/fa";
import { IoTimeOutline } from "react-icons/io5";
import { IoIosMore } from "react-icons/io";

export default function Likesong() {
  return (
    <>
      <div className="bg-black w-full">
        <div className="w-[94%] ml-auto pt-24 pb-24 min-h-[100vh]">
          <div className="iconbackground p-3">
            <div className="flex gap-5 items-center ">
              <img
                className="w-[15%] rounded-lg"
                src="/public/image/image1.png"
                alt=""
              />

              <div className="space-y-3">
                <h1 className="font-semibold text-white font-spotify text-sm">
                  Playlist
                </h1>
                <h1 className="text-8xl font-spotify font-extrabold text-white">
                  Like Song
                </h1>
              </div>
            </div>
          </div>
          <div className="flex justify-between items-center px-8 pt-5">
            <div className="px-3 py-3  bg-green hover:bg-[#3BE477] rounded-full">
              <IoMdPlay className="text-2xl" />
            </div>
            <div className="flex items-center gap-3">
              <h1 className="text-white">List</h1>
              <div className="text-garylight text-xl hover:text-white cursor-pointer">
                <FaListUl />
              </div>
            </div>
          </div>
          <div className="px-5 flex pt-3 pb-2 border-b-[1px] border-garylight">
            <div className="w-[40%]">
              <h1 className="text-sm font-spotify text-garylight"># Title</h1>
            </div>
            <div className="w-[20%]">
              <h1 className="text-sm font-spotify text-garylight">Album</h1>
            </div>
            <div className="w-[20%]">
              <h1 className="text-sm font-spotify text-garylight">
                Date added
              </h1>
            </div>
            <div className="w-[20%]">
              <h1 className="text-sm font-spotify text-garylight text-xl">
                <IoTimeOutline />
              </h1>
            </div>
          </div>
          <div>
            <div className="px-3 flex items-center hover:bg-[#ffffff3d] py-1 group mt-3 cursor-pointer">
              <div className="flex w-[40%] items-center gap-3">
                <img className="w-[7%]" src="/public/image/like1.jpeg" alt="" />
                <div>
                  <h1 className="text-garylight hover:text-white text-sm font-spotify">
                    people
                  </h1>
                  <h1 className="text-garylight hover:text-white text-sm font-spotify">
                    Libanca
                  </h1>
                </div>
              </div>
              <div className="w-[20%]">
                <h1 className="text-garylight hover:text-white text-sm font-spotify">
                  people
                </h1>
              </div>
              <div className="w-[20%]">
                <h1 className="text-garylight hover:text-white text-sm font-spotify">
                  10Hours ago
                </h1>
              </div>
              <div className="w-[20%]">
                <h1 className="text-garylight flex gap-5 hover:text-white text-sm font-spotify">
                  3:04
                  <span>
                    <IoIosMore className="text-xl opacity-0 group-hover:opacity-100" />
                  </span>
                </h1>
              </div>
            </div>
            <div className="px-3 flex items-center hover:bg-[#ffffff3d] py-1 group mt-3 cursor-pointer">
              <div className="flex w-[40%] items-center gap-3">
                <img className="w-[7%]" src="/public/image/like2.jpeg" alt="" />
                <div>
                  <h1 className="text-garylight hover:text-white text-sm font-spotify">
                    people
                  </h1>
                  <h1 className="text-garylight hover:text-white text-sm font-spotify">
                    Libanca
                  </h1>
                </div>
              </div>
              <div className="w-[20%]">
                <h1 className="text-garylight hover:text-white text-sm font-spotify">
                  people
                </h1>
              </div>
              <div className="w-[20%]">
                <h1 className="text-garylight hover:text-white text-sm font-spotify">
                  10Hours ago
                </h1>
              </div>
              <div className="w-[20%]">
                <h1 className="text-garylight flex gap-5 hover:text-white text-sm font-spotify">
                  3:04
                  <span>
                    <IoIosMore className="text-xl opacity-0 group-hover:opacity-100" />
                  </span>
                </h1>
              </div>
            </div>
            <div className="px-3 flex items-center hover:bg-[#ffffff3d] py-1 group mt-3 cursor-pointer">
              <div className="flex w-[40%] items-center gap-3">
                <img className="w-[7%]" src="/public/image/like3.jpeg" alt="" />
                <div>
                  <h1 className="text-garylight hover:text-white text-sm font-spotify">
                    people
                  </h1>
                  <h1 className="text-garylight hover:text-white text-sm font-spotify">
                    Libanca
                  </h1>
                </div>
              </div>
              <div className="w-[20%]">
                <h1 className="text-garylight hover:text-white text-sm font-spotify">
                  people
                </h1>
              </div>
              <div className="w-[20%]">
                <h1 className="text-garylight hover:text-white text-sm font-spotify">
                  10Hours ago
                </h1>
              </div>
              <div className="w-[20%]">
                <h1 className="text-garylight flex gap-5 hover:text-white text-sm font-spotify">
                  3:04
                  <span>
                    <IoIosMore className="text-xl opacity-0 group-hover:opacity-100" />
                  </span>
                </h1>
              </div>
            </div>
            <div className="px-3 flex items-center hover:bg-[#ffffff3d] py-1 group mt-3 cursor-pointer">
              <div className="flex w-[40%] items-center gap-3">
                <img className="w-[7%]" src="/public/image/like4.jpeg" alt="" />
                <div>
                  <h1 className="text-garylight hover:text-white text-sm font-spotify">
                    people
                  </h1>
                  <h1 className="text-garylight hover:text-white text-sm font-spotify">
                    Libanca
                  </h1>
                </div>
              </div>
              <div className="w-[20%]">
                <h1 className="text-garylight hover:text-white text-sm font-spotify">
                  people
                </h1>
              </div>
              <div className="w-[20%]">
                <h1 className="text-garylight hover:text-white text-sm font-spotify">
                  10Hours ago
                </h1>
              </div>
              <div className="w-[20%]">
                <h1 className="text-garylight flex gap-5 hover:text-white text-sm font-spotify">
                  3:04
                  <span>
                    <IoIosMore className="text-xl opacity-0 group-hover:opacity-100" />
                  </span>
                </h1>
              </div>
            </div>
            <div className="px-3 flex items-center hover:bg-[#ffffff3d] py-1 group mt-3 cursor-pointer">
              <div className="flex w-[40%] items-center gap-3">
                <img className="w-[7%]" src="/public/image/like6.jpeg" alt="" />
                <div>
                  <h1 className="text-garylight hover:text-white text-sm font-spotify">
                    people
                  </h1>
                  <h1 className="text-garylight hover:text-white text-sm font-spotify">
                    Libanca
                  </h1>
                </div>
              </div>
              <div className="w-[20%]">
                <h1 className="text-garylight hover:text-white text-sm font-spotify">
                  people
                </h1>
              </div>
              <div className="w-[20%]">
                <h1 className="text-garylight hover:text-white text-sm font-spotify">
                  10Hours ago
                </h1>
              </div>
              <div className="w-[20%]">
                <h1 className="text-garylight flex gap-5 hover:text-white text-sm font-spotify">
                  3:04
                  <span>
                    <IoIosMore className="text-xl opacity-0 group-hover:opacity-100" />
                  </span>
                </h1>
              </div>
            </div>
            <div className="px-3 flex items-center hover:bg-[#ffffff3d] py-1 group mt-3 cursor-pointer">
              <div className="flex w-[40%] items-center gap-3">
                <img className="w-[7%]" src="/public/image/like7.jpeg" alt="" />
                <div>
                  <h1 className="text-garylight hover:text-white text-sm font-spotify">
                    people
                  </h1>
                  <h1 className="text-garylight hover:text-white text-sm font-spotify">
                    Libanca
                  </h1>
                </div>
              </div>
              <div className="w-[20%]">
                <h1 className="text-garylight hover:text-white text-sm font-spotify">
                  people
                </h1>
              </div>
              <div className="w-[20%]">
                <h1 className="text-garylight hover:text-white text-sm font-spotify">
                  10Hours ago
                </h1>
              </div>
              <div className="w-[20%]">
                <h1 className="text-garylight flex gap-5 hover:text-white text-sm font-spotify">
                  3:04
                  <span>
                    <IoIosMore className="text-xl opacity-0 group-hover:opacity-100" />
                  </span>
                </h1>
              </div>
            </div>
            <div className="px-3 flex items-center hover:bg-[#ffffff3d] py-1 group mt-3 cursor-pointer">
              <div className="flex w-[40%] items-center gap-3">
                <img className="w-[7%]" src="/public/image/like8.jpeg" alt="" />
                <div>
                  <h1 className="text-garylight hover:text-white text-sm font-spotify">
                    people
                  </h1>
                  <h1 className="text-garylight hover:text-white text-sm font-spotify">
                    Libanca
                  </h1>
                </div>
              </div>
              <div className="w-[20%]">
                <h1 className="text-garylight hover:text-white text-sm font-spotify">
                  people
                </h1>
              </div>
              <div className="w-[20%]">
                <h1 className="text-garylight hover:text-white text-sm font-spotify">
                  10Hours ago
                </h1>
              </div>
              <div className="w-[20%]">
                <h1 className="text-garylight flex gap-5 hover:text-white text-sm font-spotify">
                  3:04
                  <span>
                    <IoIosMore className="text-xl opacity-0 group-hover:opacity-100" />
                  </span>
                </h1>
              </div>
            </div>
            <div className="px-3 flex items-center hover:bg-[#ffffff3d] py-1 group mt-3 cursor-pointer">
              <div className="flex w-[40%] items-center gap-3">
                <img className="w-[7%]" src="/public/image/like9.jpeg" alt="" />
                <div>
                  <h1 className="text-garylight hover:text-white text-sm font-spotify">
                    people
                  </h1>
                  <h1 className="text-garylight hover:text-white text-sm font-spotify">
                    Libanca
                  </h1>
                </div>
              </div>
              <div className="w-[20%]">
                <h1 className="text-garylight hover:text-white text-sm font-spotify">
                  people
                </h1>
              </div>
              <div className="w-[20%]">
                <h1 className="text-garylight hover:text-white text-sm font-spotify">
                  10Hours ago
                </h1>
              </div>
              <div className="w-[20%]">
                <h1 className="text-garylight flex gap-5 hover:text-white text-sm font-spotify">
                  3:04
                  <span>
                    <IoIosMore className="text-xl opacity-0 group-hover:opacity-100" />
                  </span>
                </h1>
              </div>
            </div>
            <div className="px-3 flex items-center hover:bg-[#ffffff3d] py-1 group mt-3 cursor-pointer">
              <div className="flex w-[40%] items-center gap-3">
                <img className="w-[7%]" src="/public/image/like10.jpeg" alt="" />
                <div>
                  <h1 className="text-garylight hover:text-white text-sm font-spotify">
                    people
                  </h1>
                  <h1 className="text-garylight hover:text-white text-sm font-spotify">
                    Libanca
                  </h1>
                </div>
              </div>
              <div className="w-[20%]">
                <h1 className="text-garylight hover:text-white text-sm font-spotify">
                  people
                </h1>
              </div>
              <div className="w-[20%]">
                <h1 className="text-garylight hover:text-white text-sm font-spotify">
                  10Hours ago
                </h1>
              </div>
              <div className="w-[20%]">
                <h1 className="text-garylight flex gap-5 hover:text-white text-sm font-spotify">
                  3:04
                  <span>
                    <IoIosMore className="text-xl opacity-0 group-hover:opacity-100" />
                  </span>
                </h1>
              </div>
            </div>
            <div className="px-3 flex items-center hover:bg-[#ffffff3d] py-1 group mt-3 cursor-pointer">
              <div className="flex w-[40%] items-center gap-3">
                <img className="w-[7%]" src="/public/image/like11.jpeg" alt="" />
                <div>
                  <h1 className="text-garylight hover:text-white text-sm font-spotify">
                    people
                  </h1>
                  <h1 className="text-garylight hover:text-white text-sm font-spotify">
                    Libanca
                  </h1>
                </div>
              </div>
              <div className="w-[20%]">
                <h1 className="text-garylight hover:text-white text-sm font-spotify">
                  people
                </h1>
              </div>
              <div className="w-[20%]">
                <h1 className="text-garylight hover:text-white text-sm font-spotify">
                  10Hours ago
                </h1>
              </div>
              <div className="w-[20%]">
                <h1 className="text-garylight flex gap-5 hover:text-white text-sm font-spotify">
                  3:04
                  <span>
                    <IoIosMore className="text-xl opacity-0 group-hover:opacity-100" />
                  </span>
                </h1>
              </div>
            </div>
            <div className="px-3 flex items-center hover:bg-[#ffffff3d] py-1 group mt-3 cursor-pointer">
              <div className="flex w-[40%] items-center gap-3">
                <img className="w-[7%]" src="/public/image/like4.jpeg" alt="" />
                <div>
                  <h1 className="text-garylight hover:text-white text-sm font-spotify">
                    people
                  </h1>
                  <h1 className="text-garylight hover:text-white text-sm font-spotify">
                    Libanca
                  </h1>
                </div>
              </div>
              <div className="w-[20%]">
                <h1 className="text-garylight hover:text-white text-sm font-spotify">
                  people
                </h1>
              </div>
              <div className="w-[20%]">
                <h1 className="text-garylight hover:text-white text-sm font-spotify">
                  10Hours ago
                </h1>
              </div>
              <div className="w-[20%]">
                <h1 className="text-garylight flex gap-5 hover:text-white text-sm font-spotify">
                  3:04
                  <span>
                    <IoIosMore className="text-xl opacity-0 group-hover:opacity-100" />
                  </span>
                </h1>
              </div>
            </div>
            <div className="px-3 flex items-center hover:bg-[#ffffff3d] py-1 group mt-3 cursor-pointer">
              <div className="flex w-[40%] items-center gap-3">
                <img className="w-[7%]" src="/public/image/like4.jpeg" alt="" />
                <div>
                  <h1 className="text-garylight hover:text-white text-sm font-spotify">
                    people
                  </h1>
                  <h1 className="text-garylight hover:text-white text-sm font-spotify">
                    Libanca
                  </h1>
                </div>
              </div>
              <div className="w-[20%]">
                <h1 className="text-garylight hover:text-white text-sm font-spotify">
                  people
                </h1>
              </div>
              <div className="w-[20%]">
                <h1 className="text-garylight hover:text-white text-sm font-spotify">
                  10Hours ago
                </h1>
              </div>
              <div className="w-[20%]">
                <h1 className="text-garylight flex gap-5 hover:text-white text-sm font-spotify">
                  3:04
                  <span>
                    <IoIosMore className="text-xl opacity-0 group-hover:opacity-100" />
                  </span>
                </h1>
              </div>
            </div>
            <div className="px-3 flex items-center hover:bg-[#ffffff3d] py-1 group mt-3 cursor-pointer">
              <div className="flex w-[40%] items-center gap-3">
                <img className="w-[7%]" src="/public/image/like4.jpeg" alt="" />
                <div>
                  <h1 className="text-garylight hover:text-white text-sm font-spotify">
                    people
                  </h1>
                  <h1 className="text-garylight hover:text-white text-sm font-spotify">
                    Libanca
                  </h1>
                </div>
              </div>
              <div className="w-[20%]">
                <h1 className="text-garylight hover:text-white text-sm font-spotify">
                  people
                </h1>
              </div>
              <div className="w-[20%]">
                <h1 className="text-garylight hover:text-white text-sm font-spotify">
                  10Hours ago
                </h1>
              </div>
              <div className="w-[20%]">
                <h1 className="text-garylight flex gap-5 hover:text-white text-sm font-spotify">
                  3:04
                  <span>
                    <IoIosMore className="text-xl opacity-0 group-hover:opacity-100" />
                  </span>
                </h1>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
