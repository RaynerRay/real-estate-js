"use client";
import ArrayItemsInput from "@/components/FormInputs/ArrayItemsInput";
import MultipleImageInput from "@/components/FormInputs/MultipleImageInput";

import SelectInput from "@/components/FormInputs/SelectInput";
import SubmitButton from "@/components/FormInputs/SubmitButton";
import TextareaInput from "@/components/FormInputs/TextAreaInput";
import TextInput from "@/components/FormInputs/TextInput";
import ToggleInput from "@/components/FormInputs/ToggleInput";
import FormHeader from "@/components/backoffice/FormHeader";
import { makePostRequest, makePutRequest } from "@/lib/apiRequest";
import { generateSlug } from "@/lib/generateSlug";
import { generateUserCode } from "@/lib/generateUserCode";
import { Plus, X } from "lucide-react";
import { useRouter } from "next/navigation";

import React, { useState } from "react";
import { useForm, Controller } from "react-hook-form";

export default function NewPropertyForm({
  categories,
  subcategories,
  cities, 
  towns,
  agents,
  companies,
  updateData = {},
}) {
  console.log(updateData);
  const initialImageUrl = updateData?.imageUrl ?? "";
  const initialTags = updateData?.tags ?? [];
  const id = updateData?.id ?? "";
  const [imageUrl, setImageUrl] = useState(initialImageUrl);
  // TAGS
  const [tags, setTags] = useState(initialTags);
  console.log(tags);
  const [loading, setLoading] = useState(false);

  //Amenities
  const amenitiesOptions = {
    water: ["Municipal", "Borehole", "Tank supply"],
    electricity: ["ZESA connection", "Solar system", "Generator backup"],
    sewerage: ["Municipal", "Septic tank"],
    kitchen: ["Fitted", "Basic", "With appliances (stove, oven, fridge)"],
    bathroom: ["En-suite", "Shared", "Bath", "Shower", "Toilet"],
    security: [
      "Burglar bars",
      "Security gates",
      "Electric fence",
      "Alarm system",
      "Razor wire",
    ],
    parking: ["Garage", "Carport", "Open parking"],
  };

  const ListingTypeEnum = {
    SALE: 'SALE',
    RENT: 'RENT'
  };

  const {
    register,
    reset,
    watch,
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      water: [],
      electricity: [],
      sewerage: [],
      kitchen: [],
      bathroom: [],
      security: [],
      parking: [],
      heating: [],
      isFeatured: false,
      ...updateData,
    },
  });

  // const isActive = watch("isActive");

  const router = useRouter();
  function redirect() {
    router.push("/dashboard/properties");
  }
  const [propertyImages, setPropertyImages] = useState([]);
  console.log(propertyImages);
  async function onSubmit(data) {
    const slug = generateSlug(data.title);
    const propertyCode = generateUserCode("ZRE", data.title);
    data.slug = slug;
    data.propertyImages = propertyImages;
    data.tags = tags;
    data.qty = 1;
    data.propertyCode = propertyCode;
    console.log(data);
    if (id) {
      data.id = id;
      // Make Put Request (Update)
      makePutRequest(
        setLoading,
        `api/properties/${id}`,
        data,
        "Property",
        redirect
      );
      console.log("update Request: ", data);
    } else {
      makePostRequest(
        setLoading,
        "api/properties",
        data,
        "Property",
        reset,
        redirect
      );
      setPropertyImages([]);
      setTags([]);
    }
  }
  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="w-full max-w-4xl p-4 bg-white border border-gray-200 rounded-lg shadow sm:p-6 md:p-8 dark:bg-gray-800 dark:border-gray-700 mx-auto my-3 "
    >
      <div className="grid gap-4 sm:grid-cols-2 sm:gap-6">
        <TextInput
          label="Property Title"
          name="title"
          register={register}
          errors={errors}
        />
     
        <SelectInput
          label="Select City"
          name="cityId"
          register={register}
          errors={errors}
          className="w-full"
          options={cities}
        />
        <SelectInput
          label="Select Town"
          name="townId"
          register={register}
          errors={errors}
          className="w-full"
          options={towns}
        />
         <TextInput
          label="Property Address"
          name="address"
          register={register}
          errors={errors}
        />

        <TextInput
          label="Number of Bedrooms"
          name="beds"
          register={register}
          errors={errors}
          type="number"
          className="w-full"
          isRequired={false}
        />
        <TextInput
          label="Number of Bathrooms"
          name="baths"
          register={register}
          errors={errors}
          type="number"
          className="w-full"
          isRequired={false}
        />
        <TextInput
          label="Property Size in square meters"
          name="size"
          register={register}
          errors={errors}
          type="number"
          className="w-full"
        />
        {/* <SelectInput
          label="Is property for Sale or Rent"
          name="listingType"
          register={register}
          errors={errors}
          className="w-full text-gray-800"
          options={type}
        /> */}

