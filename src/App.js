import React from 'react'


class App extends React.Component {
    state = { playerOne: "" , playerTwo: "", playerThree: "", playerFour: "", numberOfQuestions: "", difficulty: "", category: "", questions: []};

    handleSubmit = e => {
        e.preventDefault();
        this.setState( 
            {   
                playerOne : e.target.playerOne.value,
                playerTwo : e.target.playerTwo.value,
                playerThree : e.target.playerThree.value,
                playerFour : e.target.playerFour.value,
                numberOfQuestions : e.target.numberOfQuestions.value,
                difficulty : e.target.difficulty.value,
                category : e.target.category.value
            },   

                () => {
            fetch(`https://opentdb.com/api.php?amount=${this.state.numberOfQuestions}&category=${this.state.category}&difficulty=${this.state.difficulty}&type=multiple`)
            .then(res => res.json())
            .then((data) => {
                console.log(data.results)
                console.log(this.state.playerOne)
                console.log(this.state.playerTwo)
                console.log(this.state.playerThree)
                console.log(this.state.playerFour)
                console.log(this.state.numberOfQuestions)
                console.log(this.state.difficulty)
                console.log(this.state.category)
            })
            .catch(console.log)
        });

    }


    render(){

        

      return (
          <main>

             <form onSubmit={this.handleSubmit}>

                <h2>Please enter names of players</h2>
                <input type="text" id="playerOne" name="playerOne" placeholder = "Player 1"></input>
                <input type="text" id="playerTwo" name="playerTwo" placeholder = "Player 2"></input>
                <input type="text" id="playerThree" name="playerThree" placeholder = "Player 3"></input>
                <input type="text" id="playerFour" name="playerFour" placeholder = "Player 4"></input>
                
                <h2>Please set the number of Questions</h2>
                <input type="number" id="numberOfQuestions" name="numberOfQuestions" placeholder = "No. Of Questions" max = "20" ></input>


                <h2>Choose a difficulty</h2>
                <select name="difficulty" id="dificulty">
                <option value="" disabled selected hidden>Set Difficulty...</option>
                    <option value="easy">Easy</option>
                    <option value="medium">Medium</option>
                    <option value="hard">Hard</option>
                </select>
             <h2>Choose a category</h2>
             
                <select name="category" id="category">
                <option value="" disabled selected hidden>Choose a topic...</option>
                    <option value="9">General Knowledge</option>
                    <optgroup label="Entertainment">
                    <option value="10">Entertainment: Books</option>
                    <option value="11">Entertainment: Film</option>
                    <option value="12">Entertainment: Music</option>                    
                    <option value="13">Entertainment: Musicals & Theatres</option>
                    <option value="14">Entertainment: Television</option>
                    <option value="15">Entertainment: Video Games</option>                    
                    <option value="16">Entertainment: Board Games</option>
                    <option value="31">Entertainment: Japanese Anime & Manga"},</option>
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

                <input type="submit" value="Submit"></input>

             </form>

        </main>

      )
    }
  }

export default App