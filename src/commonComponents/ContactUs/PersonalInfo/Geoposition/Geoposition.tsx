import React, { useEffect, useState } from "react";
import "./Geoposition.css"
import { useInView } from "react-intersection-observer";
import clsx from "clsx";
import { useAppSelector } from "../../../../hooks/hooks";

export const Geoposition = () => {

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
        <div className={clsx('geoposition', {'geoposition_active': active})} ref={ref}>
            <span className="geoposition__bold-text">New York</span>
            <span className="geoposition__ordinary-text">59012 Some Street</span>
            <span className="geoposition__ordinary-text">New York NY, 639052</span>
        </div>
    )
}