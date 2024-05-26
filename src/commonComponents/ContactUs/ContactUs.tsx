import React from "react";
import { FadeRightText } from "../../commonComponents/FadeRightText/FadeRightText";
import "./ContactUs.css"
import { BigAnimatedText } from "../../commonComponents/BigAnimatedText.tsx/BigAnimatedText";
import { AnimatedCircle } from "../../commonComponents/AnimatedCirlce/AnimatedCircle";
import { PersonalInfo } from "./PersonalInfo/PersonalInfo";
import { RightsReserved } from "./RightsReserved/RightsReserved";
import clsx from "clsx";

interface props {
    contactPage?: boolean
}

export const ContactUs = ({contactPage}: props) => {

    return (
        <div className={clsx("contact-us", {"contact-us_page": contactPage})}>
            {contactPage ? null : <FadeRightText text="CONTACT" />}
            <div className="contact-us__motivation-block">
                <BigAnimatedText intersectionOn={true} notHome={false} boldTextOne="HAVE A COOL IDEA?" ordinaryTextOne="LET'S WORK TOGETHER" />
                <AnimatedCircle intersectionOn={true} />
            </div>
            <PersonalInfo />
            <RightsReserved />
        </div>
    )
}