// import { LocateIcon } from 'lucide-react';
// import Image from 'next/image';
// import React from 'react';

// const PropertyCard = ({ image, tag, price, title, location, description, newTag, bathroom, garage, space }) => {
//   return (
//     <div className="col-span-1 md:col-span-1 lg:col-span-1 xl:col-span-1 mb-8">
//       <div className="single-featured-property bg-white shadow-md rounded-lg overflow-hidden">
//         {/* Property Thumbnail */}
//         <div className="property-thumb relative">
//           <img src={image} alt=""  className="w-full h-64 object-cover" />
//           {/* {tag && (
//             <div className="absolute top-2 left-2 bg-amber-800 text-white px-3 py-1 rounded">
//               <span>{tag}</span>
//             </div>
//           )} */}
//           {price && (
//             <div className="absolute bottom-2 left-2 bg-white text-teal-950 px-3 py-1 rounded">
//               <p>{price}</p>
//             </div>
//           )}
//         </div>
//         {/* Property Content */}
//         <div className="property-content p-4">
//           <h5 className="text-lg font-semibold mb-2">{title}</h5>
//           <p className="location text-teal-900 mb-2 font-bold">
//             <img src="img/icons/location.png" alt=""  />
//             <LocateIcon className="inline-block w-4 h-4 mr-2"/>
//             {location}
//           </p>
//           <p className="text-gray-700 mb-4 ">{description}</p>
//           <div className="property-meta-data flex items-center justify-between">
//             {newTag && (
//               <div className="new-tag">
//                 <img src="img/icons/new.png" alt="" className="w-6 h-6" />
//               </div>
//             )}
//             {bathroom && (
//               <div className="bathroom flex items-center">
//                 <img src="img/icons/bathtub.png" alt="" className="w-6 h-6 mr-1" />
//                 <span>{bathroom}</span>
//               </div>
//             )}
//             {garage && (
//               <div className="garage flex items-center">
//                 <img src="img/icons/garage.png" alt="" className="w-6 h-6 mr-1" />
//                 <span>{garage}</span>
//               </div>
//             )}
//             {space && (
//               <div className="space flex items-center">
//                 <img src="img/icons/space.png" alt="" className="w-6 h-6 mr-1" />
//                 <span>{space}</span>
//               </div>
//             )}
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default PropertyCard;


import React from 'react';
import { Heart, MapPin, Bed, Bath, Move } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';

const PropertyCard = ({ title,slug, price, address, beds, baths, size, tags, imageUrl }) => {
  return (
    <div className="box-dream border p-4 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
      <Link href={`/properties/${slug}`}>
      <div className="relative">
        {/* <div className="absolute top-2 left-2 space-x-2">
          {tags && tags.map((tag, idx) => (
            <span key={idx} className="bg-gray-200 text-gray-700 px-2 py-1 rounded">
              {tag}
            </span>
          ))}
        </div> */}
        <div className="absolute top-2 right-2">
          <Heart className="text-red-500 w-6 h-6" />
        </div>
        
        <div className="h-64 bg-gray-300">
          <Image height={500} width={500} src={imageUrl} alt="" className="w-full h-64 object-cover" />
        </div>
      </div>
      <div className="content mt-4">
        <div className="head flex justify-between items-center">
          <div className="title font-semibold text-lg text-gray-700">{title}</div>
          <div className="price text-lg font-semibold text-green-600">{price}</div>
        </div>
        <div className="location mt-2 flex items-center text-gray-500">
          <MapPin className="w-4 h-4 mr-2 text-gray-800" />
          <p>{address}</p>
        </div>
        <div className="icon-box mt-4 flex justify-between text-gray-500">
          <div className="item flex items-center">
            <Bed className="w-4 h-4 mr-2 text-gray-800" />
            <p>{beds} Beds</p>
          </div>
          <div className="item flex items-center">
            <Bath className="w-4 h-4 mr-2 text-gray-800" />
            <p>{baths} Baths</p>
          </div>
          <div className="item flex items-center">
            <Move className="w-4 h-4 mr-2 text-gray-800" />
            <p>{size}</p>
          </div>
        </div>
      </div>
      </Link>
    </div>
  );
};

export default PropertyCard;
