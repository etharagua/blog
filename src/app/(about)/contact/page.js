import ContactForm from "@/src/components/Contact/ContactForm";
import LottieAnimation from "@/src/components/Contact/LottieAnimation";
import siteMetadata from "@/src/utils/siteMetaData";

export const metadata = {
    title: "Contact Me",
    description: `Contact me through the form available on this page or email me at ${siteMetadata.email}.`,
};

export default function Contact() {
    return (
        <section className="w-full h-auto md:h-[75vh] border-b-2 border-solid border-dark dark:border-light flex flex-col md:flex-row items-center justify-center text-dark dark:text-light">
            <div className="inline-block w-full h-full border-solid md:border-r-2 sm:w-4/5 md:w-2/5 border-dark dark:border-light">
                <LottieAnimation />
            </div>
            <div className="flex flex-col items-start justify-center w-full px-5 pb-8 xs:px-10 md:px-16 md:w-3/5">
                <h2 className="text-2xl font-bold capitalize xs:text-3xl sm:text-4xl">
                    Let's Connect!
                </h2>
                <ContactForm />
            </div>
        </section>
    );
}
