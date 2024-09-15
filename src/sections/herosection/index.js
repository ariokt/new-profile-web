import Coding from "../../assets/coding.svg";
import Design from "../../assets/design.svg";
import Foto from "../../assets/ario-waskita-frontend-developer.png";
import Hi from "../../assets/hi.svg";
import Image from 'next/image';
import React from "react";
import TypingAnimation from "@/components/TypingAnimation";
import "./index.css";

const HeroSection = () => {
    return (
        <div className="hero-section flex flex-col items-center gap-5" id="hero">
            <div className="w-[200px] h-[200px]">
                <Image src={Foto} className="hero-section__Image border-2 border-slate-200 rounded-full h-full object-cover" alt="Foto Ario Waskita"/>
            </div>
            <div className="flex flex-col sm:flex-row gap-2 md:gap-4 items-center">
                <div className="my-intro my-intro--up flex gap-3 items-center">
                    <Image className="hero-section__icon" src={Coding} alt="Programmer icon"/>
                    <h1 className="text-sm sm:text-lg">Frontend Developer</h1>
                </div>
                <div className="my-intro flex gap-3 items-center">
                    <Image className="hero-section__icon animate-halo" src={Hi} alt="Hi icon"/>
                    <div className="d-flex flex-column items-center">
                        <p>Hi! I'm</p>
                        <h2 className="text-sm sm:text-lg">Ario Waskita</h2>
                    </div>
                </div>
                <div className="my-intro my-intro--up flex gap-3 items-center">
                    <Image className="hero-section__icon" src={Design} alt="Design icon"/>
                    <h2 className="text-sm sm:text-lg">UI/UX Design Enthusiast</h2>
                </div>
            </div>
            <TypingAnimation texts={["Work From, Jakarta Indonesia","Frontend Developer ReactJS, NextJS","Backend Developer ExpressJS"]} />
            <div className="h-full">
                <div className="line h-full"></div>
            </div>
        </div>
    )
}

export default HeroSection