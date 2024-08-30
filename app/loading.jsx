import React from "react";
import Image from "next/image";

export default function Loading() {
  return (
    <div className="flex justify-center items-center h-screen gap-4">
      <div className="text-gray-900 text-2xl font-bold leading-none" href="/">
      <Image className="block " src="/logo.png" alt="Logo" width={300} height={300} />
      </div>
      <div className="w-12 h-12 border-4 border-t-4 border-green-900 border-solid rounded-full animate-spin border-t-transparent"></div>
    </div>
  );
}
