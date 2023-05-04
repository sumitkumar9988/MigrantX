/* eslint-disable react/no-unescaped-entities */
import Link from "next/dist/client/link";
import React from "react";

export default function About() {
  return (
    <div>
      <section className="relative pt-28 pb-32 bg-black overflow-hidden">
        <div className="relative  container px-10  mx-auto">
          <div className="mb-12 border-b border-white border-opacity-10 ">
            <h2 className=" text-6xl md:text-8xl xl:text-10xl text-white font-bold tracking-px-n leading-none md:max-w-3xl">
              We Make Your Dreams a Reality
            </h2>
          </div>
          <div className="flex flex-wrap ">
            <div className="w-full max-w-xl">
              <h2 className="mb-6 text-3xl md:text-4xl text-white font-bold tracking-px-n leading-tight">
                Trusted by Thousands of Migrant Workers
              </h2>
              <p className="mb-12 text-white text-opacity-80">
                At MigrantX, we understand the unique challenges faced by
                migrant workers. That's why we've created a suite of services
                tailored specifically to your needs. Our team has years of
                experience in the industry and is dedicated to providing you
                with the best possible advice and support.
              </p>
              <div className="md:inline-block">
                <Link href="/coming-soon">
                  <button
                    className="py-4 px-12 w-full bg-[#004AAD] font-semibold rounded-xl shadow-4xl focus:ring focus:ring-indigo-300 text-white hover:text-gray-50 transition ease-in-out duration-200"
                    type="button"
                  >
                    Contact
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
