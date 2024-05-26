import React from "react";
import "./WorkGreeting.css"
import { BigAnimatedText } from "../../../commonComponents/BigAnimatedText.tsx/BigAnimatedText";
import { AnimatedCircle } from "../../../commonComponents/AnimatedCirlce/AnimatedCircle";
import clsx from "clsx";

export const WorkGreeting = () => {
    return (
        <div className="wrapper-greeting work-greeting__block">
            <BigAnimatedText intersectionOn={false} notHome={true} boldTextOne="CHECK OUR" ordinaryTextOne="PORTFOLIO" />
            <AnimatedCircle intersectionOn={false} />
        </div>
    )
}