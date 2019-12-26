let computerChoiceString = '';
let winner = 'User Won';

function getComputerChoice() {
  let computerChoice = Math.floor((Math.random() * 3));

  if (computerChoice === 0) {
    computerChoiceString = 'rock';
  } else if (computerChoice === 1) {
    computerChoiceString = 'paper';
  } else if (computerChoice === 2) {
    computerChoiceString = 'scissors';
  } else {
    computerChoiceString = 'error';
  }
  console.log(`The Computer Choice is: ${computerChoiceString}.`);
  return computerChoiceString;
}

let getUserChoice = input => {
  if (input.toLowerCase() === 'rock') {
    getUserChoice = 'rock';
  } else if (input.toLowerCase() === 'paper') {
    getUserChoice = 'paper';
  } else if (input.toLowerCase() === 'scissors') {
    getUserChoice = 'scissors';
  } else {
    getUserChoice = 'Error Input.';
  }
  console.log(`The User Choice is: ${getUserChoice}.`);
  return getUserChoice;
}

function determineWinner(userChoice, computerChoiceString) {
  if (getUserChoice === 'rock') {
    if (computerChoiceString === 'paper') {
      winner = 'Computer Won';
    }
  }
  if (getUserChoice === 'paper') {
    if (computerChoiceString === 'scissors') {
      winner = 'Computer Won';
    }
  }
  if (getUserChoice === 'scissors') {
    if (computerChoiceString === 'rock') {
      winner = 'Computer Won';
    }
  }

  if (getUserChoice === computerChoiceString)
    winner = 'No one won, there is a Tie.';


  console.log(winner);
  return winner;
}


function optionChanged(input) {
  // Fetch new data each time a new sample is selected
  //getUserChoice(input);
  getComputerChoice();
  determineWinner(getUserChoice(input), computerChoiceString);
}