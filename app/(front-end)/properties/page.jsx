
import PropertyList from "@/components/frontend/property/PropertyList";
import { getData } from "@/lib/getData";

export default async function page() {
  const properties = await getData("properties");
  return (
    <div>
      <PropertyList
        
        properties={properties}
      />
    </div>
  );
}
