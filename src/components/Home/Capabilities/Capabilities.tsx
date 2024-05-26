import React from "react";
import "./Capabilites.css"
import { FadeRightText } from "../../../commonComponents/FadeRightText/FadeRightText";
import { CapabilitiesList } from "./CapabilitiesList/CapabilitiesList";
import { SectionTextTitle } from "../../../commonComponents/SectionTextTitle/SectionTextTitle";
import { SectionTextSubtitle } from "../../../commonComponents/SectionTextSubtitle/SectionTextSubtitle";

export const Capabilities = () => {

    return (
        <div className="capabilities__block">
            <FadeRightText text="CAPABILITIES"/>
            <div>
                <SectionTextTitle text="Each initiative our studio tackles is designed with innovation and a dash of creative imagination" />
                <SectionTextSubtitle 
                    text="Our passion lies in enhancing our understanding and proficiency in the creative field. We have garnered diverse abilities, which we persistently refine."
                    inHome={true}
                />
            </div>
            <div className="capabilities-list__content">
                <CapabilitiesList listOfText={["Development", "Branding", "Engineering", "Digital Marketing", "UI Design", "Product Management"]} />
                <CapabilitiesList listOfText={["Print", "Marketing", "Graphic Design", "Management", "UX Design", "Illustration"]} />
            </div>
        </div>
    )
}