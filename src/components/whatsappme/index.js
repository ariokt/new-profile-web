import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons';
import "./index.css";


const WhatsappMe = () => {
    return (
        <>
            <a className="hire-me p-2 items-center text-white flex" href="https://wa.me/6287783871011" target={'_blank'}><FontAwesomeIcon icon={faWhatsapp} size="lg" className="mr-2"/><p>WhatsApp Me</p></a>   
        </>
    )
}

export default WhatsappMe