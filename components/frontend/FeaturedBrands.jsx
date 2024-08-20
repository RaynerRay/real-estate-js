import Image from 'next/image';
import React from 'react';

const FeaturedBrands = () => {
  const logos = [
    
    { src: '/palmgolding.png', alt: 'Palm Goldings', height: 'h-16' },
    { src: '/seef.png', alt: 'Seef', height: 'h-16' },
    { src: '/kenanproperties.jfif', alt: 'Kennan properties', height: 'h-16' },
    { src: '/royal.jfif', alt: 'Royal Properties', height: 'h-16' },
    { src: '/cardinal.png', alt: 'Cardinal', height: 'h-16' }
  ];

  return (
    <section className="py-4 bg-gray-50">
      <div className="container px-4 max-w-6xl mx-auto mb-4">
      <h1 class="mb-10 text-gray-900 text-center">Some of our Trusted Agencies</h1>
    
        <div className="flex flex-wrap -m-4">
          {logos.map((logo, index) => (
            <div key={index} className="w-full md:w-1/2 lg:w-1/5 p-4">
              <div className="flex w-full h-32 items-center justify-center shadow-2xl rounded-lg">
                <Image height={500} width={500} className={logo.height} src={logo.src} alt={logo.alt} />
                
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedBrands;
