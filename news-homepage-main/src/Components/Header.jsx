import logo from "../assets/images/logo.svg";
import navBtn from "../assets/images/icon-menu.svg";
import closeBtn from "../assets/images/icon-menu-close.svg";
import { useState } from "react";
export default function Header() {
  const [isActive, setIsActive] = useState(false);
  function handleClick() {
    setIsActive(!isActive);
  }
  return (
    <div>
      <div className="Header flex justify-between pt-7 w-full items-center">
        <div className="logoImg w-10">
          <img src={logo} alt="" />
        </div>
        <div className="Menu flex items-center gap-12 text-Dark-Gblue max-md:hidden">
          <p className=" hover:text-Soft-red cursor-pointer">Home</p>
          <p className=" hover:text-Soft-red cursor-pointer">New</p>
          <p className=" hover:text-Soft-red cursor-pointer">Popular</p>
          <p className=" hover:text-Soft-red cursor-pointer">Trending</p>
          <p className=" hover:text-Soft-red cursor-pointer">Categories</p>
        </div>
        {!isActive && (
          <button className="div-btn md:hidden" onClick={handleClick}>
            <img src={navBtn} alt="" />
          </button>
        )}
      </div>
      {isActive && (
        <div className="Menu flex flex-col text-Dark-blue absolute z-5 h-[300vh] z-10 bg-white right-0 top-0 w-1/2 md:hidden">
          <button
            type="button"
            className=" w-full flex justify-end pt-5 pr-2"
            onClick={handleClick}
          >
            <img src={closeBtn} alt="" />
          </button>
          <div className="flex flex-col gap-5 pt-20 pl-5">
            <p>Home</p>
            <p>New</p>
            <p>Popular</p>
            <p>Trending</p>
            <p>Categories</p>
          </div>
        </div>
      )}
    </div>
  );
}
