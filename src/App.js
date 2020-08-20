import React, { Component } from "react";
import { Switch, Route, withRouter } from "react-router-dom";
import NavBar from "./components/NavBar";

// for readability it could be nice to bring these imports together via an index
// import { QuizForm, ResultsPage, QuestionPage from './container'}
import QuizForm from "./container/QuizForm";
import ResultsPage from "./container/ResultsPage";
import QuestionPage from "./container/QuestionPage";

class App extends Component {
  state = {
    numberOfQuestions: 0,
    difficulty: "",
    category: "",
    // could this be an array of players instead?
    player1: "",
    player2: "",
    player3: "",
    player4: "",
    userScore: 0,
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
      userScore,
    } = settings;
    this.setState({
      numberOfQuestions,
      difficulty,
      category,
      player1,
      player2,
      player3,
      player4,
      userScore,
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
            path="/homepage" // bit of a misleading route name. Usually we refer to '/' as 'homepage'
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
                userScore={this.state.userScore}
              />
            )}
          />

          <Route path="/results" component={ResultsPage} />
        </Switch>
      </main>
    );
  }
}
export default withRouter(App);
