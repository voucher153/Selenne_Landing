import React, { useEffect, useState } from "react";
import "./CapabilitiesList.css"
import { useInView } from "react-intersection-observer";
import clsx from "clsx";
import { useAppSelector } from "../../../../hooks/hooks";

interface list {
    listOfText: Array<string>
}

export const CapabilitiesList = ({listOfText}: list) => {

    const prevLocation = useAppSelector(state => state.landingSlice.prevLocation)
    const [active, setActive] = useState(false)
    
    const [ref, inView] = useInView({
        threshold: 0,
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

    const elements = listOfText.map(el => <li className="capabilities-list__item">{el}</li>)

    return (
        <ul className={clsx({'capabilities-list': !active,'capabilities-list_active': active})} ref={ref}>
            {elements}
        </ul>
    )
}