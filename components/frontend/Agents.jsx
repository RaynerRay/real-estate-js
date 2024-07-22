import React from 'react';
import Image from 'next/image';
import { Button } from 'lucide-react';

const Agents = () => {
  const members = [
    {
      id: 1,
      name: 'Trey',
      description: 'Build visualizations',
      image: '/agent1.png',
      bgColor: 'border',
      hoverBgColor: 'hover:bg-gradient-purple-left-dark',
    },
    {
      id: 2,
      name: 'Mariot',
      description: 'Summarize records',
      image: '/agent2.png',
      bgColor: 'border',
      hoverBgColor: 'hover:border-gray-200',
    },
    {
      id: 3,
      name: 'Milner',
      description: 'Import CSV files',
      image: '/agent3.png',
      bgColor: 'border',
      hoverBgColor: 'hover:border-gray-200',
    },
    {
      id: 4,
      name: 'James ',
      description: 'Visualize hierarchical',
      image: '/agent1.png',
      bgColor: 'border',
      hoverBgColor: 'hover:border-gray-200',
    },
  ];

  return (
    <section className="py-4 overflow-hidden">
      <div className="container px-4 mx-auto">
        <div className="pt-5 px-5 pb-6 bg-white border rounded-xl">
          <h3 className="mb-7 text-lg font-semibold">Our Top Agents</h3>
          <div className="flex flex-wrap -m-3">
            {members.map((member) => (
              <div key={member.id} className="w-full p-3">
                <div className="flex flex-wrap items-center justify-between -m-2">
                  <div className="w-auto p-2">
                    <div className="flex flex-wrap items-center -m-1.5">
                      <div className="w-auto p-1.5">
                        <Image className="h-12" src={member.image} alt={member.name} width={48} height={48} />
                      </div>
                      <div className="w-auto p-1.5">
                        <h3 className="font-heading mb-1 font-semibold">{member.name}</h3>
                        <p className="text-xs text-gray-500">{member.description}</p>
                      </div>
                    </div>
                  </div>
                  <div className="w-auto p-2">
                    <a
                      className={`inline-flex flex-wrap items-center px-6 py-2.5 text-sm text-gray-700 font-medium ${member.bgColor} ${member.hoverBgColor} rounded-lg transition duration-300`}
                      href="#"
                    >
                      Add
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Agents;
