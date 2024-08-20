
import Blogs from "@/components/frontend/Blogs";
import { getData } from "@/lib/getData";
import React from "react";

export default async function page() {
  const blogs = await getData("blogs");
  return (
    <div>
      <Blogs
        
        blogs={blogs}
      />
    </div>
  );
}
