import React, { Component } from "react";
import Question from "../components/Question";
import QuestionPage from "./QuestionPage";
import { NavLink } from "react-router-dom";
import '../styles/ResultsPage.css';


class ResultsPage extends Component {
  state = {
    userScore: this.props.userScore,
  };

  render() {
    return (
      <div className="Results">
        <h1>Results</h1>
        <div className="resultPlacement">🥇 {this.state.userScore} Player 1 🥇</div>
        <div className="resultPlacement">🥈 {this.state.userScore} Player 2 🥈</div>
        <div className="resultPlacement">🥉 {this.state.userScore} Player 3 🥉</div>
        <div>{this.state.userScore}</div>
        
        <NavLink to="/homepage" className="playAgain">Play again?</NavLink>
      </div>
    );
  }
}

export default ResultsPage;
