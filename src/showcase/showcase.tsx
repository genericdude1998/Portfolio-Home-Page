import React from "react";
import Grid from '@mui/material/Grid';
import GridItem from "../grid-item/GridItem";
import { GridProps } from "@mui/system";

import { styled } from "@mui/system";

import { projects } from "../projects";

const StyledGrid = styled(Grid)<GridProps>(({theme}) => ({
    backgroundColor: 'beige',
    height: '100%',
 }))

function Showcase(){
    return(
        <div>
            <StyledGrid container spacing={10}>
                {projects.map(proj => (
                    <GridItem 
                        name={proj.name} 
                        desc={proj.desc} 
                        img={proj.img}
                        github={proj.github}
                        live={proj.live}
                    />
                    )
                )}
            </StyledGrid>
        </div>
    )
}

export default Showcase;