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

// Make an array of objects that stores question, choices of question and answer
const quiz = [
    {
        question: "../Logo Images/Pic1-VIMEO.jpg",
        answer: "Vimeo"
    },
    {
        question: "../Logo Images/Pic2-REDDIT.jpg",
        answer: "Reddit"
    },
    {
        question: "../Logo Images/Pic3-EBAY.jpg",
        answer: "ebay"
    },
    {
        question: "../Logo Images/Pic4-TEXAS INSTRUMENTS.jpg",
        answer: "Texas Instruments"
    },
    {
        question: "../Logo Images/Pic5-CISCO.jpg",
        answer: "Cisco"
    },
    {
        question: "../Logo Images/Pic6-CANON.jpg",
        answer: "Canon"
    },
    {
        question: "../Logo Images/Pic7-WIKIPEDIA.jpg",
        answer: "Wikipedia"
    },
    {
        question: "../Logo Images/Pic8-JVC.jpg",
        answer: "JVC"
    },
    {
        question: "../Logo Images/Pic9-TUMBLR.jpg",
        answer: "tumblr"
    },
    {
        question: "../Logo Images/Pic10-ATARI.jpg",
        answer: "ATARI"
    },
    {
        question: "../Logo Images/Pic11-DELL.jpg",
        answer: "DELL"
    },
    {
        question: "../Logo Images/Pic12-NVIDIA.jpg",
        answer: "NVIDIA"
    },
    {
        question: "../Logo Images/Pic13-XEROX.jpg",
        answer: "XEROX"
    },
    {
        question: "../Logo Images/Pic14-HUAWEI.jpg",
        answer: "HUAWEI"
    },
    {
        question: "../Logo Images/Pic15-ADOBE.jpg",
        answer: "ADOBE"
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
    currentQuestionIndex = 0;
    showQuestions();
}

// Arrow Function to Show Questions
const showQuestions = () => {
    const questionDetails = quiz[currentQuestionIndex];
    picture.setAttribute("src", questionDetails.question)
    
    if(currentQuestionIndex < quiz.length){                   
                                                 // SAM
        startTimer();
    }

    }

nextBtn.addEventListener('click', () => {
    if (quizOver) {
        window.location.href="../Rules HTML/connexion rules.html"  // REDIRECT
    }
    else {
         checkAnswer();
    }
});

// Function to check answers
const checkAnswer = () => {
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
        // checkAnswer();
        console.log(event.key)
    }
  });