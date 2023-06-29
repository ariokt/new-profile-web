"use client";
import React from 'react';
import LightGallery from 'lightgallery/react';
import Image from 'next/image';
import Link from 'next/link';
import img1 from "../../assets/gallery/annual1.jpg";
import img2 from "../../assets/gallery/annual2.jpg";
import img3 from "../../assets/gallery/annual3.jpg";
import img4 from "../../assets/gallery/bd1.jpg";
import img5 from "../../assets/gallery/bd2.jpeg";

// import styles
import 'lightgallery/css/lightgallery.css';
import 'lightgallery/css/lg-zoom.css';
import 'lightgallery/css/lg-thumbnail.css';
import Navbar from '../../sections/navbar';
import Footer from '../../sections/footer';

export default function Gallery() {
  const images = [{src:img1, alt:"Annual Ray White & Loan Market"}, 
                  {src:img2, alt:"Annual Ray White & Loan Market"}, 
                  {src:img3, alt:"Annual Ray White & Loan Market"}, 
                  {src:img4, alt:"Ulang Tahun Me ke 25"}, 
                  {src:img5, alt:"Ulang Tahun Me ke 25"}];

  return (
    <main className="bg-blue-200 h-fit" >
      <Navbar />
      <div className='py-16 px-8 md:py-20 md:px-20 lg:py-28 lg:px-28 xl:py-32 xl:px-32 h-fit'>
        <LightGallery
            elementClassNames="custom-wrapper-class grid grid-cols-1 md:grid-cols-2  lg:grid-cols-3 gap-8"
        >
          {images.map((item,y) => 
          (
            <Image alt={item.alt} src={item.src} className='cursor-pointer' width={800} key={y}/>
          ))}
        </LightGallery>
      </div>
      <Footer />
    </main>
  )
}