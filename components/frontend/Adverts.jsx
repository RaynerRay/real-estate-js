
"use client";

import { Carousel } from "flowbite-react";
import Image from "next/image";

export function Adverts({adverts}) {
  
  return (
    <div className="h-32 max-w-3xl mx-auto">
      <Carousel slide={true}>
        {adverts.map((advert, i) => (
         
            <Image height={200} width={600} key={i} className="relative" src={advert.imageUrl} alt="..." />
          )
        )}
      </Carousel>
    </div>
  );
}
