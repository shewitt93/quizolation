import React, { Component } from "react";
import { Switch, Route, withRouter } from "react-router-dom";
import NavBar from "./components/NavBar";
import QuizForm from "./container/QuizForm";
import ResultsPage from "./container/ResultsPage";
import GamePage from "./components/GamePage";
import QuestionPage from "./container/QuestionPage";
import Question from "./components/Question";

class App extends Component {
  state = {
    numberOfQuestions: 0,
    difficulty: "",
    category: ""
  };

  // Beth
  setQuizSettings = settings => {
    const {numberOfQuestions, difficulty, category} = settings
    this.setState({ numberOfQuestions, difficulty, category})
    console.log('redirect to /questions')
    this.props.history.push('/questions')
  }
  // --

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

          <Route exact path="/homepage" render={() => <QuizForm set={this.setQuizSettings}/>} />

          {/* Beth */}
          <Route
            path="/questions"
            render={(props) => <QuestionPage {...props} 
                                  numberOfQuestions={this.state.numberOfQuestions}
                                  difficulty={this.state.difficulty}
                                  category={this.state.category}
                                />}
          />
          {/* -- */}

          {/* <Route
            path="/questionspage/:numberOfQuestions/:difficulty/:category"
            render={(props) => <QuestionPage {...props} />}
          /> */}

          {/* <Route
            path="/questions/:qNumber"
            exact
            render={(props) => <Question {...props} next={this.goToNextQuestion} />}
          /> */}

          <Route path="/results" component={ResultsPage} />
        </Switch>
      </main>
    );
  }
}
export default withRouter(App);
