import React from "react";
import "./Process.css"
import { AnimatedImage } from "../../../commonComponents/AnimatedImage/AnimatedImage";
import { sectionModel } from "../../../models/ProductItemModels/productModels";
import { SectionTextTitle } from "../../../commonComponents/SectionTextTitle/SectionTextTitle";
import { SectionTextSubtitle } from "../../../commonComponents/SectionTextSubtitle/SectionTextSubtitle";

export const Process = ({subtitleText, url}: sectionModel) => {
    return (
        <div className="wrapper-product-item">
            <div className="section-text">
                <SectionTextTitle text="Process" />
                <SectionTextSubtitle text={subtitleText} inHome={false} />
            </div>
            <div className="animated-img">
                <AnimatedImage url={url} />
            </div>
        </div>
    )
}