import React, { ReactElement, useEffect, useState } from "react";
import Marquee from "react-fast-marquee";
import { useInView } from "react-intersection-observer";
import styled from "styled-components";
import "./Text.css"
import clsx from "clsx";

type direction = "left" | "up" | "down" | "right"

interface props {
    direction: direction,
    text: Array<string>
}

const TextBlock = styled.div`
    display: flex;
    align-items: center;
    overflow: hidden;
    height: 120px;
`


export const Text = ({direction, text}: props) => {
    
    const textElements: Array<ReactElement> = text.map(textEl => {
        return (
            <li className="marquee__item">
                <h3 className="marquee__item-text">
                    {textEl}
                </h3>
                <h3 className="marquee__item-point">
                    ·
                </h3>
            </li>
        )
    })
    
    const [active, setActive] = useState(false)
    const [playing, setPlaying] = useState(false)
    
    const [ref, inView] = useInView({
        threshold: 0.5
    })

    useEffect(() => {
        if (inView) {
            setActive(true)
            setPlaying(true)
        }
        if (!inView) {
            setPlaying(false)
        }
    }, [ inView ])

    return (
        <TextBlock ref={ref} className="marquee__block">
                <Marquee play={playing ? true : false} className={clsx({'marquee': !active, 'marquee_playing': active})} direction={direction} speed={direction === "left" ? 100 : 50} >
                    <ul className="marquee__list">
                        {textElements}
                    </ul>
                </Marquee>
        </TextBlock>
    )
}