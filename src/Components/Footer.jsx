import React from "react";
import { IoMdAddCircleOutline } from "react-icons/io";
import { BsShuffle } from "react-icons/bs";
import { MdSkipPrevious } from "react-icons/md";
import { MdSkipNext } from "react-icons/md";
import { FaPlayCircle } from "react-icons/fa";
import { RiRepeat2Fill } from "react-icons/ri";
import { BsPlayBtn } from "react-icons/bs";
import { LuMic2 } from "react-icons/lu";
import { HiOutlineQueueList } from "react-icons/hi2";
import { TbDevices2 } from "react-icons/tb";
import { GoUnmute } from "react-icons/go";
import { CgMiniPlayer } from "react-icons/cg";
import { AiOutlineFullscreenExit } from "react-icons/ai";

export default function Footer() {
  return (
    <>
      <div className="bg-black w-full fixed bottom-0">
        <div className="mx-4 flex pb-3">
          <div className="w-[33%] flex items-center gap-3">
            <div className="w-[13%]">
              <img
                className="w-[100%] rounded-md"
                src="/public/image/arijetsingmusic.jpeg"
                alt=""
              />
            </div>
            <div>
              <h1 className="text-sm font-medium text-white font-spotify">
                Dekha Hazaro Dafaa
              </h1>
              <p className="text-sm font-spotify">
                <span className="hover:text-white text-garylight">
                  Arijit Singh
                </span>{" "}
                <span className="hover:text-white text-garylight">
                  Palak Muchhal
                </span>{" "}
                <span className="hover:text-white text-garylight">
                  Manoj Muntashir
                </span>
              </p>
            </div>
            <div>
              <IoMdAddCircleOutline className="text-garylight hover:text-white text-xl" />
            </div>
          </div>
          <div className="w-[33%] flex flex-col justify-center items-center gap-3">
            <div className="flex gap-5 items-center">
              <div className="text-garylight text-xl hover:text-white">
                <BsShuffle />
              </div>
              <div className="text-garylight text-3xl hover:text-white">
                <MdSkipPrevious />
              </div>
              <div className=" text-3xl text-white">
                <FaPlayCircle />
              </div>
              <div className="text-garylight text-3xl hover:text-white">
                <MdSkipNext />
              </div>
              <div className="text-garylight text-xl hover:text-white">
                <RiRepeat2Fill />
              </div>
            </div>
            <div class="flex w-[100%] items-center">
              <span class="text-sm text-white">0:29</span>
              <div class="relative w-full h-1 bg-gray-600 mx-2 rounded-md">
                <div class="absolute top-0 h-1 w-1/4 bg-white rounded-sm"></div>
              </div>
              <span class="text-sm text-white">2:58</span>
            </div>
          </div>
          <div className="w-[33%] flex gap-4 items-center justify-end">
            <div className="text-garylight text-xl hover:text-white cursor-pointer">
              <BsPlayBtn />
            </div>
            <div className="text-garylight text-xl hover:text-white cursor-pointer">
              <LuMic2 />
            </div>
            <div className="text-garylight text-xl hover:text-white cursor-pointer">
              <HiOutlineQueueList />
            </div>
            <div className="text-garylight text-xl hover:text-white cursor-pointer">
              <TbDevices2 />
            </div>
            <div className="text-garylight text-xl hover:text-white cursor-pointer flex items-center gap-3 ">
              <div>
                <GoUnmute />
              </div>
              <div>
                <input
                  type="range"
                  className="w-full  bg-gray-300 rounded-full outline-none"
                />
              </div>
            </div>
            <div className="text-garylight text-xl hover:text-white cursor-pointer">
              <CgMiniPlayer />
            </div>
            <div className="text-garylight text-xl hover:text-white cursor-pointer">
              <AiOutlineFullscreenExit />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
