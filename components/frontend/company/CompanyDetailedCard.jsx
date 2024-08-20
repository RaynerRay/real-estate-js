import React from "react";
import { Mail, Phone, MapPin, Globe2Icon, Globe } from "lucide-react";
import Image from "next/image";

const CompanyDetailedCard = ({
    image,
    title,
    description,
    email,
    phone,
    address,
    website,
  }) => {
    return (
      <div className="relative mb-6 bg-gray-50">
        <span className="absolute top-0 left-0 ml-6 mt-6 px-2 py-1 text-xs font-bold font-heading bg-white border-2 border-green-500 rounded-full text-green-500">
          verified
        </span>
        <div className="flex flex-wrap items-center -mx-4 px-8 md:px-20 py-12">
          <div className="w-full md:w-1/4 px-4 mb-4 md:mb-0">
            <a href="#">
              <Image
              height={500}
              width={500}
                className="mx-auto md:mx-0 w-40 h-26 object-contain"
                src={image}
                alt={title}
              />
            </a>
          </div>
          <div className="w-full md:w-3/4 px-4 flex flex-col md:flex-row justify-between items-start">
            <div className="mb-8">
              <a className="block mb-8" href="#">
                <h3 className="mb-2 text-2xl font-bold font-heading">{title}</h3>
                <div className="flex items-center">
                  <MapPin className="w-5 h-5 mr-2 text-gray-600" />
                  <span>{address}</span>
                </div>
                
              </a>
            </div>
            <div className="mt-4 md:mt-0 md:ml-auto flex flex-col items-start md:items-end">
              
              <div className="flex items-center mb-2">
                <Phone className="w-5 h-5 mr-2 text-gray-600" />
                <span>{phone}</span>
              </div>
              <div className="flex items-center mb-2">
                <Mail className="w-5 h-5 mr-2 text-gray-600" />
                <span>{email}</span>
              </div>
              <div className="flex items-center mb-2">
                <Globe className="w-5 h-5 mr-2 text-gray-600" />
                <span>{website}</span>
              </div>
             
              {/* {address && (
                <div className="flex items-center">
                  <MapPin className="w-5 h-5 mr-2 text-gray-600" />
                  <span>{address}</span>
                </div>
              )} */}
            </div>
          </div>
        </div>
        {/* <p className="m-2 text-gray-500">{description} Morgeez Production is a full service multi-media production company specializing in various media production services. Our expertise includes, High-End quality video production, photography and audio production services. Our studios are capable of handling any in-studio production from filming, audio recording and photo shoots. Here's quick breakdown of what we can offer you at Morgeez Production:</p> */}
      </div>
    );
  };
  
  export default CompanyDetailedCard;

// {/* <div className="flex flex-wrap items-center justify-between">
// {/* <a className="inline-block w-full md:w-auto mb-4 md:mb-0 md:mr-4 text-center bg-orange-300 hover:bg-orange-400 text-white font-bold font-heading py-4 px-8 rounded-md uppercase" href="#">Add to cart</a> */}
// <div className="ml-auto">
//   <a
//     className="flex-shrink-0 inline-flex mr-4 items-center justify-center w-14 h-14 rounded-md border hover:border-gray-500"
//     href="#"
//   >
//     <svg
//       className="w-6 h-6"
//       width="27"
//       height="27"
//       viewBox="0 0 27 27"
//       fill="none"
//       xmlns="http://www.w3.org/2000/svg"
//     >
//       <path
//         d="M13.4993 26.2061L4.70067 16.9253C3.9281 16.1443 3.41815 15.1374 3.24307 14.0471C3.06798 12.9568 3.23664 11.8385 3.72514 10.8505V10.8505C4.09415 10.1046 4.63318 9.45803 5.29779 8.96406C5.96241 8.47008 6.73359 8.14284 7.54782 8.00931C8.36204 7.87578 9.19599 7.93978 9.98095 8.19603C10.7659 8.45228 11.4794 8.89345 12.0627 9.48319L13.4993 10.9358L14.9359 9.48319C15.5192 8.89345 16.2327 8.45228 17.0177 8.19603C17.8026 7.93978 18.6366 7.87578 19.4508 8.00931C20.265 8.14284 21.0362 8.47008 21.7008 8.96406C22.3654 9.45803 22.9045 10.1046 23.2735 10.8505V10.8505C23.762 11.8385 23.9306 12.9568 23.7556 14.0471C23.5805 15.1374 23.0705 16.1443 22.298 16.9253L13.4993 26.2061Z"
//         stroke="black"
//         strokeWidth="1.5"
//         strokeLinecap="round"
//         strokeLinejoin="round"
//       ></path>
//     </svg>
//   </a>
//   <a
//     className="flex-shrink-0 inline-flex items-center justify-center w-14 h-14 rounded-md border hover:border-gray-500"
//     href="#"
//   >
//     <svg
//       className="w-6 h-6"
//       width="24"
//       height="23"
//       viewBox="0 0 24 23"
//       fill="none"
//       xmlns="http://www.w3.org/2000/svg"
//     >
//       <path
//         d="M2.01328 18.9877C2.05682 16.7902 2.71436 12.9275 6.3326 9.87096L6.33277 9.87116L6.33979 9.86454L6.3398 9.86452C6.34682 9.85809 8.64847 7.74859 13.4997 7.74859C13.6702 7.74859 13.8443 7.75111 14.0206 7.757L14.0213 7.75702L14.453 7.76978L14.6331 7.77511V7.59486V3.49068L21.5728 10.5736L14.6331 17.6562V13.6558V13.5186L14.4998 13.4859L14.1812 13.4077C14.1807 13.4075 14.1801 13.4074 14.1792 13.4072M2.01328 18.9877L14.1792 13.4072M2.01328 18.9877C7.16281 11.8391 14.012 13.3662 14.1792 13.4072M2.01328 18.9877L14.1792 13.4072M23.125 10.6961L23.245 10.5736L23.125 10.4512L13.7449 0.877527L13.4449 0.571334V1V6.5473C8.22585 6.54663 5.70981 8.81683 5.54923 8.96832C-0.317573 13.927 0.931279 20.8573 0.946581 20.938L0.946636 20.9383L1.15618 22.0329L1.24364 22.4898L1.47901 22.0885L2.041 21.1305L2.04103 21.1305C4.18034 17.4815 6.71668 15.7763 8.8873 15.0074C10.9246 14.2858 12.6517 14.385 13.4449 14.4935V20.1473V20.576L13.7449 20.2698L23.125 10.6961Z"
//         fill="black"
//         stroke="black"
//         strokeWidth="0.35"
//       ></path>
//     </svg>
//   </a>
// </div>
// </div> */}