import React from "react";
import "./About.css"
import { AboutGreeting } from "./AboutGreeting/AboutGreeting";
import { TeamRoomImages } from "./TeamRoomImages/TeamRoomImages";
import { SectionTextTitle } from "../../commonComponents/SectionTextTitle/SectionTextTitle";
import { SectionTextSubtitle } from "../../commonComponents/SectionTextSubtitle/SectionTextSubtitle";
import { CapabilitiesList } from "../Home/Capabilities/CapabilitiesList/CapabilitiesList";
import { Video } from "../Home/Video/Video";
import { Contact } from "../../commonComponents/Contact/Contact";
import { ContactUs } from "../../commonComponents/ContactUs/ContactUs";

export const About = () => {
    return (
        <div>
            <div className="wrapper">
                <AboutGreeting />
                <TeamRoomImages />
                <div className="wrapper-greeting about__text-block">
                    <div>
                        <SectionTextTitle text="We're a forward-thinking design studio committed to delivering inventive and creative digital solutions" />
                    </div>
                    <div>
                        <SectionTextSubtitle 
                            text="At our core, fostering significant collaborative relationships is central to our approach. Rather than treating our clients merely as cooperation partners, we view them as vital contributors to the creative journey. We value the unique advantage your points of view bring, and when these are combined with our deep expertise, a powerful synergy is formed." 
                            inHome={true}
                        />
                        <SectionTextSubtitle 
                            text="This collaborative spirit not only enhances the creative process, but also ensures the end product truly embodies your brand's core values and aspirations."
                            inHome={true}
                        />
                    </div>
                    <div className="about__text-list">
                        <CapabilitiesList listOfText={['Development', 'Branding', 'Engineering', 'Digital Marketing', 'UI Design', 'Product Management']} />
                        <CapabilitiesList listOfText={["Print", 'Marketing', 'Graphic Design', 'Management', 'UX Design', 'Illustration']} />
                    </div>
                </div>
            </div>
            <div className="about__video-block">
                <Video />
            </div>
            <div className="wrapper wrapper-greeting about__contact-text-block">
                <SectionTextSubtitle text="Keep up-to-date with our creative studio and our projects by interacting with us on these social networks" inHome={true} />
                <Contact />
            </div>
            <div className="about__contact-us">
                <ContactUs />
            </div>
        </div>
    )
}