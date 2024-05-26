import React, { useEffect, useState } from "react";
import "./TeamRoomImage.css"
import clsx from "clsx";
import { useInView } from "react-intersection-observer";
import { useAppSelector } from "../../../../hooks/hooks";

interface props {
    url: string
    laterElement: boolean
}

export const TeamRoomImage = ({url, laterElement}: props) => {

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
            setTimeout(() => setActive(true), laterElement ? 1000 : 300)
        }
    }, [ inView ])

    return (
        <div className={clsx("team-room-image__block", {"team-room-image__block_active": active})} ref={ref}>
            <img className="team-room-image__img" src={url} alt="teamRoom" />
        </div>
    )
}