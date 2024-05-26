import React, { useEffect, useState } from "react";
import "./RightsReserved.css"
import { useInView } from "react-intersection-observer";
import clsx from "clsx";
import { useAppSelector } from "../../../hooks/hooks";

export const RightsReserved = () => {

    const prevLocation = useAppSelector(state => state.landingSlice.prevLocation)
    const [active, setActive] = useState(false)
    
    const [ref, inView] = useInView({
        threshold: 0.5
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
        <div className={clsx('rights-reserve', {'rights-reserve_active': active})} ref={ref}>
            <span className="rights-reserve__text">© 2024. All rights reserved.</span>
        </div>
    )
}