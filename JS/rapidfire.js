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



// Make an array of objects that stores question, choices of question and answer
const quiz = [
    {
        question: `1. Which company invented the first floppy disk?<br>2. Who is the father Of Computer science?<br>3. Who is the father of personal computer?`,
        choices: ["A. Samsung", "B. Sony", "C. Dell", "D. IBM"],
        answer: "D. IBM"
    },
    {
        question: "2. Who is the father Of Computer science?",
        choices: ["A.Allen Turing"],
        answer: "A.Allen Turing"
    },
    {
        question: "3. Who is the father of personal computer?",
        choices: ["A. Edward Robert"],
        answer: "A. Edward Robert"
    },
    {
        question: "4. Who invented Compact Disc?",
        choices: ["A. Fujio Masuoka", "B. Thomas Edison", "C. James T. Russell", "D. Martin Cooper"],
        answer: "C. James T. Russell"
    },
    {
        question: `5. Who invented the high level language"C"?`,
        choices: ["A. Dennis M. Ritchie"],
        answer: "A. Dennis M. Ritchie"
    },
    // {
    //     question: "6. What was the invention of Gene Dolgoff?",
    //     choices: ["A. LCD television", "B. LCD projector", "C. LCD Printer", "D. LCD"],
    //     answer: "B. LCD projector"
    // },
    // {
    //     question: "7. Who invented Compact Disc?",
    //     choices: ["A. James T. Russell", "B. Fujio Masuoka", "C. Thomas Edison", "D. Martin Cooper"],
    //     answer: "A. James T. Russell"
    // },
    // {
    //     question: "8. Who invented the first 3D printer?",
    //     choices: ["A. Nick Holonyak", "B. Lord Kelvin", "C. Johannes Gutenberg", "D. Chuck Hull"],
    //     answer: "D. Chuck Hull"
    // },
    // {
    //     question: "9. What was the invention of Norman Joseph Woodland?",
    //     choices: ["A. QR code", "B. Genetic code", "C. Morse code", "D. Barcode"],
    //     answer: "D. Barcode"
    // },
    // {
    //     question: "10. Who invented the computer mouse?",
    //     choices: ["A. Alan Kay", "B. Tim Berners-Lee", "C. Ivan Sutherland", "D. Doulas Engelbart"],
    //     answer: "D. Doulas Engelbart"
    // },
    // {
    //     question: `11. Who is considered the “father of computer science”?`,                               // chg
    //     choices: ["A. Alan Turing", "B. Charles Babbage", "C. John von Neumann", "D. Tim Berners-Lee"],
    //     answer: "A. Alan Turing"
    // },
    // {
    //     question: "12. What was the first programmable mechanical computer?",
    //     choices: ["A. ENIAC", "B. UNIVAC I", "C. Analytical Engine", "D. Z3"],
    //     answer: "C. Analytical Engine"
    // },
    // {
    //     question: "13. When was the first electronic digital computer, ENIAC, completed?",
    //     choices: ["A. 1936 ", "B. 1945", "C. 1951 ", "D. 1960"],
    //     answer: "B. 1945"
    // },
    // {
    //     question: "14. Who co-invented the first high-level programming language, Fortran?",
    //     choices: ["A. Alan Turing ", "B. Grace Hopper ", "C. John Backus", "D. John von Neumann"],
    //     answer: "C. John Backus"
    // }
    // ,
    // {
    //     question: "15. In Which year was the first message sent over the ARPANET, the precursor to the internet?",
    //     choices: ["A. 1957", "B. 1969", "C. 1976", "D. 1983"],
    //     answer: "B. 1969"
    // }
];

// Making Variables
let currentQuestionIndex = 0;
let quizOver = false;
let timeLeft = 5;
let timeLeft2 = 15;
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
    timeLeft = 5;
    timer.style.display = "flex";
    currentQuestionIndex = 0;
    showQuestions();
}

// Arrow Function to Show Questions
const showQuestions = () => {
    const questionDetails = quiz[currentQuestionIndex];
    questionBox.innerHTML = questionDetails.question;
    
    if(currentQuestionIndex < quiz.length){   
        timeLeft = 5                                                              // SAM
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
            startTimer2()
        }

    }
    timerID = setInterval(countDown, 1000);
}

// Function to Start Timer2
function startTimer2() {
    clearInterval(timerID); // Check for any exist timers
    timeLeft2 = 15
    timer.textContent = timeLeft2;

    function countDown() {
        timeLeft2--;
        timer.textContent = timeLeft2;
        if (timeLeft2 === 0) {
            stopTimer();
            displayAlert("Timeout!");
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