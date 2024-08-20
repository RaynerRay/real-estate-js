import React from 'react';
import { CheckCircle } from 'lucide-react'; // Assuming you are using lucide-react for icons

const CallToAction = () => {
  return (
    <section className="py-12 lg:py-24">
      <div className="container max-w-6xl mx-auto px-4">
        <div className="max-w-2xl mx-auto text-center mb-14 md:mb-20">
          <h1 className="font-heading text-2xl sm:text-4xl mb-6">Why Choose Us?</h1>
          <p className="text-lg text-gray-700">
            Discover the advantages of buying, renting, or selling properties with our platform. Our tailored services ensure you get the best deals with maximum convenience.
          </p>
        </div>
        <div className="max-w-sm mx-auto lg:max-w-none">
          <div className="flex flex-wrap -mx-4">
            <div className="w-full lg:w-1/3 px-4 mb-12 lg:mb-0">
              <div className=''>
                <div className="mb-10 p-8 shadow-md rounded-2xl bg-white">
                  <CheckCircle className="w-14 h-14 text-green-500 mx-auto" />
                  <span className="block text-2xl font-medium mt-8 mb-4">Buying</span>
                  <p className="text-lg mb-8">
                    Find your dream home or investment property with ease. Our platform offers a wide range of properties, detailed listings, and expert support to help you make informed decisions.
                  </p>
                  <a
                    href="#"
                    className="inline-flex group w-full py-4 px-6 items-center justify-center text-lg font-medium text-black hover:text-white border border-teal-900 hover:bg-teal-900 rounded-full transition duration-200"
                  >
                    <span className="mr-2">Start Buying</span>
                    <span className="transform group-hover:translate-x-1 transition-transform duration-200">
                      <svg width="21" height="20" viewBox="0 0 21 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M5.25 10H15.75" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                        <path d="M10.5 4.75L15.75 10L10.5 15.25" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    </span>
                  </a>
                </div>
                <div>
                  <span className="block text-xl font-medium mb-6">Benefits</span>
                  <ul>
                    <li className="flex mb-4 items-center">
                      <CheckCircle className="w-5 h-5 text-green-500" />
                      <span className="ml-3">Extensive property listings</span>
                    </li>
                    <li className="flex mb-4 items-center">
                      <CheckCircle className="w-5 h-5 text-green-500" />
                      <span className="ml-3">Expert advice and support</span>
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="w-5 h-5 text-green-500" />
                      <span className="ml-3">Secure transactions</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="w-full lg:w-1/3 px-4 mb-12 lg:mb-0">
              <div>
                <div className="mb-10 p-8 shadow-md rounded-2xl bg-white">
                  <CheckCircle className="w-14 h-14 text-green-500 mx-auto" />
                  <span className="block text-2xl font-medium mt-8 mb-4">Rent Out</span>
                  <p className="text-lg mb-8">
                    Put your property on the renting market. We offer a variety of options, easy search features, and detailed property information to make the renting experience smooth and hassle-free.
                  </p>
                  <a
                    href="#"
                    className="inline-flex group w-full py-4 px-6 items-center justify-center text-lg font-medium text-black hover:text-white border border-teal-900 hover:bg-teal-900 rounded-full transition duration-200"
                  >
                    <span className="mr-2">Start Renting</span>
                    <span className="transform group-hover:translate-x-1 transition-transform duration-200">
                      <svg width="21" height="20" viewBox="0 0 21 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M5.25 10H15.75" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                        <path d="M10.5 4.75L15.75 10L10.5 15.25" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    </span>
                  </a>
                </div>
                <div>
                  <span className="block text-xl font-medium mb-6">Benefits</span>
                  <ul>
                    <li className="flex mb-4 items-center">
                      <CheckCircle className="w-5 h-5 text-green-500" />
                      <span className="ml-3">Number one marketplace for rentals in the country</span>
                    </li>
                    <li className="flex mb-4 items-center">
                      <CheckCircle className="w-5 h-5 text-green-500" />
                      <span className="ml-3">Low listing fees</span>
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="w-5 h-5 text-green-500" />
                      <span className="ml-3">User-friendly search and filter</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="w-full lg:w-1/3 px-4">
              <div>
                <div className="mb-10 p-8 bg-green-700 shadow-md rounded-2xl">
                  <CheckCircle className="w-14 h-14 text-gray-50 mx-auto" />
                  <span className="block text-2xl font-medium text-gray-50 mt-8 mb-4">Selling</span>
                  <p className="text-lg text-gray-50 opacity-80 mb-8">
                    Sell your property quickly and at the best price. Our platform provides extensive exposure, advanced marketing tools, and expert guidance to ensure a smooth selling process.
                  </p>
                  <a
                    href="#"
                    className="inline-flex group w-full py-4 px-6 items-center justify-center text-lg font-medium text-black border border-green-500 hover:border-white bg-green-50 hover:bg-white rounded-full transition duration-200"
                  >
                    <span className="mr-2">Start Selling</span>
                    <span className="transform group-hover:translate-x-1 transition-transform duration-200">
                      <svg width="21" height="20" viewBox="0 0 21 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M5.25 10H15.75" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                        <path d="M10.5 4.75L15.75 10L10.5 15.25" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    </span>
                  </a>
                </div>
                <div>
                  <span className="block text-xl font-medium mb-6">Benefits</span>
                  <ul>
                    <li className="flex mb-4 items-center">
                      <CheckCircle className="w-5 h-5 text-green-500" />
                      <span className="ml-3">Extensive property exposure</span>
                    </li>
                    <li className="flex mb-4 items-center">
                      <CheckCircle className="w-5 h-5 text-green-500" />
                      <span className="ml-3">Advanced marketing tools</span>
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="w-5 h-5 text-green-500" />
                      <span className="ml-3">Expert selling guidance</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CallToAction;
