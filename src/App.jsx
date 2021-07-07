import React from 'react';
import GhibliRouter from './components/GhibliRouter';


//Edit => Replace (Ctrl + H) => xxxxxx (from xxxxxxPlug) to yyyyyy (for yyyyyyPlug) => Press Enter key three times.
//xxxxxx or yyyyyy options can be seen in the React components folder.
//The 'Plug' component is the root of the component tree for each project and links the JSX components 
//of each project to the central App.jsx and index.js files of the React root.

const App = () => {
    
    return(
        <div>
            <GhibliRouter />
        </div>
    )
};

export default App;