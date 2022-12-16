import React from "react";
import { useState } from "react";
const Seller = () => {
  const [Hide, setHide] = useState({
    show: "flex",
    hide: "hidden"
  });
  const hideTheSection = () => {
    setHide({
      show: "hidden",
      hide: "flex"
    });
  };
  return (
    <>
      <section className={` ${Hide.show} text-gray-600 body-font `}>
        <div className="container px-5 py-24 mx-auto">
          <div className="flex flex-wrap w-full mb-20 flex-col items-center text-center">
            <h1 className="sm:text-3xl text-2xl font-medium title-font mb-2 text-gray-900">
              Why sell on XD STORE?
            </h1>
            <p className="lg:w-1/2 w-full leading-relaxed text-gray-500">
              We provide best services in all over the country.
            </p>
          </div>
          <div className="flex flex-wrap -m-4">
            <div className="xl:w-1/3 md:w-1/2 p-4">
              <div className="border border-gray-200 p-6 rounded-lg">
                <div className="w-10 h-10 inline-flex items-center justify-center rounded-full bg-indigo-100 text-indigo-500 mb-4">
                  <img
                    src="https://ik.imagekit.io/egkxyv8la/Zemo_E-Commerce/images/fast-delivery_OS6aYDp5_.png?ik-sdk-version=javascript-1.4.3&updatedAt=1671186954048"
                    alt=""
                    className="w-6 h-6"
                  />
                </div>
                <h2 className="text-lg text-gray-900 font-medium title-font mb-2">
                  Sell Across India
                </h2>
                <p className="leading-relaxed text-base">
                  Reach over 50 crore+ customers across 27000+ pincodes
                </p>
              </div>
            </div>
            <div className="xl:w-1/3 md:w-1/2 p-4">
              <div className="border border-gray-200 p-6 rounded-lg">
                <div className="w-10 h-10 inline-flex items-center justify-center rounded-full bg-indigo-100 text-indigo-500 mb-4">
                  <img
                    src="https://ik.imagekit.io/egkxyv8la/Zemo_E-Commerce/images/gross-profit_J3CSxdL1j.png?ik-sdk-version=javascript-1.4.3&updatedAt=1671186954252"
                    alt=""
                    className="w-6 h-6"
                  />
                </div>
                <h2 className="text-lg text-gray-900 font-medium title-font mb-2">
                  Higher Profits
                </h2>
                <p className="leading-relaxed text-base">
                  With 0% commission* , you take 100% profits with you
                </p>
              </div>
            </div>
            <div className="xl:w-1/3 md:w-1/2 p-4">
              <div className="border border-gray-200 p-6 rounded-lg">
                <div className="w-10 h-10 inline-flex items-center justify-center rounded-full bg-indigo-100 text-indigo-500 mb-4">
                  <img
                    src="https://ik.imagekit.io/egkxyv8la/Zemo_E-Commerce/images/man_-B31SV3pR.png?ik-sdk-version=javascript-1.4.3&updatedAt=1671186954308"
                    alt=""
                    className="w-6 h-6"
                  />
                </div>
                <h2 className="text-lg text-gray-900 font-medium title-font mb-2">
                  Account Management
                </h2>
                <p className="leading-relaxed text-base">
                  Our Dedicated managers will help your business on Flipkart
                </p>
              </div>
            </div>
            <div className="xl:w-1/3 md:w-1/2 p-4">
              <div className="border border-gray-200 p-6 rounded-lg">
                <div className="w-10 h-10 inline-flex items-center justify-center rounded-full bg-indigo-100 text-indigo-500 mb-4">
                  <img
                    src="https://ik.imagekit.io/egkxyv8la/Zemo_E-Commerce/images/trend_ZFVZxQ5H5.png?ik-sdk-version=javascript-1.4.3&updatedAt=1671186954327"
                    alt=""
                    className="w-6 h-6"
                  />
                </div>
                <h2 className="text-lg text-gray-900 font-medium title-font mb-2">
                  Lower Return Charges
                </h2>
                <p className="leading-relaxed text-base">
                  With our flat and low return charges, ship your products
                  stress-free
                </p>
              </div>
            </div>
            <div className="xl:w-1/3 md:w-1/2 p-4">
              <div className="border border-gray-200 p-6 rounded-lg">
                <div className="w-10 h-10 inline-flex items-center justify-center rounded-full bg-indigo-100 text-indigo-500 mb-4">
                  <img
                    src="https://ik.imagekit.io/egkxyv8la/Zemo_E-Commerce/images/calculator_hkRvhZGoX.png?ik-sdk-version=javascript-1.4.3&updatedAt=1671186954116"
                    alt=""
                    className="w-6 h-6"
                  />
                </div>
                <h2 className="text-lg text-gray-900 font-medium title-font mb-2">
                  Simple Pricing Calculator
                </h2>
                <p className="leading-relaxed text-base">
                  Use our simple pricing calculator to decide the best and
                  competitive selling price for your product
                </p>
              </div>
            </div>
            <div className="xl:w-1/3 md:w-1/2 p-4">
              <div className="border border-gray-200 p-6 rounded-lg">
                <div className="w-10 h-10 inline-flex items-center justify-center rounded-full bg-indigo-100 text-indigo-500 mb-4">
                  <img
                    src="https://ik.imagekit.io/egkxyv8la/Zemo_E-Commerce/images/headphones_EPPFCyJCm.png?ik-sdk-version=javascript-1.4.3&updatedAt=1671186954455"
                    alt=""
                    className="w-6 h-6"
                  />
                </div>
                <h2 className="text-lg text-gray-900 font-medium title-font mb-2">
                  24x7 Seller Support
                </h2>
                <p className="leading-relaxed text-base">
                  All your queries and issues are answered by our dedicated
                  Seller Support Team
                </p>
              </div>
            </div>
          </div>
          <button
            className="flex mx-auto mt-16 text-white bg-indigo-500 border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600 rounded text-lg after:content-['➡️']"
            onClick={hideTheSection}
          >
            Continue
          </button>
        </div>
      </section>

      <section className={` ${Hide.hide} text-gray-600 body-font relative`}>
  <div className="container px-5 py-24 mx-auto">
    <div className="flex flex-col text-center w-full mb-12">
      <h1 className="sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900">Enter Your Credentials</h1>
      <p className="lg:w-2/3 mx-auto leading-relaxed text-base">This details will require to Become our Seller on our <strong>XD STORE</strong> </p>
    </div>
    <div className="lg:w-1/2 md:w-2/3 mx-auto">
      <div className="flex flex-wrap -m-2">
        <div className="p-2 w-1/2">
          <div className="relative">
            <label htmlFor="name" className="leading-7 text-sm text-gray-600">Name</label>
            <input type="text" id="name" name="name-Seller" className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-blue-500 focus:bg-white focus:ring-2 focus:ring-blue-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"/>
          </div>
        </div>
        <div className="p-2 w-1/2">
          <div className="relative">
            <label htmlFor="email" className="leading-7 text-sm text-gray-600">Email</label>
            <input type="email" id="email" name="email-Seller" className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-blue-500 focus:bg-white focus:ring-2 focus:ring-blue-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"/>
          </div>
        </div>
        <div className="p-2 w-full">
          <div className="relative">
            <label htmlFor="message" className="leading-7 text-sm text-gray-600">Enter Your Proper Address</label>
            <textarea id="message" name="message-Seller" className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-blue-500 focus:bg-white focus:ring-2 focus:ring-blue-200 h-32 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"></textarea>
          </div>
        </div>
        <div className="p-2 w-full">
          <button className="flex mx-auto text-white hover:text-green-400 bg-primary-color border-0 py-2 px-8 focus:outline-none  rounded text-lg">Submit Your Details</button>
        </div>
        <div className="p-2 w-full pt-8 mt-8 border-t border-gray-200 text-center">
          <a className="text-blue-500" href="mailto:mandorakannu@gmail.com" >mandorakannu@gmail.com</a>
          <p className="leading-normal my-5">Why Are You Locating Us?
            <br/>Why Are You Still Here
          </p>
          <span className="inline-flex">
            <span className="text-gray-500">
              <svg fill="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-5 h-5" viewBox="0 0 24 24">
                <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"></path>
              </svg>
            </span>
            <span className="ml-4 text-gray-500">
              <svg fill="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-5 h-5" viewBox="0 0 24 24">
                <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"></path>
              </svg>
            </span>
            <span className="ml-4 text-gray-500">
              <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-5 h-5" viewBox="0 0 24 24">
                <rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect>
                <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zm1.5-4.87h.01"></path>
              </svg>
            </span>
            <span className="ml-4 text-gray-500">
              <svg fill="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-5 h-5" viewBox="0 0 24 24">
                <path d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z"></path>
              </svg>
            </span>
          </span>
        </div>
      </div>
    </div>
  </div>
</section>
    </>
  );
};

export default Seller;
