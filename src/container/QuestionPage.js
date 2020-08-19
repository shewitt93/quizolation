import React, { Component } from "react";
import { Link, Route } from "react-router-dom";

import Question from "../components/Question";

class QuestionPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
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
    if (data.response_code !== 0) {
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

  render() {
    return (
      <div className="game-page-container">
        {!this.state.inPlay && (
          <form onSubmit={this.startGame}>
            <input type="text" placeholder="Your name" />
            <input type="submit" value="Let's go!" />
          </form>
        )}

        <Route
          path="/questions/:qNumber"
          render={(props) => (
            <Question
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
