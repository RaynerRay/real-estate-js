import { ArrowRight } from 'lucide-react';
import Link from 'next/link';

const MajorTowns = ({towns}) => {
  const filteredHarare = towns.filter(town => town.cityId === "66a65df5b2641dc363030580");
  const filteredBulawayo = towns.filter(town => town.cityId === "66a53854c9664ccf029f8a0b");
  const filteredGweru = towns.filter(town => town.cityId === "66ac95bebf8c9a3cbd124a10");
  const filteredMutare = towns.filter(town => town.cityId === "66a65dffb2641dc363030581");
  const filteredMasvingo = towns.filter(town => town.cityId === "12345");
  return (
    <section className="px-8 md:px-24 py-16  bg-gray-50">
      <div className="max-w-6xl mx-auto">
      <div className="flex mb-16 ">
        <div className="w-full md:w-3/4">
        <h1 className="font-heading text-xl sm:text-3xl ">Popular areas</h1>
          {/* <h1 className="tracking-tight font-heading text-2xl md:text-3xl font-normal max-w-lg">Popular areas in Zimbabwe</h1> */}
        </div>
        <div className="w-full md:w-1/4 ">
          <a href="#" className="group inline-block">
            <div className="flex items-center text-sm sm:text-md text-gray-900 gap-2">
              <span className="font-semibold  group-hover:text-opacity-80 transition duration-200">
                See All 
              </span>
              <div className=" group-hover:text-opacity-80 transition duration-200">
                <ArrowRight size={17} />
              </div>
            </div>
          </a>
        </div>
      </div>
      <div className="flex flex-wrap -m-4 ">
   
        <div className="w-1/3 sm:w-1/3 lg:w-1/6 p-4">
          <p className="font-heading font-semibold text-[#0A6D99] mb-4 tracking-tight">Harare DB</p>
          <ul className="flex flex-col gap-1">
        {filteredHarare?.map((town) => (
          <li key={town.id}>
            <a href={`/search?location=${town.slug}&offer=SALE&category=`} className="tracking-tight text-gray-800 hover:text-opacity-70 font-normal transition duration-200">
              {town.title}
            </a>
          </li>
        ))}
      </ul>
        </div>
        <div className="w-1/3 sm:w-1/3 lg:w-1/6 p-4">
          <p className="font-heading font-semibold text-[#0A6D99] mb-4 tracking-tight">Harare</p>
          <ul className="flex flex-col gap-1">
          {filteredHarare?.slice(1,2).map((town) => (
          <li key={town.id}>
            <a href={`/search?location=${town.slug}&offer=SALE&category=`} className="tracking-tight text-gray-800 hover:text-opacity-70 font-normal transition duration-200">
              {town.title}
            </a>
          </li>
        ))}
        </ul>
        </div>
        <div className="w-1/3 sm:w-1/3 lg:w-1/6 p-4">
          <p className="font-heading font-semibold text-[#0A6D99] mb-4 tracking-tight">Bulawayo</p>
          <ul className="flex flex-col gap-1">
          {filteredBulawayo?.map((town) => (
          <li key={town.id}>
            <Link href={`/search?location=${town.slug}&offer=SALE&category=`} className="tracking-tight text-gray-800 hover:text-opacity-70 font-normal transition duration-200">
              {town.title}
            </Link>
          </li>
        ))}
        </ul>
        </div>
        <div className="w-1/3 sm:w-1/3 lg:w-1/6 p-4">
          <p className="font-heading font-semibold text-[#0A6D99] mb-4 tracking-tight">Mutare</p>
          <ul className="flex flex-col gap-1">
          {filteredMutare?.map((town) => (
          <li key={town.id}>
            <Link href={`/search?location=${town.slug}&offer=SALE&category=`} className="tracking-tight text-gray-800 hover:text-opacity-70 font-normal transition duration-200">
              {town.title}
            </Link>
          </li>
        ))}
        </ul>
        </div>
        <div className="w-1/3 sm:w-1/3 lg:w-1/6 p-4">
          <p className="font-heading font-semibold text-[#0A6D99] mb-4 tracking-tight">Gweru</p>
          <ul className="flex flex-col gap-1">
          {filteredGweru?.map((town) => (
          <li key={town.id}>
            <Link href={`/search?location=${town.slug}&offer=SALE&category=`} className="tracking-tight text-gray-800 hover:text-opacity-70 font-normal transition duration-200">
              {town.title}
            </Link>
          </li>
        ))}
        </ul>
        </div>
        <div className="w-1/3 sm:w-1/3 lg:w-1/6 p-4">
          <p className="font-heading font-semibold text-[#0A6D99] mb-4 tracking-tight">Masvingo</p>
          <ul className="flex flex-col gap-1">
          {filteredMasvingo?.map((town) => (
          <li key={town.id}>
            <Link href={`/search?location=${town.slug}&offer=SALE&category=`} className="tracking-tight text-gray-800 hover:text-opacity-70 font-normal transition duration-200">
              {town.title}
            </Link>
          </li>
        ))}
        </ul>
        </div>
      </div>
      </div>
    </section>
  );
};

export default MajorTowns;
