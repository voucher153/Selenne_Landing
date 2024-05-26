import React from "react";
import "./RecentWork.css"
import { Projects } from "./Projects/Projects";
import { FadeRightText } from "../../../commonComponents/FadeRightText/FadeRightText";
import { project01, project02, project03 } from "../../../img/img";

export const RecentWork = () => {

    return (
        <div className="recent-work__block">
            <FadeRightText text="RECENT WORK" />
            <Projects urlOne={project01} urlTwo={project02} urlThree={project03} />
        </div>
    )
}