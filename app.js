import React from 'react';
import ReactDom from 'react-dom';

class App extends React.Component {
    render () {
        return <div><h1>Hello there! I am a basic static page using MERN.</h1>
        </div>
    }
}

ReactDom.render(<App/>,
document.getElementById('app'));