import React, { Component } from "react";
import { Link } from "react-router-dom";
import "regenerator-runtime/runtime";

class InputPage extends Component {
  state = {
    player1: "",
    player2: "",
    player3: "",
    player4: "",

    numberOfQuestions: "4",
    difficulty: "easy",
    category: "9",
  };
  populateState = (e) => {
    e.preventDefault;
    const property = e.target.name;
    const propValue = e.target.value;
    this.setState({ ...this.state, [property]: propValue });
  };

  confirmSettings = (e) => {
    e.preventDefault();

    console.log("confirming settings");
    this.props.set(this.state);
  };

  render() {
    console.log(this.state);
    return (
      <main>
        <form onSubmit={this.confirmSettings}>
          <h2>Please enter names of players</h2>
          <input
            onChange={this.populateState}
            value={this.state.player1.value}
            type="text"
            id="playerOne"
            name="player1"
            placeholder="Player 1"
          ></input>
          <input
            onChange={this.populateState}
            value={this.state.player2.value}
            type="text"
            id="playerTwo"
            name="player2"
            placeholder="Player 2"
          ></input>
          <input
            onChange={this.populateState}
            value={this.state.player3.value}
            type="text"
            id="playerThree"
            name="player3"
            placeholder="Player 3"
          ></input>
          <input
            onChange={this.populateState}
            value={this.state.player4.value}
            type="text"
            id="playerFour"
            name="player4"
            placeholder="Player 4"
          ></input>

          <h2>Please set the number of Questions</h2>
          <input
            onChange={this.populateState}
            value={this.state.numberOfQuestions}
            type="number"
            id="numberOfQuestions"
            name="numberOfQuestions"
            placeholder="No. Of Questions"
            max="20"
          ></input>

          <h2>Choose a difficulty</h2>
          <select
            name="difficulty"
            id="dificulty"
            onChange={this.populateState}
            value={this.state.difficulty}
          >
            <option value="" disabled defaultValue>
              Set Difficulty...
            </option>
            <option value="easy">Easy</option>
            <option value="medium">Medium</option>
            <option value="hard">Hard</option>
          </select>
          <h2>Choose a category</h2>

          <select
            onChange={this.populateState}
            value={this.state.category}
            name="category"
            id="category"
          >
            <option value="" disabled>
              Choose a topic...
            </option>
            <option value="9">General Knowledge</option>
            <optgroup label="Entertainment">
              <option value="10">Entertainment: Books</option>
              <option value="11">Entertainment: Film</option>
              <option value="12">Entertainment: Music</option>
              <option value="13">Entertainment: Musicals & Theatres</option>
              <option value="14">Entertainment: Television</option>
              <option value="15">Entertainment: Video Games</option>
              <option value="16">Entertainment: Board Games</option>
              <option value="31">
                Entertainment: Japanese Anime & Manga",
              </option>
              <option value="32">Entertainment: Cartoon & Animations</option>
              <option value="29">Entertainment: Comics</option>
            </optgroup>
            <optgroup label="Science">
              <option value="17">Science & Nature</option>
              <option value="18">Science: Computers</option>
              <option value="19">Science: Mathematics</option>
              <option value="30">Science: Gadgets</option>
            </optgroup>
            <option value="20">Mythology</option>
            <option value="21">Sports</option>
            <option value="22">Geography</option>
            <option value="23">History</option>
            <option value="24">Politics</option>
            <option value="25">Art</option>
            <option value="26">Celebrities</option>
            <option value="27">Animals</option>
            <option value="28">Vehicles</option>
          </select>

          <input type="submit" value="Start Game" />
        </form>
      </main>
    );
  }
}
export default InputPage;
