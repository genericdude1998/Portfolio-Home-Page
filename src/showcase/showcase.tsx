import React from "react";
import Grid from '@mui/material/Grid';
import GridItem from "../grid-item/GridItem";

import { projects } from "../projects";

function Showcase(){
    return(
        <div>
            <Grid container spacing={4}>
                {projects.map(proj => (
                    <GridItem 
                        name={proj.name} 
                        desc={proj.desc} 
                        img={proj.img}
                    />
                    )
                )}
            </Grid>
        </div>
    )
}

export default Showcase;