import React, { useEffect, useState } from "react";
import { Contact } from "../../../commonComponents/Contact/Contact";
import "./PersonalInfo.css"
import { useInView } from "react-intersection-observer";
import { Geoposition } from "./Geoposition/Geoposition";
import clsx from "clsx";
import { useAppSelector } from "../../../hooks/hooks";

export const PersonalInfo = () => {
    
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
        <div className="personal-info">
            <div className="personal-info__contact">
                <div className={clsx({'personal-info__email-block': !active, 'personal-info__email-block_active': active})}>
                    <a href="mailto:hey@email.com" className="personal-info__email" ref={ref}>hey@email.com</a>
                </div>
                <Contact />
            </div>
            <Geoposition />
        </div>
    )
}