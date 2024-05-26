import React, { useEffect, useState } from "react";
import "./Contact.css"
import { useInView } from "react-intersection-observer";
import { useLocation } from "react-router-dom";
import clsx from "clsx";
import { useAppSelector } from "../../hooks/hooks";

export const Contact = () => {

    const prevLocation = useAppSelector(state => state.landingSlice.prevLocation)
    const [active, setActive] = useState(false)
    
    const [ref, inView] = useInView({
        threshold: 0
    })

    useEffect(() => {
        setActive(false)
    }, [ prevLocation ])

    useEffect(() => {
        if (inView) {
            setActive(true)
        }
    }, [ inView ])

    return (
        <div className={clsx({'contact': !active, 'contact_active': active})} ref={ref}>
            <div className="contact__link-block link__block">
                <a href="https://www.instagram.com/" target="_blank" className="contact__link" rel="noreferrer">Instagram</a>
            </div>
            <div className="contact__link-block link__block">
                <a href="https://www.linkedin.com/" target="_blank" className="contact__link" rel="noreferrer">Linkedin</a>
            </div>
            <div className="contact__link-block link__block">
                <a href="https://dribbble.com/" target="_blank" className="contact__link" rel="noreferrer">Dribbble</a>
            </div>
        </div>
    )
}