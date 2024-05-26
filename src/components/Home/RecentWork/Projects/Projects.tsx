import React from "react";
import { ItemProject } from "../../../../commonComponents/ItemProject/ItemProject";
import "./Projects.css"

interface props {
    urlOne: string,
    urlTwo: string,
    urlThree: string
}

export const Projects = ({urlOne, urlTwo, urlThree}: props) => {
    return (
        <div className="projects__block">
            <ItemProject url={urlTwo} titleText="Logo Design" subTitle="Fashion" itemProject="project02" ratio="1 / 1" />
            <ItemProject url={urlOne} titleText="Mobile App" subTitle="Management" itemProject="project01" ratio="1 / 1" />
            <ItemProject url={urlThree} titleText="Brending" subTitle="Creative" itemProject="project03" ratio="1.8 / 1" />
        </div>
    )
}