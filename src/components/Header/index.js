"use client";

import Link from "next/link";
import Logo from "./Logo";
import {
    GithubIcon,
    MoonIcon,
    SunIcon,
    TwitterIcon,
} from "../Icons";
import siteMetadata from "@/src/utils/siteMetaData";
import { useThemeSwitch } from "../Hooks/useThemeSwitch";
import { useState } from "react";
import { cx } from "@/src/utils";
import { FaTelegram } from "react-icons/fa";

const Header = () => {
    const [mode, setMode] = useThemeSwitch();
    const [click, setClick] = useState(false);
    const toggle = () => {
        setClick(!click);
    };
    return (
        <header className="flex items-center justify-between w-full p-4 px-5 sm:px-10">
            <Logo />

            <button
                className="z-50 inline-block mr-3 sm:hidden"
                onClick={toggle}
            >
                <div className="w-6 transition-all duration-300 cursor-pointer ease">
                    <div className="relative">
                        <span
                            className="absolute top-0 inline-block w-full h-0.5 bg-dark dark:bg-light rounded transition-all ease duration-200"
                            style={{
                                transform: click
                                    ? "rotate(-45deg) translateY(0)"
                                    : "rotate(0) translateY(6px)",
                            }}
                        >
                            &nbsp;
                        </span>
                        <span
                            className="absolute top-0 inline-block w-full h-0.5 bg-dark dark:bg-light rounded transition-all ease duration-200"
                            style={{
                                opacity: click ? 0 : 1,
                            }}
                        >
                            &nbsp;
                        </span>
                        <span
                            className="absolute top-0 inline-block w-full h-0.5 bg-dark dark:bg-light rounded transition-all ease duration-200"
                            style={{
                                transform: click
                                    ? "rotate(45deg) translateY(0)"
                                    : "rotate(0) translateY(-6px)",
                            }}
                        >
                            &nbsp;
                        </span>
                    </div>
                </div>
            </button>

            <nav
                className="fixed z-50 flex items-center px-6 py-3 font-medium capitalize transition-all duration-300 translate-x-1/2 border border-solid rounded-full sm:px-8 sm:hidden w-max border-dark top-6 right-1/2 bg-light/80 backdrop-blur-sm ease"
                style={{
                    top: click ? "1rem" : "-5rem",
                }}
            >
                <Link href="/" className="mr-2">
                    Inicio
                </Link>
                {/* <Link href="/about" className="mx-2">
                    Acerca de
                </Link>
                <Link href="/contact" className="mx-2">
                    Contacto
                </Link> */}
                <button
                    onClick={() => setMode(mode === "light" ? "dark" : "light")}
                    className={cx(
                        "w-6 h-6 ease ml-2 flex items-center justify-center rounded-full p-1",
                        mode === "light"
                            ? "bg-dark text-light"
                            : "bg-light text-dark"
                    )}
                >
                    {mode === "light" ? (
                        <MoonIcon className={"fill-dark"} />
                    ) : (
                        <SunIcon className={"fill-dark"} />
                    )}
                </button>
            </nav>

            <nav className="fixed z-50 items-center hidden px-8 py-3 font-medium capitalize translate-x-1/2 border border-solid rounded-full sm:flex w-max border-dark top-6 right-1/2 bg-light/80 backdrop-blur-sm">
                <Link href="/" className="mr-2">
                    Inicio
                </Link>
                {/* <Link href="/about" className="mx-2">
                    Acerca de
                </Link>
                <Link href="/contact" className="mx-2">
                    Contacto
                </Link> */}
                <button
                    onClick={() => setMode(mode === "light" ? "dark" : "light")}
                    className={cx(
                        "w-6 h-6 ease ml-2 flex items-center justify-center rounded-full p-1",
                        mode === "light"
                            ? "bg-dark text-light"
                            : "bg-light text-dark"
                    )}
                >
                    {mode === "light" ? (
                        <MoonIcon className={"fill-dark"} />
                    ) : (
                        <SunIcon className={"fill-dark"} />
                    )}
                </button>
            </nav>
            <div className="items-center hidden sm:flex">
                <a
                    href={siteMetadata.twitter}
                    className="inline-block w-6 h-6 mr-4"
                    target={"_blank"}
                >
                    <TwitterIcon className="transition-all duration-200 hover:scale-125 ease" />
                </a>
                <a
                    href={siteMetadata.github}
                    className="inline-block w-6 h-6 mr-4"
                    target={"_blank"}
                >
                    <GithubIcon className="transition-all duration-200 hover:scale-125 ease dark:fill-light" />
                </a>
                <a
                    href={siteMetadata.telegram}
                    className="inline-block w-6 h-6 mr-4"
                    target={"_blank"}
                >
                    <FaTelegram color="#55ACEE" size={"1.6em"} className="transition-all duration-200 bg-white rounded-full hover:scale-125 ease"/>
                </a>


                {/* <a
                    href={siteMetadata.dribbble}
                    className="inline-block w-6 h-6 mr-4"
                >
                    <DribbbleIcon className="transition-all duration-200 hover:scale-125 ease" />
                </a> */}
            </div>
        </header>
    );
};

export default Header;
