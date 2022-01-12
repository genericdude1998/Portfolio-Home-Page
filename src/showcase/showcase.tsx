import React from "react";
import Grid from '@mui/material/Grid';
import GridItem from "../grid-item/GridItem";
import { GridProps } from "@mui/system";

import { styled } from "@mui/system";

import { projects, ProjectTypes, Project } from "../projects";
import { CircularProgress } from "@mui/material";
import { CircularProgressProps } from "@mui/material";

const StyledGrid = styled(Grid)<GridProps>(({theme}) => ({
    backgroundColor: 'beige',
    height: '100%',
 }));

const Spinner = styled(CircularProgress)<CircularProgressProps>(() => ({
    width: '20%',
    marginLeft: '50%',
    marginTop: '10%',
}));

 interface ShowcaseProps{
    type: number|undefined,
 }

function Showcase(props: ShowcaseProps){

    const [projectsToShow, setProjectsToShow] = React.useState<Project[] | undefined>();

    React.useEffect(() => {
        setProjectsToShow(undefined);

        const timer = setTimeout(() => {
            setProjectsToShow(projects.filter(proj => proj.type === props.type || props.type === ProjectTypes.All));
        }, 1000);
        return () => {
            clearTimeout(timer);
        }
    }, [props.type])
    
    return(
        <div>
            {projectsToShow ? 
                <StyledGrid container spacing={10}>
                    {
                        projectsToShow.map(proj => (
                            <GridItem 
                                name={proj.name} 
                                desc={proj.desc} 
                                img={proj.img}
                                github={proj.github}
                                live={proj.live}
                            />
                            )
                        ) 
                    }
                </StyledGrid> :
                <div>
                    <Spinner thickness={5} size={100} color={'success'}/>
                </div>
                }
        </div>
    )
}

export default Showcase;