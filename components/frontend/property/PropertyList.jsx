"use client";

import { Grid, List } from "lucide-react";
import React, { useEffect, useState } from "react";
import Filters from "../SearchAndFilters";
import SearchResultsHeader from "@/components/uiItems/SearchResultsHeader";
import SideFilters from "../SideFilters";
import Agents from "../Agents";
import PropertyCard from "../PropertyCard";

const PropertyList = ({ properties }) => {
  const [isScrolled, setIsScrolled] = useState(false);

  const handleScroll = () => {
    setIsScrolled(window.scrollY > 0);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="">
      <div className={`${isScrolled ? "fixed top-0 left-0 w-full z-50" : ""}`}>
        <Filters />
      </div>

      <div className=" px-4 my-8">
        <SearchResultsHeader
          searchTerm={"Properties"}
          resultsCount={properties.length}
        />
        <div className="flex flex-wrap -mx-4">
          <div className="w-full lg:w-1/4 px-4">
            <SideFilters />
            <Agents  />
          </div>
          <div className="w-full lg:w-3/4 px-4">
            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
              {properties.map((property, index) => (
                <PropertyCard
                  key={property.id}
                  title={property.title}
                  price={property.price}
                  address={property.address}
                  beds={property.beds}
                  baths={property.baths}
                  size={property.size}
                  tags={property.tags}
                  image={property.image}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PropertyList;
