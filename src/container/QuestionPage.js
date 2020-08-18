import React, { Component } from "react";
import { Link } from "react-router-dom";
// import GamePage from "../components/GamePage";

class QuestionPage extends Component {
  constructor() {
    super();
    this.state = {
      // playersNumber: null,
      numberOfQuestions: 1,
      difficulty: null,
      category: null,
      questions: [],
      // userNames: {},
      // userScores: {},
      // totalScore: 0,
    };
  }

  // addUserNames = (num) => {
  //   let html = [];
  //   for (let i = 0; i < num; i++) {
  //     html.push(
  //       <div className="name-input">
  //         <label key={i + 1}>
  //           {`Player ${i + 1}:`}
  //           <input
  //             className="name-input-box"
  //             type="text"
  //             value={this.state.userNames[i]}
  //             name={`${i}`}
  //             onChange={this.updateUsers}
  //             placeholder="Name"
  //             required
  //           />
  //         </label>
  //       </div>
  //     );
  //   }

  //   return html;
  // };

  // updateUsers = (e) => {
  //   const obj = e.target.name;
  //   const name = e.target.value;
  //   this.setState({ userNames: { ...this.state.userNames, [obj]: name } });
  //   this.setState({ userScores: { ...this.state.userScores, [name]: 0 } });
  //   for (let i = 0; i < Object.keys(this.state.userNames).length; i++) {
  //     for (let j = 0; j < Object.keys(this.state.userNames).length; j++) {
  //       if (i !== j && this.state.userNames[i] === this.state.userNames[j]) {
  //         alert("Two users can not have the same name");
  //       }
  //     }
  //   }
  // };

  componentDidMount() {
    this.setState({
      difficulty: this.props.match.params.difficulty,
      category: this.props.match.params.category,
      numberOfQuestions: this.props.match.params.numberOfQuestions,
    });
    this.getQuestions();
  }
  getQuestions = async () => {
    if (!this.state.category) {
      console.log("error in getQuestions, category does not exist");
    }
    let url = `https://opentdb.com/api.php?amount=${this.props.match.params.numberOfQuestions}&category=${this.props.match.params.category}&difficulty=${this.props.match.params.difficulty}&type=multiple`;
    let response = await fetch(url);
    let data = await response.json();
    if (data.response_code !== 0) {
      url = `https://opentdb.com/api.php?amount=${this.props.match.params.numberOfQuestions}&category=${this.props.match.params.category}&difficulty=${this.props.match.params.difficulty}&type=multiple`;
      response = await fetch(url);
      data = await response.json();
    }
    if (data.response_code !== 0) {
      console.log("not enought questions in the api");
    } else {
      this.setState({ questions: data.results });
    }
  };

  // totalScore = (n, user) => {
  //   this.setState({
  //     userScores: {
  //       ...this.state.userScores,
  //       [user]: this.state.userScores[user] + n,
  //     },
  //   });
  // };

  render() {
    return this.state.questions.map((item, idx) => (
      <div key={idx}>
        <h3 dangerouslySetInnerHTML={{ __html: item.category }} />
        <ul>
          <li dangerouslySetInnerHTML={{ __html: item.question }} />
          <li>{item.correct_answer}</li>
        </ul>
      </div>
    ));

    // <div className="game-page-container">
    //   <form className="name-form">
    //     <div className="name-form-title">
    //       <label>
    //         Enter player name{this.state.playersNumber > 1 ? "s" : ""}
    //       </label>
    //     </div>

    //     {this.addUserNames(this.state.playersNumber)}

    //     {Object.keys(this.state.userScores).length !== 0 ? (
    //       <Link
    //         to={{
    //           pathname: "/question/0",
    //           state: {
    //             qNumber: 0,
    //             questionState: this.state,
    //             previousQuestionScores: this.state.userScores,
    //           },
    //         }}
    //       >
    //         <input
    //           type="submit"
    //           value="Start Game"
    //           className="start-game-button-2"
    //         />
    //       </Link>
    //     ) : (
    //       ""
    //     )}
    //   </form>
    // </div>
  }
}
export default QuestionPage;
