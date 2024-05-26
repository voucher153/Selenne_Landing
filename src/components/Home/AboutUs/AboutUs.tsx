import React from "react";
import "./AboutUs.css"
import { FadeRightText } from "../../../commonComponents/FadeRightText/FadeRightText";
import { Contact } from "../../../commonComponents/Contact/Contact";
import { SectionTextTitle } from "../../../commonComponents/SectionTextTitle/SectionTextTitle";
import { SectionTextSubtitle } from "../../../commonComponents/SectionTextSubtitle/SectionTextSubtitle";

export const AboutUs = () => {

    return (
        <section className="about-us__block">
            <FadeRightText text="ABOUT US" />
            <div>
                <SectionTextTitle text="We're a groundbreaking creative studio seeking to provide imaginative digital answers to your needs" />
                <SectionTextSubtitle 
                    text="From 2010 onwards, we've been crafting designs that not only make an impact, but also yield tangible outcomes. We assist companies in innovating and maintaining high relevance to their customer base through the creation of advanced digital solutions." 
                    inHome={true} 
                />
            </div>
            <Contact />
        </section>
    )
}