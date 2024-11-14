import { format } from "date-fns";
import es from "date-fns/locale/es";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const BlogLayoutTwo = ({ blog }) => {
    return (
        <div className="grid items-center grid-cols-12 gap-4 group text-dark dark:text-light">
            <Link
                href={blog.url}
                className="h-full col-span-12 overflow-hidden lg:col-span-4 rounded-xl"
            >
                <Image
                    src={blog.image.filePath.replace("../public", "")}
                    placeholder="blur"
                    blurDataURL={blog.image.blurhashDataUrl}
                    alt={blog.title}
                    width={blog.image.width}
                    height={blog.image.height}
                    className="object-cover object-center w-full h-full transition-all duration-300 aspect-square group-hover:scale-105 ease"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                />
            </Link>

            <div className="w-full col-span-12 lg:col-span-8">
                <span className="inline-block w-full text-xs font-semibold uppercase sm:text-sm text-accent dark:text-accentDark">
                    {blog.tags[0]}
                </span>
                <Link href={blog.url} className="inline-block my-1">
                    <h2 className="text-base font-semibold capitalize sm:text-lg">
                        <span className="bg-gradient-to-r from-accent/50 to-accent/50 dark:to-accentDark/50 dark:from-accentDark/50 bg-[length:0px_6px] group-hover:bg-[length:100%_6px] bg-left-bottom bg-no-repeat transition-[background-size] duration-500">
                            {blog.title}
                        </span>
                    </h2>
                </Link>

                <span className="inline-block w-full text-xs font-semibold capitalize sm:text-base text-dark/50 dark:text-light/50">
                    {format(new Date(blog.publishedAt), "MMMM dd, yyyy", {
                    locale: es,
                })}
                </span>
            </div>
        </div>
    );
};

export default BlogLayoutTwo;
