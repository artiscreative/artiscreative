import React from "react";
import { Link } from "react-router-dom";
import { HashLink } from "react-router-hash-link";

const Footer = () => {
  return (
    <>
      <footer>
        <div className="footer max-w-full mx-auto px-4 sm:px-6 bg-gray-100 border-t border-b py-30">
          <div className="grid sm:grid-cols-2 gap-8 py-8 md:py-12 border-t border-gray-200">
            {/* 회사 정보 컬럼 */}
            <div className="sm:col-span-1">
              <div className="p-4 sm:p-8 text-gray-500 rounded-lg mx-auto">
                <h3 className="font-bold text-2xl sm:text-3xl md:text-4xl mb-2 sm:mb-4">artiscreative</h3>
                <div className="text-sm sm:text-base md:text-md font-medium text-gray-500">
                  <h5 className="mb-2 text-base sm:text-lg md:text-xl">회사 소개</h5>
                  <p className="text-sm sm:text-base">
                    서울시 구로구 디지털로 34길 55 대륭포레스트타워 1차 B201 웍앤코
                  </p>
                  <p className="text-sm sm:text-base">이메일: hq.artiscreative@gmail.com</p>
                </div>
              </div>
            </div>

            {/* 소셜 미디어 컬럼 */}
            <div className="sm:col-span-1">
              <div className="p-4 sm:p-8 text-center">
                <h6 className="text-[#013289] text-lg sm:text-xl font-bold mb-3 sm:mb-6">FOLLOW US</h6>
                <div className="text-sm sm:text-base md:text-md font-medium mb-3 sm:mb-6">
                  소셜 미디어에서 만나보세요
                </div>
                <div className="flex justify-center gap-6 sm:gap-10">
                  {/* 인스타그램 */}
                  <a href="#" className="text-gray-600 hover:text-gray-900 transition duration-150 ease-in-out">
                    <svg
                      className="w-6 h-6 sm:w-8 sm:h-8 fill-current"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                    </svg>
                  </a>

                  {/* 유튜브 */}
                  <a href="#" className="text-gray-600 hover:text-gray-900 transition duration-150 ease-in-out">
                    <svg
                      className="w-6 h-6 sm:w-8 sm:h-8 fill-current"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
                    </svg>
                  </a>

                  {/* 네이버 블로그 */}
                  <a href="#" className="text-gray-600 hover:text-gray-900 transition duration-150 ease-in-out">
                    <svg
                      className="w-6 h-6 sm:w-8 sm:h-8 fill-current"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M16.273 12.845L7.376 0H0v24h7.726V11.155L16.624 24H24V0h-7.727z" />
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* 카피라이트 */}
          <div className="text-center py-2 sm:py-4 border-t border-gray-200">
            <div className="text-xs sm:text-sm text-gray-600">
              Copyright © {new Date().getFullYear()}{" "}
              <a href="#" className="text-gray-600 hover:text-gray-900">
                artiscreative
              </a>
              . All rights reserved.
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};
export default Footer;
