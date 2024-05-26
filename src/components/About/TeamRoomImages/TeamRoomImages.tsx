import React from "react";
import "./TeamRoomImages.css"
import { TeamRoomImage } from "./TeamImg/TeamRoomImage";

export const TeamRoomImages = () => {
    return (
        <div className="wrapper-greeting team-room-images__block">
            <div className="team-room-images__content">
                <TeamRoomImage url="https://framerusercontent.com/images/0cZzRfOss6bAQqbdpZG5KMP3mMg.png?scale-down-to=1024" laterElement={false} />
                <TeamRoomImage url="https://framerusercontent.com/images/uN8tAdvRSvfo6kCg7NQYM7HrM8.png?scale-down-to=1024" laterElement={true} />
            </div>
        </div>
    )
}