import React, { Component } from "react";
import { Link, withRouter } from "react-router-dom";

class Question extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  shuffleArray = () => {
    let answers = [];
    answers.push(this.props.question.correct_answer);
    this.props.question.incorrect_answers.forEach((answer) =>
      answers.push(answer)
    );
    answers.sort(() => Math.random() - 0.5);

    return answers;
  };

  render() {
    return (
      <div>
        <h4>Question {this.props.match.params.qNumber}</h4>
        <h2>{this.props.question.text}</h2>
        <h3>{this.shuffleArray()}</h3>

        <div>
          <div className="next-question-button-container">
            <button onClick={this.props.next}>Next Question</button>
          </div>
        </div>
      </div>
    );
  }
}

export default withRouter(Question);
