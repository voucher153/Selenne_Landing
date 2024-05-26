import React, { useContext, useEffect, useState } from "react";
import "./SectionTextTitle.css"
import { useInView } from "react-intersection-observer";
import clsx from "clsx";
import { useAppSelector } from "../../hooks/hooks";

interface props {
    text: string
}

export const SectionTextTitle = ({text}: props) => {

    const prevLocation = useAppSelector(state => state.landingSlice.prevLocation)

    const [active, setActive] = useState(false)
    
    const [ref, inView] = useInView({
        threshold: 0.5,
        delay: 500
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
        <div className={clsx({"section-text-title__block_active": active, "section-text-title__block": !active})} ref={ref}>
            <h4 className="section-text-title__text">{text}</h4>
        </div>
    )
}