import React from 'react'
import Image from 'next/image'
import Dashboard from '@/public/api.png'

function api() {
  return (
    <div>
      <section className="mx-auto px-6 text-gray-800 md:max-w-screen-xl">
        <div className="mx-auto mt-20 mb-16 block px-6 text-center">
            <h2 className="mx-auto text-4xl font-bold md:text-5xl">Have an existing frontend store?</h2>
            <div className="mx-auto mt-6 mb-auto block w-full text-xl font-normal leading-9 text-gray-700 md:w-3/4 xl:w-3/4">
            <p className="text-lg">Our Platform empowers you with unparalleled flexibility, allowing seamless integration of your current frontend store with our advanced admin dashboard. Gain a unified command center to manage your store effortlessly while leveraging your established frontend interface.</p>
            </div>
            <div className="mt-8 text-center">
            <a className="mx-2 mb-2 inline-block rounded-md bg-blue-500 px-6 py-2 text-xl font-medium text-white shadow md:mx-4 md:mt-2 md:text-lg hover:scale-105 hover:shadow-md" href="/earlyaccess" target="_blank">Connect Now!</a>
            </div>
        </div>

        <div className='flex items-center justify-center'>
          <Image 
            src={Dashboard} 
            alt=''
            height={1050}
            width={1050}
            className="md:block hidden rounded-lg shadow-lg border-2 border-gray-200" // Tailwind classes
            />
        </div>
        </section>
    </div>
  )
}

export default api
