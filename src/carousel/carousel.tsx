import React from "react";
import Carousel from "react-material-ui-carousel";
import { Paper } from "@mui/material";
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import { styled } from "@mui/system";
import { PaperProps, Typography } from "@mui/material";
import { CarouselProps } from "react-material-ui-carousel/dist/components/types";

const StyledItem = styled(Paper)<PaperProps>(({theme}) => (
    {
        textAlign:'center',
        position: 'relative',
        left: '8%',
        width: '80vw',
        backgroundColor: "white",
        margin:'10px',
    }
));

const CarouselItem = (props:{name:string}) => (
    <StyledItem>
        <Typography variant="h2" color="initial">{props.name}</Typography>
    </StyledItem>
);

const StyledCarousel = styled(Carousel)<CarouselProps>(({theme}) => (
    {
        marginTop:'50px',
        marginBottom:'50px',
    }
));


function AppCarousel(){
    return (
        <StyledCarousel 
            animation={'slide'} 
            autoPlay={false} 
            duration={1000} 
            indicators={false}
            NextIcon={<ChevronRightIcon fontSize={'small'}/>}
            PrevIcon={<ChevronLeftIcon fontSize={'small'}/>}
            navButtonsAlwaysVisible={true}
        >
            <CarouselItem name={'All projects'}></CarouselItem>
            <CarouselItem name={'React'}></CarouselItem>
            <CarouselItem name={'Unity'}></CarouselItem>
        </StyledCarousel>
    )
} 

export default AppCarousel;