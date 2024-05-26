import React, { useEffect, useState } from "react";
import "./ServiceInfo.css"
import { useInView } from "react-intersection-observer";
import { useAppSelector } from "../../hooks/hooks";
import clsx from "clsx";

interface props {
    client: string,
    service: string,
    industry: string,
    year: string
}

export const ServiceInfo = ({client, service, industry, year}: props) => {
    
    const prevLocation = useAppSelector(state => state.landingSlice.prevLocation)
    const [active, setActive] = useState(false)
    
    const [ref, inView] = useInView({
        threshold: 0.5,
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
        <div className={clsx({"service-info": !active, "service-info_active": active})} ref={ref}>
            <div className="service-info__item">
                <h4 className="service-info__title">Client</h4>
                <p className="service-info__text">{client}</p>
            </div>
            <div className="service-info__item">
                <h4 className="service-info__title">Service</h4>
                <p className="service-info__text">{service}</p>
            </div>
            <div className="service-info__item">
                <h4 className="service-info__title">Industry</h4>
                <p className="service-info__text">{industry}</p>
            </div>
            <div className="service-info__item">
                <h4 className="service-info__title">Year</h4>
                <p className="service-info__text">{year}</p>
            </div>
        </div>
    )
}