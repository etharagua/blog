import { sortBlogs } from "@/src/utils";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import Tag from "../Elements/Tag";
import { slug } from "github-slugger";

const HomeCoverSection = ({ blogs }) => {
    const sortedBlogs = sortBlogs(blogs);
    const blog = sortedBlogs[0];
    return (
        <div className="inline-block w-full">
            <article className="flex flex-col items-start justify-end mx-5 sm:mx-10 relative h-[60vh] sm:h-[85vh]">
                <div className="absolute top-0 left-0 bottom-0 right-0 h-full bg-gradient-to-b from-transparent from 0% to-dark/90 rounded-3xl z-0" />
                <Image
                    src={blog.image.filePath.replace("../public", "")}
                    placeholder="blur"
                    blurDataURL={blog.image.blurhashDataUrl}
                    alt={blog.title}
                    fill
                    className="object-cover object-center w-full h-full rounded-3xl -z-10"
                    sizes="100vw"
                    priority
                />

                <div className="z-0 flex flex-col items-start justify-center w-full p-6 sm:p-8 md:p-12 lg:p-16 lg:w-3/4 text-light">
                    <Tag
                        link={`/categorias/${slug(blog.tags[0])}`}
                        name={blog.tags[0]}
                    />
                    <Link href={blog.url} className="mt-6">
                        <h1 className="text-lg font-bold capitalize sm:text-xl md:text-3xl lg:text-4xl">
                            <span className="bg-gradient-to-r from-accent to-accent dark:from-accentDark/50 dark:to-accentDark/50 bg-[length:0px_6px] hover:bg-[length:100%_6px] bg-left-bottom bg-no-repeat transition-[background-size] duration-500">
                                {blog.title}
                            </span>
                        </h1>
                    </Link>
                    <p className="hidden mt-4 sm:inline-block md:text-lg lg:text-xl font-in">
                        {blog.description}
                    </p>
                </div>
            </article>
        </div>
    );
};

export default HomeCoverSection;
