import React from "react";
import "./ItemGreeting.css"
import { BigAnimatedText } from "../../../commonComponents/BigAnimatedText.tsx/BigAnimatedText";
import { AnimatedCircle } from "../../../commonComponents/AnimatedCirlce/AnimatedCircle";
import { ServiceInfo } from "../../../commonComponents/ServiceInfo/ServiceInfo";
import { AnimatedImage } from "../../../commonComponents/AnimatedImage/AnimatedImage";
import { useAppSelector } from "../../../hooks/hooks";
import { SectionTextSubtitle } from "../../../commonComponents/SectionTextSubtitle/SectionTextSubtitle";

interface props {
    boldText: string,
    subtitleText: string, 
    client: string,
    industry: string, 
    service: string, 
    year: string, 
    firstUrl: string, 
    secondUrl: string
}

export const ItemGreeting = ({boldText, subtitleText, client, industry, service, year, firstUrl, secondUrl}: props) => {

    const firstElementsDelay = useAppSelector(state => state.landingSlice.firstElementsDelay)

    return (
        <div className="wrapper-greeting">
            <div className="animated-block">
                <BigAnimatedText intersectionOn={false} notHome={true} boldTextOne={boldText} />
                <AnimatedCircle intersectionOn={false} />
            </div>
            <div className="section-text">
                <SectionTextSubtitle text={subtitleText} inHome={false} />
            </div>
            <div className="service-info__content">
                <ServiceInfo client={client} industry={industry} service={service} year={year} />
            </div>
            <div className="animated-img">
                <AnimatedImage url={firstUrl} delay={firstElementsDelay} />
            </div>
            <div className="animated-img">
                <AnimatedImage url={secondUrl} />
            </div>
        </div>
    )
}