import React, { Component } from "react";
import InputPage from "../components/InputPage";

class QuizForm extends Component {
  render() {
    return (
      <div className="Quiz-Form-container">
        <InputPage set={this.props.set}/>
      </div>
    );
  }
}

export default QuizForm;
