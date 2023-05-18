import React from "react";
import Image from 'next/image';
import ss1 from "../../assets/projects/ss1.webp";
import ss2 from "../../assets/projects/ss2.webp";
import ss3 from "../../assets/projects/ss3.webp";
import ss4 from "../../assets/projects/ss4.webp";
import "./index.css";

const ProjectSection = () => {

    const images = [{img:ss1,link:"https://drive.google.com/drive/folders/1pWeceiXFuNPFyCP3uXtQvb1ym4UF-RgJ?usp=share_link"}, {img:ss2,link:"https://www.loanmarket.co.id/licence-opportunity-ads"}, {img:ss3,link:"https://drive.google.com/drive/folders/1sWKiwt5-Nrz-vvTCLUinp3d3g62-uM3G?usp=share_link"}, {img:ss4,link:"https://alamsutera.loanmarket.co.id/"}];

    return (
        <section className="projects flex flex-col items-center bg-black h-fit pt-7 px-8">
            <h3 className="mx-auto w-fit text-xl sm:text-3xl text-indigo-300 mb-2">My Projects</h3>
            <h2 className="mx-auto w-fit text-white text-xl sm:text-3xl lg:text-5xl font-semibold text-center">A selection of project that improve me.</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 lg:w-10/12 my-8 md:my-12">
                {images.map((item,y) => <a href={item.link} target="_blank" className="transition-transform duration-500 project-img rounded-3xl overflow-hidden border-2 border-gray-400 hover:border-2 hover:border-white"><Image src={item.img} alt="Ario Waskita Portofolio" key={y} style={{maxHeight:"280px"}} /></a>)}
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