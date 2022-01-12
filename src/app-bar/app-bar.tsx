import React from "react";
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import { stepClasses, Theme, ToolbarProps } from "@mui/material";

import Typography from '@mui/material/Typography';
import { TypographyProps } from "@mui/material/Typography";

import { Avatar } from "@mui/material";
import { styled } from "@mui/material/styles";
import { images } from "../../assets/images";

const AppRoute = styled(Typography)<TypographyProps>(({theme}) => ({
    paddingLeft: 25,
    paddingRight: 25,
    color: "gray",
    borderRadius: '20px',
    '&:hover':{
        backgroundColor: 'gray',
        color: "white",
    },
    [theme.breakpoints.down('sm')]:{
      fontSize: '20px',
    }
})
);

const StyledToolbar = styled(Toolbar)<ToolbarProps>(({theme}) => ({
    justifyContent: "flex-start",
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
                  Home
                </AppRoute>
                <AppRoute variant="h5">
                  Showcase
                </AppRoute>
                <AppRoute variant="h5">
                  Contact
                </AppRoute>
                <Avatar src={images.me} sx={{marginLeft: 'auto'}}/>
              </StyledToolbar>
            </AppBar>
            <ToolbarSpacing></ToolbarSpacing>
        </div>
    )
}

export default AppBarFixed;