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
      name: 'What is your eCommerce platform about?', 
      content: 'Our platform offers a unique solution for individuals and businesses to establish an online store without the hassle of high development costs. We provide a ready-to-use, customizable eCommerce storefront that is cost-effective and efficient.' 
    },
    { 
      name: 'How does your platform work?', 
      content: 'Unlike traditional eCommerce setups that demand significant development time and expenses, our platform eliminates these barriers by providing a pre-built framework ready for immediate use. This allows users to focus on their business rather than the technical intricacies of setting up an online store.' 
    },
    { 
      name: "Can I customize my store's appearance?", 
      content: 'Yes, our platform offers a range of customization options. Users can personalize their store by choosing themes, adding their brand logo, adjusting colors, and arranging layouts to reflect their unique identity and style.' 
    },
    { 
      name: 'How secure are transactions on your platform?', 
      content: 'Security is our priority. We integrate industry-standard security measures, including secure payment gateways and data encryption, ensuring that all transactions and customer information remain protected.' 
    },
    { 
      name: 'Do I need technical expertise to use your platform?', 
      content: 'No technical expertise is required. Our platform is designed with an intuitive interface, making it user-friendly for individuals with minimal technical knowledge. We provide comprehensive guides and support to assist users at every step.' 
    },
    { 
      name: 'What types of businesses can benefit from your platform?', 
      content: 'Our platform caters to a wide range of businesses, from small startups to established enterprises. Whether you re selling physical goods, digital products, or services, our platform is adaptable to various business models.' 
    },
    { 
      name: 'Is there a limit to the number of products I can sell?', 
      content: 'No, there are no restrictions on the number of products you can sell through our platform. You have the freedom to list and manage unlimited products based on your business needs.' 
    },
    { 
      name: 'How is customer support handled for users?', 
      content: 'We offer dedicated customer support through various channels, including email, live chat, and knowledge base resources. Our support team is committed to assisting users with any queries or technical issues promptly.' 
    },
    { 
      name: 'What are the subscription plans available?', 
      content: 'We offer flexible subscription plans tailored to different business sizes and requirements. Our plans vary in features, storage, and support options, allowing users to choose the one that best suits their needs.' 
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
