const container = document.querySelector('.container');
const questionBox = document.querySelector('.question');
const choicesBox = document.querySelector('.choices');
const nextBtn = document.querySelector('.nextBtn');
nextBtn.style.display = "none";
const scoreCard = document.querySelector('.scoreCard');
const alert = document.querySelector('.alert');
const alertBox = document.querySelector("#alert-container")
const startBtn = document.querySelector('.startBtn');
const timer = document.querySelector('.timer');
timer.style.display = "none";
const correct = document.querySelector("#correct")
const wrong = document.querySelector("#wrong")
const hmbtn = document.querySelector(".homeBtn")

hmbtn.addEventListener('click', () => {
    window.location.href="../index.html"
});

const timeoutSound = document.querySelector("#timeoutSound")

// Make an array of objects that stores question, choices of question and answer
const quiz = [
    {
        question: "1. What are the two categories of software?",
        answer: "Application and System Software"
    },
    {
        question: "2. Which virus attaches itself directly to an (.exe) or a (.com) file and enters the device its execution?",
        answer: "Direct Action Virus"
    },
    {
        question: "3. Some software packages attempt to encode the knowledge and decision rules of human specialists in order to use them for making their own decisions. By what name are such packages known?",
        answer: "Expert system"
    },
    {
        question: "4. ______ is a malicious program that executes when a certain criterion is met or a certain file is accessed or when a certain key combination is pressed?",
        answer: "Logic Bomb"
    },
    {
        question: "5. A software which is freely available on the internet for users and with source code for enabling further enhancements by developers is called",
        answer: "Open Source Software"
    },
    {
        question: "6. What is the name of the software system which combines many independent functions into one packages?",
        answer: "Integrated System"
    },
    {
        question: "7. Program which is readily available for computer users as a part of software package is classified as?",
        answer: "Library Program"
    },
    {
        question: "8. Function of running and loading programs by use of peripherals is function of?",
        answer: "Operating System"
    },
    {
        question: "9. _____ is the fraudulant act of acquiring private and sensitive information. Such as credit card numbers, personal identification and account usernames and passwords?",
        answer: "Pishing"
    },
    {
        question: "10. In DASD. What is the full from of A?",
        answer: "Access"
    },
    {
        question: "11. Programming language Java was developed by?",
        answer: "James Gosling"
    },
    {
        question: "12. _______ is a software program that travels the web locating and indexing websites for search engines",
        answer: "Spider"
    },
    {
        question: "13. A program that infects other programs by modifying them is known as?",
        answer: "Virus"
    },
    {
        question: "14. ______ allots memory for each program and frees memory when it is no longer needed for a program",
        choices: ["A. Switch mode Transfer Programming", "B. Switch mode Transfer Protocol ", "C. Simple Mail Transfer Prortocol", "D. Simple Main Transfer Prortocol"],
        answer: "Operating System"
    }
    ,
    {
        question: "15. The software tools that enable a user to interact with a computer for specific purposes are known as?",
        answer: "ApplicationsA. Multiple Document Interface"
    }
];

// Making Variables
let currentQuestionIndex = 0;
let score = 0;
let quizOver = false;
let timeLeft = 25;
let timerID = null;

// Adding Event Listener to Start Button
startBtn.addEventListener('click', ()=> {
    startBtn.style.display = "none";
    nextBtn.style.display = "flex";
    container.style.display = "block";
    timer.style.display = "flex";
    startQuiz();
});

// Function to Start Quiz
const startQuiz = () => {
    timeLeft = 25;
    timer.style.display = "flex";
    // shuffleQuestions();
    currentQuestionIndex = 0;
    showQuestions();
}

// Arrow Function to Show Questions
const showQuestions = () => {
    const questionDetails = quiz[currentQuestionIndex];
    questionBox.textContent = questionDetails.question;

    // choicesBox.textContent = "";
    // for (let i = 0; i < questionDetails.choices.length; i++) {
        // const choiceDiv = document.createElement('div');
        // choiceDiv.textContent = currentChoice;
        // choiceDiv.classList.add('choice');
        // choicesBox.appendChild(choiceDiv);

        // choiceDiv.addEventListener('click', () => {
        //     if (choiceDiv.classList.contains('selected')) {
        //         choiceDiv.classList.remove('selected');
        //     }
        //     else {
        //         choiceDiv.classList.add('selected');
        //             const selectedChoice = document.querySelector('.choice.selected');                         // SAM
        //             if (selectedChoice) {
        //                 checkAnswer()
        //             }
        //     }
        // });
    // }
    
    if(currentQuestionIndex < quiz.length){                                                                 // SAM
        startTimer();
    }
}

nextBtn.addEventListener('click', () => {
    // const selectedChoice = document.querySelector('.choice.selected');
    // if (!selectedChoice && nextBtn.textContent === "Next") {
    //     // alert("Select your answer");            
    //     displayAlert("Select your answer");
    //     return;
    // }
    if (quizOver) {
        window.location.href = "../Rules HTML/hardware rules.html"  // REDIRECT
    }
    else {
        correct.play()
        checkAnswer();
    }
});

// Function to check answers
const checkAnswer = () => {
    // const selectedChoice = document.querySelector('.choice.selected');
    // console.log(selectedChoice.textContent)  
    // if (selectedChoice.textContent === quiz[currentQuestionIndex].answer) {
    //     // alert("Correct Answer!");       
    //     displayAlert("Correct Answer!");
    //     correct.play()
    //     score++;
    // }
    // else {
    //     // alert("Wrong answer");                                                                                   
    //     displayAlert(`Wrong Answer! ${quiz[currentQuestionIndex].answer} is the Correct Answer`);
    //     wrong.play()
    // }
    timeLeft = 25;
    currentQuestionIndex++;
    if (currentQuestionIndex < quiz.length) {
        showQuestions();
    }
    else {
        stopTimer();
        showScore();
    }
}

// Function to Show Alert                                   // Function to Show Alert
const displayAlert = (msg) => {
    alertBox.style.display = "block";
    alert.textContent = msg;
    setTimeout(()=>{
        alertBox.style.display = "none";
    }, 2000);
}

// Function to show score
const showScore = () => {
    // questionBox.textContent = "";
    // choicesBox.textContent = "";
    // scoreCard.textContent = `You Scored ${score} out of ${quiz.length}!`;
    displayAlert("You have completed this quiz!");
    nextBtn.textContent = "Next Round";
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
        if (timeLeft === 0) {
            stopTimer();                                                            // SAM 
            displayAlert("Timeout!");
            timeoutSound.play()
            questionBox.innerHTML = quiz[currentQuestionIndex].answer
        }

    }
    timerID = setInterval(countDown, 1000);
}

// Function to Stop Timer
const stopTimer = () =>{
    clearInterval(timerID);
}

document.addEventListener("keyup", (event) => {
    if (event.key=="j") {
        // displayAlert(`${quiz[currentQuestionIndex].answer} is the Correct Answer`);
        wrong.play()
        // checkAnswer();
        console.log(event.key)
    }
  });