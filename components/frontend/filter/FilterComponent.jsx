'use client'
import { ChevronRight } from "lucide-react";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import Breadcrumb from "./Breadcrumb";
import FilteredProperties from "./FilteredProperties";
import SideFilters from "../SideFilters";
import Agents from "../Agents";
import SearchAndFilters from "../SearchAndFilters";

export default function FilterComponent({ category, properties, companies, similarLocations }) {
 
  //handle search and filter scroll
  const [isScrolled, setIsScrolled] = useState(false);

  const handleScroll = () => {
    setIsScrolled(window.scrollY > 0);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const { title} = category;
  const propertyCount = category.properties.length;
  return (
    
    <div>
      
       <div className={`${isScrolled ? "fixed top-0 left-0 w-full z-50" : ""}`}>
        <SearchAndFilters />
      </div>
      <div className="bg-white space-y-6 text-slate-900 py-8 px-4 ">
        <Breadcrumb title={title} resultCount={propertyCount} />
        {/* <Sorting isSearch={category?.isSearch} title={title} slug={slug} /> */}
      </div>
      <div className="flex flex-wrap -mx-4">
    <div className="w-full lg:w-1/4 px-4">
      <SideFilters similarLocations={similarLocations} />
      <Agents companies={companies} />
    </div>
    <div className="w-full lg:w-3/4 px-4">
    <FilteredProperties properties={properties} />
    </div>
  </div>
    </div>
  );
}
