"use client";
import React, { useEffect } from 'react'
import "./index.css"
import WhatsappMe from '../../components/whatsappme';
import Link from 'next/link';

const Navbar = () => {

    const [scrolled, setScrolled] = React.useState(false);

    const handleScroll = () => {
        if (window.scrollY >= 50) {
            setScrolled(true);
        } else {
            setScrolled(false);
        }
    }

    useEffect(() => {
        if (window.scrollY >= 50) {
            setScrolled(true);
        }
        window.addEventListener('scroll', handleScroll);
    }, [])


    return (
        <nav className={"navbar flex items-center justify-between px-4 md:px-24 lg:px-36 py-4 fixed w-full h-fit " + (scrolled ? "active" : "inactive") }>
            <a className="navbar__logo navbar__link p-2" href="./">Ario Waskita</a>
            <div className="flex">
                <a className="navbar__link p-2" href="https://drive.google.com/file/d/1ZSpDDLkirP9VY-Cwsid_KY-7Wg5GY-kq/view?usp=share_link" target='_blank'>Resume</a>
                <Link className="navbar__link p-2" href="./gallery">Gallery</Link>
            </div>
            <div className='hidden md:flex'>
                <WhatsappMe />
            </div>
        </nav>
    )
}

export default Navbar