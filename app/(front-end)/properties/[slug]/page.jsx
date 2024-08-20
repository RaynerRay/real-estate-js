
import { getData } from "@/lib/getData";
import  PropertyDetailed  from '@/components/frontend/property/PropertyDetailed';

export default async function page({ params: { slug } }) {
  const property = await getData(`properties/property/${slug}`);


  const { id } = property;

  //get property category id
  const catId = property.categoryId;
 
  //retrieve specific category
  const category = await getData(`categories/${catId}`);
  //get properties of the same category
  const categoryProperties = category.properties;
  const properties = categoryProperties.filter((properties) => properties.id !== id);
  return (
    
    <div>
    
    {property && <PropertyDetailed property={property} properties={properties} /> }
     
    </div>
  );
}
