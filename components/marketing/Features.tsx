import React from "react";

export default function Features() {
  return (
    <div>
      <section className="pt-28 pb-40 bg-white overflow-hidden">
        <div className="container px-10 mx-auto">
          <h2 className="mb-20  text-6xl md:text-8xl xl:text-10xl font-bold font-heading tracking-px-n leading-none">
            Empower Your Financial Journey Abroad
          </h2>
          <div className="flex flex-wrap xl:items-start  ">
            <div className="w-full  ">
              <a className="block overflow-hidden rounded-3xl" href="#">
                <img
                  className="w-full transform hover:scale-105 transition ease-in-out duration-1000"
                  src="https://images.pexels.com/photos/1267338/pexels-photo-1267338.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                  alt=""
                />
              </a>
            </div>
            <div className="w-full  p-8 ">
              <div className="">
                <div className="mb-11 pb-20 border-b">
                  <h3 className="text-lg font-semibold md:max-w-xl">
                    Join us today and take the first step towards achieving your
                    dreams. Apply now for our banking and loan services for
                    migrant workers going abroad.
                  </h3>
                </div>
                <div className="flex flex-wrap flex-row gap-12">
                  <div className="w-auto md:w-1/3 ">
                    <div className="md:max-w-xs">
                      <h3 className="mb-4 text-lg text-[#004AAD] font-semibold">
                        Expert Financial Advice
                      </h3>
                      <p className="text-gray-900 font-medium">
                        Our team of financial experts has years of experience in
                        the industry and is dedicated to providing you with the
                        best possible advice and support.
                      </p>
                    </div>
                  </div>
                  <div className="w-auto md:w-1/3 8">
                    <div className="md:max-w-xs">
                      <h3 className="mb-4 text-lg text-[#004AAD] font-semibold">
                        Flexible Repayment Options
                      </h3>
                      <p className="text-gray-900 font-medium">
                        We understand that everyoneʼs financial situation is
                        different. Thatʼs why we offer flexible repayment
                        options to make sure you can pay back the loan on your
                        own terms.
                      </p>
                    </div>
                  </div>
                  <div className="w-auto md:w-1/3 ">
                    <div className="md:max-w-xs">
                      <h3 className="mb-4 text-lg text-[#004AAD] font-semibold">
                        Competitive Interest Rates
                      </h3>
                      <p className="text-gray-900 font-medium">
                        Our interest rates range from 12- 30% annually, which
                        means you get the best possible rate for your loan.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
