import { sortBlogs } from "@/src/utils";
import React from "react";
import BlogLayoutOne from "../Blog/BlogLayoutOne";
import BlogLayoutTwo from "../Blog/BlogLayoutTwo";

const FeaturedPosts = ({ blogs }) => {
    const sortedBlogs = sortBlogs(blogs);
    return (
        <section className="flex flex-col items-center justify-center w-full px-5 mt-16 sm:mt-24 md:mt-32 sm:px-10 md:px-24 sxl:px-32">
            <h2 className="inline-block w-full text-2xl font-bold capitalize md:text-4xl text-dark dark:text-light">
                Publicaciones destacadas
            </h2>

            <div className="grid grid-cols-2 grid-rows-2 gap-6 mt-10 sm:mt-16">
                <article className="relative col-span-2 row-span-2 sxl:col-span-1">
                    <BlogLayoutOne blog={sortedBlogs[1]} />
                </article>
                <article className="relative col-span-2 row-span-1 sm:col-span-1">
                    <BlogLayoutTwo blog={sortedBlogs[2]} />
                </article>
                {/* <article className="relative col-span-2 row-span-2 sm:col-span-1">
                    <BlogLayoutOne blog={sortedBlogs[2]} />
                </article> */}
                <article className="relative col-span-2 row-span-1 sm:col-span-1">
                    <BlogLayoutTwo blog={sortedBlogs[3]} />
                </article>
            </div>
        </section>
    );
};

export default FeaturedPosts;
