"use client"
import React, { useState } from 'react';

// Define a type for individual FAQ items
type FaqItem = {
  name: string;
  content: string;
};

const Faq: React.FC = () => {
  // State to manage the open status of each accordion item
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const handleToggle = (index: number) => {
    // Toggle the accordion item
    setOpenIndex(openIndex === index ? null : index);
  };

  // Define your FAQ data
  const navigation: FaqItem[] = [
    { 
      name: 'Can I cancel at anytime?', 
      content: 'Yes, you can cancel anytime no questions are asked while you cancel but we would highly appreciate if you will give us some feedback.' 
    },
    { 
      name: 'My team has credits. How do we use them?', 
      content: 'Once your team signs up for a subscription plan. This is where we sit down, grab a cup of coffee and dial in the details.' 
    },
    { 
      name: "How does Preline's pricing work?", 
      content: 'Our subscriptions are tiered. Understanding the task at hand and ironing out the wrinkles is key.' 
    },
    { 
      name: 'How secure is Preline?', 
      content: 'Protecting the data you trust to Preline is our first priority. This part is really crucial in keeping the project in line to completion.' 
    },
    { 
      name: 'How do I get access to a theme I purchased?', 
      content: 'If you lose the link for a theme you purchased, don\'t panic! We\'ve got you covered. You can login to your account, tap your avatar in the upper right corner, and tap Purchases. If you didn\'t create a login or can\'t remember the information, you can use our handy Redownload page, just remember to use the same email you originally made your purchases with.' 
    },
    { 
      name: 'Upgrade License Type', 
      content: 'There may be times when you need to upgrade your license from the original type you purchased and we have a solution that ensures you can apply your original purchase cost to the new license purchase.' 
    },
  ];

  return (
    <div>
      <div className="max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto">
        <div className="max-w-2xl mx-auto text-center mb-10 lg:mb-14">
          <h2 className="text-2xl text-black font-bold md:text-4xl md:leading-tight">Your questions, answered</h2>
          <p className="mt-1 text-gray-600">Answers to the most frequently asked questions.</p>
        </div>

        <div className="max-w-2xl mx-auto">
          {navigation.map((item, index) => (
            <div key={item.name} className="hs-accordion hs-accordion-active:bg-gray-100 rounded-xl p-6">
              <button
                onClick={() => handleToggle(index)}
                className="hs-accordion-toggle group pb-3 inline-flex items-center justify-between gap-x-3 w-full md:text-lg font-semibold text-start text-gray-800 rounded-lg transition hover:text-gray-500"
                aria-expanded={openIndex === index}
              >
                {item.name}
                <svg className="hs-accordion-active:hidden block flex-shrink-0 w-5 h-5 text-gray-600 group-hover:text-gray-500 dark:text-gray-400" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m6 9 6 6 6-6"/></svg>
                <svg className="hs-accordion-active:block hidden flex-shrink-0 w-5 h-5 text-gray-600 group-hover:text-gray-500 dark:text-gray-400" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m18 15-6-6-6 6"/></svg>
              </button>
              <div 
                className={`hs-accordion-content overflow-hidden transition-[height] duration-300 ${openIndex === index ? 'block' : 'hidden'}`}
              >
                <p className="text-gray-800">
                  {item.content}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Faq;
