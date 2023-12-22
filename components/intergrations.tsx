import Image from 'next/image';
import React from 'react';

const IntegrationSection = () => {
  return (
    <div className="bg-gray-900 text-white py-12">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
          {/* Example integration card */}
          <div className="flex flex-col items-center justify-center p-4">
            <div className="bg-black rounded-full p-2 mb-2">
              <Image
                src="/path-to-your-discord-logo.svg" // Replace with your image path
                alt="Discord"
                width={50}
                height={50}
              />
            </div>
            <div className="font-bold">Discord</div>
          </div>
          {/* Repeat for other integrations... */}
        </div>
        <div className="text-center mt-12">
          <h2 className="text-3xl font-bold mb-4">
            Connect with all the tools you already know and love
          </h2>
          <p className="mb-6">
            Connect Aidbase with a broad range of third-party tools and services.
          </p>
          <button className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
            Coming soon!
          </button>
        </div>
      </div>
    </div>
  );
};

export default IntegrationSection;
