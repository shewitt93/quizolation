import React, { Component } from "react";
import { Switch, Route, withRouter } from "react-router-dom";
import NavBar from "./components/NavBar";
import QuizForm from "./container/QuizForm";
import ResultsPage from "./container/ResultsPage";
import QuestionPage from "./container/QuestionPage";
import LandingPage from "./container/LandingPage";
import { NavLink } from "react-router-dom";
import './styles/App.css';


class App extends Component {
  state = {
    numberOfQuestions: 0,
    difficulty: "",
    category: "",
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
      <div id="app">
      <main className="quiz">
        <header>
          <NavLink to="/" className="navlink"><h1>Quizolation - tagline here</h1></NavLink>
          {/* <NavBar /> */}
        </header>

        <Switch>
          <Route exact path="/" component={LandingPage} />

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
                userScore={this.state.userScore}
              />
            )}
          />

          <Route path="/results" component={ResultsPage} />
        </Switch>

        <footer>Footer text here</footer>
      </main>
      </div>
    );
  }
}
export default withRouter(App);
