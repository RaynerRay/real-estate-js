"use client";
import ImageInput from "@/components/FormInputs/ImageInput";
import SelectInput from "@/components/FormInputs/SelectInput";
import SubmitButton from "@/components/FormInputs/SubmitButton";
import TextareaInput from "@/components/FormInputs/TextAreaInput";
import SearchSelectInput from "@/components/FormInputs/SearchSelectInput";
import TextInput from "@/components/FormInputs/TextInput";
import ToggleInput from "@/components/FormInputs/ToggleInput";
import FormHeader from "@/components/backoffice/FormHeader";
import { makePostRequest, makePutRequest } from "@/lib/apiRequest";
import { generateSlug } from "@/lib/generateSlug";
import dynamic from "next/dynamic";
import { useRouter } from "next/navigation";
const QuillEditor = dynamic(
  () => import("@/components/FormInputs/QuillEditor"),
  {
    ssr: false,
  }
);
import { useState } from "react";
import { useForm } from "react-hook-form";

export default function NewBlogForm({  updateData = {} }) {

    const categories = [
        { id: '1', name: 'Real Estate', slug: 'real-estate' },
        { id: '2', name: 'General', slug: 'general' },
        { id: '3', name: 'Buying a house', slug: 'buying-a-house' },
        { id: '4', name: 'Buying A Property', slug: 'buying-a-property' },
        { id: '5', name: 'Commercial Real Estate', slug: 'commercial-real-estate' },
        { id: '6', name: 'Construction', slug: 'construction' },
        { id: '7', name: 'DIY Home Improvements', slug: 'diy-home-improvements' },
        { id: '8', name: 'Economy', slug: 'economy' },
        { id: '9', name: 'Guide to Purchasing Your Home', slug: 'guide-to-purchasing-your-home' },
        { id: '10', name: 'Harare Property Market', slug: 'harare-property-market' },
        { id: '11', name: 'Home and Deco', slug: 'home-and-deco' },
        { id: '12', name: 'Home Deco', slug: 'home-deco' },
        { id: '13', name: 'Home Insurance', slug: 'home-insurance' },
        { id: '14', name: 'Home Security', slug: 'home-security' },
        { id: '15', name: 'Integrity in Real Estate', slug: 'integrity-in-real-estate' },
        { id: '16', name: 'Interviews', slug: 'interviews' },
        { id: '17', name: 'Know Title Deeds', slug: 'know-title-deeds' },
        { id: '18', name: 'Landlords', slug: 'landlords' },
        { id: '19', name: 'Leads in Real Estate', slug: 'leads-in-real-estate' },
        { id: '20', name: 'Lease Agreement', slug: 'lease-agreement' },
        { id: '21', name: 'Listing Your Property', slug: 'listing-your-property' },
        { id: '22', name: 'Marketplaces', slug: 'marketplaces' },
        { id: '23', name: 'Mortgage', slug: 'mortgage' },
        { id: '24', name: 'Neighbourhood On Spotlight', slug: 'neighbourhood-on-spotlight' },
        { id: '25', name: 'News Headlines', slug: 'news-headlines' },
        { id: '26', name: 'Prepare Your Home Before Selling', slug: 'prepare-your-home-before-selling' },
        { id: '27', name: 'Property Development Company', slug: 'property-development-company' },
        { id: '28', name: 'Property Investment Opportunities', slug: 'property-investment-opportunities' },
        { id: '29', name: 'Property Investments', slug: 'property-investments' },
        { id: '30', name: 'Property Request Services', slug: 'property-request-services' },
        { id: '31', name: 'Property Transactions', slug: 'property-transactions' },
        { id: '32', name: 'Property Trends', slug: 'property-trends' },
        { id: '33', name: 'Property Valuation', slug: 'property-valuation' },
        { id: '34', name: 'Purchasing Residential Stands', slug: 'purchasing-residential-stands' },
        { id: '35', name: 'Real Estate Investment', slug: 'real-estate-investment' },
        { id: '36', name: 'Real Estate Market', slug: 'real-estate-market' },
        { id: '37', name: 'Real Estate Regulation', slug: 'real-estate-regulation' },
        { id: '38', name: 'Regulations in Real Estate', slug: 'regulations-in-real-estate' },
        { id: '39', name: 'Remodeling Your Home', slug: 'remodeling-your-home' },
        { id: '40', name: 'Rental', slug: 'rental' },
        { id: '41', name: 'Selling A Property', slug: 'selling-a-property' },
        { id: '42', name: 'Taxation', slug: 'taxation' },
        { id: '43', name: 'Technology in the Real Estate Sector', slug: 'technology-in-the-real-estate-sector' },
        { id: '44', name: 'Tenants', slug: 'tenants' },
        { id: '45', name: 'Title Deeds', slug: 'title-deeds' },
        { id: '46', name: 'Urban Expansion', slug: 'urban-expansion' },
        { id: '47', name: 'Urban Redevelopment', slug: 'urban-redevelopment' },
        { id: '48', name: 'Viewing A Property', slug: 'viewing-a-property' },
        { id: '49', name: "Breaking News", slug: 'breaking-news' },
        { id: '50', name: 'Working From Home', slug: 'working-from-home' },
        { id: '51', name: 'Zimbabwe Property', slug: 'zimbabwe-property' }
      ];
        
      const options = categories.map(category => ({
        value: category.name,
        label: category.name,
      }));
      
      
  const initialContent = updateData?.content ?? "";
  const initialImageUrl = updateData?.imageUrl ?? "";
  const id = updateData?.id ?? "";
  const [imageUrl, setImageUrl] = useState(initialImageUrl);
  const [loading, setLoading] = useState(false);
  const {
    register,
    reset,
    watch,
    handleSubmit,
    control,
    formState: { errors },
  } = useForm({
    defaultValues: {
      isActive: true,
      ...updateData,
    },
  });

  // Quill Editor
  const [content, setContent] = useState(initialContent);
  //Quill EDITOR END
  const router = useRouter();
  function redirect() {
    router.push("/dashboard/blogs");
  }

  async function onSubmit(data) {
   
    const slug = generateSlug(data.title);
    data.slug = slug;
    data.imageUrl = imageUrl;
    data.content = content;
    console.log(data);
    if (id) {
      data.id = id;
      // Make Put Request (Update)
      makePutRequest(
        setLoading,
        `api/blogs/${id}`,
        data,
        "Blog",
        redirect
      );
      console.log("update Request: ", data);
    } else {
      makePostRequest(
        setLoading,
        "api/blogs",
        data,
        "Blog",
        reset,
        redirect
      );
      setImageUrl("");
      setContent("");
    }
  }

  
  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="w-full max-w-4xl p-4 bg-white border border-gray-200 rounded-lg shadow sm:p-6 md:p-8 dark:bg-gray-800 dark:border-gray-700 mx-auto my-3 "
    >
      <div className="grid gap-4 sm:grid-cols-2 sm:gap-6">
        <TextInput
          label="Article Title"
          name="title"
          register={register}
          errors={errors}
          className="w-full"
        />
       
        
        <SearchSelectInput
         control={control}
         label="Select Blog Category"
         name="category"
         register={register}
         errors={errors}
         options={options}
         placeholder={"Select Blog Category"}
         className="w-full"
       />

        <TextareaInput
          label="Article Description"
          name="description"
          register={register}
          errors={errors}
        />
        
        <ImageInput
          imageUrl={imageUrl}
          setImageUrl={setImageUrl}
          endpoint="blogImageUploader"
          label="Article Thumbnail"
        />
        {/* Content */}
        <QuillEditor
          label="Article Content"
          value={content}
          onChange={setContent}
          c
        />
        {/* Content End */}
        {/* <ToggleInput
          label="Publish your Training"
          name="isActive"
          trueTitle="Active"
          falseTitle="Draft"
          register={register}
        /> */}
      </div>

      <SubmitButton
        isLoading={loading}
        buttonTitle={id ? "Update Article" : "Create Article"}
        loadingButtonTitle={`${
          id ? "Updating" : "Creating"
        } Article please wait...`}
      />
    </form>
  );
}
