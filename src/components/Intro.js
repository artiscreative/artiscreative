import React from "react";
import img from "../images/Web-developer.svg";
import { Link } from "react-router-dom";

const Intro = () => {
  return (
    <>
      <div className="m-auto max-w-6xl p-2 md:p-12 h-5/6" id="about">
        <div className="flex flex-col-reverse lg:flex-row py-8 justify-between lg:text-left" data-aos="fade-up">
          <div className="lg:w-1/2 flex flex-col lg:mx-4 justify-center">
            <img alt="card img" className="rounded-t float-right" src={img} />
          </div>
          <div
            className="flex-col my-4 text-center lg:text-left lg:my-0 lg:justify-end w-full lg:w-1/2 px-8"
            data-aos="zoom-in"
            data-aos-delay="500"
          >
            <h3 className="text-2xl  text-gray-900 font-bold">
              브랜드에 대한 창의적 해석과 <br />
              Data 기반의 전략적 마케팅으로 <br />
              브랜드 가치를 높입니다.
            </h3>
            <div>
              <p className="my-3 text-lg text-gray-600 font-semibold">
                국내 최고의 크리에이터들과 콘텐츠를 만들어 나가며 <br />
                글로벌 기업들과 지속적 협업을 지속해 나가고 있습니다.
              </p>
            </div>

            <div>
              <p className="my-3 text-lg text-gray-600 font-semibold">
                카테고리별 전문가의 시각으로 브랜드 인사이트를 고민하며 <br />
                IT최신의 기술을 사용하되 마케팅 본질을 놓치지 않습니다 <br />
                마케터들과 함께 데이터를 분석하고 전략을 수립합니다.
              </p>
            </div>
            <Link
              to="/contact"
              className="text-white bg-gray-900 hover:bg-gray-800 inline-flex items-center justify-center w-full px-6 py-2 my-4 text-lg shadow-xl rounded-2xl sm:w-auto sm:mb-0 group"
            >
              Contact us
              <svg
                className="w-4 h-4 ml-1 group-hover: translate-x-2"
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
      </div>
    </>
  );
};

export default Intro;
