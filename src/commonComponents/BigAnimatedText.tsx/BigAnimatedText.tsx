import React, { ReactElement, useEffect, useState } from "react";
import { useInView } from "react-intersection-observer";
import styled from "styled-components";
import "./BigAnimatedText.css"
import clsx from "clsx";
import { useAppSelector } from "../../hooks/hooks";

interface props {
    intersectionOn: boolean,
    notHome: boolean,
    boldTextOne?: string,
    ordinaryTextOne?: string, 
    boldTextTwo?: string, 
    ordinaryTextTwo?: string
}

const Wrapper = styled.div<{notHome: boolean}>`
    width: ${props => props.notHome ? '600px' : '700px'};
    @media (min-width: 810px) and (max-width: 1200px) {
        width: ${props => props.notHome ? '550px' : '600px'};;
    }
`

export const BigAnimatedText = ({intersectionOn, notHome, boldTextOne, ordinaryTextOne, boldTextTwo, ordinaryTextTwo}: props) => {

    const prevLocation = useAppSelector(state => state.landingSlice.prevLocation)

    const [active, setActive] = useState(false)
    
    const [ref, inView] = useInView({
        threshold: 0,
        delay: 200
    })

    useEffect(() => {
        setActive(false)
    }, [ prevLocation ])

    useEffect(() => {
        if (inView && (intersectionOn || notHome)) {
            setActive(true)
        }
    }, [ inView ])
    
    const continueText = (): ReactElement => {
        if (ordinaryTextOne) {
            return (
                <h1 className="big-animated-text__bold-text">
                    {boldTextOne}
                    <span> </span>
                    <span className="big-animated-text__ordinary-text">{ordinaryTextOne}</span>
                    <span> </span>
                    {boldTextTwo}
                </h1>
            )
        }
        return (
            <h1 className="big-animated-text__bold-text">
                {boldTextOne}
            </h1>
        )
    }

    return (
        <Wrapper notHome={notHome} className="big-animated-text">
            <div 
                className={clsx('big-animated-text__text-block', {
                        'big-animated-text__text-block_animate': intersectionOn || notHome,
                        'big-animated-text__text-block_animate_active': (intersectionOn || notHome) && active
                })} 
                ref={ref}
            >
                {continueText()}
            </div>
        </Wrapper>
    )
} 