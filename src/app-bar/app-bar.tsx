import React from "react";
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import { ToolbarProps } from "@mui/material";

import Typography from '@mui/material/Typography';
import { TypographyProps } from "@mui/material/Typography";

import { images } from "../../assets/images";
import { Avatar } from "@mui/material";
import { styled } from "@mui/material/styles";
import { Link } from "react-router-dom";

const AppRoute = styled(Typography)<TypographyProps>(({theme}) => ({
    paddingLeft: '50px',
    paddingRight: '50px',
    color: "gray",
    borderRadius: '20px',
    '&:hover':{
        backgroundColor: 'gray',
        color: "white",
    },
    [theme.breakpoints.down('sm')]:{
      fontSize: '20px',
    }
}));

const StyledToolbar = styled(Toolbar)<ToolbarProps>(({theme}) => ({
    justifyContent: "flex-start",
    padding: '10px',
    backgroundColor: theme.palette.grey[900],
})
);

const ToolbarSpacing = styled('div')(({ theme }) => ({
    padding: '30px',
    backgroundColor: 'beige',
}));


function AppBarFixed(): JSX.Element {
    return(
        <div>
            <AppBar position="fixed" color="primary">
              <StyledToolbar>
                <AppRoute variant="h5">
                  <Link to={'/'} style={{textDecoration: 'none', color:'white'}}>
                    <Typography variant={'h5'}>Home</Typography>
                  </Link>
                </AppRoute>
                <AppRoute variant="h5">
                <Link to={'/showcase'} style={{textDecoration: 'none', color:'white'}}>
                    Showcase
                  </Link>
                </AppRoute>
                <AppRoute variant="h5">
                  <Link to={'/contact'} style={{textDecoration: 'none', color:'white'}}>
                    Contact
                  </Link>
                </AppRoute>
                <Link to={'/contact'} style={{marginLeft: 'auto'}}>
                  <Avatar src={images.faceme}/>
                </Link>
              </StyledToolbar>
            </AppBar>
            <ToolbarSpacing></ToolbarSpacing>
        </div>
    )
}

export default AppBarFixed;