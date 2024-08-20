import {
  MapPin,
  Bathtub,
  Car,
  Square,
  Check,
  Phone,
  Mail,
  Bath,
  Bed,
  PhoneIcon,
} from "lucide-react";
import React from "react";
import { FaWhatsapp } from "react-icons/fa";
import FeatureList from "@/components/ui/FeatureList";
import { ImageCarousel } from "../ImageCarousel";
import SimilarProperties from "./SimilarProperties";
import Image from "next/image";
import BreadcrumbProperty from "./BreadcrumpProperty";

const PropertyDetailed = ({ property, properties, searchParams }) => {
  return (
    <section className="py-12 md:py-20 bg-gray-50">
      <div className="container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <BreadcrumbProperty property={property} searchParams={searchParams} />
        <div className="flex flex-col lg:flex-row gap-8">
          <div className="lg:w-2/3">
            <ImageCarousel images={property.propertyImages} />
            <div className="mt-8">
            <p className="text-xl md:text-2xl font-semibold text-green-900">
                  ${" "}
                  {property.rentPrice
                    ? `${property.rentPrice.toLocaleString()} per month`
                    : property.salePrice.toLocaleString()}
                </p>
              <div className="flex flex-wrap justify-between items-center mb-4">
              
                <h1 className="text-3xl md:text-4xl font-bold text-gray-900">
                  {property.title}
                </h1>
                
              </div>
              <p className="flex items-center text-lg text-gray-600 mb-6">
                <MapPin className="mr-2 text-green-900" /> {property.address}
              </p>
              <div className="flex flex-wrap gap-6 mb-8">
                <div className="flex items-center">
                  <Bed className="mr-2 text-green-900" />
                  <span className="text-lg">{property.beds} Beds</span>
                </div>
                <div className="flex items-center">
                  <Bath className="mr-2 text-green-900" />
                  <span className="text-lg">{property.baths} Baths</span>
                </div>
                <div className="flex items-center">
                  <Car className="mr-2 text-green-900" />
                  <span className="text-lg">{property.garages} Garages</span>
                </div>
                <div className="flex items-center">
                  <Square className="mr-2 text-green-900" />
                  <span className="text-lg">{property.size} sqft</span>
                </div>
              </div>
              <p className="text-gray-700 text-lg leading-relaxed mb-8">
                {property.description}
              </p>
              <div className="bg-white rounded-lg shadow-md p-6">
                <h2 className="text-2xl font-semibold mb-4 text-gray-800">
                  Property Features
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <FeatureList title="Water" features={property.water} />
                  <FeatureList
                    title="Electricity"
                    features={property.electricity}
                  />
                  <FeatureList title="Sewerage" features={property.sewerage} />
                  <FeatureList title="Kitchen" features={property.kitchen} />
                  <FeatureList title="Bathroom" features={property.bathroom} />
                  <FeatureList title="Security" features={property.security} />
                  <FeatureList title="Parking" features={property.parking} />
                </div>
              </div>
            </div>
          </div>
          <div className="lg:w-1/3">
            <div className="bg-white rounded-lg shadow-md p-6">
              <Image
                height={24}
                width={24}
                src="/agent1.png"
                alt="Realtor"
                className="w-24 h-24 rounded-full mx-auto mb-4 object-cover"
              />
              <h2 className="text-2xl font-bold text-center text-gray-900 mb-2">
                Wilfred Sawu
              </h2>
              <p className="text-lg text-center text-gray-600 mb-4">Realtor</p>
              <div className="flex flex-col gap-2 mb-6">
                <a
                  href="tel:+263774555888"
                  className="flex items-center text-center text-lg text-gray-700 hover:text-green-900"
                >
                  <Phone className="mr-2 h-5 w-5" /> +263 774 555 888
                </a>
                <a
                  href="mailto:office@template.com"
                  className="flex items-center text-lg text-gray-700 hover:text-green-900"
                >
                  <Mail className="mr-2 h-5 w-5" /> office@template.com
                </a>
              </div>
              <button className="w-full bg-green-900 hover:bg-green-900 text-white font-bold py-3 px-4 rounded-lg transition duration-300 ease-in-out flex items-center justify-center">
                <FaWhatsapp className="mr-2 h-5 w-5" />
                <span>Contact on WhatsApp</span>
              </button>
            </div>
          </div>
        </div>
        <div className="mt-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">
            Similar Properties
          </h2>
          <SimilarProperties properties={properties} />
        </div>
      </div>
    </section>
  );
};

export default PropertyDetailed;
