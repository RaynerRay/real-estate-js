import { ArrowRight } from 'lucide-react';
import Link from 'next/link';
import React from 'react';
import SideFilters from './SideFilters';
import Image from 'next/image';

const newsItems = [
  {
    image: "/house1.jpg",
    category: "Technology",
    readTime: "4 min read",
    title: "You will never believe these bizarre truth of travel."
  },
  {
    image: "/house2.jpg",
    category: "Real Estate",
    readTime: "4 min read",
    title: "You will never believe these bizarre truth of travel."
  },
  {
    image: "/house3.jpg",
    category: "Regulations",
    readTime: "4 min read",
    title: "You will never believe these bizarre truth of travel."
  },
  {
    image: "/house1.jpg",
    category: "Technology",
    readTime: "4 min read",
    title: "You will never believe these bizarre truth of travel."
  },
];

const NewsCard = ({ image, category, title, slug }) => (
  <div className="w-full md:w-1/2 xl:w-1/4 p-3 border-gray-300 border rounded-md">
    <a className="group" href="#">
      <div className="group flex flex-col justify-end h-full relative overflow-hidden rounded-lg">
        <Image
        height={500}
        width={500}
          className="mx-auto w-full transform group-hover:scale-110 transition ease-out duration-500"
          src={image}
          alt={title}
        />
        <div className="absolute bottom-0 left-0 w-full p-2.5">
          <div className="p-5 w-full bg-black bg-opacity-80 rounded-md">
            <h2 className="mb-2 font-heading font-medium text-xs uppercase text-gray-400 tracking-px">
              {category} 
               {/* {readTime} */}
            </h2>
            <Link href={`/blogs/${slug}`}>
            <p className="font-heading font-semibold text-lg text-white group-hover:underline">
              {title}
            </p>
            </Link>
          </div>
        </div>
      </div>
    </a>
  </div>
);

const Blogs = ({blogs}) => (
  <section className="pt-20 pb-36 bg-gray-100 overflow-hidden">
    <div className="container mx-auto px-4">
      <div className="md:max-w-lg mx-auto text-center mb-20">
        <h2 className="mb-4 font-heading font-semibold text-gray-900 text-3xl sm:text-4xl">Blogs</h2>
        {/* <p className="text-lg text-gray-400">
          Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim.
        </p> */}
       
      </div>
      <div className="flex flex-wrap -mx-4">
    <div className="w-full lg:w-1/4 px-4  p-8 ">
    <h1 class="mb-6 text-gray-900 text-xl">Categories</h1>
    {blogs?.map((item, index) => (
          // <p className='text-blue-700 font-normal text-lg'>{item.category}</p>
          <h1  key={index} class=" text-blue-800 text-md m-2 font-medium ">{item.category}</h1>
        ))}
    </div>
      <div className="flex flex-wrap -m-3 gap-4 lg:w-3/4">
        {blogs?.map((item, index) => (
          <NewsCard
            key={index}
            image={item.imageUrl}
            category={item.category}
            // readTime={item.readTime}
            title={item.title}
            slug={item.slug}
          />
        ))}
      </div>
      </div>
    </div>
  </section>
);

export default Blogs;
