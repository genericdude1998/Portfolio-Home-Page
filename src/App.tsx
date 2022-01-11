import React from 'react';
import AppBarFixed from './app-bar/app-bar';
import Showcase from './showcase/showcase';

interface IAppProps{
    name: string,
}
function App (props: IAppProps): JSX.Element{
    return (
        <>
            <AppBarFixed />
            <Showcase />
        </>
    )
}

export default App;