import React from 'react';
import { QuestionMarkCircleIcon, GlobeAltIcon, ScaleIcon, CheckCircleIcon, UserGroupIcon, SparklesIcon } from '@heroicons/react/24/outline';

const FeaturesSection = () => {
  const features = [
    {
      name: 'Customizable Stores',
      description: 'Fully customizable store layouts to match your unique brand.',
      icon: GlobeAltIcon,
    },
    {
      name: 'Integrated Payment Solutions',
      description: 'Multiple payment gateways for easy and secure transactions.',
      icon: ScaleIcon,
    },
    {
      name: 'User Management',
      description: 'Manage customer profiles, preferences, and history effortlessly.',
      icon: UserGroupIcon,
    },
    {
      name: 'Real-Time Analytics',
      description: 'Get insights into your sales and customer behavior in real-time.',
      icon: SparklesIcon,
    },
    {
      name: '24/7 Support',
      description: 'Round-the-clock support to assist you and your customers.',
      icon: QuestionMarkCircleIcon,
    },
    {
      name: 'Chat Bot Intergrations',
      description: 'You have the abiIity to add a chatbot to your store.',
      icon: CheckCircleIcon,
    },
  ];

  return (
    <div className="bg-white px-4 py-6 sm:px-6 lg:px-20 lg:py-10 mx-auto mt-4">
      <div className="container mx-auto">
        <h1 className="text-2xl font-semibold text-gray-800 text-center capitalize lg:text-3xl">
          Explore our Features
        </h1>
        <p className="mt-4 text-gray-500 text-center">
          Discover the unique features that make our rental store platform stand out.
        </p>
        <div className="grid grid-cols-1 gap-4 sm:gap-6 md:grid-cols-2 lg:grid-cols-3 mt-6 lg:gap-8">
          {features.map((feature) => (
            <div key={feature.name} className="p-4 sm:p-6 border-2 border-gray-300 rounded-xl">
              <feature.icon className="w-8 h-8 text-blue-500 mx-auto mb-3" />
              <h2 className="text-xl font-semibold text-gray-700 text-center">{feature.name}</h2>
              <p className="text-gray-500 text-center">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FeaturesSection;
