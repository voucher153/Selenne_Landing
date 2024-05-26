import React from "react";
import "./ProductItemProjects.css"
import { FadeRightText } from "../FadeRightText/FadeRightText";
import { ItemProject } from "../ItemProject/ItemProject";
import { ViewAllWork } from "./ViewAllWork/ViewAllWork";
import { useAppSelector } from "../../hooks/hooks";

type projects = "project01" | "project02" | "project03" | "project04" | "project05"

interface props<P = projects> {
    urlOne: string,
    urlTwo: string,
    urlThree: string,
    itemProject01: P,
    itemProject02: P,
    itemProject03: P,
}

export const ProductItemProjects = ({urlOne, urlTwo, urlThree, itemProject01, itemProject02, itemProject03}: props) => {

    const allProjectsText = useAppSelector(state => state.landingSlice.allProjectsText)
    
    return (
        <div className="wrapper wrapper-product-item product-item-projects">
            <div className="product-item-projects__text-block">
                <FadeRightText text="RECENT WORK" />
                <ViewAllWork />
            </div>
            <div className="product-item-projects__projects">
                <div className="product-item-projects__item">
                    <ItemProject url={urlOne} titleText={allProjectsText[itemProject01].title} subTitle={allProjectsText[itemProject01].subTitle} ratio="1 / 1" itemProject={itemProject01} />
                </div>
                <div className="product-item-projects__item">
                    <ItemProject url={urlTwo} titleText={allProjectsText[itemProject02].title} subTitle={allProjectsText[itemProject02].subTitle} ratio="1 / 1" itemProject={itemProject02} />
                </div>
                <div className="product-item-projects__item">
                    <ItemProject url={urlThree} titleText={allProjectsText[itemProject03].title} subTitle={allProjectsText[itemProject03].subTitle} ratio="1 / 1" itemProject={itemProject03} />
                </div>
            </div>
        </div> 
    )
}