const SkillList = [
    "next.js",
    "tailwind css",
    "figma",
    "javaScript",
    "web design",
    "Gatsby.js",
    "strapi",
    "firebase",
    "generative AI",
    "wireframing",
    "SEO",
    "framer motion",
    "sanity",
];

const Skills = () => {
    return (
        <section className="flex flex-col w-full p-5 border-b-2 border-solid xs:p-10 sm:p-12 md:p-16 lg:p-20 border-dark dark:border-light text-dark dark:text-light">
            <span className="text-lg font-semibold sm:text-3xl md:text-4xl text-accent dark:text-accentDark">
                I'm comfortable in...
            </span>
            <ul className="flex flex-wrap justify-center mt-8 xs:justify-start">
                {SkillList.map((item, index) => {
                    return (
                        <li
                            key={index}
                            className="inline-block px-4 py-2 mb-3 mr-3 text-base font-semibold capitalize transition-all duration-200 border-2 border-solid rounded cursor-pointer xs:text-lg sm:text-xl md:text-2xl xs:py-3 sm:py-4 lg:py-5 xs:px-6 sm:px-8 lg:px-12 xs:mb-4 xs:mr-4 md:mb-6 md:mr-6 border-dark dark:border-light hover:scale-105 ease dark:font-normal"
                        >
                            {item}
                        </li>
                    );
                })}
            </ul>
        </section>
    );
};

export default Skills;
