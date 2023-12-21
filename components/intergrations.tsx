import Image from 'next/image';
import React from 'react';

const IntegrationComponent = () => {
  const integrations = [
    { name: 'Discord', logo: '/path-to-discord-logo.svg' },
    { name: 'WhatsApp', logo: '/path-to-whatsapp-logo.svg' },
    { name: 'Slack', logo: '/path-to-slack-logo.svg' },
    { name: 'Notion', logo: '/path-to-notion-logo.svg' },
    { name: 'Messenger', logo: '/path-to-messenger-logo.svg' },
    { name: 'Shopify', logo: '/path-to-shopify-logo.svg' },
    { name: 'WordPress', logo: '/path-to-wordpress-logo.svg' },
    { name: 'Zapier', logo: '/path-to-zapier-logo.svg' },
    { name: 'Webflow', logo: '/path-to-webflow-logo.svg' },
  ];

  return (
    <div className="bg-dark-900 text-white p-12">
      <div className="flex flex-wrap justify-center gap-8">
        {integrations.map((integration) => (
          <div key={integration.name} className="flex flex-col items-center p-4">
            <div className="mb-2 p-2 bg-dark-800 rounded">
              <Image
                src={integration.logo}
                alt={integration.name}
                width={40}
                height={40}
              />
            </div>
            <span>{integration.name}</span>
          </div>
        ))}
      </div>
      <div className="text-center mt-8">
        <h2 className="text-3xl font-bold mb-3">Connect with all the tools you already know and love</h2>
        <p>Connect Aidbase with a broad range of third-party tools and services.</p>
        <button className="mt-4 px-6 py-2 bg-purple-600 rounded-md shadow-lg">Coming soon!</button>
      </div>
    </div>
  );
};

export default IntegrationComponent;
