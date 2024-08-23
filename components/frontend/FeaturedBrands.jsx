import Image from 'next/image';
import React from 'react';

const FeaturedBrands = () => {
  const logos = [
    
   
    { src: '/seef.png', alt: 'Seef' },
    { src: '/kenanproperties.jfif', alt: 'Kennan properties'},
    { src: '/palmgolding.png', alt: 'Palm Goldings' },
    { src: '/royal.jfif', alt: 'Royal Properties'},
    { src: '/cardinal.png', alt: 'Cardinal' }
  ];

  return (
    <section className="py-4 bg-white">
      <div className="container px-4 max-w-6xl mx-auto mb-4">
      <h1 class="mb-10 text-gray-900 text-xl mt-4 text-center">Some Of Our Trusted Agencies</h1>
    
        <div className="flex flex-wrap -m-4">
          {logos.map((logo, index) => (
            <div key={index} className="w-1/3 md:w-1/2 lg:w-1/5 p-4">
              <div className="flex w-full h-32 items-center justify-center shadow-2xl rounded-lg">
                <Image height={150} width={250} className="h-32 rounded-lg " src={logo.src} alt={logo.alt} />
                
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedBrands;
