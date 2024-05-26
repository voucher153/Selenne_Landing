import React, { useEffect, useRef, useState } from "react";
import { useInView } from "react-intersection-observer";
import "./AnimatedCircle.css"
import clsx from "clsx";
import { useAppSelector } from "../../hooks/hooks";

interface props {
    intersectionOn: boolean
}

export const AnimatedCircle = ({intersectionOn}: props) => {

    const prevLocation = useAppSelector(state => state.landingSlice.prevLocation)
    const divRef = useRef<HTMLDivElement | null>(null)

    const [animationEnd, setAnimationEnd] = useState(false)
    const [rotation, setRotation] = useState(false)
    const [active, setActive] = useState(false)
    
    const [ref, inView] = useInView({
        threshold: 0
    })

    const resetAnimation = (): void => {
        divRef.current!.style.animation = 'none'
        divRef.current?.getClientRects();
        divRef.current!.style.animation = ""
    }

    useEffect(() => {
        resetAnimation()
        setAnimationEnd(false)
        setActive(false)
        setRotation(false)
    
    }, [ prevLocation ])

    useEffect(() => {
        if (!intersectionOn && animationEnd) {
            setRotation(true)
        }
    }, [ rotation, animationEnd])

    useEffect(() => {
        if (inView && intersectionOn) {
            setActive(true)
        }
    }, [ inView ])

    useEffect(() => {
        if (inView && intersectionOn && animationEnd) {
            setRotation(true)
        }
    }, [ animationEnd, inView ])

    return (
        <div
            onAnimationEnd={e => {
                if ((inView && intersectionOn) || !intersectionOn) setAnimationEnd(true)
            }}
            className={clsx('circle-start', {
                    'circle': (active && intersectionOn) || !intersectionOn, 
                    'circle-rotation': ((active && intersectionOn) || !intersectionOn) && rotation
            })} 
            ref={element => {
                divRef.current = element
                ref(element)
            }}
        >
            HEY!
        </div>
    )
}