<div className="mt-2">
        <label htmlFor="listingType" className="block text-sm font-medium text-gray-800">Listing Type</label>
        <Controller
          name="listingType"
          control={control}
          defaultValue={ListingTypeEnum.SALE} // default value
          render={({ field }) => (
            <select
              {...field}
              id="listingType"
              required
              className="mt-1 block w-full px-3 py-2 text-gray-800 text-md border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-lime-500 focus:border-lime-500 sm:text-sm"
            >
              <option value={ListingTypeEnum.SALE}>Sale</option>
              <option value={ListingTypeEnum.RENT}>Rent</option>
            </select>
          )}
        />
      </div>
       
        <TextInput
          label="Rent Price in USD"
          name="rentPrice"
          register={register}
          errors={errors}
          type="number"
          className="w-full"
          isRequired={false}
        />
        <TextInput
          label="Sale Price in USD"
          name="salePrice"
          register={register}
          errors={errors}
          type="number"
          className="w-full"
          isRequired={false}
        />
   
        <SelectInput
          label="Select Category"
          name="categoryId"
          register={register}
          errors={errors}
          className="w-full"
          options={categories}
        />
        <SelectInput
          label="Select SubCategory"
          name="subCategoryId"
          register={register}
          errors={errors}
          className="w-full"
          options={subcategories}
        />
        <SelectInput
          label="Select Agent"
          name="agentId"
          register={register}
          errors={errors}
          className="w-full"
          options={agents}
        />
        <SelectInput
          label="Select Company"
          name="companyId"
          register={register}
          errors={errors}
          className="w-full"
          options={companies}
        />
        <TextInput
          label="Property Owner Contact Number"
          name="contact"
          register={register}
          errors={errors}
          className="w-full"
          isRequired={false}
        />
        
        <TextareaInput
          label="Property Description"
          name="description"
          register={register}
          errors={errors}
        />
        
        {/* <ToggleInput
          label="Supports Wholesale Selling"
          name="isWholesale"
          trueTitle="Supported"
          falseTitle="Not Supported"
          register={register}
        /> */}
        <h2 className="text-xl text-slate-700 w-full">Select Property Amenities</h2> <br/>
        {Object.keys(amenitiesOptions).map((amenity) => (
          <div key={amenity} className="mb-4 border bg-gray-100 rounded-md p-2">
            <label
              htmlFor={amenity}
              className="block text-sm font-medium text-gray-900"
            >
              {amenity.charAt(0).toUpperCase() + amenity.slice(1)}:
            </label>
            <Controller
              name={amenity}
              control={control}
              render={({ field }) => (
                <div className="mt-1">
                  {amenitiesOptions[amenity].map((option) => (
                    <button
                      type="button"
                      key={option}
                      className={`inline-flex items-center px-3 py-2 border border-gray-500 rounded-md shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-orange-500 mr-2 mb-2 ${
                        field.value.includes(option)
                          ? "bg-orange-500 text-white"
                          : ""
                      }`}
                      onClick={() => {
                        let newValue;
                        if (field.value.includes(option)) {
                          newValue = field.value.filter(
                            (val) => val !== option
                          );
                        } else {
                          newValue = [...field.value, option];
                        }
                        field.onChange(newValue);
                      }}
                    >
                      {option}
                    </button>
                  ))}
                </div>
              )}
            />
          </div>
        ))}

        {/* {isWholesale && (
          <>
            <TextInput
              label="Wholesale Price"
              name="wholesalePrice"
              register={register}
              errors={errors}
              type="number"
              className="w-full"
            />
            <TextInput
              label="Minimum Wholesale Qty"
              name="wholesaleQty"
              register={register}
              errors={errors}
              type="number"
              className="w-full"
            />
          </>
        )} */}

        <MultipleImageInput
          imageUrls={propertyImages}
          setImageUrls={setPropertyImages}
          endpoint="multiplePropertyUploader"
          label="Property Images"
          className="text-gray-800"
        />
        {/* Tags */}
        <ArrayItemsInput setItems={setTags} items={tags} itemTitle="Tag" />

        {/* <TextareaInput
          label="Product Description"
          name="description"
          register={register}
          errors={errors}
        /> */}
        {/* <ToggleInput
          label="Publish your Property"
          name="isActive"
          trueTitle="Active"
          falseTitle="Draft"
          register={register}
        /> */}
      </div>

      <SubmitButton
        isLoading={loading}
        buttonTitle={id ? "Update Property" : "Create Property"}
        loadingButtonTitle={`${
          id ? "Updating" : "Creating"
        } Property please wait...`}
      />
    </form>
  );
}
