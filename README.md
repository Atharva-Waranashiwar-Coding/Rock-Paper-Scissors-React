# Rock Paper Scissors Game - React

A classic Rock Paper Scissors game built using React. Play against the computer, keep track of your score, and enjoy a dynamic user interface.

## Table of Contents
- [Rock Paper Scissors Game - React](#rock-paper-scissors-game---react)
  - [Table of Contents](#table-of-contents)
  - [Getting Started](#getting-started)
    - [Prerequisites](#prerequisites)
    - [Installation](#installation)
    - [Available Scripts](#available-scripts)
    - [Game Rules](#game-rules)
    - [Technologies Used](#technologies-used)
    - [Project Structure](#project-structure)
    - [Hosted Application](#hosted-application)

## Getting Started

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

### Prerequisites

Ensure you have Node.js and npm installed on your machine.

- [Node.js](https://nodejs.org/)
- npm (comes with Node.js)

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/your-username/rock-paper-scissors-react.git

2. Navigate to the project directory:
    ```bash
    cd rock-paper-scissors-react

3. Install dependencies:
    ```bash
    npm install

4. Run the app:
    ```bash
    npm start
Open http://localhost:3000 to view it in your browser. The page will reload as you make edits.

### Available Scripts
In the project directory, you can run the following scripts:

**`npm start`**
Runs the app in the development mode. Open http://localhost:3000 to view it in the browser.

**`npm test`**
Launches the test runner in the interactive watch mode. You can add tests in the `src` folder to validate the game's logic and functionality.

**`npm run build`**
Builds the app for production to the `build` folder. The app will be optimized for the best performance. The build is minified, and filenames include hashes.

**`npm run eject`**
If you want to customize the build configuration, run `npm run eject` to remove the default `create-react-app` configuration. **Note: Once you eject, you can't go back!**

### Game Rules
- Rock beats Scissors
- Scissors beats Paper
- Paper beats Rock
- If both the user and the computer select the same option, it's a draw.

### Technologies Used
- React.js: JavaScript library for building user interfaces.
- CSS3: For styling the game interface.
- JavaScript (ES6+): Handles game logic and interactions.
### Project Structure

    rock-paper-scissors-react/
    │
    ├── public/
    │   ├── favicon.ico          # Site favicon
    │   ├── index.html           # HTML template
    │
    ├── src/
    │   ├── components/
    │   │   ├── Game.js          # Main game logic and component
    │   │   ├── Scoreboard.js    # Component to track and display scores
    │   │   ├── Choices.js       # Button components for rock, paper, scissors
    │   ├── App.js               # App component and routing
    │   ├── index.js             # ReactDOM entry point
    │   ├── App.css              # General styles
    │
    ├── package.json             # Project dependencies and scripts
    └── README.md                # Project documentation

### Hosted Application
You can check out the live version of the game at:

Live Demo - https://rockpaperscissorsaw.netlify.app/

Feel free to play and share!
    