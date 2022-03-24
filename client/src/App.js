import logo from './logo.svg';
import './App.css';
import Tabmanager from './Components/Tabmanager.js'
/*import * as React from 'react';
import ReactDOM from 'react-dom';
import Button from '@mui/material/Button';*/

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <a href = "/" id = "topthing"><h1>Inside the Five</h1></a>
      </header>
      <body>
        <Tabmanager />
      </body>
    </div>
  );
}

//ReactDOM.render(<App />, document.querySelector('#app'));

export default App;
