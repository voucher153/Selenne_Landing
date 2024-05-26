import React, { useEffect, useState } from "react";
import "./FadeRightText.css"
import { useInView } from "react-intersection-observer";
import clsx from "clsx";
import { useAppSelector } from "../../hooks/hooks";

interface props {
    text: string
}

export const FadeRightText = ({text}: props) => {

    const prevLocation = useAppSelector(state => state.landingSlice.prevLocation)
    const [active, setActive] = useState(false)
    
    const [ref, inView] = useInView({
        threshold: 0,
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
        <div className={clsx('fade-right-text', {'fade-right-text_active': active})} ref={ref}>
            <h3 className="fade-right-text__text">{text}</h3>
        </div>
    )
}