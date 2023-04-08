const getUserChoice = (userInput) => {
  userInput = userInput.toLowerCase();
  if (
    userInput === "rock" ||
    userInput === "paper" ||
    userInput === "scissors" ||
    userInput === "sharknado" // Cheat code
  ) {
    return userInput;
  } else {
    console.log("Error!");
  }
};

const getComputerChoice = () => {
  const randomNumber = Math.floor(Math.random() * 3);
  switch (randomNumber) {
    case 0:
      return "rock";
    case 1:
      return "paper";
    case 2:
      return "scissors";
  }
};

const determineWinner = (userChoice, computerChoice) => {
  if (userChoice === computerChoice) {
    return "Unlucky. The game was a tie.";
  }
  if (userChoice === "rock") {
    if (computerChoice === "paper") {
      return "You lost to a computer!";
    } else {
      return "Congratulations. You beat the computer!";
    }
  }

  if (userChoice === "paper") {
    if (computerChoice === "scissors") {
      return "You lost to a computer!";
    } else {
      return "Congratulations. You beat the computer!";
    }
  }

  if (userChoice === "scissors") {
    if (computerChoice === "rock") {
      return "You lost to a computer!";
    } else {
      return "Congratulations. You beat the computer!";
    }
  }

  if (userChoice === "sharknado") {
    return "You win, cheater!"
  }
};

const playGame = () => {
  const userChoice = getUserChoice("sharknado");
  const computerChoice = getComputerChoice();
  console.log("You threw: " + userChoice);
  console.log("The computer threw: " + computerChoice);
  console.log(determineWinner(userChoice, computerChoice));
};

playGame();
