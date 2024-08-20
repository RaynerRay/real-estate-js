import FormHeader from "@/components/backoffice/FormHeader";
import NewCompanyForm from "@/components/backoffice/Forms/NewCompanyForm";
import { getData } from "@/lib/getData";
import React from "react";

export default async function UpdateCompany({ params: { id } }) {
  const company = await getData(`companies/${id}`);
  
  return (
    <div>
      <FormHeader title="Update Company" />
      <NewCompanyForm updateData={company} />
    </div>
  );
}