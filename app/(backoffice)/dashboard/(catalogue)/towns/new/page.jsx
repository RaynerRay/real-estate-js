import FormHeader from "@/components/backoffice/FormHeader";
import NewTownForm from "@/components/backoffice/Forms/NewTownForm";
import { getData } from "@/lib/getData";

export default async function NewSubCategory() {

  const citiesData = await getData("cities");
// loading state
  if (!citiesData) {
    return <div>Loading...</div>;
  }
  const cities = citiesData.map((cities) => {
    return {
      id: cities.id,
      title: cities.title,
    };
  });

  return (
    <div>
      <FormHeader title="New city" />
      <NewTownForm cities={cities} />
    </div>
  );
}
