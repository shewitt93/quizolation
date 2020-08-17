import React, { Component } from "react";

class QuestionPage extends Component {
  render() {
    return (
      <>
        <h2 className="Question">{this.props}</h2>
        {/* <section className="Answers">{this.props.question}</section> */}
      </>
    );
  }
}

export default QuestionPage;
