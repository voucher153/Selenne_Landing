import React from "react";
import "./NotFound.css"
import { Text } from "../Home/Text/Text";
import { RightsReserved } from "../../commonComponents/ContactUs/RightsReserved/RightsReserved";
import { NavLink } from "react-router-dom";

export const NotFound = () => {
    return (
        <div className="not-found__block">
            <Text direction="left" text={['404', '404', '404', '404', '404', '404', '404']} />
            
            <div className="not-found__text-block">
                <h3 className="not-found__title">Ooops!</h3>
                <NavLink to='/' className="link__block">
                    <p className="not-found__text">You're lost. Go to homepage.</p>
                </NavLink>
                <RightsReserved />
            </div>
        </div>
    )
}