import CompanyList from "@/components/frontend/company/CompanyList";
import { getData } from "@/lib/getData";

export default async function page() {
  const companies = await getData("companies");
  return (
    <div>
      <CompanyList
        
        companies={companies}
      />
    </div>
  );
}

