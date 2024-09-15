import React, { useState } from 'react';
import './App.css';
import '@fortawesome/fontawesome-free/css/all.min.css';

const choices = ["rock", "paper", "scissor"];

const App = () => {
  const [computerScore, setComputerScore] = useState(0);
  const [userScore, setUserScore] = useState(0);
  const [result, setResult] = useState('');
  const [userChoice, setUserChoice] = useState('');
  const [compChoice, setCompChoice] = useState('');

  const choicesObject = {
    'rock': {
      'rock': 'draw',
      'scissor': 'win',
      'paper': 'lose'
    },
    'scissor': {
      'rock': 'lose',
      'scissor': 'draw',
      'paper': 'win'
    },
    'paper': {
      'rock': 'win',
      'scissor': 'lose',
      'paper': 'draw'
    }
  };

  const handleClick = (userInput) => {
    const num = Math.floor(Math.random() * 3);
    const computerInput = choices[num];

    setUserChoice(userInput.toUpperCase());
    setCompChoice(computerInput.toUpperCase());

    const outcome = choicesObject[userInput][computerInput];

    if (outcome === 'win') {
      setResult('YOU WIN');
      setUserScore(userScore + 1);
    } else if (outcome === 'lose') {
      setResult('YOU LOSE');
      setComputerScore(computerScore + 1);
    } else {
      setResult('DRAW');
    }
  };

  return (
    <div className="container">
      <div className="scores">
        <p>Computer : <span>{computerScore}</span></p>
        <p>You : <span>{userScore}</span></p>
      </div>

      <div className="weapons">
        <button onClick={() => handleClick('rock')}>
          <i className="far fa-hand-rock"></i>
        </button>
        <button onClick={() => handleClick('paper')}>
          <i className="far fa-hand-paper"></i>
        </button>
        <button onClick={() => handleClick('scissor')}>
          <i className="far fa-hand-scissors"></i>
        </button>
      </div>

      <div className="details">
        <p>You chose <span>{userChoice}</span></p>
        <p>Computer chose <span>{compChoice}</span></p>
        <p id="result">{result}</p>
      </div>
    </div>
  );
}

export default App;
