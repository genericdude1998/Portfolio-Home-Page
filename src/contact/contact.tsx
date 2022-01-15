import { Avatar } from "@mui/material";
import { Box, display, styled } from "@mui/system";
import React from "react";
import { images } from "../../assets/images";
import { AvatarProps, Typography, IconButton } from "@mui/material";
import { GitHub, LinkedIn } from "@mui/icons-material";

const StyledAvatar = styled(Avatar)<AvatarProps>(() => ({
    margin: '30px',
    height: '300px',
    width: '300px',
}));

const StyledContainer = styled('div')({
    height: '80vh',
    display:'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'flex-start',
    marginTop: '100px',
});

const StyledContactBar = styled('div')({
    marginTop: '50px',
    display:'flex',
});


function Contact(){
    return (
        <StyledContainer>
            <Typography variant="h3" color="initial">About me</Typography>
            <StyledAvatar src={images.me}/>
            <Typography variant="h6" color="initial" 
                sx={{marginTop: '10px', width:'50vw', textAlign: 'center'}}>
                I am a self-taught React developer eager to explore the latest technology in front-end development. 
                <br/>I am always looking for a new challenge!
            </Typography>
            <StyledContactBar>
                <IconButton href={'https://github.com/genericdude1998'} size='large' target='_blank' rel="noreferrer noopener">
                    <GitHub fontSize='large'/>
                </IconButton>
                <IconButton href={'https://www.linkedin.com/in/lorenzo-wang-489b73153/'} size='large' target='_blank' rel="noreferrer noopener">
                    <LinkedIn fontSize='large'/>
                </IconButton>
            </StyledContactBar>
        </StyledContainer>
    )
}

export default Contact;