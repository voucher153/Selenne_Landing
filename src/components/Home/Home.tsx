import React, { FC } from "react";
import "./Home.css"
import { Greeting } from "./Greeting/Greeting";
import { RecentWork } from "./RecentWork/RecentWork";
import { Text } from "./Text/Text";
import { AboutUs } from "./AboutUs/AboutUs";
import { Video } from "./Video/Video";
import { Capabilities } from "./Capabilities/Capabilities";
import { ContactUs } from "../../commonComponents/ContactUs/ContactUs";

export const Home: FC = () => {

    return (
        <div>
            <div className="wrapper">
                <Greeting />
                <RecentWork />
            </div>
            <Text direction="left" text={['BRANDING', 'ILLUSTRATOIN', 'MARKETING', 'DEVELOPMENT', 'GRAPHIC DESIGN', '3D ANIMATION', 'VISUAL IDENTITY']} />
            <Text direction="right" text={['BRANDING', 'ILLUSTRATOIN', 'MARKETING', 'DEVELOPMENT', 'GRAPHIC DESIGN', '3D ANIMATION', 'VISUAL IDENTITY']} />
            <div className="wrapper">
                <AboutUs />
            </div>
            <div className="home__video-block">
                    <Video />
                </div>
            <div className="wrapper">
                <Capabilities />
                <ContactUs />
            </div>
        </div>
    )
}