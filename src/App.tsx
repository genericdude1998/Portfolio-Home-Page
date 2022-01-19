import React, { useRef } from 'react';
import AppBarFixed from './app-bar/app-bar';
import AppCarousel from './carousel/carousel';
import Showcase from './showcase/showcase';
import {GlobalStyles} from '@mui/material';
import {BrowserRouter as Router, Routes, Route, HashRouter} from 'react-router-dom';
import Home from './home/home';
import Contact from './contact/contact';

interface IAppProps{
    name: string,
}

function App (props: IAppProps): JSX.Element{
    
    return (
        <>
            <GlobalStyles styles={{body:{margin: '0px', backgroundColor: 'beige'}}} />
            <HashRouter basename={'/'}>
                <Routes>
                    <Route path={'/'} element={
                        <>
                            <AppBarFixed />
                            <Home/>
                            <Contact />
                        </>
                    }>
                    </Route>
                    <Route path={'/showcase'} element={
                        <>
                            <AppBarFixed />
                            <AppCarousel />
                        </>
                    }>
                    </Route>
                    <Route path={'/contact'} element={
                        <>
                            <AppBarFixed />
                            <Contact />
                        </>
                    }>
                    </Route>
                </Routes>
            </HashRouter>
        </>
    )
}

export default App;