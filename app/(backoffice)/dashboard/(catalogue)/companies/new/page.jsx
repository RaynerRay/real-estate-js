import FormHeader from "@/components/backoffice/FormHeader";
import NewCompanyForm from "@/components/backoffice/Forms/NewCompanyForm";

export default async function NewCompany() {
  return (
    <div>
      <FormHeader title="New company" />
      <NewCompanyForm  />
    </div>
  );
}
