'use client';
import React, { useRef } from "react";
import "./index.css";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

const QuoteSection = () => {
  const sectionRef = useRef(null);

  useGSAP(() => {
    const tl = gsap.timeline({
        scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 80%",
            toggleActions: "play none none none",
        }
    });

    tl.to('.curtain-left', {
        width: '0%',
        duration: 1,
        ease: "power3.out"
    })
    tl.to('.curtain-right', {
        width: '0%',
        duration: 1,
        ease: "power3.out"
    }, "<")
  })
  return (
    <section ref={sectionRef} className="quote-section flex flex-col items-center bg-black relative">
      <div className="curtain-left absolute top-0 left-0 w-1/2 h-full bg-gradient-to-r from-purple-900 via-black to-black z-20 border-r border-purple-500 shadow-[0_0_40px_#a855f7]" />
      <div className="curtain-right absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-purple-900 via-black to-black z-20 border-l border-purple-500 shadow-[0_0_40px_#a855f7]" />
      <div className="h-full bg-orange-300 opacity-70 mb-4">
        <div className="line h-full"></div>
      </div>
      <div className="px-8 md:px-40 mb-8">
        <div>
          <h3
            align="center"
            className="text-white text-3xl sm:text-5xl lg:text-7xl xl:text-8xl leading-normal"
          >
            Design is not just what it looks like and feels like.
          </h3>
        </div>
        <div>
          <h3
            align="center"
            className="text-3xl sm:text-5xl lg:text-7xl xl:text-8xl second-part-quote mb-4"
          >
            It is how it works.
          </h3>
          <p
            align="center"
            className="text-2xl sm:text-4xl text-white opacity-70"
          >
            - Steve Jobs
          </p>
        </div>
      </div>
      <div className="h-full opacity-70 justify-self-end bg-purple-600">
        <div className="line h-full"></div>
      </div>
    </section>
  );
};

export default QuoteSection;
