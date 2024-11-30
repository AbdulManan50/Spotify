import React from "react";
import { IoMdPlay } from "react-icons/io";

export default function Rightbar() {
  return (
    <>
      <div className="bg-[#151614]  px-5 pt-24 pb-24 rounded-xl">
        <div className="flex gap-3 ">
          <div className="bg-white font-spotify text-sm text-black px-3 rounded-full py-1">
            All
          </div>
          <div className="bg-[#ffffff70] font-spotify text-sm text-white px-3 rounded-full py-1">
            Music
          </div>
        </div>
        <div className="flex gap-3 mt-5 flex-wrap items-center ">
          <div className="w-[24%] bg-[#ffffff23] flex items-center gap-3 relative rounded-md group cursor-pointer">
            <img
              className="w-[17%] rounded-l-md "
              src="/public/image/image1.png"
              alt=""
            />
            <h1 className="text-white font-spotify font-semibold ">
              like song
            </h1>
            <div className="px-3 py-3  bg-green hover:bg-[#3BE477] rounded-full opacity-0 group-hover:opacity-100 absolute right-5">
              <IoMdPlay className="text-2xl" />
            </div>
          </div>
          <div className="w-[24%] bg-[#ffffff23] flex items-center gap-3 relative rounded-md group cursor-pointer">
            <img
              className="w-[17%] rounded-l-md "
              src="/public/image/image2.jpeg"
              alt=""
            />
            <h1 className="text-white font-spotify font-semibold ">
              like song
            </h1>
            <div className="px-3 py-3  bg-green hover:bg-[#3BE477] rounded-full opacity-0 group-hover:opacity-100 absolute right-5">
              <IoMdPlay className="text-2xl" />
            </div>
          </div>
          <div className="w-[24%] bg-[#ffffff23] flex items-center gap-3 relative rounded-md group cursor-pointer">
            <img
              className="w-[17%] rounded-l-md "
              src="/public/image/image3.jpeg"
              alt=""
            />
            <h1 className="text-white font-spotify font-semibold ">
              like song
            </h1>
            <div className="px-3 py-3  bg-green hover:bg-[#3BE477] rounded-full opacity-0 group-hover:opacity-100 absolute right-5">
              <IoMdPlay className="text-2xl" />
            </div>
          </div>
          <div className="w-[24%] bg-[#ffffff23] flex items-center gap-3 relative rounded-md group cursor-pointer">
            <img
              className="w-[17%] rounded-l-md "
              src="/public/image/image4.jpeg"
              alt=""
            />
            <h1 className="text-white font-spotify font-semibold ">
              like song
            </h1>
            <div className="px-3 py-3  bg-green hover:bg-[#3BE477] rounded-full opacity-0 group-hover:opacity-100 absolute right-5">
              <IoMdPlay className="text-2xl" />
            </div>
          </div>
          <div className="w-[24%] bg-[#ffffff23] flex items-center gap-3 relative rounded-md group cursor-pointer">
            <img
              className="w-[17%] rounded-l-md "
              src="/public/image/image5.jpeg"
              alt=""
            />
            <h1 className="text-white font-spotify font-semibold ">
              like song
            </h1>
            <div className="px-3 py-3  bg-green hover:bg-[#3BE477] rounded-full opacity-0 group-hover:opacity-100 absolute right-5">
              <IoMdPlay className="text-2xl" />
            </div>
          </div>
          <div className="w-[24%] bg-[#ffffff23] flex items-center gap-3 relative rounded-md group cursor-pointer">
            <img
              className="w-[17%] rounded-l-md "
              src="/public/image/image6.webp"
              alt=""
            />
            <h1 className="text-white font-spotify font-semibold ">
              like song
            </h1>
            <div className="px-3 py-3  bg-green hover:bg-[#3BE477] rounded-full opacity-0 group-hover:opacity-100 absolute right-5">
              <IoMdPlay className="text-2xl" />
            </div>
          </div>
          <div className="w-[24%] bg-[#ffffff23] flex items-center gap-3 relative rounded-md group cursor-pointer">
            <img
              className="w-[17%] rounded-l-md "
              src="/public/image/image7.jpeg"
              alt=""
            />
            <h1 className="text-white font-spotify font-semibold ">
              like song
            </h1>
            <div className="px-3 py-3  bg-green hover:bg-[#3BE477] rounded-full opacity-0 group-hover:opacity-100 absolute right-5">
              <IoMdPlay className="text-2xl" />
            </div>
          </div>
          <div className="w-[24%] bg-[#ffffff23] flex items-center gap-3 relative rounded-md group cursor-pointer">
            <img
              className="w-[17%] rounded-l-md "
              src="/public/image/image8.jpeg"
              alt=""
            />
            <h1 className="text-white font-spotify font-semibold ">
              like song
            </h1>
            <div className="px-3 py-3  bg-green hover:bg-[#3BE477] rounded-full opacity-0 group-hover:opacity-100 absolute right-5">
              <IoMdPlay className="text-2xl" />
            </div>
          </div>
        </div>
        <div className="flex justify-between items-center mt-14">
          <h1 className="text-2xl font-bold font-spotify text-white hover:underline cursor-pointer ">
            Made For Mananiqbal
          </h1>
          <button className="text-sm text-white font-spotify cursor-pointer font-bold">
            Show All
          </button>
        </div>
        <div className="flex flex-wrap pt-5">
          <div className="w-[16.5%] p-3 hover:bg-[#ffffff10] rounded-lg space-y-2  group cursor-pointer">
            <div className="relative">
              <img
                className="rounded-md"
                src="/public/image/playlist1.jpeg"
                alt=""
              />
              <div className="px-3 py-3  bg-green hover:bg-[#3BE477] rounded-full opacity-0 group-hover:opacity-100 absolute bottom-2 right-2">
                <IoMdPlay className="text-2xl" />
              </div>
            </div>
            <div>
              <h1 className="text-[#B3B3A5] font-spotify text-sm">
                Arijit Singh, Amit Trivedi, Pritam and more
              </h1>
            </div>
          </div>
          <div className="w-[16.5%] p-3 hover:bg-[#ffffff10] rounded-lg space-y-2  group cursor-pointer">
            <div className="relative">
              <img
                className="rounded-md"
                src="/public/image/playlist2.jpeg"
                alt=""
              />
              <div className="px-3 py-3  bg-green hover:bg-[#3BE477] rounded-full opacity-0 group-hover:opacity-100 absolute bottom-2 right-2">
                <IoMdPlay className="text-2xl" />
              </div>
            </div>
            <div>
              <h1 className="text-[#B3B3A5] font-spotify text-sm">
                Arijit Singh, Amit Trivedi, Pritam and more
              </h1>
            </div>
          </div>
          <div className="w-[16.5%] p-3 hover:bg-[#ffffff10] rounded-lg space-y-2  group cursor-pointer">
            <div className="relative">
              <img
                className="rounded-md"
                src="/public/image/playlist3.jpeg"
                alt=""
              />
              <div className="px-3 py-3  bg-green hover:bg-[#3BE477] rounded-full opacity-0 group-hover:opacity-100 absolute bottom-2 right-2">
                <IoMdPlay className="text-2xl" />
              </div>
            </div>
            <div>
              <h1 className="text-[#B3B3A5] font-spotify text-sm">
                Arijit Singh, Amit Trivedi, Pritam and more
              </h1>
            </div>
          </div>
          <div className="w-[16.5%] p-3 hover:bg-[#ffffff10] rounded-lg space-y-2  group cursor-pointer">
            <div className="relative">
              <img
                className="rounded-md"
                src="/public/image/playlist4.jpeg"
                alt=""
              />
              <div className="px-3 py-3  bg-green hover:bg-[#3BE477] rounded-full opacity-0 group-hover:opacity-100 absolute bottom-2 right-2">
                <IoMdPlay className="text-2xl" />
              </div>
            </div>
            <div>
              <h1 className="text-[#B3B3A5] font-spotify text-sm">
                Arijit Singh, Amit Trivedi, Pritam and more
              </h1>
            </div>
          </div>
          <div className="w-[16.5%] p-3 hover:bg-[#ffffff10] rounded-lg space-y-2  group cursor-pointer">
            <div className="relative">
              <img
                className="rounded-md"
                src="/public/image/playlist5.jpeg"
                alt=""
              />
              <div className="px-3 py-3  bg-green hover:bg-[#3BE477] rounded-full opacity-0 group-hover:opacity-100 absolute bottom-2 right-2">
                <IoMdPlay className="text-2xl" />
              </div>
            </div>
            <div>
              <h1 className="text-[#B3B3A5] font-spotify text-sm">
                Arijit Singh, Amit Trivedi, Pritam and more
              </h1>
            </div>
          </div>
          <div className="w-[16.5%] p-3 hover:bg-[#ffffff10] rounded-lg space-y-2  group cursor-pointer">
            <div className="relative">
              <img
                className="rounded-md"
                src="/public/image/playlist6.jpeg"
                alt=""
              />
              <div className="px-3 py-3  bg-green hover:bg-[#3BE477] rounded-full opacity-0 group-hover:opacity-100 absolute bottom-2 right-2">
                <IoMdPlay className="text-2xl" />
              </div>
            </div>
            <div>
              <h1 className="text-[#B3B3A5] font-spotify text-sm">
                Arijit Singh, Amit Trivedi, Pritam and more
              </h1>
            </div>
          </div>
          <div className="w-[16.5%] p-3 hover:bg-[#ffffff10] rounded-lg space-y-2  group cursor-pointer">
            <div className="relative">
              <img
                className="rounded-md"
                src="/public/image/playlist7.jpeg"
                alt=""
              />
              <div className="px-3 py-3  bg-green hover:bg-[#3BE477] rounded-full opacity-0 group-hover:opacity-100 absolute bottom-2 right-2">
                <IoMdPlay className="text-2xl" />
              </div>
            </div>
            <div>
              <h1 className="text-[#B3B3A5] font-spotify text-sm">
                Arijit Singh, Amit Trivedi, Pritam and more
              </h1>
            </div>
          </div>
          <div className="w-[16.5%] p-3 hover:bg-[#ffffff10] rounded-lg space-y-2  group cursor-pointer">
            <div className="relative">
              <img
                className="rounded-md"
                src="/public/image/playlist8.jpeg"
                alt=""
              />
              <div className="px-3 py-3  bg-green hover:bg-[#3BE477] rounded-full opacity-0 group-hover:opacity-100 absolute bottom-2 right-2">
                <IoMdPlay className="text-2xl" />
              </div>
            </div>
            <div>
              <h1 className="text-[#B3B3A5] font-spotify text-sm">
                Arijit Singh, Amit Trivedi, Pritam and more
              </h1>
            </div>
          </div>
          <div className="w-[16.5%] p-3 hover:bg-[#ffffff10] rounded-lg space-y-2  group cursor-pointer">
            <div className="relative">
              <img
                className="rounded-md"
                src="/public/image/playlist9.jpeg"
                alt=""
              />
              <div className="px-3 py-3  bg-green hover:bg-[#3BE477] rounded-full opacity-0 group-hover:opacity-100 absolute bottom-2 right-2">
                <IoMdPlay className="text-2xl" />
              </div>
            </div>
            <div>
              <h1 className="text-[#B3B3A5] font-spotify text-sm">
                Arijit Singh, Amit Trivedi, Pritam and more
              </h1>
            </div>
          </div>
          <div className="w-[16.5%] p-3 hover:bg-[#ffffff10] rounded-lg space-y-2  group cursor-pointer">
            <div className="relative">
              <img
                className="rounded-md"
                src="/public/image/playlist10.jpeg"
                alt=""
              />
              <div className="px-3 py-3  bg-green hover:bg-[#3BE477] rounded-full opacity-0 group-hover:opacity-100 absolute bottom-2 right-2">
                <IoMdPlay className="text-2xl" />
              </div>
            </div>
            <div>
              <h1 className="text-[#B3B3A5] font-spotify text-sm">
                Arijit Singh, Amit Trivedi, Pritam and more
              </h1>
            </div>
          </div>
          <div className="w-[16.5%] p-3 hover:bg-[#ffffff10] rounded-lg space-y-2  group cursor-pointer">
            <div className="relative">
              <img
                className="rounded-md"
                src="/public/image/playlist11.jpeg"
                alt=""
              />
              <div className="px-3 py-3  bg-green hover:bg-[#3BE477] rounded-full opacity-0 group-hover:opacity-100 absolute bottom-2 right-2">
                <IoMdPlay className="text-2xl" />
              </div>
            </div>
            <div>
              <h1 className="text-[#B3B3A5] font-spotify text-sm">
                Arijit Singh, Amit Trivedi, Pritam and more
              </h1>
            </div>
          </div>
          <div className="w-[16.5%] p-3 hover:bg-[#ffffff10] rounded-lg space-y-2  group cursor-pointer">
            <div className="relative">
              <img
                className="rounded-md"
                src="/public/image/playlist12.webp"
                alt=""
              />
              <div className="px-3 py-3  bg-green hover:bg-[#3BE477] rounded-full opacity-0 group-hover:opacity-100 absolute bottom-2 right-2">
                <IoMdPlay className="text-2xl" />
              </div>
            </div>
            <div>
              <h1 className="text-[#B3B3A5] font-spotify text-sm">
                Arijit Singh, Amit Trivedi, Pritam and more
              </h1>
            </div>
          </div>
        </div>
        <div>
          <div className="flex justify-between items-center mt-14">
            <h1 className="text-2xl font-bold font-spotify text-white hover:underline cursor-pointer ">
              Recentlty played
            </h1>
            <button className="text-sm text-white font-spotify cursor-pointer font-bold">
              Show All
            </button>
          </div>
          <div className="flex flex-wrap pt-5">
            <div className="w-[16.5%] p-3 hover:bg-[#ffffff10] rounded-lg space-y-2  group cursor-pointer">
              <div className="relative">
                <img
                  className="rounded-md"
                  src="/public/image/playlist20.jpeg"
                  alt=""
                />
                <div className="px-3 py-3  bg-green hover:bg-[#3BE477] rounded-full opacity-0 group-hover:opacity-100 absolute bottom-2 right-2">
                  <IoMdPlay className="text-2xl" />
                </div>
              </div>
              <div>
                <h1 className="text-[#B3B3A5] font-spotify text-sm">
                  Arijit Singh, Amit Trivedi, Pritam and more
                </h1>
              </div>
            </div>
            <div className="w-[16.5%] p-3 hover:bg-[#ffffff10] rounded-lg space-y-2  group cursor-pointer">
              <div className="relative">
                <img
                  className="rounded-md"
                  src="/public/image/playlist21.jpeg"
                  alt=""
                />
                <div className="px-3 py-3  bg-green hover:bg-[#3BE477] rounded-full opacity-0 group-hover:opacity-100 absolute bottom-2 right-2">
                  <IoMdPlay className="text-2xl" />
                </div>
              </div>
              <div>
                <h1 className="text-[#B3B3A5] font-spotify text-sm">
                  Arijit Singh, Amit Trivedi, Pritam and more
                </h1>
              </div>
            </div>
            <div className="w-[16.5%] p-3 hover:bg-[#ffffff10] rounded-lg space-y-2  group cursor-pointer">
              <div className="relative">
                <img
                  className="rounded-md"
                  src="/public/image/playlist22.jpeg"
                  alt=""
                />
                <div className="px-3 py-3  bg-green hover:bg-[#3BE477] rounded-full opacity-0 group-hover:opacity-100 absolute bottom-2 right-2">
                  <IoMdPlay className="text-2xl" />
                </div>
              </div>
              <div>
                <h1 className="text-[#B3B3A5] font-spotify text-sm">
                  Arijit Singh, Amit Trivedi, Pritam and more
                </h1>
              </div>
            </div>
            <div className="w-[16.5%] p-3 hover:bg-[#ffffff10] rounded-lg space-y-2  group cursor-pointer">
              <div className="relative">
                <img
                  className="rounded-md"
                  src="/public/image/playlist23.jpeg"
                  alt=""
                />
                <div className="px-3 py-3  bg-green hover:bg-[#3BE477] rounded-full opacity-0 group-hover:opacity-100 absolute bottom-2 right-2">
                  <IoMdPlay className="text-2xl" />
                </div>
              </div>
              <div>
                <h1 className="text-[#B3B3A5] font-spotify text-sm">
                  Arijit Singh, Amit Trivedi, Pritam and more
                </h1>
              </div>
            </div>
            <div className="w-[16.5%] p-3 hover:bg-[#ffffff10] rounded-lg space-y-2  group cursor-pointer">
              <div className="relative">
                <img
                  className="rounded-md"
                  src="/public/image/playlist24.jpeg"
                  alt=""
                />
                <div className="px-3 py-3  bg-green hover:bg-[#3BE477] rounded-full opacity-0 group-hover:opacity-100 absolute bottom-2 right-2">
                  <IoMdPlay className="text-2xl" />
                </div>
              </div>
              <div>
                <h1 className="text-[#B3B3A5] font-spotify text-sm">
                  Arijit Singh, Amit Trivedi, Pritam and more
                </h1>
              </div>
            </div>
            <div className="w-[16.5%] p-3 hover:bg-[#ffffff10] rounded-lg space-y-2  group cursor-pointer">
              <div className="relative">
                <img
                  className="rounded-md"
                  src="/public/image/playlist25.jpeg"
                  alt=""
                />
                <div className="px-3 py-3  bg-green hover:bg-[#3BE477] rounded-full opacity-0 group-hover:opacity-100 absolute bottom-2 right-2">
                  <IoMdPlay className="text-2xl" />
                </div>
              </div>
              <div>
                <h1 className="text-[#B3B3A5] font-spotify text-sm">
                  Arijit Singh, Amit Trivedi, Pritam and more
                </h1>
              </div>
            </div>
          </div>
        </div>
        <div>
          <div className="flex justify-between items-center mt-14">
            <h1 className="text-2xl font-bold font-spotify text-white hover:underline cursor-pointer ">
              Recentlty played
            </h1>
            <button className="text-sm text-white font-spotify cursor-pointer font-bold">
              Show All
            </button>
          </div>
          <div className="flex flex-wrap pt-5">
            <div className="w-[16.5%] p-3 hover:bg-[#ffffff10] rounded-lg space-y-2  group cursor-pointer">
              <div className="relative">
                <img
                  className="rounded-md"
                  src="/public/image/playlist13.jpg"
                  alt=""
                />
                <div className="px-3 py-3  bg-green hover:bg-[#3BE477] rounded-full opacity-0 group-hover:opacity-100 absolute bottom-2 right-2">
                  <IoMdPlay className="text-2xl" />
                </div>
              </div>
              <div>
                <h1 className="text-[#B3B3A5] font-spotify text-sm">
                  Arijit Singh, Amit Trivedi, Pritam and more
                </h1>
              </div>
            </div>
            <div className="w-[16.5%] p-3 hover:bg-[#ffffff10] rounded-lg space-y-2  group cursor-pointer">
              <div className="relative">
                <img
                  className="rounded-md"
                  src="/public/image/playlist14.jpg"
                  alt=""
                />
                <div className="px-3 py-3  bg-green hover:bg-[#3BE477] rounded-full opacity-0 group-hover:opacity-100 absolute bottom-2 right-2">
                  <IoMdPlay className="text-2xl" />
                </div>
              </div>
              <div>
                <h1 className="text-[#B3B3A5] font-spotify text-sm">
                  Arijit Singh, Amit Trivedi, Pritam and more
                </h1>
              </div>
            </div>
            <div className="w-[16.5%] p-3 hover:bg-[#ffffff10] rounded-lg space-y-2  group cursor-pointer">
              <div className="relative">
                <img
                  className="rounded-md"
                  src="/public/image/playlist15.jpg"
                  alt=""
                />
                <div className="px-3 py-3  bg-green hover:bg-[#3BE477] rounded-full opacity-0 group-hover:opacity-100 absolute bottom-2 right-2">
                  <IoMdPlay className="text-2xl" />
                </div>
              </div>
              <div>
                <h1 className="text-[#B3B3A5] font-spotify text-sm">
                  Arijit Singh, Amit Trivedi, Pritam and more
                </h1>
              </div>
            </div>
            <div className="w-[16.5%] p-3 hover:bg-[#ffffff10] rounded-lg space-y-2  group cursor-pointer">
              <div className="relative">
                <img
                  className="rounded-md"
                  src="/public/image/playlist16.jpg"
                  alt=""
                />
                <div className="px-3 py-3  bg-green hover:bg-[#3BE477] rounded-full opacity-0 group-hover:opacity-100 absolute bottom-2 right-2">
                  <IoMdPlay className="text-2xl" />
                </div>
              </div>
              <div>
                <h1 className="text-[#B3B3A5] font-spotify text-sm">
                  Arijit Singh, Amit Trivedi, Pritam and more
                </h1>
              </div>
            </div>
            <div className="w-[16.5%] p-3 hover:bg-[#ffffff10] rounded-lg space-y-2  group cursor-pointer">
              <div className="relative">
                <img
                  className="rounded-md"
                  src="/public/image/playlist17.jpg"
                  alt=""
                />
                <div className="px-3 py-3  bg-green hover:bg-[#3BE477] rounded-full opacity-0 group-hover:opacity-100 absolute bottom-2 right-2">
                  <IoMdPlay className="text-2xl" />
                </div>
              </div>
              <div>
                <h1 className="text-[#B3B3A5] font-spotify text-sm">
                  Arijit Singh, Amit Trivedi, Pritam and more
                </h1>
              </div>
            </div>
            <div className="w-[16.5%] p-3 hover:bg-[#ffffff10] rounded-lg space-y-2  group cursor-pointer">
              <div className="relative">
                <img
                  className="rounded-md"
                  src="/public/image/playlist18.jpeg"
                  alt=""
                />
                <div className="px-3 py-3  bg-green hover:bg-[#3BE477] rounded-full opacity-0 group-hover:opacity-100 absolute bottom-2 right-2">
                  <IoMdPlay className="text-2xl" />
                </div>
              </div>
              <div>
                <h1 className="text-[#B3B3A5] font-spotify text-sm">
                  Arijit Singh, Amit Trivedi, Pritam and more
                </h1>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
