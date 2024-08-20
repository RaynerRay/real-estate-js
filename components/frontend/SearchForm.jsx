'use client'
import { useRouter } from 'next/navigation';
import React from 'react';
import { useForm } from 'react-hook-form';
import { Search, Tag, Layers } from 'lucide-react';

const SearchForm = () => {
  const { register, handleSubmit, reset } = useForm();
  const router = useRouter();

  const handleSearch = (data) => {
    const { searchTerm, filterOption } = data;
    console.log('Search Term:', searchTerm);
    console.log('Filter Option:', filterOption);

    if (searchTerm && filterOption) {
      reset();
      router.push(`/search?search=${searchTerm}&filter=${filterOption}`);
    } else {
      console.log("Please fill in all fields");
    }
  };

  return (
    <div>
      <form className="flex flex-col md:flex-row gap-4" onSubmit={handleSubmit(handleSearch)}>
        <div className="relative flex-grow text-gray-700">
          <Tag className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-900" />
          <input
            {...register("searchTerm", { required: true })}
            type="text"
            className="w-full pl-10 py-4 border border-gray-200 rounded-lg"
            placeholder="Type Location"
          />
        </div>

        <div className="relative flex-grow text-gray-700">
          <Layers className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-800" />
          <select
            {...register("filterOption", { required: true })}
            className="w-full pl-10 py-4 border border-gray-200 rounded-lg"
          >
            <option value="">Select Rent or Buy</option>
            <option value="rent">Rent</option>
            <option value="buy">Buy</option>
          </select>
        </div>

        <button
          type="submit"
          className="w-full md:w-auto py-3 px-5 leading-5 text-sm bg-green-500 hover:bg-green-600 text-gray-800 rounded-lg flex items-center justify-center"
        >
          <Search className="mr-2" /> Search
        </button>
      </form>
    </div>
  );
};

export default SearchForm;
