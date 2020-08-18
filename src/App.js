import React, { Component } from "react";
import { Switch, Route } from "react-router-dom";
import NavBar from "./components/NavBar";
import QuizForm from "./container/QuizForm";
import ResultsPage from "./container/ResultsPage";
import GamePage from "./components/GamePage";
import QuestionPage from "./container/QuestionPage";
import Question from "./components/Question";

class App extends Component {
  state = {};

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

          <Route path="/homepage" exact component={QuizForm} />

          <Route
            path="/questionspage/:numberOfQuestions/:difficulty/:category"
            render={(props) => <QuestionPage {...props} />}
          />

          <Route
            path="/question/:qNumber"
            exact
            render={(props) => <Question {...props} />}
          />

          <Route path="/resultspage" component={ResultsPage} />
        </Switch>
      </main>
    );
  }
}
export default App;
