import React, { Component } from "react";
import { Link } from "react-router-dom";

class Question extends Component {
  constructor(props) {
    super(props);
    this.state = {
      questionNumber: parseInt(this.props.match.params.qNumber),
      questionInfo: this.props.location.state.questionState,
      previousQuestionNumber: null,
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

  render() {
    let queNumber = this.props.location.state.qNumber;
    // let nextQuestionNumber = this.state.questionNumber + 1;
    let nextQNumber = queNumber++;
    // let questionNumber = this.state.previousQuestionNumber;
    // let nextQuestionNumber = questionNumber + 1;
    let nextQNumberString = nextQNumber.toString();
    let state = this.props.location.state.questionState;

    return (
      <div>
        <Link
          to={{
            pathname: `/question/${nextQNumberString}`,
            state: { qNumber: queNumber, questionState: state },
          }}
        >
          <input
            className="next-question-button"
            type="submit"
            value="Next Question"
          />
        </Link>
        <span>hello</span>
      </div>
    );
  }
}

export default Question;
