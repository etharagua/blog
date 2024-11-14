import { allBlogs } from "@/.contentlayer/generated";
import BlogLayoutThree from "@/src/components/Blog/BlogLayoutThree";
import Categories from "@/src/components/Blog/Categories";
import GithubSlugger, { slug } from "github-slugger";

const slugger = new GithubSlugger();

export async function generateStaticParams() {
    const categories = [];
    const paths = [{ slug: "todas" }];

    allBlogs.map((blog) => {
        if (blog.isPublished) {
            blog.tags.map((tag) => {
                let slugified = slugger.slug(tag);
                if (!categories.includes(slugified)) {
                    categories.push(slugified);
                    paths.push({ slug: slugified });
                }
            });
        }
    });

    return paths;
}

export async function generateMetadata({ params }) {
    return {
        title: `${params.slug.replaceAll("-", " ")} Blogs`,
        description: `Learn more about ${
            params.slug === "todas" ? "web development" : params.slug
        } through our collection of expert blogs and tutorials`,
    };
}

const CategoryPage = ({ params }) => {
    const allCategories = ["todas"];
    const blogs = allBlogs.filter((blog) => {
        return blog.tags.some((tag) => {
            const slugified = slug(tag);
            if (!allCategories.includes(slugified)) {
                allCategories.push(slugified);
            }
            if (params.slug === "todas") {
                return true;
            }
            return slugified === params.slug;
        });
    });

    return (
        <article className="flex flex-col mt-12 text-dark dark:text-light">
            <div className="flex flex-col px-5 sm:px-10 md:px-24 sxl:px-32">
                <h1 className="mt-6 text-2xl font-semibold md:text-4xl lg:text-5xl ">
                    #{params.slug}
                </h1>
                <span className="inline-block mt-2">
                    Descubre más categorías y amplía tus conocimientos!
                </span>
            </div>
            <Categories categories={allCategories} currentSlug={params.slug} />

            <div className="grid grid-cols-1 grid-rows-2 gap-16 px-5 mt-5 sm:px-10 md:px-24 sxl:px-32 sm:mt-10 md:mt-24 sxl:mt-32 sm:grid-cols-2 lg:grid-cols-3">
                {blogs.map((blog, index) => (
                    <article
                        key={index}
                        className="relative col-span-1 row-span-1"
                    >
                        <BlogLayoutThree blog={blog} />
                    </article>
                ))}
            </div>
        </article>
    );
};

export default CategoryPage;
