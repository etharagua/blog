"use client";
import React from "react";
import { DotLottiePlayer, Controls } from "@dotlottie/react-player";
import "@dotlottie/react-player/dist/index.css";

const LottieAnimation = () => {
    return (
        <DotLottiePlayer
            src="/animation.lottie"
            autoplay
            loop
        ></DotLottiePlayer>
    );
};

export default LottieAnimation;
