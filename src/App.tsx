import React from 'react';
import AppBarFixed from './app-bar/app-bar';
import AppCarousel from './carousel/carousel';
import Showcase from './showcase/showcase';
import {GlobalStyles} from '@mui/material';

interface IAppProps{
    name: string,
}
function App (props: IAppProps): JSX.Element{
    return (
        <>
            <GlobalStyles styles={{body:{margin: '0px', backgroundColor: 'beige'}}} />
                <AppBarFixed />
                <AppCarousel />
                <Showcase />
        </>
    )
}

export default App;