const container = document.querySelector('.container');
const questionBox = document.querySelector('.question');
const nextBtn = document.querySelector('.nextBtn');
nextBtn.style.display = "none";
const alert = document.querySelector('.alert');
const alertBox = document.querySelector("#alert-container")
const startBtn = document.querySelector('.startBtn');
const timer = document.querySelector('.timer');
timer.style.display = "none";
let picture = document.querySelector("#picture")
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
        question: "../Logo Presentation/Slide2.jpeg",
        answer: "C. James T. Russell"
    },
    {
        question: "../Logo Presentation/Slide3.jpeg",
        answer: "C. James T. Russell"
    },
    {
        question: "../Logo Presentation/Slide4.jpeg",
        answer: "C. James T. Russell"
    },
    {
        question: "../Logo Presentation/Slide5.jpeg",
        answer: "C. James T. Russell"
    },
    {
        question: "../Logo Presentation/Slide6.jpeg",
        answer: "C. James T. Russell"
    }
];

// Making Variables
let currentQuestionIndex = 0;
let score = 0;
let quizOver = false;
let timeLeft = 15;
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
    timeLeft = 15;
    timer.style.display = "flex";
    currentQuestionIndex = 0;
    showQuestions();
}

// Arrow Function to Show Questions
const showQuestions = () => {
    const questionDetails = quiz[currentQuestionIndex];
    picture.setAttribute("src", questionDetails.question)
    
    if(currentQuestionIndex < quiz.length){                   
        timeLeft = 15;                                              // SAM
        startTimer();
    }

    }

nextBtn.addEventListener('click', () => {
    if (quizOver) {
        window.location.href="../Rules HTML/rapid rules.html"  // REDIRECT
    }
    else {
         checkAnswer();
         
    }
});

// Function to check answers
const checkAnswer = () => {
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
        displayAlert(`${quiz[currentQuestionIndex].answer} is the Correct Answer`);
        wrong.play()
        checkAnswer();
    }
  });