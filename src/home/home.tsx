import React from 'react';
import {Box, Typography, TypographyProps} from '@mui/material'
import { styled } from "@mui/system";
import { BoxProps } from "@mui/system";
import { Fade } from '@mui/material';
import { Stack } from '@mui/material';

import { images } from '../../assets/images';
import { Link } from 'react-router-dom';

const Background = styled(Box)<BoxProps>(({theme}) => ({
    minWidth: '1000px',
    height: '100vh',
    width: '100vw',
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    backgroundImage: `url(${images.background})`,
}));

const StyledTitle = styled(Typography)<TypographyProps>(({theme}) => ({
    position: 'absolute',
    top: '25%',
    whiteSpace: 'nowrap',
}));
const StyledSubTitle = styled(Typography)<TypographyProps>(({theme}) => ({
    position: 'absolute',
    top: '40%',
    whiteSpace: 'nowrap',
}));

function Home(){

    return(
    <Background sx={{display: 'flex', justifyContent: 'center', }}>
        <Fade in={true} timeout={4000}>
            <StyledTitle variant="h1" color="white">Welcome to my Portfolio</StyledTitle>
        </Fade>
        <Fade in={true} timeout={4000}>
            <StyledSubTitle variant="h4" color="white">Check the {' '} 
                <Link to={'/showcase'} style={{textDecoration:'none', color: 'white', fontWeight: 10,}}>
                    Showcase
                </Link></StyledSubTitle>
        </Fade>
    </Background>
);
}

export default Home;