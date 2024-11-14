"use client";

import React from "react";
import { useMDXComponent } from "next-contentlayer/hooks";
import Image from "next/image";

const mdxComponent = {
    Image,
};

const RenderMdx = ({ blog }) => {
    const MDXcontent = useMDXComponent(blog.body.code);
    return (
        <div className="col-span-12 prose sm:prose-base md:prose-lg lg:col-span-8 font-in max-w-max prose-blockquote:bg-accent/20 prose-blockquote:p-2 prose-blockquote:px-6 prose-blockquote:border-accent prose-blockquote:not-italic prose-blockquote:rounded-r-lg prose-li:marker:text-accent dark:prose-invert dark:prose-blockquote:border-accentDark dark:prose-li:marker:text-accentDark dark:prose-blockquote:bg-accentDark/20 first-letter:text-3xl sm:first-letter:text-5xl">
            <MDXcontent components={mdxComponent} />
        </div>
    );
};

export default RenderMdx;
