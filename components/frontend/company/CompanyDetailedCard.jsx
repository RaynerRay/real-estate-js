import React from "react";
import { Mail, Phone, MapPin, Globe } from "lucide-react";
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
    <div className="bg-white rounded-2xl shadow-xl overflow-hidden transition-all duration-300 hover:shadow-2xl mb-8">
      <div className="flex flex-col lg:flex-row">
        <div className="w-full lg:w-1/3 bg-gradient-to-br from-green-400 to-green-600 p-8 flex items-center justify-center">
          <div className="bg-white p-4 rounded-xl shadow-lg">
            <Image
              height={500}
              width={500}
              className="w-48 h-32 object-contain"
              src={image}
              alt={title}
            />
          </div>
        </div>
        <div className="w-full lg:w-2/3 p-8">
          <h3 className="text-3xl font-bold text-gray-800 mb-4">{title}</h3>
          <div className="flex items-center text-gray-600 mb-4">
            <MapPin className="w-5 h-5 mr-2 text-green-500" />
            <span>{address}</span>
          </div>
          <p className="text-gray-600 mb-6 leading-relaxed">{description}</p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-2">
            <ContactItem icon={Phone} text={phone} />
            <ContactItem icon={Mail} text={email} />
            <ContactItem icon={Globe} text={website} />
          </div>
        </div>
      </div>
    </div>
  );
};

const ContactItem = ({ icon: Icon, text }) => (
  <div className="flex items-center bg-gray-50 rounded-lg p-3 transition-all duration-300 hover:bg-green-50 hover:shadow-md">
    <Icon className="w-5 h-5 mr-3 text-green-500" />
    <span className="text-sm text-gray-700">{text}</span>
  </div>
);

export default CompanyDetailedCard;