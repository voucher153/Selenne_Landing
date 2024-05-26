import React from "react";
import { ItemGreeting } from "./ItemGreeting/ItemGreeting";
import "./ProductItem.css"
import { sectionModel, itemGreetingModel, projectsModel, allProjectsTextModel } from "../../models/ProductItemModels/productModels";
import { Process } from "./Process/Process";
import { Goal } from "./Goal/Goal";
import { ProductItemProjects } from "../../commonComponents/ProductItemProjects/ProductItemProjects";
import { ContactUs } from "../../commonComponents/ContactUs/ContactUs";

interface props {
    itemProjects: Array<keyof projectsModel>,
    projects: projectsModel,
    itemGreeting: itemGreetingModel,
    process: sectionModel,
    goal: sectionModel
}

export const ProductItem = ({itemProjects, projects, itemGreeting, process, goal}: props) => {

    return (
        <div className="wrapper">
                <ItemGreeting 
                    boldText={itemGreeting.boldText} 
                    subtitleText={itemGreeting.subtitleText}
                    client={itemGreeting.client}
                    industry={itemGreeting.industry}
                    service={itemGreeting.service}
                    year={itemGreeting.year}
                    firstUrl={itemGreeting.firstUrl}
                    secondUrl={itemGreeting.secondUrl}
                />
                <Process subtitleText={process.subtitleText} url={process.url} />
                <Goal subtitleText={goal.subtitleText} url={goal.url} />
                <ProductItemProjects
                    urlOne={projects[itemProjects[0]]}
                    urlTwo={projects[itemProjects[1]]}
                    urlThree={projects[itemProjects[2]]}
                    itemProject01={itemProjects[0]}
                    itemProject02={itemProjects[1]}
                    itemProject03={itemProjects[2]}
                />
                <ContactUs />
        </div>
    )
}