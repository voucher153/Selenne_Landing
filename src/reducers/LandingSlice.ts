import { createSlice } from "@reduxjs/toolkit"
import { PayloadAction } from "@reduxjs/toolkit"
import { projectInformation, projectsModel, changingPage, allProjectsTextModel } from "../models/ProductItemModels/productModels"

interface LandingState<T, P> {
    changingPage: boolean,
    prevLocation: P,
    firstElementsDelay: number,
    projects: projectsModel,
    allProjectsText: allProjectsTextModel,
    projectInformationOne: T,
    projectInformationTwo: T,
    projectInformationThree: T,
    projectInformationFour: T,
    projectInformationFive: T
}

const initialState: LandingState<projectInformation, changingPage> = {
    changingPage: true,
    prevLocation: {
        pathname: '/', 
        search: '', 
        hash: '', 
        state: null, 
        key: 'i79e7f2z'
    },
    firstElementsDelay: 250,
    projects: {
        project01: "https://framerusercontent.com/images/cn4pnhl6PKODlMPI2vQgR58wiSY.png?scale-down-to=1024",
        project02: "https://framerusercontent.com/images/5LRZOVWaVImPt6vevJ7VAdGwXLE.png?scale-down-to=1024",
        project03: "https://framerusercontent.com/images/fuBn1HeFHJedxi9ZZIVn8Giszn0.png?scale-down-to=1024",
        project04: "https://framerusercontent.com/images/ASwHuOegXaI31lvYMk409tpBHA.png?scale-down-to=1024",
        project05: "https://framerusercontent.com/images/8JRPBH4umvz5P7kYDKMafo7LlTc.png?scale-down-to=1024"
    },
    allProjectsText: {
        project01: {
            title: "Mobile App",
            subTitle: "Creative"
        },
        project02: {
            title: "Logo Design",
            subTitle: "Fashion"
        },
        project03: {
            title: "Branding",
            subTitle: "Creative"
        },
        project04: {
            title: "Mobile App",
            subTitle: "StartUps"
        },
        project05: {
            title: "Icon Design",
            subTitle: "Creative"
        }
    },
    projectInformationOne: {
        itemGreeting: {
            boldText: 'POWER CONSUMPTION',
            subtitleText: 'Our aim is to construct exceptional virtual solutions that meet all client needs. Our team persistently aims to formulate creative and sturdy internet provisions.',
            client: 'Noteroenim',
            industry: 'Management',
            service: 'Mobile App',
            year: 'April 2024',
            firstUrl: 'https://framerusercontent.com/images/cn4pnhl6PKODlMPI2vQgR58wiSY.png?scale-down-to=1024',
            secondUrl: 'https://framerusercontent.com/images/eTvMb2VDoJs31AGjozcfpQbDPrU.png?scale-down-to=1024'
        },
        process: {
            subtitleText: "Production is about keen attention to detail. Our team consistently delivers digital goods with exceptional accuracy. The focus remains steadfast on the item to fulfil our customer's requirements.",
            url: "https://framerusercontent.com/images/3i7CE4yaZhewcooPN0RIs0FKtA.png?scale-down-to=1024"
        },
        goal: {
            subtitleText: "Our objective is to craft unmatched digital products fulfilling every consumer need. Our team is ceaselessly driven towards generating innovative and sturdy solutions.",
            url: "https://framerusercontent.com/images/uj9UNFCicFtMxyE22BbMxaZHJC8.png?scale-down-to=1024"
        },
        itemProjects: ["project04", "project05", "project03"]
    },
    projectInformationTwo: {
        itemGreeting: {
            boldText: 'FASHION LOGO DESIGN',
            subtitleText: "Designing fashion logos for our clients is our top priority. Our innovative designers continuously deliver accurate emblems. The focus is perpetually on the commodity to meet our customer's demands.",
            client: 'Dolor Interdum',
            industry: 'Fashion',
            service: 'Logo Design',
            year: 'June 2024',
            firstUrl: 'https://framerusercontent.com/images/5LRZOVWaVImPt6vevJ7VAdGwXLE.png?scale-down-to=1024',
            secondUrl: 'https://framerusercontent.com/images/XxkaLqGAOAftXkKd2bBWNcs9kck.png?scale-down-to=1024'
        },
        process: {
            subtitleText: "The essence of growth resides in the details. Our team regularly develops digital solutions characterized by a high level of accuracy. We maintain a steadfast concentration on the product, striving to fulfill our client's needs.",
            url: "https://framerusercontent.com/images/n0YgbCNIOAMAlBTsaVBbuRzEGI0.png?scale-down-to=1024"
        },
        goal: {
            subtitleText: "Our mission is to craft exceptional online services that meet every customer's requirements. Our team is persistently striving to produce ingenious and robust web solutions.",
            url: "https://framerusercontent.com/images/P8M1eEdkLvtiYEqNfI0xlqdII.png?scale-down-to=1024"
        },
        itemProjects: ["project04", "project05", "project03"],
    },
    projectInformationThree: {
        itemGreeting: {
            boldText: 'CREATIVE BRANDING',
            subtitleText: "Our imaginative designers find profound joy in crafting unique identities for client businesses. Unwavering focus on accuracy is assured to meet our client's needs.",
            client: 'Viverra Ornare',
            industry: 'Creative',
            service: 'Branding',
            year: 'June 2024',
            firstUrl: 'https://framerusercontent.com/images/fuBn1HeFHJedxi9ZZIVn8Giszn0.png?scale-down-to=1024',
            secondUrl: 'https://framerusercontent.com/images/AInTmooxkSP9Nign0ubXlN6onkc.png?scale-down-to=1024'
        },
        process: {
            subtitleText: "Creative process is all about specifics. Our crew regularly provides online products with a high degree of precision. The spotlight is always on the product to meet our client's needs.",
            url: "https://framerusercontent.com/images/lKRcynMEtWfSdGv27zfnXOfGK4.png?scale-down-to=1024"
        },
        goal: {
            subtitleText: "Our mission is to produce superior online products that satisfy all customer requirements. Our group constantly strives to create inventive and robust web resolutions.",
            url: "https://framerusercontent.com/images/LhY5LdywVVCnTAAe8Xo9X7ujHQ.png?scale-down-to=1024"
        },
        itemProjects: ["project04", "project05", "project02"],
    },
    projectInformationFour: {
        itemGreeting: {
            boldText: 'MOBILE APP DESIGN',
            subtitleText: "Our team includes proficient UI/UX creators, skilled at fabricating appealing mobile applications to delight our customers, thus building superior user experiences.",
            client: 'Suspendum',
            industry: 'Startups',
            service: 'Mobile App',
            year: 'September 2024',
            firstUrl: 'https://framerusercontent.com/images/ASwHuOegXaI31lvYMk409tpBHA.png?scale-down-to=1024',
            secondUrl: 'https://framerusercontent.com/images/hRD96KpKaiDSROijm59Z52snVI.png?scale-down-to=1024'
        },
        process: {
            subtitleText: "The production procedure is in the details. Our team consistently delivers digital goods with an elevated degree of exactness. Focus is perpetually on the item to fulfill our customer's demands.",
            url: "https://framerusercontent.com/images/opXVVmvbAIWDs0n3BXshLEjv7Y.png?scale-down-to=1024"
        },
        goal: {
            subtitleText: "Our aim is to design superior online services that meet every customer requirement. Our crew is persistently striving to produce imaginative and robust online solutions.",
            url: "https://framerusercontent.com/images/MmOZhswy7WamCtieQFSJORENLM.png?scale-down-to=1024"
        },
        itemProjects: ["project05", "project03", "project02"],
    },
    projectInformationFive: {
        itemGreeting: {
            boldText: 'ICON DESIGN PROJECT',
            subtitleText: "This project requires designing vector visuals for our customers. Our creative designers consistently produces pixel-perfect vector icons, easily scalable without losing quality. Concentration is always on the products to align with our clients' anticipated standards.",
            client: 'Creativo',
            industry: 'Creative',
            service: 'Icon Design',
            year: 'November 2024',
            firstUrl: 'https://framerusercontent.com/images/8JRPBH4umvz5P7kYDKMafo7LlTc.png?scale-down-to=1024',
            secondUrl: 'https://framerusercontent.com/images/2AHIBPA7LTeXYXyEinrRKeNsoUE.png?scale-down-to=1024'
        },
        process: {
            subtitleText: "The creative process lies in the nuances. Our crew continuously furnishes digital products with a high level of precision. Emphasis is continually on the product to meet our client's necessities.",
            url: "https://framerusercontent.com/images/14jwGNd2tLM0zE1U3z26P2nDPoA.png?scale-down-to=1024"
        },
        goal: {
            subtitleText: "Our goal is to create outstanding web offerings that fulfill every client need. Our team is continuously working to generate innovative and sturdy creative solutions.",
            url: "https://framerusercontent.com/images/MmOZhswy7WamCtieQFSJORENLM.png?scale-down-to=1024"
        },
        itemProjects: ["project04", "project03", "project02"],
    }
}

export const LandingSlice = createSlice({
    name: "Landing",
    initialState,
    reducers: {
        setPrevLocation(state, action: PayloadAction<changingPage>) {
            if (action.payload.pathname !== state.prevLocation.pathname) {
                console.log(`${action.payload.pathname} and ${state.prevLocation.pathname}`)
                state.prevLocation = action.payload
                state.changingPage = true
            }
            state.changingPage = false
        }
    }
    }
)

export const landingSlice = LandingSlice.reducer 