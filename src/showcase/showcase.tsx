import React from "react";
import Grid from '@mui/material/Grid';
import GridItem from "../grid-item/GridItem";
import { GridProps } from "@mui/system";

import { styled } from "@mui/system";

import { projects, ProjectTypes, Project } from "../projects";
import { CircularProgress } from "@mui/material";
import { CircularProgressProps } from "@mui/material";

import { Grow } from "@mui/material";

const StyledGrid = styled(Grid)<GridProps>(({theme}) => ({
    backgroundColor: 'beige',
    height: '100%',
    marginBottom: '100px',
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
        }, 10);
        return () => {
            clearTimeout(timer);
        }
    }, [props.type])
    
    return(
        <div>
            {projectsToShow ? 
            <Grow in={projectsToShow.length > 0} timeout={2000} >
                <StyledGrid container spacing={10}>
                    {
                        projectsToShow.map(proj => (
                            <GridItem 
                                name={proj.name} 
                                desc={proj.desc} 
                                img={proj.img}
                                imgHover={proj.imgHover}
                                github={proj.github}
                                live={proj.live}
                            />
                            )
                        ) 
                    }
                </StyledGrid> 
            </Grow> :
                <div>
                    <Spinner thickness={5} size={100} color={'success'}/>
                </div>
                }
        </div>
    )
}

export default Showcase;