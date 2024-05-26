import React, { useContext, useEffect, useState } from "react";
import "./ItemProject.css"
import styled from "styled-components";
import { useInView } from "react-intersection-observer";
import { NavLink } from "react-router-dom";
import { FirstElementsDelay } from "../../context/Context";
import { useAppSelector } from "../../hooks/hooks";

interface Item {
    url: string,
    titleText: string,
    subTitle: string,
    itemProject: string,
    ratio?: string
}

const ItemProjectStyle = styled.div<{itemProject?: string, active: boolean}>`
    grid-area: ${props => props.itemProject};
    width: 100%;
    height: 100%;
    opacity: ${props => props.active ? 1 : 0};
    transform: ${props => props.active ? "scale(1)" : "scale(0.9)"};
    transition: all 1.5s ease-in-out;
    font-family: "DM Sans", sans-serif;
    font-weight: 500;
    font-size: 17.5px;
`

const ImgBlockContent = styled.div<{ratio?: string}>`
    aspect-ratio: ${props => props.ratio};
`


export const ItemProject = ({url, titleText, subTitle, itemProject, ratio}: Item) => {

    const prevLocation = useAppSelector(state => state.landingSlice.prevLocation)
    const firstElementsDelay = useContext(FirstElementsDelay)

    const [active, setActive] = useState(false)
    
    const [ref, inView] = useInView({
        threshold: 0,
        delay: firstElementsDelay
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
        <ItemProjectStyle className="item-project__block" itemProject={itemProject} active={active} ref={ref}>
            <NavLink to={`/items/${itemProject}`}>
                <ImgBlockContent ratio={ratio} className="item-project__img-block">
                    <div className="item-project__cover">
                        <svg viewBox="0 0 32 32" version="1.1" xmlns="http://www.w3.org/2000/svg">
                            <path d="M16.108 10.044c-3.313 0-6 2.687-6 6s2.687 6 6 6 6-2.686 6-6-2.686-6-6-6zM16.108 20.044c-2.206 0-4.046-1.838-4.046-4.044s1.794-4 4-4c2.206 0 4 1.794 4 4s-1.748 4.044-3.954 4.044zM31.99 15.768c-0.012-0.050-0.006-0.104-0.021-0.153-0.006-0.021-0.020-0.033-0.027-0.051-0.011-0.028-0.008-0.062-0.023-0.089-2.909-6.66-9.177-10.492-15.857-10.492s-13.074 3.826-15.984 10.486c-0.012 0.028-0.010 0.057-0.021 0.089-0.007 0.020-0.021 0.030-0.028 0.049-0.015 0.050-0.009 0.103-0.019 0.154-0.018 0.090-0.035 0.178-0.035 0.269s0.017 0.177 0.035 0.268c0.010 0.050 0.003 0.105 0.019 0.152 0.006 0.023 0.021 0.032 0.028 0.052 0.010 0.027 0.008 0.061 0.021 0.089 2.91 6.658 9.242 10.428 15.922 10.428s13.011-3.762 15.92-10.422c0.015-0.029 0.012-0.058 0.023-0.090 0.007-0.017 0.020-0.030 0.026-0.050 0.015-0.049 0.011-0.102 0.021-0.154 0.018-0.090 0.034-0.177 0.034-0.27 0-0.088-0.017-0.175-0.035-0.266zM16 25.019c-5.665 0-11.242-2.986-13.982-8.99 2.714-5.983 8.365-9.047 14.044-9.047 5.678 0 11.203 3.067 13.918 9.053-2.713 5.982-8.301 8.984-13.981 8.984z"></path>
                        </svg>
                    </div>
                    <img src={url} className="item-project__img" alt={itemProject} />
                </ImgBlockContent>
                <div className="item-project__text-block">
                    <span className="item-project__text">{titleText}</span>
                    <span className="item-project__text">{subTitle}</span>
                </div>
            </NavLink>
        </ItemProjectStyle>
    )
}