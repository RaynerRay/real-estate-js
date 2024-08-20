import React from "react";

export default function Loading() {
  return (
    <div className="flex justify-center items-center h-screen gap-4">
      <div className="text-gray-900 text-2xl font-bold leading-none" href="/">
        Property<span className="text-green-500">Zim</span>
      </div>
      <div className="w-12 h-12 border-4 border-t-4 border-green-500 border-solid rounded-full animate-spin border-t-transparent"></div>
    </div>
  );
}
