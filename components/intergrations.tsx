import React from "react";
import Facebook from "@/public/icons8-facebook.svg";
import Quickbooks from "@/public/icons8-quickbooks-32.png";
import Whatsapp from "@/public/icons8-whatsapp-24.png"
import Shopify from "@/public/icons8-shopify-96.png"
import Instagram from "@/public/icons8-instagram-48.png"
import Image from "next/image";

const CtaCard = () => {
  return (
    <div className="flex min-h-screen items-center justify-center px-4 rounded bg-gray-900 text-white">
      <div className="container mx-auto flex flex-col lg:flex-row items-center justify-between px-4">
        <div className="mt-10 lg:mt-0 lg:w-1/2">
          {/* Replace with your own image URL */}
          <div className="flex flex-col space-y-4">
            {/* First Row */}
            <div className="flex items-center gap-4">
              <div className=" flex border rounded-xl p-2 items-center space-x-2 border-gray-700 bg-slate-900">
                <Image src={Facebook} alt="Facebook" width={60} height={60}  />
                <span>Facebook</span>
              </div>
              <div className=" flex border rounded-xl p-2 items-center space-x-2 border-gray-700 bg-slate-900">
                <Image src={Quickbooks} alt="Quickbooks" width={60} height={60}  />
                <span>Quickbooks</span>
              </div>
              <div className=" flex border rounded-xl p-2 items-center space-x-2 border-gray-700 bg-slate-900">
                <Image src={Whatsapp} alt="Whatsapp" width={60} height={60}  />
                <span>Whatsapp</span>
              </div>
            </div>
            {/* Second Row */}
            <div className="flex items-center gap-4">
            <div className=" flex border rounded-xl p-2 items-center space-x-2 border-gray-700 bg-slate-900">
                <Image src={Shopify} alt="Shopify" width={60} height={60} />
                <span>Shopify</span>
              </div>
              <div className=" flex border rounded-xl p-2 items-center space-x-2 border-gray-700 bg-slate-900">
                <Image src={Instagram} alt="Instagram" width={60} height={60}  />
                <span>Instagram</span>
              </div>
              <div className=" flex border rounded-xl p-2 items-center space-x-2 border-gray-700 bg-slate-900">
                <Image src={Facebook} alt="Facebook" width={60} height={60} />
                <span>Facebook</span>
              </div>
            </div>
            {/* Third Row */}
            <div className="flex items-center gap-4">
            <div className=" flex border rounded-xl p-2 items-center space-x-2 border-gray-700 bg-slate-900">
                <Image src={Facebook} alt="Facebook" width={60} height={60}  />
                <span>Facebook</span>
              </div>
              <div className=" flex border rounded-xl p-2 items-center space-x-2 border-gray-700 bg-slate-900">
                <Image src={Facebook} alt="Facebook" width={60} height={60} />
                <span>Facebook</span>
              </div>
              <div className=" flex border rounded-xl p-2 items-center space-x-2 border-gray-700 bg-slate-900">
                <Image src={Facebook} alt="Facebook" width={60} height={60} />
                <span>Facebook</span>
              </div>
            </div>
          </div>
        </div>

        <div className="lg:w-1/2">
          <h1 className="text-4xl font-bold leading-tight">
            Connect with all the tools you already know and love
          </h1>
          <p className="mt-4 text-lg">
            Connect Soko Yangu with a broad range of third-party tools and
            services.
          </p>
          <button className="mt-8 flex items-center justify-center px-6 py-3 bg-blue-700 rounded-md shadow hover:bg-blue-800 focus:outline-none focus:ring-2 focus:ring-blue-800 focus:ring-offset-2">
            Coming soon
          </button>
        </div>
      </div>
    </div>
  );
};

export default CtaCard;
