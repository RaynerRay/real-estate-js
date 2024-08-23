'use client';

import React, { useEffect, useState } from "react";
import FilterComponent from "@/components/frontend/filter/FilterComponent";
import { getData } from "@/lib/getData";
import Loading from './../../loading';

export default function Search({ searchParams }) {
  const [properties, setProperties] = useState([]);
  const [companies, setCompanies] = useState([]);
  const [totalCount, setTotalCount] = useState(0);
  const [filteredTowns, setFilteredTowns] = useState([]);
  const [isLoading, setIsLoading] = useState(true); // Add loading state

  const {
    sort = "createdAt_desc",
    page = 1,
    limit = 16,
    location = "",
    offer = "",
    type = "",
    minPrice = "",
    maxPrice = "",
    minBeds = "",
    maxBeds = "",
    baths = "",
    category = "",
    subCategory = "",
  } = searchParams;

  const query = new URLSearchParams({
    sort,
    page,
    limit,
    location,
    offer,
    type,
    minPrice,
    maxPrice,
    minBeds,
    maxBeds,
    baths,
    category,
    subCategory,
  }).toString();

  useEffect(() => {
    async function fetchData() {
      setIsLoading(true); // Set loading to true when starting to fetch data
      try {
        const { properties, totalCount } = await getData(`properties?${query}`);
        setProperties(properties);
        setTotalCount(totalCount);

        const allLocations = await getData('locations');

        let towns = [];
        const city = allLocations.cities.find((loc) => loc.slug.toLowerCase() === location.toLowerCase());

        if (city) {
          towns = city.towns;
        } else {
          allLocations.cities.forEach((loc) => {
            const town = loc.towns.find((town) => town.slug.toLowerCase() === location.toLowerCase());
            if (town) {
              towns = loc.towns;
            }
          });
        }

        setFilteredTowns(towns);

        let cachedCompanies = JSON.parse(localStorage.getItem("companies"));

        if (!cachedCompanies) {
          cachedCompanies = await getData(`companies`);
          localStorage.setItem("companies", JSON.stringify(cachedCompanies));
        }

        setCompanies(cachedCompanies);
      } catch (error) {
        console.error("Error fetching data:", error);
        // Handle error state here if needed
      } finally {
        setIsLoading(false); // Set loading to false when data fetching is complete
      }
    }

    fetchData();
  }, [query, location]);

  const categoryObj = {
    title: location || "Search Results",
    slug: "",
    isSearch: true,
    properties,
  };

  if (isLoading) {
    return <Loading />; // Display the Loading component when data is being fetched
  }

 

  return (
    <div>
      <FilterComponent
        category={categoryObj}
        companies={companies}
        similarLocations={filteredTowns} 
        properties={properties}
      />
    </div>
  );
}