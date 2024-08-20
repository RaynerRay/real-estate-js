"use client";
import ImageInput from "@/components/FormInputs/ImageInput";
import SubmitButton from "@/components/FormInputs/SubmitButton";
import TextareaInput from "@/components/FormInputs/TextAreaInput";
import TextInput from "@/components/FormInputs/TextInput";
import ToggleInput from "@/components/FormInputs/ToggleInput";
import FormHeader from "@/components/backoffice/FormHeader";
import { makePostRequest, makePutRequest } from "@/lib/apiRequest";
import { generateSlug } from "@/lib/generateSlug";
import { useRouter } from "next/navigation";

import React, { useState } from "react";
import { useForm } from "react-hook-form";

export default function NewCompanyForm({ updateData = {} }) {
  const initialImageUrl = updateData?.imageUrl ?? "";
  const id = updateData?.id ?? "";
  const [imageUrl, setImageUrl] = useState(initialImageUrl);
  const [loading, setLoading] = useState(false);
  const {
    register,
    reset,
    watch,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      isActive: true,
      ...updateData,
    },
  });
  const router = useRouter();
  function redirect() {
    router.push("/dashboard/companies");
  }
//   const isActive = watch("isActive");
  async function onSubmit(data) {
    const slug = generateSlug(data.title);
    data.slug = slug;
    data.imageUrl = imageUrl;
    console.log(data);
    if (id) {
      //Make Put Request
      makePutRequest(setLoading, `api/companies/${id}`, data, "Company", redirect);
    } else {
      //make post request
      makePostRequest(
        setLoading,
        "api/companies",
        data,
        "Company",
        reset,
        redirect
      );
      setImageUrl("");
    }
  }
  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="w-full max-w-4xl p-4 bg-white border border-gray-200 rounded-lg shadow sm:p-6 md:p-8 dark:bg-gray-800 dark:border-gray-700 mx-auto my-3 "
    >
      <div className="grid gap-4 sm:grid-cols-2 sm:gap-6">
        <TextInput
          label="Company Name"
          name="title"
          register={register}
          errors={errors}
          className="w-full"
          
        />
        <TextInput
          label="Company Email"
          name="email"
          type="email"
          register={register}
          errors={errors}
          className="w-full"
          isRequired={false}
        />
        <TextInput
          label="Company Contact Number"
          name="phone"
          register={register}
          errors={errors}
          className="w-full"
          isRequired={false}
        />
        <TextInput
          label="Additional Contact Number (optional)"
          name="phone2"
          register={register}
          errors={errors}
          className="w-full"
          isRequired={false}
        />
        <TextInput
          label="Main Company Address"
          name="address"
          register={register}
          errors={errors}
          isRequired={false}
          
        />
        <TextInput
          label="Second Company Address (optional)"
          name="address2"
          register={register}
          errors={errors}
          isRequired={false}
        />
        <TextInput
          label="Company Website"
          name="website"
          register={register}
          errors={errors}
          isRequired={false}
        />
        <TextareaInput
          label="Company Description"
          name="description"
          register={register}
          errors={errors}
          isRequired={false}
        />
        {/* Configure this endpoint in the core js */}
        <ImageInput
          imageUrl={imageUrl}
          setImageUrl={setImageUrl}
          endpoint="companyProfileUploader"
          label="Company Image"
        />
        {/* <ToggleInput
          label="Publish Advert Now"
          name="isActive"
          trueTitle="Active"
          falseTitle="Draft"
          register={register}
        /> */}
      </div>

      <SubmitButton
        isLoading={loading}
        buttonTitle={id ? "Update Company" : "Create Company"}
        loadingButtonTitle={`${
          id ? "Updating" : "Creating"
        } Company please wait...`}
      />
    </form>
  );
}
