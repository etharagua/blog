import { format, parseISO } from "date-fns";
import { slug } from "github-slugger";
import Link from "next/link";
import React from "react";
// import ViewCounter from "./ViewCounter";
import es from "date-fns/locale/es";

const BlogDetails = ({ blog, slug: blogSlug }) => {
    return (
        <div className="flex flex-wrap items-center justify-around px-2 py-2 mx-5 text-lg font-medium rounded-lg md:px-10 md:mx-10 sm:text-xl bg-accent dark:bg-accentDark text-light dark:text-dark">
            <time className="m-3">
                {format(parseISO(blog.publishedAt), "LLLL d, yyyy", {
                    locale: es,
                })}
            </time>
            {/* <span className="m-3">
                <ViewCounter slug={blogSlug} />
            </span> */}
            <div className="m-3">{blog.readingTime.text}</div>
            <Link href={`/categorias/${slug(blog.tags[0])}`} className="m-3">
                #{slug(blog.tags[0])}
            </Link>
            <div className="m-3">de: {blog.author}</div>
        </div>
    );
};

export default BlogDetails;
