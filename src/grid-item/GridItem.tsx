import React from "react";

import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import { CardMedia } from "@mui/material";

interface GridItemProps{
    name: string;
    img: string,
    desc: string,
}

function GridItem(props: GridItemProps){
    return(
        <Grid item xs={12} sm={6} md={3}>
                <Card>
                    <CardMedia component="img" title="img" image={props.img} />
                    <CardContent>
                        <Typography variant="h6" color="initial">
                            {props.name}
                        </Typography>
                    </CardContent>
                </Card>
        </Grid>
        )
}

export default GridItem;