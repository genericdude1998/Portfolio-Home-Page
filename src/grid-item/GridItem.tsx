import React, { useState } from "react";

import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import { CardActionArea, CardActions, CardMedia, IconButton } from "@mui/material";
import { CardProps } from "@mui/material";
import { Collapse } from "@mui/material";

import GitHubIcon from '@mui/icons-material/GitHub';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import ExpandLessIcon from '@mui/icons-material/ExpandLess';
import WebIcon from '@mui/icons-material/Web';

import { GridProps, styled } from "@mui/system";

interface GridItemProps{
    name: string;
    img: string,
    desc: string,
    github:string,
    live?: string,
}

const StyledCard = styled(Card)<CardProps>(({theme}) => ({
    padding: '10px',
    fontSize: '30px',
}))

function GridItem(props: GridItemProps){

    const [expanded, setExpanded] = React.useState(false);

    const setExpand = () => setExpanded(!expanded);

    return(
        <Grid item xs={12} sm={6} md={4}>
                <StyledCard>
                    <CardMedia component="img" title="img" image={props.img} />
                    <CardContent>
                        <Typography variant="h4" color="initial" textAlign={'center'}>
                            {props.name}
                        </Typography>
                    </CardContent>

                    <CardActions sx={{justifyContent: "space-between"}}>
                        <CardActions sx={{justifyContent: "flex-start"}}>
                            <IconButton href={props.github} size='large' target='_blank' rel="noreferrer noopener">
                                <GitHubIcon fontSize='large'/>
                            </IconButton>
                            {
                                props.live ?
                                <IconButton href={props.live} size='large' target='_blank' rel="noreferrer noopener">
                                    <WebIcon fontSize='large'/>
                                </IconButton> 
                                : null
                            }
                        </CardActions>
                        <CardActions>
                            <IconButton onClick={setExpand}>
                                {expanded ? <ExpandLessIcon /> : <ExpandMoreIcon />} 
                                </IconButton>
                        </CardActions>
                    </CardActions>

                    <Collapse in={expanded}>
                        <Typography variant="h6" color="initial">
                            {props.desc}
                        </Typography>
                    </Collapse>
                </StyledCard>
        </Grid>
        )
}

export default GridItem;