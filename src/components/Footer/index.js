"use client";

import React from "react";
import { useForm } from "react-hook-form";
import { GithubIcon, TwitterIcon } from "../Icons";
import { FaTelegram } from "react-icons/fa";
// import Link from "next/link";
import siteMetadata from "@/src/utils/siteMetaData";

const Footer = () => {
    const [success, setSuccess] = React.useState(false);
    const API_URL = process.env.NODE_ENV === 'development' ? 'http://localhost:3000' : 'https://blog.aragua.org';
    const {
        register,
        handleSubmit,
        reset,
        formState: { errors },
    } = useForm();
    const onSubmit = async(data) => {
        console.log(data);
        try {
              const res = await fetch(`${API_URL}/api/emails`, {
                method: "POST",
                headers: {
                  "Content-Type": "application/json",
                },
                body: JSON.stringify({
                  correo: data.email.toLowerCase()
                }),
              });
              if (!res.ok) {
                throw new Error("Network response was not ok");
              }
              const dat = await res.json();
              console.log(dat);
              reset({ email: "" });
              setSuccess(true)
              setTimeout(() => {
                setSuccess(false);
            }, 3000);
            } catch (error) {
              console.log(error);
            }
    }

    return (
        <footer className="flex flex-col items-center m-2 mt-16 sm:m-10 rounded-2xl bg-dark dark:bg-accentDark/90 text-light dark:text-dark">
            <h3 className="px-4 mt-16 text-2xl font-medium text-center capitalize dark:font-bold sm:text-3xl lg:text-4xl">
                Historias interesantes | Actualizaciones | Guías
            </h3>
            <p className="w-full px-4 mt-5 text-sm font-light text-center dark:font-medium sm:w-3/5 sm:text-base">
                Suscríbete para conocer nuevas tecnologías. Únete a una comunidad innovadora y mantente al día con las últimas novedades.
            </p>

            <form
                onSubmit={handleSubmit(onSubmit)}
                className="mt-6 w-fit sm:min-w-[384px] flex items-stretch bg-light dark:bg-dark p-1 sm:p-2 rounded mx-4"
            >
                <input
                    type="email"
                    placeholder="Coloca tu email"
                    {...register("email", {
                        required: true,
                        pattern: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/i,
                    })}
                    className="w-full pb-1 pl-2 mr-2 bg-transparent border-0 border-b sm:pl-0 text-dark dark:text-light focus:border-dark focus:ring-0"
                />

                <input
                    type="submit"
                    className="px-3 py-1 font-medium rounded cursor-pointer sm:px-5 bg-dark text-light dark:text-dark dark:bg-light"
                />
            </form>
            <div className="flex justify-center">
            {errors.email && (
        <div className="absolute text-sm text-gray">
            {errors.email.type === "pattern"
                ? "Coloca un email válido"
                : ""}
        </div>
    )}
    {success && (
        <div className="absolute text-sm text-green-500">
            {success
                ? "Gracias por suscribirte"
                : ""}
        </div>
    )}
        </div>
            <div className="flex items-center mt-8">
                <a
                    href={siteMetadata.twitter}
                    className="inline-block w-6 h-6 mr-4"
                    target={"_blank"}
                >
                    <TwitterIcon className="transition-all duration-200 hover:scale-125 ease" />
                </a>
                {/* <a
                    href={siteMetadata.linkedin}
                    className="inline-block w-6 h-6 mr-4"
                >
                    <LinkedinIcon className="transition-all duration-200 hover:scale-125 ease" />
                </a> */}

                <a
                    href={siteMetadata.github}
                    className="inline-block w-6 h-6 mr-4"
                    target={"_blank"}
                >
                    <GithubIcon className="transition-all duration-200 hover:scale-125 ease fill-light dark:fill-dark" />
                </a>

                <a
                    href={siteMetadata.telegram}
                    className="inline-block w-6 h-6 mr-4"
                    target={"_blank"}
                >
                    <FaTelegram color="#55ACEE" size={"1.6em"} className="transition-all duration-200 bg-white rounded-full hover:scale-125 ease"/>
                </a>
            </div>

            <div className="relative flex flex-col items-center justify-center w-full px-8 py-6 mt-16 font-medium border-t border-solid md:flex-row md:mt-24 border-light dark:border-dark">
                <span className="text-center">
                    ETH Aragua | {new Date().getFullYear()} &copy;
                </span>
            </div>
        </footer>
    );
};

export default Footer;
