import React, { useEffect, useState } from "react";
import "./SectionTextSubtitle.css"
import { useInView } from "react-intersection-observer";
import clsx from "clsx";
import { useAppSelector } from "../../hooks/hooks";

interface props {
    text: string
    inHome: boolean
}

export const SectionTextSubtitle = ({text, inHome}: props) => {

    const prevLocation = useAppSelector(state => state.landingSlice.prevLocation)

    const [active, setActive] = useState(false)
    
    const [ref, inView] = useInView({
        threshold: 0,
        delay: 300
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
        <div className={clsx({'section-text-subtitle': !inHome, 'section-text-subtitle_inHome': inHome})}>
            <div className={clsx({'section-text-subtitle__block': !active,'section-text-subtitle__block_active': active})} ref={ref}>
                <p className="section-text-subtitle__text">{text}</p>
            </div>
        </div>
    )
}