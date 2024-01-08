'use client'

import { useState } from 'react'

interface PricingTabProps {
  yearly: boolean
  popular?: boolean
  planName: string
  price: {
    monthly: number
    yearly: number
  }
  planDescription: string
  features: string[]
}

function PricingTab(props: PricingTabProps) {
  return (
    
    <div className=" h-full">
      <div className="relative flex flex-col h-full p-6 rounded-2xl bg-gray-200  border border-slate-200 ">
        {props.popular && (
          <div className="absolute top-0 right-0 mr-6 -mt-4">
            <div className="inline-flex items-center text-xs font-semibold py-1.5 px-3 bg-emerald-500 text-white rounded-full shadow-sm shadow-slate-950/5">Most Popular</div>
          </div>
        )}
        <div className="mb-5 ">
          <div className="text-slate-900  font-semibold mb-1">{props.planName}</div>
          <div className="inline-flex items-baseline mb-2">
            <span className="text-slate-900  font-bold text-3xl">$</span>
            <span className="text-slate-90 font-bold text-4xl">{props.yearly ? props.price.yearly : props.price.monthly}</span>
            <span className="text-slate-500 font-medium">/mo</span>
          </div>
          <div className="text-sm text-slate-500 mb-5">{props.planDescription}</div>
          <p className='text-gray-500 mb-2'> Try free for 14 days</p>
          <a className="w-full inline-flex justify-center whitespace-nowrap rounded-lg bg-indigo-500 px-3.5 py-2.5 text-sm font-medium text-white shadow-sm shadow-indigo-950/10 hover:bg-indigo-600 focus-visible:outline-none focus-visible:ring " href="/earlyaccess">
            Purchase Plan
          </a>
        </div>
        <div className="text-slate-900  font-medium mb-3">Includes:</div>
        <ul className="text-slate-600 text-sm space-y-3 grow">
          {props.features.map((feature, index) => {
            return (
              <li key={index} className="flex items-center">
                <svg className="w-3 h-3 fill-emerald-500 mr-3 shrink-0" viewBox="0 0 12 12" xmlns="http://www.w3.org/2000/svg">
                  <path d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z" />
                </svg>
                <span>{feature}</span>
              </li>
            )
          })}
        </ul>
        
      </div>
    </div>
  )
}

export default function PricingTable() {
  const [yearly, setYearly] = useState<boolean>(true)

  return (
    <div className=' bg-white'>
      
    <div className=" text-center py-20 ">
      <div className="text-gray-800">
        <h2 className="text-4xl font-bold md:text-5xl md:leading-none">Pay As You Grow</h2>
      </div>
      <p className="mx-auto mt-2  max-w-3xl text-gray-800">Explore Our Tailored Solutions: Find the Ideal Package for Your Business Needs.</p>
    </div>

      {/* Pricing toggle */}
      <div className="flex justify-center max-w-[14rem] m-auto mb-8 lg:mb-16 ">
        <div className="relative flex w-full p-1 bg-gray-200 rounded-full">
          <span className="absolute inset-0 m-1 pointer-events-none" aria-hidden="true">
            <span className={`absolute inset-0 w-1/2 bg-indigo-500 rounded-full shadow-sm shadow-indigo-950/10 transform transition-transform duration-150 ease-in-out ${yearly ? 'translate-x-0' : 'translate-x-full'}`}></span>
          </span>
          <button
            className={`relative flex-1 text-sm font-medium h-8 rounded-full focus-visible:outline-none focus-visible:ring focus-visible:ring-indigo-300`}
            onClick={() => setYearly(true)}
            // aria-pressed={isAnnual}
          >
            Yearly <span className={`${yearly ? 'text-gray-700' : 'text-slate-400'}`}>-20%</span>
          </button>
          <button
            className={`relative flex-1 text-sm font-medium h-8 rounded-full focus-visible:outline-none focus-visible:ring focus-visible:ring-indigo-300 `}
            onClick={() => setYearly(false)}
            // aria-pressed={isAnnual}
          >
            Monthly
          </button>
        </div>
      </div>

      <div className="max-w-5xl mx-auto grid gap-6 px-4 sm:px-6 lg:grid-cols-3  text-black lg:max-w-none">

        {/* Pricing tab 1 */}
        <PricingTab
          yearly={yearly}
          planName="Essential"
          price={{ yearly: 20, monthly: 220 }}
          planDescription="New businesses or individuals just starting their online store."
          features={[
            'Chatbots Assistants',
            'Social Media Integration',
            'Customizable checkout',
            'Basic SEO features',
            'Basic analytics and reporting',
          ]} />

        {/* Pricing tab 2 */}
        <PricingTab
          yearly={yearly}
          popular={true}
          planName="Perform"
          price={{ yearly: 33, monthly: 396 }}
          planDescription="Large businesses with high volumes of sales and traffic."
          features={[
            'Everything in Starter',
            'Email marketing tools',
            'Advanced analytics and reporting',
            'Multi-language support',
            'Higher product limit (e.g., up to 500 products)',
            'Chat and email support',
          ]} />

        {/* Pricing tab 3 */}
        <PricingTab
          yearly={yearly}
          planName="Enterprise"
          price={{ yearly: 70, monthly: 840 }}
          planDescription="There are many variations available, but the majority have suffered."
          features={[
            'Everything in Perform plan',
            'Custom domain',
            'up to 1000 users',
            'Chatbots Assistants',
            'Social Media Integration',
            'Customizable checkout',
            'Advanced SEO features',
            'Integration with external services (CRM, ERP,Quickbooks)',
          ]} />

      </div>

    </div>
  )
}