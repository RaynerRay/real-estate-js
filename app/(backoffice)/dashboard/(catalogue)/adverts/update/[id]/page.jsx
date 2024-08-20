import FormHeader from "@/components/backoffice/FormHeader";
import NewAdvertForm from "@/components/backoffice/Forms/NewAdvertForm";
import { getData } from "@/lib/getData";
import React from "react";

export default async function UpdateAdvert({ params: { id } }) {
  const advert = await getData(`adverts/${id}`);
  
  return (
    <div>
      <FormHeader title="Update Banner" />
      <NewAdvertForm updateData={advert} />
    </div>
  );
}
