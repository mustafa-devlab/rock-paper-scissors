console.log("Welcome to rock, paper, scissors!")

function getComputerChoice() {

    let num = Math.random()

    if (num <= 0.33) {
        return "rock"
    }

    if (num <= 0.67) {
        return "paper"
    }

    if (num <= 1) {
        return "scissors"
    }

}

function getHumanChoice() {

    let choice = prompt("Choose")
    choice = choice.toLowerCase()
    return choice

}

function playGame() {

    let humanScore = 0
    let computerScore  = 0

    function playRound(hchoice, cchoice) {

            if ((hchoice === "rock" && cchoice === "scissors") || (hchoice === "paper" && cchoice === "rock") || (hchoice === "scissors" && cchoice === "paper")) {

               console.log("You Win! " + hchoice + " beats " + cchoice + "!")
               ++humanScore

            }

            else if (hchoice === cchoice) {

              console.log("Tied!")

            }

            else {

               console.log("You Lose! " + cchoice + " beats " + hchoice + "!")
               ++computerScore
            }

       }

    for (let i = 0; i < 5; i++) {

        let cchoice = getComputerChoice()

        let hchoice = getHumanChoice()

        console.log("You chose " + hchoice)

        console.log("Computer chose " + cchoice)

       playRound(hchoice, cchoice)

    }

    console.log("Your Score: " + humanScore)
    console.log("Computer Score: " + computerScore)
    if (humanScore > computerScore) {
        console.log("You won the game!")
    }
    if (computerScore > humanScore) {
        console.log("You lost the game!")
    }

}

playGame()