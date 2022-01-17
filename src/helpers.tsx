import React from 'react';
import {FaReact} from 'react-icons/fa';
import {SiCircleci, SiCypress, SiJest, SiRedux, SiStyledcomponents, SiTypescript, SiUnity} from 'react-icons/si';
import {Gi3DGlasses, GiInfinity} from 'react-icons/gi';
import { SiCsharp } from 'react-icons/si';
export function GetTagIcon(tag:string){
    switch (tag) {
        case 'React': return <FaReact/>;
        case 'Redux': return <SiRedux/>;
        case 'VR': return <Gi3DGlasses/>;
        case 'C#': return <SiCsharp/>;
        case 'StyledComponents': return <SiStyledcomponents/>;
        case 'Jest': return <SiJest/>;
        case 'Enzyme': return <FaReact/>;
        case 'Cypress': return <SiCypress/>;
        case 'TypeScript': return <SiTypescript/>;
        case 'Procedural Generation': return <GiInfinity/>;
        case 'Unity': return <SiUnity/>;
        case 'CircleCI': return <SiCircleci/>;
        default:
            break;
    }
}