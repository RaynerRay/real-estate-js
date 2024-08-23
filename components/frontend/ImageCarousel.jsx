
"use client";

import { Carousel } from "flowbite-react";
import Image from "next/image";

export function ImageCarousel({images}) {
  
  return (
    <div className="h-56 sm:h-64 xl:h-80 2xl:h-96 max-w-3xl">
      <Carousel slide={false}>
        {images.map((image, i) => (
         
            <Image key={i} height={1000} width={1000} className="object-fit" src={image} alt="..." />
          )
        )}
      </Carousel>
    </div>
  );
}
