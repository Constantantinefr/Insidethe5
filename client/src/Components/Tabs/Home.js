import pic1 from './Images/pic1.jpg'
import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import { Button } from 'reactstrap';
import Menu from "./Menu";
import Catering from "./Catering";
import Contact from "./Contact";
import Order from "./Order";
import Login from "./Login"

/*import * as React from 'react';
import ReactDOM from 'react-dom';
import Button from '@mui/material/Button';*/
function Home({setActiveTab}) {
    return (
        <div id = "home">
            <h1>Welcome to Inside the Five</h1>
            <img src={pic1} id="pic1"></img> <br/>
            <Button color="danger" onClick={() => setActiveTab(<Menu />)}>Menu</Button>
            <Button color="primary" onClick={() => setActiveTab(<Catering />)}>Catering</Button>
            <Button color="warning" onClick={() => setActiveTab(<Contact />)}>Contact</Button>
            <Button color="info" onClick={() => setActiveTab(<Login />)}>Login</Button>
            <Button color="success" onClick={() => setActiveTab(<Order />)}>Order</Button>
        </div>
        
    )
}

//ReactDOM.render(<Home />)
export default Home