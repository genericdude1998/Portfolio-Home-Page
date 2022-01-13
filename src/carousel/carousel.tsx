import React, { Dispatch, useEffect } from "react";
import Carousel from "react-material-ui-carousel";
import { Paper } from "@mui/material";
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import { styled } from "@mui/system";
import { PaperProps, Typography } from "@mui/material";
import { CarouselProps } from "react-material-ui-carousel/dist/components/types";
import Showcase from "../showcase/showcase";

const StyledItem = styled(Paper)<PaperProps>(({theme}) => (
    {
        textAlign:'center',
        position: 'relative',
        left: '10%',
        right: '10%',
        width: '80%',
        backgroundColor: "white",
    }
));

const CarouselItem = (props:{name:string}) => (
    <StyledItem>
        <Typography variant="h2" color="initial">{props.name}</Typography>
    </StyledItem>
);

const StyledCarousel = styled(Carousel)<CarouselProps>(({theme}) => (
    {
        marginTop:'70px',
        marginBottom:'50px',
        marginLeft: '50px',
        marginRight: '50px',
    }
));

function AppCarousel(){

    const [currentIndx, setCurIndx] = React.useState(0);
   
    return (
        <>
            <StyledCarousel
                index = {currentIndx} 
                animation={'slide'} 
                autoPlay={false} 
                duration={1000} 
                indicators={false}
                NextIcon={<ChevronRightIcon fontSize={'small'}/>}
                PrevIcon={<ChevronLeftIcon fontSize={'small'}/>}
                navButtonsAlwaysVisible={true}
                onChange={(now) => {
                    setCurIndx(now as number);
                }}
            >
                <CarouselItem name={'All projects'}></CarouselItem>
                <CarouselItem name={'React'}></CarouselItem>
                <CarouselItem name={'Unity'}></CarouselItem>
            </StyledCarousel>

            <Showcase type={currentIndx}/>
        </>
    )
} 

export default AppCarousel;