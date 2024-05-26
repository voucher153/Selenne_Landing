import React from "react";
import "./NavBar.css"
import { NavLink } from "react-router-dom";

export const NavBar = () => {
    return (
        <nav className="nav-bar">
            <div>
                <NavLink className="nav-bar__link" to={"/"}>Home</NavLink>
            </div>
            <div>
                <NavLink className="nav-bar__link" to={"/about"}>About</NavLink>
            </div>
            <div>
                <NavLink className="nav-bar__link" to={"/work"}>Work</NavLink>
            </div>
            <div>
                <NavLink className="nav-bar__link" to={"/contact"}>Contact</NavLink>
            </div>
        </nav>
    )
}