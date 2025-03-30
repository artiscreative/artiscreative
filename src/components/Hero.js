import React from "react";
import { Link } from "react-router-dom";
import NavBar from "../components/Navbar/NavBar";
import heroImg from "../images/web-dev.svg";

const Hero = () => {
  return (
    <>
      <div className="hero" id="hero">
        <div>
          <NavBar />
        </div>

        <div className="m-auto overflow-hidden mx-4 mt-8 lg:mt-4 p-2 md:p-12 h-5/6" data-aos="zoom-in">
          <div id="hero" className="flex flex-col lg:flex-row py-8 justify-between text-center lg:text-left">
            <div className="lg:w-1/2 flex flex-col justify-center" data-aos="zoom-in" data-aos-delay="200">
              <h1 className="mb-3 text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900">
                창의성과 전략이 조화를 이루는 곳
              </h1>
              <h2 className="mb-3 text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900">
                아티스크리에이티브
              </h2>
              <div className="text-sm sm:text-base md:text-lg lg:text-xl font-semibold tracking-tight mb-5 text-gray-500">
                디지털 마케팅 | SEO | CONTENTS | KOL | ADVERTORIAL | DA | OOH
              </div>
              <div className="mb-4 space-x-0 md:space-x-2 md:mb-8">
                <Link
                  to="/contact"
                  className="text-white bg-gray-600 hover:bg-gray-900 inline-flex items-center justify-center w-full px-4 py-2 md:px-6 md:py-3 my-2 md:my-4 text-base md:text-lg shadow-xl rounded-2xl sm:w-auto sm:mb-0"
                >
                  회사소개서
                  <svg
                    className="w-3 h-3 md:w-4 md:h-4 ml-1"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                      clipRule="evenodd"
                    ></path>
                  </svg>
                </Link>
              </div>
            </div>
            <div className="flex lg:justify-end w-full lg:w-1/2" data-aos="fade-up" data-aos-delay="700">
              <img alt="Artis logo" className="rounded-t float-right duration-1000 w-full" src="/artis_logo.svg" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Hero;
