import React from "react";
import "./WorkProjects.css"
import { ItemProject } from "../../../commonComponents/ItemProject/ItemProject";
import { useAppSelector } from "../../../hooks/hooks";

export const WorkProjects = () => {

    const projects = useAppSelector(state => state.landingSlice.projects)

    return (
        <div className="work-projects__block">
            <div className="work-projects__item">
                <ItemProject url={projects.project04} titleText="Mobile App" subTitle="Startups" itemProject="project04" ratio="1.8 / 1" />
            </div>
            <div className="work-projects__item">
                <ItemProject url={projects.project05} titleText="Icon Design" subTitle="Creative" itemProject="project05" ratio="1.8 / 1" />
            </div>
            <div className="work-projects__item">
                <ItemProject url={projects.project03} titleText="Brending" subTitle="Creative" itemProject="project03" ratio="1.8 / 1" />
            </div>
            <div className="work-projects__item">
                <ItemProject url={projects.project02} titleText="Logo Design" subTitle="Fashion" itemProject="project02" ratio="1.8 / 1" />
            </div>
            <div className="work-projects__item">
                <ItemProject url={projects.project01} titleText="Mobile App" subTitle="Management" itemProject="project01" ratio="1.8 / 1" />
            </div>
        </div>
    )
}