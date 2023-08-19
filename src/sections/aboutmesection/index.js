import React from "react";
import Hi from "../../assets/hi.svg";
import Aboutme from "../../assets/aboutme.png";
import Image from 'next/image';
import "./index.css";

const AboutMeSection = () => {
    return (
        // about me section
        <section className="about-me flex flex-col items-center bg-black h-fit py-7">
            <div>
                <div className="flex flex-col items-center gap-4 mb-8">
                    <div className="text-white flex flex-row gap-8">
                        <Image className="animate-halo" width={32} height={32} src={Hi} alt="Hi icon"/> 
                        <div className="flex flex-col gap-2">
                            <h2 className="text-xl sm:text-3xl lg:text-5xl">Hello, It's me Ario</h2>
                            <h2 className="text-xl sm:text-3xl lg:text-5xl text-sky-300"> Let me introduce Myself</h2>
                        </div>
                    </div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 w-3/4 mx-auto">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 col-span-3 xl:col-span-2">
                        <div className="card shadow-pink p-8 flex flex-col gap-2 cursor-default">
                            <h3 className="card-yellow text-xl sm:text-3xl">Education</h3>
                            <p className="text-white">Lulus dari Teknik Informatika Universitas Gunadarma dengan IPK 3.67 dan lulus dari bootcamp Frontend Engineering Binar Academy dengan nilai yang memuaskan.</p>
                        </div>
                        <div className="card shadow-blue p-8 flex flex-col gap-2 cursor-default">
                            <h3 className="card-blue text-xl sm:text-3xl">Certifications</h3>
                            <p className="text-white">Selain sertifikat Binar, saya juga memiliki sertifikat Frontend Web Fundamentals dari Dicoding dan Responsive Web Design dari freeCodeCamp 2020.</p>
                        </div>
                        <div className="card shadow-purple p-8 flex flex-col gap-2 cursor-default">
                            <h3 className="card-purple text-xl sm:text-3xl">Skills</h3>
                            <p className="text-white">Memahami Web Development dengan menggunakan HTML5, CSS3, Javascript, Reactjs, Nextjs, TailwindCSS, Bootstrap, Gitlab, Git, Postman API, etc.</p>
                        </div>
                        <div className="card shadow-green p-8 flex flex-col gap-2 cursor-default">
                            <h3 className="card-green text-xl sm:text-3xl">Explore Tech, Music, Games</h3>
                            <p className="text-white">Saat waktu luang biasanya saya gunakan untuk belajar teknologi baru, mendengarkan musik, dan bermain game. Seperti yang saya lakukan pada saat membuat website profile ini, saya mempelajari NextJS 13.</p>
                        </div>
                    </div>
                    <div className="pt-8 lg:pt-20 w-full col-span-2 xl:col-span-1">
                        <Image width={400} height={600} src={Aboutme} alt="About Me" className="mx-auto"/>
                    </div>
                </div>
            </div>
            <div className="md:grid-cols-2 flex flex-col gap-3 my-12">
                <h2 className="text-white opacity-80 text-xl sm:text-3xl lg:text-5xl text-center">Motivated, Creative, Dedicated</h2>
                <h3 className="text-white mx-auto w-fit text-xl sm:text-3xl text-center">Wanna know more? Visit my <a href="https://www.linkedin.com/in/ario-waskita-318b3a151/" target="_blank" className="text-sky-300">LinkedIn</a></h3>
            </div>
            <div className="h-40 opacity-70 justify-self-end bg-sky-300">
                <div className="line h-full"></div>
            </div>
        </section>
        // about me section END
    )
}

export default AboutMeSection