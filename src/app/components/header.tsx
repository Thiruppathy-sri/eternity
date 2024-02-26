import React from "react";
import Image from "next/image";
import styles from "./header.module.css";
const Header = () => {
  return (
    <div className="h-full flex flex-col justify-center items-center pt-0 pb-0">
      <div className="h-12 backdrop-filter backdrop-blur-lg bg-opacity-80 border border-opacity-10 rounded-full flex justify-between items-center px-5 shadow-md gap-x-5">
        <div>
          <a href="/" className="brand w-nav-brand" aria-label="home">
            <Image
              width={64}
              height={64}
              src="https://assets-global.website-files.com/64f9cc571abdf998881577ef/64fcc1801a7e3b2076b3c5ef_Header_Logo.svg"
              alt="logo"
              className="brand-image"
            />
          </a>
        </div>
        <nav className="h-full flex items-center font-semibold float-right relative">
          <div className="h-full grid grid-cols-3 gap-x-6 flex-row items-center pl-30 pr-30 overflow-hidden">
            <a
              href={"#"}
              className="text-gray-600 rounded-full flex flex-col justify-center items-center p-2 transition-opacity transition-color duration-200 max-w-full"
            >
              <div className="c">About</div>
            </a>
            <a
              href={"#"}
              className="text-gray-600 rounded-full flex flex-col justify-center items-center p-2 transition-opacity transition-color duration-200 max-w-full"
            >
              <div className="c">About</div>
            </a>
            <a
              href={"#"}
              className="text-gray-600 rounded-full flex flex-col justify-center items-center p-2 transition-opacity transition-color duration-200 max-w-full"
            >
              <div className="c">About</div>
            </a>
          </div>
        </nav>
        <div className="flex">
          <a
            href={"#"}
            className={`${styles["padd-btn"]} text-base text-black bg-white rounded-full shadow-md font-semibold transition duration-300 ease-in-out`}
          >
            Book
          </a>
        </div>
      </div>
    </div>
  );
};

export default Header;
