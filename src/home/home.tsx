import React from 'react';
import {Box, Container, Typography, TypographyProps} from '@mui/material'
import { styled } from "@mui/system";
import { BoxProps } from "@mui/system";
import { Fade } from '@mui/material';

import { images } from '../../assets/images';
import { Link } from 'react-router-dom';

const Background = styled(Box)<BoxProps>(({theme}) => ({
    minWidth: '1000px',
    height: '100vh',
    width: '100vw',
    backgroundSize:'cover',
    backgroundRepeat: 'no-repeat',
    backgroundImage: `url(${images.background})`,
    ['@media (max-width:1100px)']: {
        backgroundSize:'100% 100%',
      },
}));

const StyledTitle = styled(Typography)<TypographyProps>(({theme}) => ({
    position: 'absolute',
    top: '25%',
    whiteSpace: 'nowrap',
    ['@media (max-width:550px)']: {
        fontSize: '50px',
        whiteSpace: 'normal',
      },
}));
const StyledSubTitle = styled(Typography)<TypographyProps>(({theme}) => ({
    position: 'absolute',
    top: '40%',
    whiteSpace: 'nowrap',
    paddingRight: '5px',
    paddingLeft: '5px',
    '&:hover':{
        color:'black',
        borderRadius: '20px',
        backgroundColor: 'beige',
    },
}));

function Home(){

    return(
    <Background sx={{display: 'flex', justifyContent: 'center', }}>
        <Fade in={true} timeout={4000}>
            <Container>
                <StyledTitle variant="h1" color="white">Welcome to my Portfolio</StyledTitle>
                    <Link to={'/showcase'} style={{textDecoration:'none', color: 'white', fontWeight: 10,}}>
                        <StyledSubTitle variant="h4" color="white">Check the Showcase!</StyledSubTitle>
                    </Link>
            </Container>
        </Fade>
    </Background>
);
}

export default Home;