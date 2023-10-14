const container = document.querySelector('.container');
const questionBox = document.querySelector('.question');
const choicesBox = document.querySelector('.choices');
const nextBtn = document.querySelector('.nextBtn');
const scoreCard = document.querySelector('.scoreCard');
const alert = document.querySelector('.alert');
const startBtn = document.querySelector('.startBtn');
const timer = document.querySelector('.timer');



// Make an array of objects that stores question, choices of question and answer
const quiz = [
    {
        question: "Which of the following is not a CSS box model property?",
        choices: ["A. margin", "B. padding", "C. border-radius", "D. border-collapse"],
        answer: "border-collapse"
    },
    {
        question: "Which of the following is not a valid way to declare a function in JavaScript?",
        choices: ["A. function myFunction() {}", "B. let myFunction = function() {};", "C. myFunction: function() {}", "D. const myFunction = () => {};"],
        answer: "myFunction: function() {}"
    },
    {
        question: "Which of the following is not a JavaScript data type?",
        choices: ["A. string", "B. boolean", "C. object", "D. float"],
        answer: "float"
    },
    {
        question: "What is the purpose of the this keyword in JavaScript?",
        choices: ["A. It refers to the current function.", "B. It refers to the current object.", "C. It refers to the parent object.", "D. It is used for comments."],
        answer: "It refers to the current object."
    }
];

// Making Variables
let currentQuestionIndex = 0;
let score = 0;
let quizOver = false;
let timeLeft = 10;
let timerID = null;

// Adding Event Listener to Start Button
startBtn.addEventListener('click', ()=> {
    startBtn.style.display = "none";
    container.style.display = "block";
    startQuiz();
});

// Function to Start Quiz
const startQuiz = () => {
    timeLeft = 10;
    timer.style.display = "flex";
    shuffleQuestions();
}

// Function to shuffle question
const shuffleQuestions = () =>{
    for(let i=quiz.length-1; i>0; i--){
        const j = Math.floor(Math.random() * (i+1));
        [quiz[i], quiz[j]] = [quiz[j], quiz[i]];
    }
    currentQuestionIndex = 0;
    showQuestions();
}

// Arrow Function to Show Questions
const showQuestions = () => {
    const questionDetails = quiz[currentQuestionIndex];
    questionBox.textContent = questionDetails.question;

    choicesBox.textContent = "";
    for (let i = 0; i < questionDetails.choices.length; i++) {
        const currentChoice = questionDetails.choices[i];
        const choiceDiv = document.createElement('div');
        choiceDiv.textContent = currentChoice;
        choiceDiv.classList.add('choice');
        choicesBox.appendChild(choiceDiv);

        choiceDiv.addEventListener('click', () => {
            if (choiceDiv.classList.contains('selected')) {
                choiceDiv.classList.remove('selected');
            }
            else {
                choiceDiv.classList.add('selected');
                    const selectedChoice = document.querySelector('.choice.selected');                         // SAM
                    if (selectedChoice) {
                        checkAnswer()
                    }
            }
        });
    }
    
    // if(currentQuestionIndex < quiz.length){                                                                 // SAM
    //     startTimer();
    // }
}

nextBtn.addEventListener('click', () => {
    const selectedChoice = document.querySelector('.choice.selected');
    if (!selectedChoice && nextBtn.textContent === "Next") {
        // alert("Select your answer");
        displayAlert("Select your answer");
        return;
    }
    if (quizOver) {
        nextBtn.textContent = "Next";
        scoreCard.textContent = "";
        currentQuestionIndex = 0;
        quizOver = false;
        score = 0;
        startQuiz();
    }
    else {
        checkAnswer();
    }
});

// Function to check answers
const checkAnswer = () => {
    const selectedChoice = document.querySelector('.choice.selected');
    if (selectedChoice.textContent === quiz[currentQuestionIndex].answer) {
        // alert("Correct Answer!");
        displayAlert("Correct Answer!");
        score++;
    }
    else {
        // alert("Wrong answer");
        displayAlert(`Wrong Answer! ${quiz[currentQuestionIndex].answer} is the Correct Answer`);
    }
    timeLeft = 10;
    currentQuestionIndex++;
    if (currentQuestionIndex < quiz.length) {
        showQuestions();
    }
    else {
        stopTimer();
        showScore();
    }
}

// Function to Show Alert
const displayAlert = (msg) => {
    alert.style.display = "block";
    alert.textContent = msg;
    setTimeout(()=>{
        alert.style.display = "none";
    }, 2000);
}

// Function to show score
const showScore = () => {
    questionBox.textContent = "";
    choicesBox.textContent = "";
    scoreCard.textContent = `You Scored ${score} out of ${quiz.length}!`;
    displayAlert("You have completed this quiz!");
    nextBtn.textContent = "Play Again";
    quizOver = true;
    timer.style.display = "none";
}

// Function to Start Timer
function startTimer() {
    clearInterval(timerID); // Check for any exist timers
    timer.textContent = timeLeft;

    function countDown() {
        timeLeft--;
        timer.textContent = timeLeft;
        // if(timeLeft === 0){                                                                  
        //     const confirmUser = confirm("Time Up!!! Do you want to play the quiz again");
        //     if(confirmUser){
        //         timeLeft = 10;
        //         startQuiz();
        //     }
        //     else{
        //         startBtn.style.display = "block";
        //         container.style.display = "none";
        //         return;
        //     }
        // }
        if (timeLeft === 0) {
            stopTimer();                                                            // SAM 
            displayAlert("Timeout!");
        }

    }
    timerID = setInterval(countDown, 1000);
}

// Function to Stop Timer
const stopTimer = () =>{
    clearInterval(timerID);
}
