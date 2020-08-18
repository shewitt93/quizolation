import React, { Component } from "react";
import { NavLink } from "react-router-dom";

class GamePage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      questionNumber: parseInt(this.props.match.params.qNumber),
      questionInfo: this.props.location.state.questionState,
      userScores: {},
      totalScores: this.props.location.state.previousQuestionScores,
      answerArray: [],
      userNames: Object.values(
        this.props.location.state.questionState.userNames
      ),
    };
  }

  handleChange = (event) => {
    const { value } = event.target;
    const user = event.target.id;
    if (
      value ===
        this.state.questionInfo.questionsArray[this.state.questionNumber]
          .correct_answer &&
      this.state.userScores[user] === 0
    ) {
      this.totalScore(1, user);
      this.setState({ userScores: { ...this.state.userScores, [user]: 1 } });
    } else if (
      value !==
        this.state.questionInfo.questionsArray[this.state.questionNumber]
          .correct_answer &&
      this.state.userScores[user] === 1
    ) {
      this.totalScore(-1, user);
      this.setState({ userScores: { ...this.state.userScores, [user]: 0 } });
    }
  };

  componentDidMount() {
    this.shuffleArray();
    this.scores();
  }

  totalScore = (n, user) => {
    this.setState({
      totalScores: {
        ...this.state.totalScores,
        [user]: this.state.totalScores[user] + n,
      },
    });
  };

  scores = () => {
    let obj = {};
    for (let i = 0; i < this.state.userNames.length; i++) {
      obj[this.state.userNames[i]] = 0;
    }
    this.setState({ userScores: obj });
  };

  shuffleArray = () => {
    let answers = [];
    answers.push(
      this.state.questionInfo.questionsArray[this.state.questionNumber]
        .correct_answer
    );
    this.state.questionInfo.questionsArray[
      this.state.questionNumber
    ].incorrect_answers.forEach((answer) => answers.push(answer));
    answers.sort(() => Math.random() - 0.5);
    this.setState({ answerArray: answers });
  };

  render() {
    let queNumber = this.props.location.state.qNumber;
    let nextQuestionNumber = this.state.questionNumber + 1;
    let nextQNumber = queNumber + 1;
    let state = this.props.location.state.questionState;

    return (
      <div
        className="question-container"
        id={"category-" + this.state.questionInfo.category}
      >
        <div className="question-inner-container">
          <h4>Question {this.state.questionNumber + 1}</h4>
          <h2>
            {entities.decode(
              this.state.questionInfo.questionsArray[this.state.questionNumber]
                .question
            )}
          </h2>
          <div className="radio-container">
            {this.state.userNames.map((user) => {
              return (
                <div className="answer-list">
                  <h3 className="player-name">{user}</h3>
                  <form>
                    {this.state.answerArray.map((answer) => {
                      return (
                        <div className="single-answer">
                          <input
                            className="radio-button-answer"
                            type="radio"
                            id={user}
                            name={`answer_${this.state.questionNumber}`}
                            value={answer}
                            onChange={this.handleChange}
                          />
                          <label for={answer}>
                            {" "}
                            {entities.decode(answer)}{" "}
                          </label>
                        </div>
                      );
                    })}
                  </form>
                </div>
              );
            })}
          </div>
          <div className="next-question-button-container">
            <Link
              to={{
                pathname: `/nextquestion/${this.state.questionNumber}`,
                state: {
                  queNumber: nextQNumber,
                  questionStateNext: state,
                  questionScores: this.state.totalScores,
                  feedback: this.state.userScores,
                },
              }}
            >
              <button className="next-question-button" type="submit">
                Check Answer!
              </button>
            </Link>
          </div>
        </div>
      </div>
    );
  }
}

export default GamePage;
