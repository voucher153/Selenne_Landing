import React, { useEffect, useState } from "react";
import "./ViewAllWork.css"
import { useInView } from "react-intersection-observer";
import { NavLink, useLocation } from "react-router-dom";
import clsx from "clsx";
import { useAppSelector } from "../../../hooks/hooks";

export const ViewAllWork = () => {

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
        <div>
            <NavLink to={"/work"} ref={ref} className={clsx('allWork', {'allWork-active': active})}>
                <span className="nav-bar__link">
                    View All Work
                </span>
            </NavLink>
        </div>
    )
}