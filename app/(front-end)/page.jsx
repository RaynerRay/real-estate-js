import CallToAction from '@/components/frontend/CallToAction'
import FeaturedCategories from '@/components/frontend/FeaturedCategories'
import Hero2 from '@/components/frontend/Hero2'
import MajorTowns from '@/components/frontend/MajorTowns'
import FeaturedProperties from '@/components/frontend/FeaturedProperties'
import React from 'react'
import FeaturedBrands from '@/components/frontend/FeaturedBrands'
import { getData } from '@/lib/getData'
import NewsHome from '@/components/frontend/home/NewsHome'

import { Adverts } from '@/components/frontend/Adverts'
import { Toaster } from 'react-hot-toast'

const page = async() => {
  const blogs = await getData("blogs");
  const towns = await getData("towns");
  const adverts = await getData("adverts");
  const properties = await getData("properties");

  return (
    <div >
        <div className="">
        <Toaster position="top-center" reverseOrder={false} />
        {/* <Hero /> */}
        <Hero2 />
        
        {towns && <MajorTowns towns={towns} /> }
        {/* <FeaturedBrands /> */}
        <FeaturedCategories />
        <Adverts adverts={adverts} />
        </div>
        
        { properties && <FeaturedProperties properties={properties} /> }
        <div className="">
        <CallToAction />
       {blogs &&  <NewsHome blogs={blogs} /> }
       
        </div>
       
    </div>
  )
}

export default page