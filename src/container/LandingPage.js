import React, { Component } from 'react';
import { NavLink } from "react-router-dom";
import '../styles/LandingPage.css';



export default class LandingPage extends Component {
    render() {
        return (
            <div className="content">
                 <h1>Hello there!</h1>
                 <h3>Are you bored in isolation? Then you need Quizolation!</h3>
                 <ul>
                     <li>After pressing new game, choose your player names, number of questions, difficulty level and category.</li>
                     <li>Each player will take turns to answer the whole quiz</li>
                     <li>To answer questions, select your answer, press Submit, then press Next Question</li>
                     <li>Prepare to play! ⚡️</li>
                 </ul>
                 <NavLink to="/homepage" className="newGame">New Game</NavLink>
            </div>
        )
    }
}
