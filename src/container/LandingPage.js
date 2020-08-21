import React, { Component } from 'react';
import { NavLink } from "react-router-dom";
import '../styles/LandingPage.css';



export default class LandingPage extends Component {
    render() {
        return (
            <div className="content">
                 <h1>Hello there!</h1>
                 <p>Instructions: Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                 <NavLink to="/homepage" className="newGame">New Game</NavLink>
            </div>
        )
    }
}