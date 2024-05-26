import React from "react";
import "./AboutGreeting.css"
import { BigAnimatedText } from "../../../commonComponents/BigAnimatedText.tsx/BigAnimatedText";
import { AnimatedCircle } from "../../../commonComponents/AnimatedCirlce/AnimatedCircle";

export const AboutGreeting = () => {
    return (
        <div className="about-greeting__block">
            <BigAnimatedText intersectionOn={false} notHome={true} boldTextOne="WHO WE ARE" ordinaryTextOne="AND WHAT WE OFFER" />
            <AnimatedCircle intersectionOn={false} />
        </div>
    )
}