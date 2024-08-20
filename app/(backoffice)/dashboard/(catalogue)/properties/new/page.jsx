import FormHeader from "@/components/backoffice/FormHeader";
import NewPropertyForm from "@/components/backoffice/Forms/NewPropertyForm";
import { getData } from "@/lib/getData";
import React from "react";

export default async function NewCourse() {
  //Categories and agents
  const categoriesData = await getData("categories");
  const subcategoriesData = await getData("subcategories");
  const citiesData = await getData("cities");
  const townsData = await getData("towns");
  const companiesData = await getData("companies");
  const usersData = (await getData("users")) ?? [];
  // Example loading state
  if (!categoriesData || !usersData || !subcategoriesData ||!citiesData ||!townsData ||!companiesData) {
    return <div>Loading...</div>;
  }
  const agentsData = usersData?.filter((user) => user.role === "AGENT") ?? [];
  const agents = agentsData.map((agent) => {
    return {
      id: agent.id,
      title: agent.name,
    };
  });
  // console.log(agents);
  const categories = categoriesData.map((category) => {
    return {
      id: category.id,
      title: category.title,
    };
  });
  const subcategories = subcategoriesData.map((subcategory) => {
    return {
      id: subcategory.id,
      title: subcategory.title,
    };
  });
  const cities = citiesData.map((city) => {
    return {
      id: city.id,
      title: city.title,
    };
  });
  const towns = townsData.map((town) => {
    return {
      id: town.id,
      title: town.title,
    };
  });
  const companies = companiesData.map((company) => {
    return {
      id: company.id,
      title: company.title,
    };
  });
  return (
    <div>
      <FormHeader title="New Property" />
      <NewPropertyForm categories={categories} subcategories={subcategories} agents={agents} cities={cities} towns={towns} companies={companies} />
    </div>
  );
}
