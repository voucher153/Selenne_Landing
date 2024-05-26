import React, { useEffect, useRef } from "react";
import { useInView } from "react-intersection-observer";
import "./Video.css"

export const Video = () => {

    const videoRef = useRef<HTMLVideoElement>(null)
    
    const [ref, inView] = useInView({
        threshold: 0
    })

    useEffect(() => {
        if (inView) {
            videoRef.current?.play()
        }
        if (!inView) {
            videoRef.current?.pause()
        }
    }, [ inView ])

    return (
        <div className="home-video__block" ref={ref}>
            <video className="home-video__video" src="https://framerusercontent.com/assets/SrDmqw1pUZsr0JBqbOoYsAp8Qo.mp4" autoPlay loop muted ref={videoRef} /> 
        </div>
    )
}