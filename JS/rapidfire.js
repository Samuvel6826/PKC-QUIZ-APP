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
        question: `1. What technology helps make telephone calls over the Internet possible?<br>2. Shell is the exclusive feature of?<br>3. The key combination for activating the start menu<br>4. What is IMEI?<br>5.	Who is known as the Human Computer of India?`,
        answer: `VoIP<br>Unix<br>Ctrl+Esc<br>International Mobile Equipment Identity<br>Shakunthala Devi`
    },
    {
        question: `1. Email was developed by......?<br>2. What is the expanded form of CMOS?<br>3.	In which year Microsoft Office was launched<br>4. The keyboard shortcut to Open the properties window for the selected icon or program<br>5. Tic-Tac-Toe is a 
        First?`,
        answer: `Raymond Samuel Tomlinson (Ray Tomlinson)<br>Complementary Metal Oxide Semoconductor<br>1989<br>Alt + Enter<br>graphical game`
    },
    {
        question: `1. Which IT company's nickname is ' The Big Blue '?<br>2. J2EE stands for?<br>3.	Function key used to renaming the selected icon<br>4. The printing speed is around ___ characters per second in dot matrix printer.<br>5. The Backbone of the computer ?`,
        answer: `IBM<br>Java 2 Platform Enterprise Edition<br>F2<br>3000<br>Mother Board`
    },
    {
        question: `1. function key to take a screenshot of the current page ' The Big Blue '?<br>2. Central Processing Unit in a computer consists of which major components?<br>3.	A computer program that functions as an intermediary between a computer user and the computer hardware is called?<br>4. Python allows using the popular data interchange format called JSON. What does JSON stand for?<br>5. Which of the following is NOT a text editor used for programming?`,
        answer: `Alt+print Screen<br>ALU, Control Unit, and Registers<br>operating system<br>JavaScript Object Notation<br>Rocket`
    },
    {
        question: `1. Which among the following is the fastest memory in a computer that holds information?' The Big Blue '?<br>2. The process of finding errors/defects/bugs in the software program is called?<br>3.	Which of the following is the correct full form of JPEG?<br>4. The first mechanical calculator was called ______?<br>5. In MS-Excel, which of the following keyboard shortcuts is used to select the current and next sheet(s) in a worksheet?`,
        answer: `Register<br>Testing<br>Joint Photographic Experts Group<br>Pascaline<br>Ctrl + Shift + Page Down`
    },
    {
        question: `1. A device provides surge protection and battery backup power during a power outage?' The Big Blue '?<br>2. In terms of network what is meaning of SAP?<br>3.	To close a selected drop-down list; cancel a command and close a dialog box use_____?<br>4. 3.	What is full form of BMP ?<br>5. 2.	Application software is developed to accomplish?`,
        answer: `UPS<br>Service Access Point<br>ESC KEY<br>Bit map<br>real-world tasks`
    },
];

// Making Variables
let currentQuestionIndex = 0;
let quizOver = false;
let timeLeft = 30;
let timeLeft2 = 60;
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
    timeLeft = 30;
    timer.style.display = "flex";
    currentQuestionIndex = 0;
    showQuestions();
}

// Arrow Function to Show Questions
const showQuestions = () => {
    const questionDetails = quiz[currentQuestionIndex];
    questionBox.innerHTML = questionDetails.question;
    
    if(currentQuestionIndex < quiz.length){   
        timeLeft = 30                                                              // SAM
        startTimer();
    }
}

nextBtn.addEventListener('click', () => {
    if (quizOver) {
        window.location.href="../index.html"  // REDIRECT
    }
    else {
        correct.play()
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
    displayAlert("You have completed this quiz!");
    nextBtn.textContent = "Go to Home";
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
            stopTimer();
            questionBox.innerHTML = ""                                                        
            displayAlert("Timeout!");
            timeoutSound.play()
            startTimer2()
        }

    }
    timerID = setInterval(countDown, 1000);
}

// Function to Start Timer2
function startTimer2() {
    clearInterval(timerID); // Check for any exist timers
    timeLeft2 = 60
    timer.textContent = timeLeft2;

    function countDown() {
        timeLeft2--;
        timer.textContent = timeLeft2;
        if (timeLeft2 === 0) {
            stopTimer();
            displayAlert("Timeout!");
            timeoutSound.play()
            confirm("VIEW ANWSER?")
            if (confirm = true) {
                questionBox.innerHTML = quiz[currentQuestionIndex].answer
                stopTimer  
            }
        }
    }
    timerID = setInterval(countDown, 1000);
}

// Function to Stop Timer
const stopTimer = () =>{
    clearInterval(timerID);
}