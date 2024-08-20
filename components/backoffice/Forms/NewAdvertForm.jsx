"use client";
import ImageInput from "@/components/FormInputs/ImageInput";
import SubmitButton from "@/components/FormInputs/SubmitButton";
// import TextareaInput from "@/components/FormInputs/TextAreaInput";
import TextInput from "@/components/FormInputs/TextInput";
import ToggleInput from "@/components/FormInputs/ToggleInput";
import FormHeader from "@/components/backoffice/FormHeader";
import { makePostRequest, makePutRequest } from "@/lib/apiRequest";
import { generateSlug } from "@/lib/generateSlug";
import { useRouter } from "next/navigation";

import React, { useState } from "react";
import { useForm } from "react-hook-form";

export default function AdvertForm({ updateData = {} }) {
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
    router.push("/dashboard/adverts");
  }
  async function onSubmit(data) {
    data.imageUrl = imageUrl;
    console.log(data);
    if (id) {
      //Make Put Request
      makePutRequest(setLoading, `api/adverts/${id}`, data, "Advert", redirect);
    } else {
      //make post request
      makePostRequest(
        setLoading,
        "api/adverts",
        data,
        "Advert",
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
          label="Advert Title"
          name="title"
          register={register}
          errors={errors}
        />
        <TextInput
          label="Advert Link"
          name="link"
          register={register}
          errors={errors}
        />
        {/* Configure this endpoint in the core js */}
        <ImageInput
          imageUrl={imageUrl}
          setImageUrl={setImageUrl}
          endpoint="advertImageUploader"
          label="Advert Image"
        />
      
      </div>

      <SubmitButton
        isLoading={loading}
        buttonTitle={id ? "Update Advert" : "Create Advert"}
        loadingButtonTitle={`${
          id ? "Updating" : "Creating"
        } Advert please wait...`}
      />
    </form>
  );
}
