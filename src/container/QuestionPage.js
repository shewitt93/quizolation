import React, { Component } from "react";
import { Link } from "react-router-dom";
// import GamePage from "../components/GamePage";

class QuestionPage extends Component {
  constructor() {
    super();
    this.state = {
      numberOfQuestions: 1,
      difficulty: null,
      category: null,
      questions: [],
    };
  }

  componentDidMount() {
    this.setState({
      difficulty: this.props.match.params.difficulty,
      category: this.props.match.params.category,
      numberOfQuestions: this.props.match.params.numberOfQuestions,
    });
    this.getQuestions();
  }
  getQuestions = async () => {
    if (!this.state.category) {
      console.log("error in getQuestions, category does not exist");
    }
    let url = `https://opentdb.com/api.php?amount=${this.props.match.params.numberOfQuestions}&category=${this.props.match.params.category}&difficulty=${this.props.match.params.difficulty}&type=multiple`;
    let response = await fetch(url);
    let data = await response.json();
    if (data.response_code !== 0) {
      url = `https://opentdb.com/api.php?amount=${this.props.match.params.numberOfQuestions}&category=${this.props.match.params.category}&difficulty=${this.props.match.params.difficulty}&type=multiple`;
      response = await fetch(url);
      data = await response.json();
    }
    if (data.response_code !== 0) {
      console.log("not enought questions in the api");
    } else {
      this.setState({ questions: data.results });
    }
  };

  render() {
    return (
      <div className="game-page-container">
        <form className="name-form">
          <Link
            to={{
              pathname: "/question/0",
              state: {
                qNumber: 0,
                questionState: this.state,
              },
            }}
          >
            <input
              type="submit"
              value="Start Game"
              className="start-game-button-2"
            />
          </Link>
        </form>
      </div>
    );
  }
}

export default QuestionPage;
