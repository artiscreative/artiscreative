import React from "react";
import { HashLink } from "react-router-hash-link";

const NavLinks = () => {
  return (
    <>
      <div className="text-sm md:text-base">
        <HashLink className="px-4 font-extrabold text-gray-500 hover:text-gray-900" smooth to="/#about">
          About
        </HashLink>
        <HashLink className="px-4 font-extrabold text-gray-500 hover:text-gray-900" smooth to="/#services">
          Services
        </HashLink>
        <HashLink className="px-4 font-extrabold text-gray-500 hover:text-gray-900" to="/#partners">
          Partners
        </HashLink>
        <HashLink className="px-4 font-extrabold text-gray-500 hover:text-gray-900" to="/">
          Contact Us
        </HashLink>
        {/* <HashLink
          className="text-white bg-gray-600 hover:bg-gray-900 inline-flex items-center justify-center w-auto px-6 py-3 shadow-xl rounded-xl"
          smooth
          to="/get-demo#demo"
        >
          문의하기
        </HashLink> */}
      </div>
    </>
  );
};

export default NavLinks;
