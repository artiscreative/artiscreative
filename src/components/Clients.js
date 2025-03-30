import React from "react";
import kws from "../images/clients/kws.png";
import geps from "../images/clients/geps.png";
import protergia from "../images/clients/protergia.png";

const clientImage = {
  height: "10rem",
  width: "auto",
  mixBlendMode: "colorBurn",
};

const Clients = () => {
  return (
    <div className="mt-8 bg-white-100">
      <section data-aos="fade-up" id="partners">
        <div className="my-4 py-4">
          <h2 className="my-2 text-center text-3xl text-blue-900 uppercase font-bold">Partners</h2>
          <div className="flex justify-center">
            <div className="w-24 border-b-4 border-blue-900"></div>
          </div>
          <h2 className="mt-4 mx-12 text-center text-xl lg:text-2xl font-semibold text-blue-900">
            우리의 오랜 파트너들
          </h2>
        </div>

        <div className="p-16" data-aos="fade-in" data-aos-delay="600">
          <div className="grid sm:grid-cols-3 lg:grid-cols-7">
            <div
              style={clientImage}
              className="overflow-hidden flex justify-center transition-all ease-in-out opacity-50 hover:opacity-100 w-1/6"
            >
              <img src="/partners/partner_usj.png" alt="partner_usj" />
            </div>

            <div
              style={clientImage}
              className="overflow-hidden p-3 flex justify-center transition-all ease-in-out opacity-50 hover:opacity-100"
            >
              <img src="/partners/partner_jrw.png" alt="partner_jrw" />
            </div>

            <div
              style={clientImage}
              className="overflow-hidden p-3 flex justify-center transition-all ease-in-out opacity-50 hover:opacity-100"
            >
              <img src="/partners/partner_harukas.png" alt="partner_harukas" />
            </div>

            <div
              style={clientImage}
              className="overflow-hidden flex justify-center transition-all ease-in-out opacity-50 hover:opacity-100 w-1/6"
            >
              <img src="/partners/partner_teamlab.png" alt="partner_teamlab" />
            </div>

            <div
              style={clientImage}
              className="overflow-hidden flex justify-center transition-all ease-in-out opacity-50 hover:opacity-100 w-1/6"
            >
              <img src="/partners/partner_luo.png" alt="partner_luo" />
            </div>

            <div
              style={clientImage}
              className="overflow-hidden flex justify-center transition-all ease-in-out opacity-50 hover:opacity-100 w-1/6"
            >
              <img src="/partners/partner_seibu.png" alt="partner_seibu" />
            </div>

            <div
              style={clientImage}
              className="overflow-hidden flex justify-center transition-all ease-in-out opacity-50 hover:opacity-100 w-1/6"
            >
              <img src="/partners/partner_tokyo1.png" alt="partner_tokyo1" />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Clients;
