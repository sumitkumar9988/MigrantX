import React from "react";
import Image from "next/image";
import Link from "next/dist/client/link";
export default function Footer() {
  return (
    <div>
      <section className="relative   pt-28 pb-32 bg-black overflow-hidden">
        <div className="relative  container px-4 mx-auto">
          <div className="flex flex-wrap ">
            <div className="w-full md:w-1/2 p-8">
              <div className="lg:max-w-sm">
                <h2 className="mb-6 text-5xl md:text-6xl text-white font-bold tracking-px-n leading-tight">
                  Unlock Your Potential Abroad
                </h2>
                <div className="mb-6 text-[#7ED957] text-opacity-80">
                  <a href="mailto: gourav@migrantx.in">gourav@migrantx.in</a>
                </div>

                <p className="mb-6 text-[#7ED957] text-opacity-80">
                  +91 8968033002
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
            <div className="w-full md:w-1/2 p-8">
              <div className="flex flex-wrap gap-8  mb-10">
                <div className="w-full sm:w-1/3 ">
                  <ul>
                    <li className="mb-3.5">
                      <a
                        className="text-white hover:text-gray-200 font-medium leading-relaxed"
                        href="#"
                      >
                        About
                      </a>
                    </li>
                    <li className="mb-3.5">
                      <a
                        className="text-white hover:text-gray-200 font-medium leading-relaxed"
                        href="#"
                      >
                        Product
                      </a>
                    </li>
                    <li className="mb-3.5">
                      <a
                        className="text-white hover:text-gray-200 font-medium leading-relaxed"
                        href="#"
                      >
                        Testimonials
                      </a>
                    </li>
                    <li>
                      <a
                        className="text-white hover:text-gray-200 font-medium leading-relaxed"
                        href="#"
                      >
                        Services
                      </a>
                    </li>
                  </ul>
                </div>
                <div className="w-full sm:w-1/3 ">
                  <ul>
                    <li className="mb-3.5">
                      <a
                        className="text-white hover:text-gray-200 font-medium leading-relaxed"
                        href="#"
                      >
                        Docs
                      </a>
                    </li>
                    <li className="mb-3.5">
                      <a
                        className="text-white hover:text-gray-200 font-medium leading-relaxed"
                        href="#"
                      >
                        Knowledge Base
                      </a>
                    </li>
                    <li>
                      <a
                        className="text-white hover:text-gray-200 font-medium leading-relaxed"
                        href="#"
                      >
                        Insights
                      </a>
                    </li>
                  </ul>
                </div>
                <div className="w-full sm:w-1/3 ">
                  <ul>
                    <li className="mb-3.5">
                      <a
                        className="text-white hover:text-gray-200 font-medium leading-relaxed"
                        href="#"
                      >
                        Indonesia
                      </a>
                    </li>
                    <li className="mb-3.5">
                      <a
                        className="text-white hover:text-gray-200 font-medium leading-relaxed"
                        href="#"
                      >
                        USA
                      </a>
                    </li>
                    <li>
                      <a
                        className="text-white hover:text-gray-200 font-medium leading-relaxed"
                        href="#"
                      >
                        Canada
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
              <Image
                src="/images/logo2.png"
                className="bg-white rounded-md"
                alt="logo"
                width={180}
                height={80}
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
