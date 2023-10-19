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
        question: "../Connexions Images/Pic1-Graphics Card.jpg",
        answer: "Graphics Card"
    },
    {
        question: "../Connexions Images/Pic2-Block Chain.jpg",
        answer: "Block Chain"
    },
    {
        question: "../Connexions Images/Pic3-Binary Tree.jpg",
        answer: "Binary Tree"
    },
    {
        question: "../Connexions Images/Pic4-Computer Architecture.jpg",
        answer: "Computer Architecture"
    },
    {
        question: "../Connexions Images/Pic5-Web Server.jpg",
        answer: "Web Server"
    },
    {
        question: "../Connexions Images/Pic6-Cache Memory.jpg",
        answer: "Cache Memory"
    },
    {
        question: "../Connexions Images/Pic7-Neural Network.jpg",
        answer: "Neural Network"
    },
    {
        question: "../Connexions Images/Pic8-Dark Web.jpg",
        answer: "Dark Web"
    },
    {
        question: "../Connexions Images/Pic9-Deep learning.jpg",
        answer: "Deep learning"
    },
    {
        question: "../Connexions Images/Pic10-Heap Sort.jpg",
        answer: "Heap Sort"
    },
    {
        question: "../Connexions Images/Pic11-Phishing.jpg",
        answer: "Phishing"
    },
    {
        question: "../Connexions Images/Pic12-Num Py.jpg",
        answer: "Num Py"
    },
    {
        question: "../Connexions Images/Pic13-Hash Map.jpg",
        answer: "Hash Map.jpg"
    },
    {
        question: "../Connexions Images/Pic14-Mongo DB.jpg",
        answer: "Mongo DB"
    },
    {
        question: "../Connexions Images/Pic15-Dot Net.jpg",
        answer: "Dot Net"
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
        console.log(event.key)
        // checkAnswer();
    }
  });