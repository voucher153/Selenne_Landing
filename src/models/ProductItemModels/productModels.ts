import { project01 } from './../../img/img';

export interface projectsModel {
    project01: string,
    project02: string,
    project03: string,
    project04: string,
    project05: string
}

export interface itemGreetingModel {
    boldText: string,
    subtitleText: string, 
    client: string,
    industry: string, 
    service: string, 
    year: string, 
    firstUrl: string, 
    secondUrl: string,
}

export interface sectionModel {
    subtitleText: string,
    url: string
}

export type title = "Branding" | "Icon Design" | "Mobile App" | "Logo Design"
export type subTitle = "Creative" | "StartUps" | "Fashion"

interface projectText<T = title, S = subTitle> {
    title: T
    subTitle: S
}

export interface allProjectsTextModel<T = projectText> {
    project01: T,
    project02: T,
    project03: T,
    project04: T,
    project05: T
} 

export interface projectInformation {    
    itemGreeting: itemGreetingModel,
    process: sectionModel,
    goal: sectionModel,
    itemProjects: Array<keyof projectsModel>
}

export interface changingPage {
    pathname: string, 
    search: string, 
    hash: string, 
    state: null, 
    key: string
}