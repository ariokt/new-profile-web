import React from "react";
import "./index.css";
import WhatsappMe from "@/components/whatsappme";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin, faSquareFacebook, faSquareInstagram } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';

const Footer = () => {
    const sosmed = [{icon: faLinkedin, link:"https://www.linkedin.com/in/ario-waskita-318b3a151/"}, {icon: faSquareFacebook, link:"https://www.facebook.com/ario.waskita.9/"},
                    {icon: faSquareInstagram, link:"https://www.instagram.com/ariowta/"}, {icon: faEnvelope, link:"mailto:ariowta@gmail.com"}];
    return (
        <footer className="py-7">
            <div className="px-6 md:px-8 flex flex-col items-center gap-4 md:gap-8">
                <div className="footer-headline">
                    <h3 align="center" className="text-3xl sm:text-5xl lg:text-7xl xl:text-8xl mb-2">Let's work together!</h3>
                </div>
                <WhatsappMe />
                <div className="flex gap-4">
                    {sosmed.map((item, y) => <a href={item.link} target="_blank" key={y} className="text-white hover:text-fuchsia-500"><FontAwesomeIcon icon={item.icon} size="2xl"/></a>)}
                </div>
                <div className="footer-headline">
                    <h4 align="center" className="mb-2">&copy; {new Date().getFullYear()} Ario Waskita</h4>
                </div>
            </div>
        </footer>
    )
}

export default Footer