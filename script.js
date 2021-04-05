let userScore = 0;
let compScore = 0;
const userScore_span = document.getElementById("user-score");
const compScore_span = document.getElementById("comp-score");
const scoreBoard_div = document.querySelector(".score-board");
const result_p = document.querySelector(".result > p");
const rock_div = document.getElementById("rock");
const paper_div = document.getElementById("paper");
const scissors_div = document.getElementById("scissors");
const outcomeObj = {'r': 'Rock', 'p': 'Paper', 's': 'Scissors'}

function win(user, comp) {
	const userChoice_div = document.getElementById(outcomeObj[user].toLowerCase())
	
	userScore++;
	userScore_span.innerHTML = userScore;
	result_p.innerHTML = `${outcomeObj[user]} beats ${outcomeObj[comp]}. You win!`;
	userChoice_div.classList.add('green-glow');
	setTimeout(() => userChoice_div.classList.remove('green-glow'), 400)
};


function lose(user, comp) {
	const userChoice_div = document.getElementById(outcomeObj[user].toLowerCase())

	compScore++;
	compScore_span.innerHTML = compScore;
	result_p.innerHTML = `${outcomeObj[comp]} beats ${outcomeObj[user]}. You lose.`;
	userChoice_div.classList.add('red-glow');
	setTimeout(() => userChoice_div.classList.remove('red-glow'), 400)
};


function draw(user) {
	const userChoice_div = document.getElementById(outcomeObj[user].toLowerCase())

	result_p.innerHTML = `Both played ${outcomeObj[user]}. It's a draw.` 
	userChoice_div.classList.add('grey-glow');
	setTimeout(() => userChoice_div.classList.remove('grey-glow'), 400)
}


function getCompChoice() {
	const choices = ['r', 'p', 's'];
	var compChoiceNum = Math.floor(Math.random() * 3);
	return choices[compChoiceNum];
};


function game(userChoice) {
	const compChoice = getCompChoice();
	switch (userChoice + compChoice) {
		case 'rs': 
		case 'pr':
		case 'sp':
			win(userChoice, compChoice);
			break;
		
		case 'rp':
		case 'ps':
		case 'sr':
			lose(userChoice, compChoice);
			break;

		case 'rr':
		case 'pp':
		case 'ss':
			draw(userChoice);
			break;
	}
};


function main() {
	rock_div.addEventListener("click", () => game("r"));
	paper_div.addEventListener("click", () => game("p"));
	scissors_div.addEventListener("click", () => game("s"));
};

main();
