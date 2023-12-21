import React from 'react'
import Hero from '@/components/hero'
import Cta from '@/components/cta'
import FAQ from '@/components/faq'
import Features from '@/components/features'

function page() {
  return (
    <div className=' h-full bg-white'>
      <Hero/>
      <Features/>
      <FAQ/>

    </div>
  )
}

export default page
