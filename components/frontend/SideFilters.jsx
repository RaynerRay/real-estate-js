'use client';

import { useState } from 'react';
import Accordion from './Accordion';

const SideFilters = () => {
  const [accordion, setAccordion] = useState({ category: false, delivery: false, size: false });

  return (
    <section className="pt-12 bg-white">
      <div className="container px-4 mx-auto">
        <div className="flex flex-wrap -mx-4">
          <div className="w-full px-4">
            <Accordion
              title="Category"
              items={[
                'Sport shoes',
                'Sneakers',
                'Special edition shoes',
                'Summer specials',
                'Jordan series',
              ]}
              isOpen={accordion.category}
              onToggle={() => setAccordion({ ...accordion, category: !accordion.category })}
            />
            <Accordion
              title="Delivery method"
              items={[
                'Personal collection',
                'Courier delivery',
                'Pickup at the point',
                'Delivery abroad',
                'Package',
              ]}
              isOpen={accordion.delivery}
              onToggle={() => setAccordion({ ...accordion, delivery: !accordion.delivery })}
            />
            <Accordion
              title="Size"
              items={['Small', 'Medium', 'Large']}
              isOpen={accordion.size}
              onToggle={() => setAccordion({ ...accordion, size: !accordion.size })}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default SideFilters;
