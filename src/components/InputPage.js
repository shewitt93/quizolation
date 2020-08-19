import React, { Component } from "react";
import { Link } from "react-router-dom";
import "regenerator-runtime/runtime";

class InputPage extends Component {
  state = {
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

  // Beth
  confirmSettings = e => {
    e.preventDefault();
    // const { numberOfQuestions, difficulty, category } = e.target
    console.log('confirming settings')
    this.props.set(this.state)
  }
  //--

  render() {
    return (
      <main>
        <form onSubmit={this.confirmSettings}>
          <h2>Please enter names of players</h2>
          <input
            type="text"
            id="playerOne"
            name="playerOne"
            placeholder="Player 1"
          ></input>
          <input
            type="text"
            id="playerTwo"
            name="playerTwo"
            placeholder="Player 2"
          ></input>
          <input
            type="text"
            id="playerThree"
            name="playerThree"
            placeholder="Player 3"
          ></input>
          <input
            type="text"
            id="playerFour"
            name="playerFour"
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

          {/* Beth */}
          {/* <button onClick={this.confirmSettings} className="start-game-button">Start Game</button> */}
          <input type="submit" value="Start Game"/>
          {/* -- */}

          {/* Simon */}
          {/* <Link
            to={`/questionspage/${this.state.numberOfQuestions}/${this.state.difficulty}/${this.state.category}`}
          >
            <button className="start-game-button">Start Game</button>
          </Link> */}
          {/* -- */}
        </form>
      </main>
    );
  }
}
export default InputPage;
