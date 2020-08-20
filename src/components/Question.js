import React, { Component } from "react";
import { Link, withRouter } from "react-router-dom";
import '../styles/Question.css';


class Question extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  // componentDidUpdate(prevProps, prevState) {
  //   // check whether client has changed
  //   console.log(prevProps.question);
  //   console.log(this.props.question);
  //   if (prevProps.question.question !== this.props.question.question) {
  //     this.shuffleArray();
  //   }
  // }

  shuffleArray = () => {
    let answers = [];
    answers.push(this.props.question.correct_answer);
    this.props.question.incorrect_answers.forEach((answer) =>
      answers.push(answer)
    );
    answers.sort(() => Math.random() - 0.5);
    // this.setState({ hasUpdated: true });

    return answers;
  };

  render() {
    let renderAnswers = this.shuffleArray();

    return (
      <div>
        <form id="questionAnswer" onSubmit={this.props.checkAnswer}>
          <div className="questionContainer">
            <h3>Question Number: {this.props.match.params.qNumber}</h3>
            <h2 dangerouslySetInnerHTML={{__html: this.props.question.question}} />
          </div>
          <div className="answerContainer">
          <div className="answerOption">
            <input
              required
              type="radio"
              name="answer"
              id="1"
              value={renderAnswers[0]}
            ></input>
            <label htmlFor="1" dangerouslySetInnerHTML={{__html: renderAnswers[0]}} />
          </div>
          <div className="answerOption">
            <input
              type="radio"
              name="answer"
              id="2"
              value={renderAnswers[1]}
            ></input>
            <label htmlFor="2" dangerouslySetInnerHTML={{__html: renderAnswers[1]}} />
          </div>
          <div className="answerOption">
            <input
              type="radio"
              name="answer"
              id="3"
              value={renderAnswers[2]}
            ></input>
            <label htmlFor="3" dangerouslySetInnerHTML={{__html: renderAnswers[2]}} />
          </div>
          <div className="answerOption">
            <input
              type="radio"
              name="answer"
              id="4"
              value={renderAnswers[3]}
            ></input>
            <label htmlFor="4" dangerouslySetInnerHTML={{__html: renderAnswers[3]}} />
          </div>
          </div>
          <input type="submit" value="Submit Answer"></input>
          <div className="next-question-button-container">
          <button onClick={this.props.next}>Next Question</button>
        </div>
        </form>
        {/* <div>{this.props.score}</div> */}

        
      </div>
    );
  }
}

export default withRouter(Question);
