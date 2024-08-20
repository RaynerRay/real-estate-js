
import CompanyDetailed from "@/components/frontend/company/CompanyDetailed";
import { getData } from "@/lib/getData";

export default async function page({ params: { slug } }) {
  
  const company = await getData(`companies/company/${slug}`);

  
  return (
    <>
     <CompanyDetailed company={company} />
     
    </>
  );
}
