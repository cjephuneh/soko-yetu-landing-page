import React from 'react';
// import Faceboo

const CtaCard = () => {
  return (
    <div className="flex min-h-screen items-center justify-center px-4 rounded bg-gray-900 text-white">
      <div className="container mx-auto flex flex-col lg:flex-row items-center justify-between px-4">
        
        <div className="mt-10 lg:mt-0 lg:w-1/2">
          {/* Replace with your own image URL */}
          <div className="flex flex-col">
            {/* First Row */}
            <div className="flex items-center">
              <div className="social-media-item">
                <img src="/images/social-media-1.svg" alt="Social Media 1" />
                <span>Social Media 1</span>
              </div>
              <div className="social-media-item">
                <img src="/images/social-media-2.svg" alt="Social Media 2" />
                <span>Social Media 2</span>
              </div>
              <div className="social-media-item fade-effect">
                <img src="/images/social-media-3.svg" alt="Social Media 3" />
                <span>Social Media 3</span>
              </div>
            </div>
            {/* Second Row */}
            <div className="flex items-center">
              <div className="social-media-item">
                <img src="/images/social-media-4.svg" alt="Social Media 4" />
                <span>Social Media 4</span>
              </div>
              <div className="social-media-item">
                <img src="/images/social-media-5.svg" alt="Social Media 5" />
                <span>Social Media 5</span>
              </div>
              <div className="social-media-item fade-effect">
                <img src="/images/social-media-6.svg" alt="Social Media 6" />
                <span>Social Media 6</span>
              </div>
            </div>
            {/* Third Row */}
            <div className="flex items-center">
              <div className="social-media-item">
                <img src="/images/social-media-7.svg" alt="Social Media 7" />
                <span>Social Media 7</span>
              </div>
              <div className="social-media-item">
                <img src="/images/social-media-8.svg" alt="Social Media 8" />
                <span>Social Media 8</span>
              </div>
              <div className="social-media-item fade-effect">
                <img src="/images/social-media-9.svg" alt="Social Media 9" />
                <span>Social Media 9</span>
              </div>
            </div>
          </div>
        </div>

        <div className="lg:w-1/2">
          <h1 className="text-4xl font-bold leading-tight">
            Connect with all the tools you already know and love
          </h1>
          <p className="mt-4 text-lg">
            Connect Aidbase with a broad range of third-party tools and services.
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
