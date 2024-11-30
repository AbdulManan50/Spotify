import React from "react";
import LeftBar from "../Components/LeftBar";
import Rightbar from "../Components/Rightbar";

export default function Home() {
  return (
    <>
      <div className="bg-black h-full">
        <div className="w-[94%]  ml-auto">
          <Rightbar />
        </div>
      </div>
    </>
  );
}
