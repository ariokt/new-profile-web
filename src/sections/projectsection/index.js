'use client'

import React, { useRef } from "react";
import Image from 'next/image';
import data from "../../../dataProjects";
import "./index.css";
import Link from "next/link";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

const ProjectSection = () => {
    const sectionRef = useRef(null);

    useGSAP(() => {
        const tl = gsap.timeline({
            scrollTrigger: {
              trigger: sectionRef.current,
              start: "top 80%",
              toggleActions: "play none none none",
            },
          });

          tl.from(".project-card", {
            opacity: 0,
            x: (i) => (i % 2 === 0 ? -200 : 200),
            duration: 0.7,
            ease: "power3.out",
            stagger: 0.4,
          });
    }, {
        scope: sectionRef
    })

    return (
        <section ref={sectionRef} className="projects flex flex-col items-center bg-black h-fit pt-7 px-8">
            <h3 className="mx-auto w-fit text-xl sm:text-3xl text-indigo-300 mb-2">My Projects</h3>
            <h2 className="mx-auto w-fit text-white text-xl sm:text-3xl lg:text-5xl font-semibold text-center">A selection of project that improve me.</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 lg:w-10/12 my-8 md:my-12">
                {data.map((item,y) => <Link href={`/projects/${item.id}`} key={item.id} className="transition-transform duration-500 project-img rounded-3xl overflow-hidden border-2 border-gray-400 hover:border-2 hover:border-white"><div className="project-card"><Image src={item.thumbnail} alt="Ario Waskita Portofolio" style={{maxHeight:"280px"}} /></div></Link>)}
            </div>
            <div className="md:grid-cols-2 flex flex-col gap-3 mb-12">
                <h3 className="text-white mx-auto w-fit text-xl sm:text-3xl text-center">Wanna see more project? <a href="https://github.com/ariokt" target="_blank" className="text-indigo-300">Visit my github</a></h3>
            </div>
            <div className="h-40 opacity-70 justify-self-end bg-indigo-300">
                <div className="line h-full"></div>
            </div>
        </section>
    )
}

export default ProjectSection