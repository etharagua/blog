import { allBlogs } from "@/.contentlayer/generated";
import BlogDetails from "@/src/components/Blog/BlogDetails";
import RenderMdx from "@/src/components/Blog/RenderMdx";
import Tag from "@/src/components/Elements/Tag";
import Image from "next/image";
import { slug } from "github-slugger";
import siteMetadata from "@/src/utils/siteMetaData";

export async function generateStaticParams() {
    return allBlogs.map((blog) => ({ slug: blog._raw.flattenedPath }));
}

export async function generateMetadata({ params }) {
    const blog = allBlogs.find(
        (blog) => blog._raw.flattenedPath === params.slug
    );
    if (!blog) {
        return;
    }

    const publishedAt = new Date(blog.publishedAt).toISOString;
    const modifiedAt = new Date(blog.updatedAt || blog.publishedAt).toISOString;

    let imageList = [siteMetadata.socialBanner];
    if (blog.image) {
        imageList =
            typeof blog.image.filePath === "string"
                ? [
                      siteMetadata.siteUrl +
                          blog.image.filePath.replace("../public", ""),
                  ]
                : blog.image;
    }

    const ogImages = imageList.map((img) => {
        return { url: img.includes("http") ? img : siteMetadata.siteUrl + img };
    });

    const authors = blog?.author ? [blog.author] : siteMetadata.author;

    return {
        title: blog.title,
        description: blog.description,
        openGraph: {
            title: blog.title,
            description: blog.description,
            url: siteMetadata.siteUrl + blog.url,
            siteName: siteMetadata.title,
            locale: "es_ES",
            type: "article",
            publishedTime: publishedAt,
            modifiedTime: modifiedAt,
            images: ogImages,
            authors: authors.length > 0 ? authors : [siteMetadata.author],
        },
        twitter: {
            card: "summary_large_image",
            title: blog.title,
            description: blog.description,
            images: ogImages, // Must be an absolute URL
        },
    };
}

export default function BlogPage({ params }) {
    const blog = allBlogs.find(
        (blog) => blog._raw.flattenedPath === params.slug
    );

    let imageList = [siteMetadata.socialBanner];
    if (blog.image) {
        imageList =
            typeof blog.image.filePath === "string"
                ? [
                      siteMetadata.siteUrl +
                          blog.image.filePath.replace("../public", ""),
                  ]
                : blog.image;
    }

    const authors = blog?.author ? [blog.author] : siteMetadata.author;

    const jsonLd = {
        "@context": "https://schema.org",
        "@type": "NewsArticle",
        headline: blog.title,
        description: blog.description,
        image: imageList,
        datePublished: new Date(blog.publishedAt).toISOString,
        dateModified: new Date(blog.updatedAt || blog.publishedAt).toISOString,
        author: [
            {
                "@type": "Person",
                name: authors.length > 0 ? authors : [siteMetadata.author],
                url: siteMetadata.siteUrl + blog.url,
            },
        ],
    };

    return (
        <>
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
            />
            <article>
                <div className="mb-8 text-center relative w-full h-[70vh] bg-dark">
                    <div className="absolute z-10 flex flex-col items-center justify-center w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2">
                        <Tag
                            name={blog.tags[0]}
                            link={`/categorias/${slug(blog.tags[0])}`}
                            className="px-6 py-2 text-sm"
                        />
                        <h1 className="relative inline-block w-5/6 mt-6 text-2xl font-semibold leading-normal capitalize md:text-3xl lg:text-5xl text-light">
                            {blog.title}
                        </h1>
                    </div>
                    <div className="absolute top-0 bottom-0 left-0 right-0 h-full bg-dark/60 dark:bg-dark/40" />
                    <Image
                        src={blog.image.filePath.replace("../public", "")}
                        placeholder="blur"
                        blurDataURL={blog.image.blurhashDataUrl}
                        alt={blog.title}
                        width={blog.image.width}
                        height={blog.image.height}
                        className="object-cover object-center w-full h-full aspect-square"
                        sizes="100vw"
                        priority
                    />
                </div>

                <BlogDetails blog={blog} slug={params.slug} />

                <div className="grid grid-cols-12 px-5 mt-8 md:px-10 lg:gap-8 gap-y-8 sxl:gap-16">
                    <div className="col-span-12 lg:col-span-4">
                        <details
                            className="border-[1px] border-solid border-dark dark:border-light dark:text-light text-dark rounded-lg p-4 sticky top-6 max-h-[80vh] overflow-hidden overflow-y-auto"
                            open
                        >
                            <summary className="text-lg font-semibold capitalize cursor-pointer">
                                Tabla de Contenido
                            </summary>
                            <ul className="mt-4 text-base font-in">
                                {blog.toc.map((heading) => {
                                    return (
                                        <li
                                            key={`#${heading.slug}`}
                                            className="py-1"
                                        >
                                            <a
                                                href={`#${heading.slug}`}
                                                data-level={heading.level}
                                                className="data-[level=two]:pl-0 data-[level=two]:pt-2 data-[level=two]:border-t border-solid border-dark/40
                                            data-[level=three]:pl-4
                                            sm:data-[level=three]:pl-6
                                            flex items-center justify-start"
                                            >
                                                {heading.level === "three" ? (
                                                    <span className="flex w-1 h-1 mr-2 rounded-full bg-dark">
                                                        &nbsp;
                                                    </span>
                                                ) : null}
                                                <span className="hover:underline">
                                                    {heading.text}
                                                </span>
                                            </a>
                                        </li>
                                    );
                                })}
                            </ul>
                        </details>
                    </div>
                    <RenderMdx blog={blog} />
                </div>
            </article>
        </>
    );
}
