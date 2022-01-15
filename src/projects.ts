import { images } from "../assets/images"

export enum ProjectTypes{
    'All',
    'React',
    'Unity'
}

export interface Project{
    id: number,
    name:string,
    desc: string,
    img: string,
    imgHover?: string,
    github: string,
    live?: string,
    type: number,
}

export const projects: Project[] = [
    {
        id:2,
        name:'Home Page Portfolio',
        desc: 'A container for all my portfolio works made with Material UI',
        img: images.background,
        github: 'https://github.com/genericdude1998/Weather-App-Typescript-Portfolio/tree/master',
        type:ProjectTypes.React,
    },
    {
        id:0,
        name:'Weather App',
        desc: 'A simple Weather App with TS and third party API',
        img: images.WeatherApp,
        imgHover: images.WeatherAppHover,
        live: 'https://genericdude1998.github.io/Weather-App-Typescript-Portfolio/',
        github: 'https://github.com/genericdude1998/Weather-App-Typescript-Portfolio/tree/master',
        type: ProjectTypes.React,
    },
    {
        id:1,
        name:'Social Media App',
        desc: 'A simple Social Media App with Redux and back-end mock with Express.js',
        img: images.SocialMedia,
        imgHover: images.SocialMediaHover,
        github: 'https://github.com/genericdude1998/Social-Media-App-Portfolio',
        live: 'https://genericdude1998.github.io/Social-Media-App-Portfolio/',
        type:ProjectTypes.React,
    },
    {
        id:3,
        name:'Babel3D',
        desc: 'An experimental 3D procedural representation of your PC folder structure in 3D rooms',
        img: images.Babel,
        imgHover: images.BabelHover,
        github: 'https://github.com/genericdude1998/Babel3DFolderExplorer',
        type: ProjectTypes.Unity
    },
    {
        id:4,
        name:'Radar Approach',
        desc: 'Air Traffic Control game made with Unity3D',
        img: images.RadarApproach,
        imgHover: images.RadarApproachHover,
        github: 'https://github.com/genericdude1998/Radar-Approach-Unity',
        type: ProjectTypes.Unity
    },
    {
        id:4,
        name:'IKEA VR dissertation',
        desc: 'A fictional version of an IKEA showroom in VR for my dissertation project',
        img: images.DissRoom,
        imgHover: images.DissBed,
        github: 'https://github.com/genericdude1998/IBDissertationExperiment',
        type: ProjectTypes.Unity
    }
]
