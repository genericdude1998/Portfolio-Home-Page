import React, { useRef } from 'react';
import AppBarFixed from './app-bar/app-bar';
import AppCarousel from './carousel/carousel';
import Showcase from './showcase/showcase';
import {GlobalStyles} from '@mui/material';

interface IAppProps{
    name: string,
}

function App (props: IAppProps): JSX.Element{
    // index number thing --> pass it down as props
    
    return (
        <>
            <GlobalStyles styles={{body:{margin: '0px', backgroundColor: 'beige'}}} />
            <AppBarFixed />
            <AppCarousel />
        </>
    )
}

export default App;