import { ArrowRight } from 'lucide-react';
import Link from 'next/link';
import React from 'react';
import Image from 'next/image';

const BlogsCard = ({ image, category, title, slug }) => (
  <div className="w-full md:w-1/2 xl:w-1/3 p-4">
    <div className="group h-full bg-white rounded-2xl shadow-xl overflow-hidden transition-all duration-300 hover:shadow-2xl hover:-translate-y-1">
      <div className="relative h-64 overflow-hidden">
        <Image
          height={500}
          width={500}
          className="object-cover w-full h-full transition-transform duration-500 group-hover:scale-110"
          src={image}
          alt={title}
        />
        <div className="absolute top-4 left-4 bg-gradient-to-r from-green-600 to-green-600 text-white text-xs font-medium px-3 py-1 rounded-full">
          {category}
        </div>
      </div>
      <div className="p-6">
        <Link href={`/blogs/${slug}`}>
          <h3 className="text-xl font-bold text-gray-800 mb-3 group-hover:text-green-600 transition-colors duration-300">
            {title}
          </h3>
        </Link>
        <div className="flex items-center text-green-600 font-medium mt-4 group-hover:translate-x-2 transition-transform duration-300">
          <span>Read Article</span>
          <ArrowRight className="ml-2 w-4 h-4" />
        </div>
      </div>
    </div>
  </div>
);

const Blogs = ({ blogs }) => (
  <section className="py-24 bg-gradient-to-b from-gray-50 to-white">
    <div className="container mx-auto px-4">
      <div className="max-w-3xl mx-auto text-center mb-4">
        <h2 className="text-3xl font-extrabold text-gray-900 mb-6 leading-tight">Explore Our Latest Insights</h2>
        <p className="text-xl text-gray-600 leading-relaxed">
          Dive into a world of knowledge with our curated collection articles.
        </p>
      </div>
      <div className="flex flex-wrap -mx-4">
        <div className="w-full lg:w-1/4 px-4 mb-8 lg:mb-0">
          <div className="bg-white rounded-2xl shadow-lg p-8 sticky top-8">
            <h3 className="text-2xl font-bold text-gray-800 mb-6">Categories</h3>
            <ul className="space-y-4">
              {blogs?.map((item, index) => (
                <li key={index}>
                  <Link
                    href="#"
                    className="text-gray-600 hover:text-green-600 transition-colors duration-300 flex items-center group"
                  >
                    <span className="w-1 h-1 bg-gray-300 rounded-full mr-3 group-hover:bg-green-600 transition-colors duration-300"></span>
                    <span className="group-hover:translate-x-1 transition-transform duration-300">{item.category}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className="lg:w-3/4">
          <div className="flex flex-wrap -mx-4">
            {blogs?.map((item, index) => (
              <BlogsCard
                key={index}
                image={item.imageUrl}
                category={item.category}
                title={item.title}
                slug={item.slug}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default Blogs;