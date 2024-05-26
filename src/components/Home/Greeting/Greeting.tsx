import React from "react";
import "./Greeting.css"
import { BigAnimatedText } from "../../../commonComponents/BigAnimatedText.tsx/BigAnimatedText";
import { AnimatedCircle } from "../../../commonComponents/AnimatedCirlce/AnimatedCircle";

export const Greeting = () => {

    return (
        <div className="greeting__block wrapper-greeting">
            <BigAnimatedText intersectionOn={false} notHome={false} boldTextOne="WE ARE" ordinaryTextOne="PRODUCT DESIGN" boldTextTwo="STUDIO FROM NEW YORK" />
            <AnimatedCircle intersectionOn={false} />
        </div>
    )
}