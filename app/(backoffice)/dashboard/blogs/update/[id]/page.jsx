import FormHeader from "@/components/backoffice/FormHeader";
import { getData } from "@/lib/getData";
import React from "react";
import  NewBlogForm  from '@/components/backoffice/Forms/NewBlogForm';

export default async function UpdateTraining({ params: { id } }) {
  const training = await getData(`trainings/${id}`)
  const categoriesData = await getData("categories");
  const categories = categoriesData.map((category) => {
    return {
      id: category.id,
      title: category.title,
    };
  });
  return (
    <div>
      <FormHeader title="Update Training" />
      <NewBlogForm categories={categories} updateData={training} />;
    </div>
  );
}
