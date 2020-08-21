import React, { Component } from "react";
import { Link, withRouter, Route, Switch } from "react-router-dom";

import Question from "../components/Question";
import ResultsPage from "./ResultsPage";

class QuestionPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      userScore: [
        { player1: props.player1, score1: 0 },
        { player2: props.player2, score2: 0 },
        { player3: props.player3, score3: 0 },
        { player4: props.player4, score4: 0 },
      ],
      gameid: 0,

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

  checkAnswer = (e) => {
    e.preventDefault();
    console.log(this.state.gameid);
    let playerNumber = this.state.gameid + 1;
    console.log(playerNumber);
    this.setState({ gameid: playerNumber });

    const value = e.target.answer.value;
    switch (this.state.gameid) {
      case 1:
        console.log(this.state.userScore[0]["score1"]);
        console.log(
          this.state.questions[this.state.currentQuestionIdx - 1].correct_answer
        );
        if (
          value ===
          this.state.questions[this.state.currentQuestionIdx - 1].correct_answer
        ) {
          let score = this.state.userScore[0]["score1"];
          let finalscore = score + 1;
          console.log(finalscore);

          this.setState((s) => ({
            userScore: {
              ...s.userScore,
              [0]: { ...s.userScore[0], score1: finalscore },
            },
          }));
        } else if (
          value !==
          this.state.questions[this.state.currentQuestionIdx - 1].correct_answer
        ) {
          let score = this.state.userScore[0]["score1"];
          let finalscore = score - 1;

          this.setState((s) => ({
            userScore: {
              ...s.userScore,
              [0]: { ...s.userScore[0], score1: finalscore },
            },
          }));
        }
        break;

      case 2:
        console.log(this.state.userScore[1]["score2"]);
        console.log(
          this.state.questions[this.state.currentQuestionIdx - 1].correct_answer
        );
        if (
          value ===
          this.state.questions[this.state.currentQuestionIdx - 1].correct_answer
        ) {
          let score = this.state.userScore[1]["score2"];
          let finalscore = score + 1;
          console.log(finalscore);

          this.setState((s) => ({
            userScore: {
              ...s.userScore,
              [1]: { ...s.userScore[1], score2: finalscore },
            },
          }));
        } else if (
          value !==
          this.state.questions[this.state.currentQuestionIdx - 1].correct_answer
        ) {
          let score = this.state.userScore[1]["score2"];
          let finalscore = score - 1;

          this.setState((s) => ({
            userScore: {
              ...s.userScore,
              [1]: { ...s.userScore[1], score2: finalscore },
            },
          }));
        }
        break;
      case 3:
        console.log(this.state.userScore[2]["score3"]);
        console.log(
          this.state.questions[this.state.currentQuestionIdx - 1].correct_answer
        );
        if (
          value ===
          this.state.questions[this.state.currentQuestionIdx - 1].correct_answer
        ) {
          let score = this.state.userScore[2]["score3"];
          let finalscore = score + 1;
          console.log(finalscore);

          this.setState((s) => ({
            userScore: {
              ...s.userScore,
              [2]: { ...s.userScore[2], score3: finalscore },
            },
          }));
        } else if (
          value !==
          this.state.questions[this.state.currentQuestionIdx - 1].correct_answer
        ) {
          let score = this.state.userScore[2]["score3"];
          let finalscore = score - 1;

          this.setState((s) => ({
            userScore: {
              ...s.userScore,
              [2]: { ...s.userScore[2], score3: finalscore },
            },
          }));
        }
      case 4:
        console.log(this.state.userScore[3]["score4"]);
        console.log(
          this.state.questions[this.state.currentQuestionIdx - 1].correct_answer
        );
        if (
          value ===
          this.state.questions[this.state.currentQuestionIdx - 1].correct_answer
        ) {
          let score = this.state.userScore[3]["score4"];
          let finalscore = score + 1;
          console.log(finalscore);

          this.setState((s) => ({
            userScore: {
              ...s.userScore,
              [3]: { ...s.userScore[3], score4: finalscore },
            },
          }));
        } else if (
          value !==
          this.state.questions[this.state.currentQuestionIdx - 1].correct_answer
        ) {
          let score = this.state.userScore[3]["score4"];
          let finalscore = score - 1;

          this.setState((s) => ({
            userScore: {
              ...s.userScore,
              [3]: { ...s.userScore[3], score4: finalscore },
            },
          }));
        }
        break;
    }
  };
  startGame1 = (e) => {
    e.preventDefault();
    this.setState({ inPlay: true, gameid: 1 });

    this.goToNextQuestion();
  };

  goToNextQuestion = () => {
    if (this.state.currentQuestionIdx >= this.state.questions.length) {
      this.props.history.push("/questions/results");
    } else {
      console.log("to next question", this.state.currentQuestionIdx);
      const nextIdx = this.state.currentQuestionIdx + 1;
      this.props.history.push(`/questions/${nextIdx}`);
      this.setState({ currentQuestionIdx: nextIdx, gameid: 0 });
    }
  };
  render() {
    console.log(this.state);
    return (
      <div className="game-page-container">
        {!this.state.inPlay && (
          <div>
            <form onSubmit={this.startGame1}>
              <div>Are you ready {this.state.userScore[0].player1}?</div>
              <input type="submit" value="Let's go!" />
            </form>
          </div>
        )}
        <Switch>
          <Route
            path="/questions/results"
            render={(props) => (
              <ResultsPage score={this.state.userScore} next={"hello"} />
            )}
          />
          <Route
            path="/questions/:qNumber"
            render={(props) => (
              <Question
                checkAnswer={this.checkAnswer}
                next={this.goToNextQuestion}
                question={
                  this.state.questions[this.state.currentQuestionIdx - 1]
                }
                gameid={this.state.gameid}
                // score={this.state.userScore}
              />
            )}
          />
          {/* <Route
            path="/questions/results"
            render={(props) => (
              <ResultsPage score={this.state.userScore} next={"hello"} />
            )}
          /> */}
        </Switch>
      </div>
    );
  }
}

export default withRouter(QuestionPage);
