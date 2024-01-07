import React from 'react'
import Hero from '@/components/hero'
import Cta from '@/components/cta'
import FAQ from '@/components/faq'
import Api from '@/components/api'
import Features from '@/components/features'
import Intergration from '@/components/intergrations'
import MoreFeatures from '@/components/morefeatures'

function page() {
  return (
    <div className=' h-full bg-white'>
      <Hero/>
      <Features/>
      <Api/>
      <MoreFeatures/>
      <FAQ/>
      <Cta/>
      <Intergration/>

    </div>
  )
}

export default page
