import React, { useState } from "react";
import Home from "./Tabs/Home";
import Menu from "./Tabs/Menu";
import Catering from "./Tabs/Catering";
import Contact from "./Tabs/Contact";
import Login from "./Tabs/Login";
import Order from "./Tabs/Order";

 
function Tabmanager() {
    const [activeTab, setActiveTab] = useState(<Home />);

    const handleHome = () => {
        setActiveTab(<Home setActiveTab = {setActiveTab}/>)
    }
    const handleMenu = () => {
        setActiveTab(<Menu />)
    }
    const handleCatering = () => {
        setActiveTab(<Catering />)
    }
    const handleContact = () => {
        setActiveTab(<Contact />)
    }
    const handleLogin = () => {
        setActiveTab(<Login />)
    }
    const handleOrder = () => {
        setActiveTab(<Order />)
    }
        return (
            <div id = "mainpage">
                <header >
                    <ul id = "navbar">
                        <li id = "navbar"><a  onClick={handleHome}>Home</a></li>
                        <li id = "navbar"><a  onClick={handleMenu}>Menu</a></li>
                        <li id = "navbar"><a  onClick={handleCatering}>Catering</a></li>
                        <li id = "navbar"><a  onClick={handleContact}>Contact Us</a></li>
                        <li id = "navbar"><a  onClick={handleLogin}>Register/Login</a></li>
                        <li id = "navbar"><a  onClick={handleOrder}>Order Online</a></li>
                    </ul>
                </header>
                <body>
                    {activeTab}
                </body>
            </div>
        )
    }

export default Tabmanager