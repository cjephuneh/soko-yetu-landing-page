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
    <section className="bg-white px-20 py-10 mx-auto mt-4">
      <div className="container mx-auto">
        <h1 className="text-2xl font-semibold text-gray-800 text-center capitalize lg:text-3xl">
          Explore our Features
        </h1>
        <p className="mt-4 text-gray-500 text-center">
          Discover the unique features that make our rental store platform stand out.
        </p>
        <div className="grid grid-cols-1 gap-8 mt-8 md:grid-cols-2 lg:grid-cols-3 hover:transition-shadow">
          {features.map((feature) => (
            <div key={feature.name} className="p-8 space-y-3 border-2 border-gray-300 rounded-xl">
              <feature.icon className="w-8 h-8 text-blue-500" />
              <h2 className="text-xl font-semibold text-gray-700">{feature.name}</h2>
              <p className="text-gray-500">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
