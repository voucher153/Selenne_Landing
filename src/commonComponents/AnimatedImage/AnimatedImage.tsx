import React, { useEffect, useState } from "react";
import "./AnimatedImage.css"
import { useInView } from "react-intersection-observer";
import clsx from "clsx";
import { useAppSelector } from "../../hooks/hooks";

interface props {
    url: string
    delay?: number
}

export const AnimatedImage = ({url, delay}: props) => {

    const prevLocation = useAppSelector(state => state.landingSlice.prevLocation)

    const [active, setActive] = useState(false)
    
    const [ref, inView] = useInView({
        threshold: 0,
        delay: delay ? delay : 0
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
        <div className={clsx({'animated-image__block_active': active, 'animated-image__block': !active})} ref={ref}>
            <img src={url} className="animated-image__img" alt="product"/>
        </div>
    )
}