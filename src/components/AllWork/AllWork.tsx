import React from "react";
import { WorkGreeting } from "./WorkGreeting/WorkGreeting";
import { WorkProjects } from "./WorkProjects/WorkProjects";
import { ContactUs } from "../../commonComponents/ContactUs/ContactUs";

export const AllWork = () => {
    return (
        <div className="wrapper">
            <WorkGreeting />
            <WorkProjects />
            <ContactUs />
        </div>
    )
}