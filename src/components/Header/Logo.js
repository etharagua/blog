import Image from "next/image";
import Link from "next/link";
import profileImg from "/public/logo.png";
// import profileImg from "@/public/profile-img.svg";

const Logo = () => {
    return (
        <Link href="/" className="flex items-center text-dark dark:text-light">
            <div className="w-12 mr-2 overflow-hidden md:mr-4 md:w-16 ">
                <Image
                    src={profileImg}
                    alt="ETH Aragua"
                    className="w-full h-auto"
                    sizes="33vw"
                    priority
                />
            </div>
            <span className="text-lg md:text-xl dark:font-semibold">
            ETH Aragua Blog
            </span>
        </Link>
    );
};

export default Logo;
