'use client';

import { useState } from 'react';
import Link from 'next/link';
import Accordion from './Accordion';

const SideFilters = ({ similarLocations }) => {
  const [accordion, setAccordion] = useState({ rent: false, sale: false });

  const CityList = ({ towns, offerType }) => (
    <ul className="space-y-2">
      {towns.map((town) => (
        <li key={town.slug}>
          <Link href={`/search?location=${town.slug}&offer=${offerType}&category=`}>
            <span className="px-4 text-gray-600 hover:text-green-600 transition-colors duration-200">
              {town.title}
            </span>
          </Link>
        </li>
      ))}
    </ul>
  );

  return (
    <section className="pt-12 bg-white">
      <div className="container px-4 mx-auto">
        <div className="flex flex-wrap -mx-4">
          <div className="w-full px-4">
            <Accordion
              title="Nearby Locations For Renting"
              isOpen={accordion.rent}
              onToggle={() => setAccordion({ ...accordion, rent: !accordion.rent })}
            >
              <CityList towns={similarLocations} offerType="RENT" />
            </Accordion>
            <Accordion
              title="Nearby Locations for Buying"
              isOpen={accordion.sale}
              onToggle={() => setAccordion({ ...accordion, sale: !accordion.sale })}
            >
              <CityList towns={similarLocations} offerType="SALE" />
            </Accordion>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SideFilters;
