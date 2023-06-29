import React from 'react';
import Image from 'next/image';
import Gif from '../assets/404animation.gif';
import Link from 'next/link';

function NotFound() {

  return (
    <div className='flex flex-col items-center bg-white text-black h-screen'>
        <Image src={Gif} width={480} height={400} alt='404 page not found'/>
        <h1 className='text-xl md:text-2xl mb-12 text-center'>Sorry, the page you're looking for doesn't exist.</h1>
        <Link className="p-2 items-center text-blue-400 text-xl border border-blue-400 rounded-lg bg-white flex" href="./">Return Home</Link>
    </div>
  )
}

export default NotFound