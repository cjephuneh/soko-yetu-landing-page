import Image from 'next/image';
import React from 'react';
import Image1 from '@/public/dash2.png'

const CtaCard = () => {
  return (
    <div className="flex min-h-screen items-center justify-center px-4 rounded bg-gray-900 text-white">
      <div className="container mx-auto flex flex-col lg:flex-row items-center justify-between  px-5 border rounded-xl py-20">
        <div className="lg:w-1/2 ">
          <h1 className="text-5xl font-bold leading-tight">
            Stop spending too much money and time on shop development!
          
          </h1>
          <p className="mt-4 text-lg">
            Create an account for <strong>free</strong>!
          </p>
          <button className="mt-8 flex items-center justify-center px-6 py-3 bg-blue-700 rounded-md shadow hover:bg-blue-800 focus:outline-none focus:ring-2 focus:ring-blue-800 focus:ring-offset-2">
            Get started
            {/* <svg xmlns="http://www.w3.org/2000/svg" className="ml-2 h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
              <path strokeLinecap="round" strokeLinejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6" />
            </svg> */}
          </button>
        </div>
        <div className="mt-10 lg:mt-0 lg:w-1/2">
          {/* Replace with your own image URL */}
          <Image
            src={Image1}
            alt="Customer Support Image"
            width={700} // Set appropriate width
            height={700} // Set appropriate height
            className="rounded-lg"
          />
        </div>
      </div>
    </div>
  );
};

export default CtaCard;
