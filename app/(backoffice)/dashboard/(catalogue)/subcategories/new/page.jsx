import FormHeader from "@/components/backoffice/FormHeader";
import NewSubCategoryForm from "@/components/backoffice/Forms/NewSubCategoryForm";
import { getData } from "@/lib/getData";

export default async function NewSubCategory() {

  const categoriesData = await getData("categories");
// loading state
  if (!categoriesData) {
    return <div>Loading...</div>;
  }
  const categories = categoriesData.map((category) => {
    return {
      id: category.id,
      title: category.title,
    };
  });

  return (
    <div>
      <FormHeader title="New sub category" />
      <NewSubCategoryForm categories={categories} />
    </div>
  );
}
