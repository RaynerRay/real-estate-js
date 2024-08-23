import React from 'react';
import Image from 'next/image';
import { Phone, Mail, User } from 'lucide-react';
import { FaWhatsapp } from 'react-icons/fa';

const ContactCard = ({ agent }) => {
  return (
    <div className="bg-white rounded-2xl shadow-lg overflow-hidden transition-all duration-300 hover:shadow-2xl">
      <div className="bg-gradient-to-r from-green-400/20 to-yellow-400/20 p-1">
        <div className="bg-white rounded-xl p-6">
          {agent ? (
            <>
              <div className="relative w-32 h-32 mx-auto mb-6">
                <Image
                  src={agent.agentProfile.profileUrl || "/agent-placeholder.jpg"}
                  alt={agent.agentProfile.firstName}
                  layout="fill"
                  objectFit="cover"
                  className="rounded-full"
                />
                <div className="absolute bottom-0 right-0 bg-green-500 rounded-full p-2">
                  <User className="w-4 h-4 text-white" />
                </div>
              </div>
              <h2 className="text-2xl font-bold text-center text-gray-800 mb-2">
                {agent.agentProfile.firstName} {agent.agentProfile.lastName}
              </h2>
              <p className="text-lg text-center text-gray-600 mb-6 font-bold">{agent.agentProfile.companyName}</p>
              <div className="space-y-4 mb-8">
                
                 <a href={`tel:${agent.agentProfile.phone}`}
                  className="flex items-center justify-center text-lg text-gray-700 hover:text-green-600 transition-colors duration-300"
                >
                  <Phone className="mr-3 h-5 w-5" />
                  <span>{agent.agentProfile.phone}</span>
                </a>
                
                  <a href={`mailto:${agent.agentProfile.email}`}
                  className="flex items-center justify-center text-lg text-gray-700 hover:text-green-600 transition-colors duration-300"
                >
                  <Mail className="mr-3 h-5 w-5" />
                  <span>{agent.agentProfile.email}</span>
                </a>
              </div>
            </>
          ) : (
            <div className="text-center mb-8">
              <FaWhatsapp className="w-24 h-24 mx-auto text-green-500 mb-4" />
              <h2 className="text-xl font-bold text-gray-800 mb-2">
                Want more Info About This Property
              </h2>
              <p className="text-md text-gray-600">
                Get in touch with us via WhatsApp
              </p>
              <button className="w-full bg-green-600 hover:bg-green-700 text-white font-bold py-4 px-6 rounded-xl transition duration-300 ease-in-out flex items-center justify-center text-lg">
            <FaWhatsapp className="mr-3 h-6 w-6" />
            <span>{ "Contact on WhatsApp"}</span>
          </button>
            </div>
          )}
          
        </div>
      </div>
    </div>
  );
};

export default ContactCard;