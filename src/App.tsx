import React from 'react';
import AppBarFixed from './app-bar/app-bar';

interface IAppProps{
    name: string,
}
function App (props: IAppProps): JSX.Element{
    return <AppBarFixed />
}

export default App;