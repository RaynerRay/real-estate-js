import FormHeader from "@/components/backoffice/FormHeader";
import React from "react";
import NewBlogForm  from '@/components/backoffice/Forms/NewBlogForm';

export default async function NewBlog() {
  
  return (
    <div>
      <FormHeader title="New Blog" />
      <NewBlogForm />;
    </div>
  );
}
