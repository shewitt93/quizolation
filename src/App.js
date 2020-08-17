import React, { Component } from "react";
import { Switch, Route } from "react-router-dom";
import { NavBar, QuestionPage } from "./components";
import { QuizForm, ResultsPage } from "./container";

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
            path="/questionspage:qNumber"
            exact
            render={(props) => <QuestionPage {...props} />}
          />

          <Route path="/resultspage" component={ResultsPage} />
        </Switch>
      </main>
    );
  }
}
export default App;
