import React, { Component } from "react";
import { Switch, Route, withRouter } from "react-router-dom";
import NavBar from "./components/NavBar";
import QuizForm from "./container/QuizForm";
import ResultsPage from "./container/ResultsPage";
import QuestionPage from "./container/QuestionPage";

class App extends Component {
  state = {
    numberOfQuestions: 0,
    difficulty: "",
    category: "",
    player1: "",
    player2: "",
    player3: "",
    player4: "",
  };

  setQuizSettings = (settings) => {
    const {
      numberOfQuestions,
      difficulty,
      category,
      player1,
      player2,
      player3,
      player4,
    } = settings;
    this.setState({
      numberOfQuestions,
      difficulty,
      category,
      player1,
      player2,
      player3,
      player4,
    });
    console.log("redirect to /questions");
    this.props.history.push("/questions");
  };

  render() {
    return (
      <main className="quiz">
        <h1>Quizolation</h1>
        <h4>quiz</h4>
        <header>
          <NavBar />
        </header>

        <Switch>
          <Route path="/" exact render={() => <h1>Hello there!</h1>} />

          <Route
            exact
            path="/homepage"
            render={() => <QuizForm set={this.setQuizSettings} />}
          />

          <Route
            path="/questions"
            render={(props) => (
              <QuestionPage
                {...props}
                numberOfQuestions={this.state.numberOfQuestions}
                difficulty={this.state.difficulty}
                category={this.state.category}
                player1={this.state.player1}
                player2={this.state.player2}
                player3={this.state.player3}
                player4={this.state.player4}
              />
            )}
          />

          <Route
            path="/results"
            render={(props) => (
              <ResultsPage {...props} userScore={this.state.userScore} />
            )}
          />
        </Switch>
      </main>
    );
  }
}
export default withRouter(App);
