import React, { Component } from "react";
import Question from "../components/Question";
import QuestionPage from "./QuestionPage";

class ResultsPage extends Component {
  state = {
    userScore: this.props.userScore,
  };

  render() {
    return (
      <div className="Results">
        <h1>Results</h1>
        <div>{this.state.userScore}</div>
      </div>
    );
  }
}

export default ResultsPage;
