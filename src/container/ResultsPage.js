import React, { Component } from "react";
import Question from "../components/Question";
import QuestionPage from "./QuestionPage";
import { NavLink } from "react-router-dom";
import '../styles/ResultsPage.css';


class ResultsPage extends Component {
  state = {};

  render() {
    return (
      <div className="Results">
        <h1>Results</h1>


        <div className="resultPlacement">🥇 {this.props.score[0].score1} Player 1 🥇</div>
        <div className="resultPlacement">🥈 {this.props.score[1].score2} Player 2 🥈</div>
        <div className="resultPlacement">🥉 {this.props.score[3].score4} Player 3 🥉</div>
        <div>{this.state.userScore}</div>
        
        <NavLink to="/homepage" className="playAgain">Play again?</NavLink>
      

      </div>
    );
  }
}

export default ResultsPage;
