import React, { useState } from "react";

import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import { Box, Chip, CardActions, CardMedia, IconButton, Button } from "@mui/material";
import { CardProps } from "@mui/material";
import { Collapse } from "@mui/material";
import { CardMediaProps } from "@mui/material";
import {Link} from '@mui/material';

import GitHubIcon from '@mui/icons-material/GitHub';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import ExpandLessIcon from '@mui/icons-material/ExpandLess';
import WebIcon from '@mui/icons-material/Web';

import { styled } from "@mui/system";
import { GetTagIcon } from "../helpers";

interface GridItemProps{
    id: number,
    name: string;
    img: string,
    imgHover?:string,
    desc: string,
    github:string,
    live?: string,
    tags: string[],
}

const StyledCard = styled(Card)<CardProps>(({theme}) => ({
    padding: '10px',
    fontSize: '30px',
}));

const StyledPicture = styled(CardMedia)<CardMediaProps>(({theme}) => ({
    height: '300px',
}))

function GridItem(props: GridItemProps){

    const [expanded, setExpanded] = React.useState(false);
    const [img, setImg] = React.useState(props.img);

    const setExpand = () => setExpanded(!expanded);

    return(
        <Grid item xs={12} sm={6} md={4}>
                <StyledCard>
                    <Link href={props.live} target='_blank' rel="noreferrer noopener">
                        <StyledPicture title="img" image={img} 
                            onMouseEnter={() => props.imgHover ? setImg(props.imgHover): null}
                            onMouseLeave={() => setImg(props.img)}
                        />
                    </Link>
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
                        <CardActions >
                            <Box>
                                {props.tags.map((tag) => (
                                    <Chip icon={GetTagIcon(tag)}label={tag} key={tag}/>
                                ))}
                            </Box>
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