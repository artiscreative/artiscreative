import React from "react";
import img from "../images/web.svg";
import img2 from "../images/app.svg";
import img3 from "../images/hosting.svg";
import img4 from "../images/consultation.svg";

const Services = () => {
  return (
    <div id="services" className="bg-gray-100 py-12">
      <section data-aos="zoom-in-down">
        <div className="my-4 py-4">
          <h2 className="my-2 text-center text-xl sm:text-2xl md:text-3xl text-gray-900 uppercase font-bold">
            services
          </h2>
          <div className="flex justify-center">
            <div className="w-24 border-b-4 border-gray-900"></div>
          </div>
          <h2 className="mt-4 mx-6 sm:mx-12 text-center text-lg sm:text-xl lg:text-2xl font-semibold text-gray-900">
            우리는 고객의 성장과 성공에 깊이 헌신하고 있습니다
          </h2>
        </div>

        <div className="px-4 sm:px-12" data-aos="fade-down" data-aos-delay="600">
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            <div className="bg-white transition-all ease-in-out duration-400  overflow-hidden text-gray-700 hover:bg-gray-500 hover:text-white rounded-lg shadow-2xl p-3 group">
              <div className="m-2 text-justify text-sm">
                <img
                  alt="card img"
                  className="rounded-t group-hover:scale-[1.15] transition duration-1000 ease-in-out w-[400px] h-auto mx-auto"
                  src={img}
                />
                <h2 className="font-semibold my-4 sm:my-8 text-xl sm:text-2xl text-center">DIGITAL MARKETING</h2>
                <p className="text-sm sm:text-base md:text-md font-medium text-center">
                  시장조사를 통해 최적의 디지털 마케팅을 진행
                  <br />
                  데이터 분석기반 인사이트를 도출, 브랜드 성장을 리드
                </p>
              </div>
            </div>

            <div className="bg-white transition-all ease-in-out duration-400  overflow-hidden text-gray-700 hover:bg-gray-500 hover:text-white rounded-lg shadow-2xl p-3 group">
              <div className="m-2 text-justify text-sm">
                <img
                  alt="card img"
                  className="rounded-t group-hover:scale-[1.15] transition duration-1000 ease-in-out w-[400px] h-auto mx-auto"
                  src={img2}
                />
                <h2 className="font-semibold my-4 sm:my-8 text-xl sm:text-2xl text-center">KOL(Key Opinion Leader)</h2>
                <p className="text-sm sm:text-base md:text-md font-medium text-center">
                  자체 평가 기준을 통한 검증된 KOL네트워크를 보유
                  <br />
                  KOL/KOC들과 대형부터 중소형까지 다양한 프로젝트진행
                </p>
              </div>
            </div>

            <div className="bg-white transition-all ease-in-out duration-400  overflow-hidden text-gray-700 hover:bg-gray-500 hover:text-white rounded-lg shadow-2xl p-3 group">
              <div className="m-2 text-justify text-sm">
                <img
                  alt="card img"
                  className="rounded-t group-hover:scale-[1.15] transition duration-1000 ease-in-out w-[400px] h-auto mx-auto"
                  src={img3}
                />
                <h2 className="font-semibold my-4 sm:my-8 text-xl sm:text-2xl text-center ">ADVERTORIAL</h2>
                <p className="text-sm sm:text-base md:text-md font-medium text-center">
                  국내 대부분의 언론사와 다수의 진행을 지속경험 <br />
                  브랜드 인터뷰 및 프리뷰 진행
                </p>
              </div>
            </div>

            <div className="bg-white transition-all ease-in-out duration-400  overflow-hidden text-gray-700 hover:bg-gray-500 hover:text-white rounded-lg shadow-2xl p-3 group">
              <div className="m-2 text-justify text-sm">
                <img
                  alt="card img"
                  className="rounded-t group-hover:scale-[1.15] transition duration-1000 ease-in-out w-[400px] h-auto mx-auto"
                  src={img4}
                />
                <h2 className="font-semibold my-4 sm:my-8 text-xl sm:text-2xl text-center">ADVERTISING</h2>
                <p className="text-sm sm:text-base md:text-md font-medium text-center">
                  DA(Digital Advertising) 프로젝트를 진행합니다. <br />
                  OOH 및 온라인 광고를 통해 브랜드 소개를 진행합니다.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section>
        <div className="m-auto max-w-6xl p-2 md:p-12 h-5/6">
          <div className="flex flex-col-reverse lg:flex-row py-8 justify-between lg:text-left" data-aos="zoom-out">
            <div className="lg:w-1/2 flex flex-col lg:mx-4 justify-center">
              <div className="text-gray-900 mb-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="72"
                  height="72"
                  viewBox="0 0 24 24"
                  className="fill-current"
                >
                  <path d="m7.375 16.781 1.25-1.562L4.601 12l4.024-3.219-1.25-1.562-5 4a1 1 0 0 0 0 1.562l5 4zm9.25-9.562-1.25 1.562L19.399 12l-4.024 3.219 1.25 1.562 5-4a1 1 0 0 0 0-1.562l-5-4zm-1.649-4.003-4 18-1.953-.434 4-18z"></path>
                </svg>
              </div>
              <h3 className="text-3xl  text-gray-900 font-bold">
                <span className="font-black">artis</span> marketing
              </h3>
              <div>
                <p className="my-3 text-xl text-gray-600 font-semibold ">
                  IT 기술의 홍수 속에서 마케팅의 본질을 잊지 않고 한명의 아티스트의 마음자세로 브랜드의 본질을 마주하며
                  최신의 기술을 통해 시기적절하고 시장적합한 인사이트를 도출해 브랜드 성장을 리드합니다.
                </p>
              </div>
            </div>
            <div className="lg:w-1/2 flex flex-col lg:mx-4 justify-center">
              <div className="text-gray-900 mb-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="72"
                  height="72"
                  viewBox="0 0 24 24"
                  className="fill-current"
                >
                  <path d="M2 12h2a7.986 7.986 0 0 1 2.337-5.663 7.91 7.91 0 0 1 2.542-1.71 8.12 8.12 0 0 1 6.13-.041A2.488 2.488 0 0 0 17.5 7C18.886 7 20 5.886 20 4.5S18.886 2 17.5 2c-.689 0-1.312.276-1.763.725-2.431-.973-5.223-.958-7.635.059a9.928 9.928 0 0 0-3.18 2.139 9.92 9.92 0 0 0-2.14 3.179A10.005 10.005 0 0 0 2 12zm17.373 3.122c-.401.952-.977 1.808-1.71 2.541s-1.589 1.309-2.542 1.71a8.12 8.12 0 0 1-6.13.041A2.488 2.488 0 0 0 6.5 17C5.114 17 4 18.114 4 19.5S5.114 22 6.5 22c.689 0 1.312-.276 1.763-.725A9.965 9.965 0 0 0 12 22a9.983 9.983 0 0 0 9.217-6.102A9.992 9.992 0 0 0 22 12h-2a7.993 7.993 0 0 1-.627 3.122z"></path>
                  <path d="M12 7.462c-2.502 0-4.538 2.036-4.538 4.538S9.498 16.538 12 16.538s4.538-2.036 4.538-4.538S14.502 7.462 12 7.462zm0 7.076c-1.399 0-2.538-1.139-2.538-2.538S10.601 9.462 12 9.462s2.538 1.139 2.538 2.538-1.139 2.538-2.538 2.538z"></path>
                </svg>
              </div>
              <h3 className="text-3xl  text-gray-900 font-bold">
                <span className="font-black">creative</span> artists
              </h3>
              <div>
                <p className="my-3 text-xl text-gray-600 font-semibold">
                  창의적이고 트렌드를 리드하는 영향력있는 각 분야의 크리에이터들을 artists 로 모시며 네트워크를
                  구축합니다. 이들은 각 분야의 전문가로서 새로운 자극과 인사이트를 제공할 것입니다.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;
