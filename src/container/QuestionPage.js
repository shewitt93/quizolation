import React, { Component } from "react";
import { Link, Route } from "react-router-dom";

import Question from "../components/Question";

class QuestionPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      player1: props.player1,
      player2: props.player2,
      player3: props.player3,
      player4: props.player4,
      userScore: 0,
      numberOfQuestions: props.numberOfQuestions,
      difficulty: props.difficulty,
      category: props.category,
      questions: [],
      currentQuestionIdx: 0,
      inPlay: false,
    };
  }

  componentDidMount() {
    this.getQuestions();
  }
  getQuestions = async () => {
    if (!this.state.category) {
      console.log("error in getQuestions, category does not exist");
    }
    let url = `https://opentdb.com/api.php?amount=${this.state.numberOfQuestions}&category=${this.state.category}&difficulty=${this.state.difficulty}&type=multiple`;
    let response = await fetch(url);
    let data = await response.json();
    if (data.response_code !== 0) {
      url = `https://opentdb.com/api.php?amount=${this.state.numberOfQuestions}&category=${this.state.category}&difficulty=${this.state.difficulty}&type=multiple`;
      response = await fetch(url);
      data = await response.json();
    }
    if (data.response_code !== 0) { // why is this condition repeated? (see ln. 34)
      console.log("not enought questions in the api");
    } else {
      this.setState({ questions: data.results });
    }
  };

  startGame = (e) => {
    e.preventDefault();
    this.setState({ inPlay: true });

    this.goToNextQuestion();
  };

  goToNextQuestion = () => {
    if (this.state.currentQuestionIdx >= this.state.questions.length) {
      this.props.history.push("/results");
    } else {
      console.log("to next question", this.state.currentQuestionIdx);
      const nextIdx = this.state.currentQuestionIdx + 1;
      this.props.history.push(`/questions/${nextIdx}`);
      this.setState({ currentQuestionIdx: nextIdx });
    }
  };
  checkAnswer = (e) => {
    e.preventDefault();
    // no check to see if the answer is correct?
    let score = this.state.userScore + 1;
    this.setState({ userScore: score });
    console.log(score);
  };

  render() {
    console.log(this.state.userScore);
    return (
      <div className="game-page-container">
        {!this.state.inPlay && (
          <form onSubmit={this.startGame}>
            <div>Are you ready {this.state.player1}?</div>
            <input type="submit" value="Let's go!" />
          </form>
        )}

        <Route
          path="/questions/:qNumber"
          render={(props) => (
            <Question
              checkAnswer={this.checkAnswer}
              next={this.goToNextQuestion}
              question={this.state.questions[this.state.currentQuestionIdx - 1]}
            />
          )}
        />
      </div>
    );
  }
}

export default QuestionPage;
