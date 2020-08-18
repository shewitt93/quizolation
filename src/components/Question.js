import React, { Component } from "react";
import { Link } from "react-router-dom";

class Question extends Component {
  constructor(props) {
    super(props);
    this.state = {
      questionNumber: parseInt(this.props.match.params.qNumber),
      questionInfo: this.props.location.state.questionState,
      previousQuestionNumber: null,
      answerArray: [],
      hasFetched: false,
    };
  }

  componentDidMount() {
    this.getParam();
  }
  getParam = () => {
    this.setState({
      previousQuestionNumber: parseInt(
        this.props.match.params.previousQuestionNumber
      ),
    });
  };
  componentDidUpdate() {
    this.shuffleArray();
  }
  shuffleArray = () => {
    let answers = [];
    answers.push(
      this.state.questionInfo.questions[this.state.questionNumber]
        .correct_answer
    );
    this.state.questionInfo.questions[
      this.state.questionNumber
    ].incorrect_answers.forEach((answer) => answers.push(answer));
    answers.sort(() => Math.random() - 0.5);
    this.setState({ answerArray: answers, hasFetched: true });
  };
  shouldComponentUpdate() {
    if (this.state.hasFetched) {
      return false;
    }
    return true;
  }

  render() {
    let questionNumber = this.state.previousQuestionNumber;
    let nextQuestionNumber = questionNumber + 1;
    let queNumber = this.props.location.state.qNumber;
    let nextQNumber = queNumber + 1;
    let nextQueNumber = this.state.questionNumber + 1;
    let nextQNumberString = nextQueNumber.toString();

    // let state = this.props.location.state.questionInfo;

    let stateNext = this.state;

    console.log(this.state.previousQuestionNumber);

    return (
      <div>
        <h4>Question {this.state.questionNumber + 1}</h4>
        <h3>{this.state.answerArray}</h3>

        <div>
          <div className="next-question-button-container">
            {nextQuestionNumber + 1 ==
            this.state.questionInfo.questions.length ? (
              <Link
                to={{
                  pathname: "/scores",
                  state: {
                    // userScores: currentQuestionScores,
                    stateFinal: stateNext,
                  },
                }}
              >
                <input
                  className="next-question-button"
                  type="button"
                  value="View Scores!"
                />
              </Link>
            ) : (
              <Link
                to={{
                  pathname: `/question/${nextQNumberString}`,
                  state: {
                    qNumber: nextQNumber,
                    previousQuestionNumber: nextQuestionNumber,
                    questionState: stateNext,
                    // previousQuestionScores: currentQuestionScores,
                  },
                }}
              >
                <input
                  className="next-question-button"
                  type="submit"
                  value="Next Question"
                />
              </Link>
            )}
          </div>
          <span>hello</span>
        </div>
      </div>
    );
  }
}

export default Question;
