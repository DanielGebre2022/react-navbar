import React, { Component } from 'react';
import { MenuItems } from "./MenuItems"
import './Navbar.css'
import { Button } from "../Button"
import {Link} from 'react-router-dom'

class Navbar extends Component {
    state = { clicked: false }


    handleClick = () => {
        {/* made handle click function. must be arrow. sets state to opposite of what it was */}
        this.setState({ clicked: !this.state.clicked })
    }
 
    render() {
        return(
            <nav className="NavbarItems">
                 
                <img className="s1-logo" src={require("./newlogoblack1B3.png")}></img>
                
                <div className="menu-icon" onClick={this.handleClick}>
 {/* // below line checks the state to see if hamburger menu is clicked if it is display an x for close.  */}                  
                    <i className={this.state.clicked ? 'fas fa-times' : 'fas fa-bars'}></i>

                </div>
{/* Mapping the items to the navbar */}
                <ul className={this.state.clicked ? 'nav-menu active' : 
                'nav-menu'}>
                    {MenuItems.map((item, index) => {
                        return (
                            <li key={index}>
                                <a className={item.cName} href={item.url}>
                                {item.title}
                                </a>
                            </li>
                        )
                    })}
                </ul>
               { /* <Button>ORDER</Button> */ }
            </nav>
        )
    }
}
export default Navbar