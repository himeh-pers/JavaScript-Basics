const firstName = "Johnmer"
const lastName = "Rabaya"
let age = 21

console.log(firstName + " " + lastName + ", " + age)

function getUserChoice()
{
    let answer = document.getElementById("userInput").value

    if(answer == null)
    {
        answer = "null"
    }

    return answer.toLowerCase()
}

function getComputerChoice()
{
    let computerResult = ""

    let comChoice = Math.floor(Math.random() * 3)

    if(comChoice == 0)
    {
        computerResult = "Rock"
    }
    else if(comChoice == 1)
    {
        computerResult = "Paper"
    }
    else if(comChoice == 2)
    {
        computerResult = "Scissors"
    }
    else{
        computerResult = "Error: No choices. |  By default: You win"
    }

    return computerResult.toLowerCase()
}

let userScore = 0
let computerScore = 0
let rounds = 0

function playRound(userChoice, computerChoice)
{
    let state = "null"
    document.getElementById("output").textContent = "You: " + userChoice + " | Computer: " + computerChoice

    if(userChoice == computerChoice)
    {
        state = " D R A W "
    }
    else if (userChoice == "rock" && computerChoice == "paper" || 
             userChoice == "paper" && computerChoice ==  "scissors" ||
             userChoice == "scissors" && computerChoice == "rock" ||
             userChoice == "null")
    {
        state = "LOSE"
        computerScore += 1
    }
    else
    {
        state = "WIN"
        userScore += 1
    }
    document.getElementById("winState").textContent = state
    document.getElementById("scores").textContent = "YOU: " + userScore + " | COMPUTER: " + computerScore
}

function overallResult()
{
    playRound(getUserChoice(), getComputerChoice())
    rounds += 1
    document.getElementById("rounds").textContent = "Rounds: " + rounds + "/5"

    if(rounds == 5)
    {
        let finalState = " D R A W "

        if(userScore > computerScore)
        {
            finalState = "WIN"
        }
        else if(userScore < computerScore)
        {
            finalState = "LOSE"
        }
        
        document.getElementById("winState").textContent = "FINAL: " + finalState
        userScore = 0
        computerScore = 0
        rounds = 0
    }
}