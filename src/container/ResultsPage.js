import React, { Component } from "react";

class ResultsPage extends Component {
  state = {};

  render() {
    return (
      <div className="Results">
        <h1>Results</h1>
        <div>{this.props.score[0].score1}</div>
        <div>{this.props.score[1].score2}</div>
        <div>{this.props.score[2].score3}</div>
        <div>{this.props.score[3].score4}</div>
      </div>
    );
  }
}

export default ResultsPage;
