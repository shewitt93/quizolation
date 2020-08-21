# Quizolation
A multiplayer quiz built using React.

![Screenshot of Quizolation](https://i.imgur.com/LB3tQm6.png)

## Installation & usage
### Installation
- Clone or download the repo.
- In your command line, run `npm install`.
### Usage
- In your command line, run `npm start` to run the app.
- Press **New Game** to begin then enter player names, chosen number of questions, difficulty level and your chosen category. Press **Start Game** to begin playing.
- To answer questions, click your answer, press submit then press next question.

## Technologies
- React
- Webpack
- JavaScript
- HTML, CSS

## Process
- Started by wireframing the pages in Figma
- Wrote pseudo code to break down the logic of collecting user input, collecting information from the API, linking the two and assigning functionality to buttons.
- Used Webpack to configure our server and development setup.
- Compartmentalised quiz functionality into separate components for clarity and ease of teamwork.

## Challenges
- Routing
- Implementing our pre-made timer feature due to page re-rendering
- Predicting length of time certain tasks will take

## Future features
- Remote multiplayer functionality using [Socket](https://socket.io)
- Ability to choose number of players (currently only works with 4)
- Additional game modes: marathon mode, knock out mode, timed mode
- Implementing Redux
- Expansion more to have interaction between user (profile, messaging) to make it fun


## License
- [MIT License](https://opensource.org/licenses/mit-license.php)
