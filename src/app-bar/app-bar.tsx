import React from "react";
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import { stepClasses, Theme, ToolbarProps } from "@mui/material";

import Typography from '@mui/material/Typography';
import { TypographyProps } from "@mui/material/Typography";

import { styled } from "@mui/material/styles";

const AppRoute = styled(Typography)<TypographyProps>(({theme}) => ({
    paddingLeft: 25,
    paddingRight: 25,
    color: "gray",
    '&:hover':{
        backgroundColor: 'gray',
        color: "white",
    }
})
);

const StyledToolbar = styled(Toolbar)<ToolbarProps>(({theme}) => ({
    justifyContent: "flex-start",
    backgroundColor: theme.palette.grey[900],
})
);

const ToolbarSpacing = styled('div')(({ theme }) => ({
    ...theme.mixins.toolbar,
}));


function AppBarFixed(): JSX.Element {
    return(
        <div>
            <AppBar position="fixed" color="primary">
              <StyledToolbar>
                <AppRoute variant="h6">
                  Home
                </AppRoute>
                <AppRoute variant="h6">
                  Showcase
                </AppRoute>
                <AppRoute variant="h6">
                  Contact
                </AppRoute>
              </StyledToolbar>
            </AppBar>
            <ToolbarSpacing></ToolbarSpacing>
        </div>
    )
}

export default AppBarFixed;