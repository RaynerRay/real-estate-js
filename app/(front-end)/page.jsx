import CallToAction from '@/components/frontend/CallToAction'
import Hero2 from '@/components/frontend/Hero2'
import PropertyList from '@/components/frontend/PropertyList'
import React from 'react'

const page = () => {
  return (
    <div >
        <div className="bg-teal-900">
        {/* <Hero /> */}
        <Hero2 />
        </div>
        <PropertyList />
        <div className="bg-gray-50 my-4">
        <CallToAction />
        </div>
       
    </div>
  )
}

export default page