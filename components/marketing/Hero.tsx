import React from "react";

export default function Hero() {
  return (
    <div>
      <div className="relative  overflow-hidden pt-32 pb-28">
        <div className="container  mx-auto">
          <div className="flex flex-col md:flex-row  flex-wrap xl:items-center ">
            <div className="w-full xl:flex-1 p-8 ">
              <div className="">
                <h1 className="mb-7 text-5xl md:text-7xl  font-bold font-heading tracking-px-n leading-none">
                  Banking and Loans for Migrant Workers Going Abroad
                </h1>
                <p className="mb-9 text-lg text-gray-900 font-medium md:max-w-2xl">
                  We provide banking services and loans for migrant workers
                  going abroad from India. With our competitive interest rates
                  and expert financial advice, we make it easy for you to
                  achieve your dreams. Join us today and take the first step
                  towards financial freedom.
                </p>
              </div>
            </div>
            <div className="w-full  h-full  p-8 xl:p-12">
              <div className="overflow-hidden   rounded-lg">
                <img
                  className="w-full md:w-full h-full rounded-lg transform hover:scale-105 transition ease-in-out duration-1000"
                  src="https://images.pexels.com/photos/585418/pexels-photo-585418.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                  alt=""
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
