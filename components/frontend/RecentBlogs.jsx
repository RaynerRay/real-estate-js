import { convertIsoDateToNormal } from "@/lib/convertIsoDatetoNormal";
import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function RecentBlogs({ recentBlogs }) {
  return (
    <div className="lg:col-span-2">
      <p className="text-xl font-bold text-gray-900 dark:text-slate-300">
        Recent blogs
      </p>

      <div className="mt-6 space-y-5">
        {recentBlogs.map((blog, i) => {
          const normalDate = convertIsoDateToNormal(blog.createdAt);
          return (
            <div
              key={i}
              className="relative overflow-hidden transition-all duration-200 bg-white border border-gray-200 rounded-lg hover:shadow-lg hover:bg-gray-50 hover:-translate-y-1"
            >
              <div className="p-4">
                <div className="flex items-start flex-col lg:items-center">
                  <Image
                  height={500}
                  width={500}
                    className="object-cover w-full h-16 rounded-lg shrink-0"
                    src={blog.imageUrl}
                    alt={blog.title}
                  />
                  <div className="ml-5">
                    {/* <p className="text-sm font-medium text-gray-900">
                      {normalDate}
                    </p> */}
                    <p className="text-sm leading-7 font-bold text-gray-900 mt-2.5">
                      <Link
                        href={`/blogs/${blog.slug}`}
                        className="line-clamp-2"
                      >
                        {blog.title}
                        <span
                          className="absolute inset-0"
                          aria-hidden="true"
                        ></span>
                      </Link>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
