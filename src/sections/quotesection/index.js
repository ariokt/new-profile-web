import React from "react";
import "./index.css";

const QuoteSection = () => {
    return (
        <section className="quote-section flex flex-col items-center bg-black">
            <div className="h-full bg-orange-300 opacity-70 mb-4">
                <div className="line h-full"></div>
            </div>
            <div className="px-8 md:px-40 mb-8">
                <div>
                    <h3 align="center" className="text-white text-3xl sm:text-5xl lg:text-7xl xl:text-8xl leading-normal">Design is not just what it looks like and feels like.</h3>
                </div>
                <div>
                    <h3 align="center" className="text-3xl sm:text-5xl lg:text-7xl xl:text-8xl second-part-quote mb-4">It is how it works.</h3>
                    <p align="center" className="text-2xl sm:text-4xl text-white opacity-70">- Steve Jobs</p>
                </div>
            </div>
            <div className="h-full opacity-70 justify-self-end bg-purple-600">
                <div className="line h-full"></div>
            </div>
        </section>
    )
}

export default QuoteSection