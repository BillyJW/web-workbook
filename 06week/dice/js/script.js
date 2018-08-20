
var userChoice = prompt("Choose: rock, paper, scissors, lizard, spock");

var computerChoice = Math.random();
if (computerChoice < 0.34) {
  computerChoice = "rock";
} else if (computerChoice <= 0.67) {
  computerChoice = "paper";
} else {
  computerChoice = "scissors";
}
//return ("Computer chooses: " + computerChoice);

var play = function(userChoice, computerChoice) {

  if (userChoice === computerChoice) {
   return "tie game";
  } else if (userChoice === "rock" && computerChoice === "scissors"){
    return "user wins";
  } else if (userChoice === "rock" && computerChoice === "paper"){
    return "computer wins";
  } else if (userChoice === "rock" && computerChoice === "lizard"){
    return "user wins";
  } else if (userChoice === "rock" && computerChoice === "spock"){
    return "computer wins";

  } else if (userChoice === "paper" && computerChoice === "scissors"){
    return "computer wins";
  } else if (userChoice === "paper" && computerChoice === "rock"){
    return "user wins";
  } else if (userChoice === "paper" && computerChoice === "lizard"){
    return "computer wins";
  } else if (userChoice === "paper" && computerChoice === "spock"){
    return "user wins";

  } else if (userChoice === "scissors" && computerChoice === "paper"){
    return "user wins";
  } else if (userChoice === "scissors" && computerChoice === "rock"){
    return "computer wins";
  } else if (userChoice === "scissors" && computerChoice === "lizard"){
    return "user wins";
  } else if (userChoice === "scissors" && computerChoice === "spock"){
    return "computer wins";

  } else if (userChoice === "lizard" && computerChoice === "paper"){
    return "user wins";
  } else if (userChoice === "lizard" && computerChoice === "rock"){
    return "computer wins";
  } else if (userChoice === "lizard" && computerChoice === "scissors"){
    return "computer wins";
  } else if (userChoice === "lizard" && computerChoice === "spock"){
    return "user wins";

  } else if (userChoice === "spock" && computerChoice === "paper"){
    return "computer wins";
  } else if (userChoice === "spock" && computerChoice === "rock"){
    return "user wins";
  } else if (userChoice === "spock" && computerChoice === "scissors"){
    return "user wins";
  } else if (userChoice === "spock" && computerChoice === "lizard"){
    return "computer wins";

  } else {
    return "end"
  }
} //closes compare function

document.write("Computer chose: " + computerChoice + "<br>");
document.write(play(userChoice, computerChoice));
