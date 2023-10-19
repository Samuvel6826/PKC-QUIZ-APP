const container = document.querySelector('.container');
const questionBox = document.querySelector('.question');
const nextBtn = document.querySelector('.nextBtn');
nextBtn.style.display = "none";
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
        question: "1. Which company invented the first floppy disk?",
        choices: ["A. Samsung", "B. Sony", "C. Dell", "D. IBM"],
        answer: "IBM"
    },
    {
        question: "2. Who is the father Of Computer science?",
        choices: ["A.Allen Turing"],
        answer: "Allen Turing"
    },
    {
        question: "3. Who is the father of personal computer? ",
        choices: ["A. Edward Robert"],
        answer: "Edward Robert"
    },
    {
        question: "4. Who invented Compact Disc?",
        choices: ["A. Fujio Masuoka", "B. Thomas Edison", "C. James T. Russell", "D. Martin Cooper"],
        answer: "James T. Russell"
    },
    {
        question: `5. Who invented the high level language"C"?`,
        choices: ["A. Dennis M. Ritchie"],
        answer: "Dennis M. Ritchie"
    },
    {
        question: "6. What was the invention of Gene Dolgoff?",
        choices: ["A. LCD television", "B. LCD projector", "C. LCD Printer", "D. LCD"],
        answer: "LCD projector"
    },
    {
        question: "7. Who invented Compact Disc?",
        choices: ["A. James T. Russell", "B. Fujio Masuoka", "C. Thomas Edison", "D. Martin Cooper"],
        answer: "James T. Russell"
    },
    {
        question: "8. Who invented the first 3D printer?",
        choices: ["A. Nick Holonyak", "B. Lord Kelvin", "C. Johannes Gutenberg", "D. Chuck Hull"],
        answer: "Chuck Hull"
    },
    {
        question: "9. What was the invention of Norman Joseph Woodland?",
        choices: ["A. QR code", "B. Genetic code", "C. Morse code", "D. Barcode"],
        answer: "Barcode"
    },
    {
        question: "10. Who invented the computer mouse?",
        choices: ["A. Alan Kay", "B. Tim Berners-Lee", "C. Ivan Sutherland", "D. Doulas Engelbart"],
        answer: "Doulas Engelbart"
    },
    {
        question: "11. Who Developed Perl programming language in 1987",                  
        answer: "Larry Wall"
    },
    {
        question: "12. What was the first programmable mechanical computer?",
        choices: ["A. ENIAC", "B. UNIVAC I", "C. Analytical Engine", "D. Z3"],
        answer: "Analytical Engine"
    },
    {
        question: "13. When was the first electronic digital computer, ENIAC, completed?",
        choices: ["A. 1936 ", "B. 1945", "C. 1951 ", "D. 1960"],
        answer: "1945"
    },
    {
        question: "14. Who co-invented the first high-level programming language, Fortran?",
        choices: ["A. Alan Turing ", "B. Grace Hopper ", "C. John Backus", "D. John von Neumann"],
        answer: "John Backus"
    }
    ,
    {
        question: "15. In Which year was the first message sent over the ARPANET, the precursor to the internet?",
        choices: ["A. 1957", "B. 1969", "C. 1976", "D. 1983"],
        answer: "1969"
    }
    // ,
    // {
    //     question: "16. Who developed the first graphical user interface (GUI) and computer mouse?",
    //     choices: ["A. Douglas Engelbart", "B. Tim Berners-Lee", "C. Steve Jobs", "D. Charles Babbage"],
    //     answer: "Douglas Engelbart"
    // }
    // ,
    // {
    //     question: "17. When was the World Wide Web (WWW) invented by Tim Berners-Lee?",
    //     choices: ["A. 1979", "B. 1985", "C. 1989", "D. 1995"],
    //     answer: "1989"
    // }
    // ,
    // {
    //     question: "18. Who founded Apple Inc. along with Steve Wozniak and Ronald Wayne?",
    //     choices: ["A. Steve Jobs", "B. Bill Gates", "C. Tim Cook", "D. Mark Zuckerberg"],
    //     answer: "Steve Jobs"
    // }
    // ,
    // {
    //     question: "19. When did Intel release the first microprocessor, the 4004?",
    //     choices: ["A. 1965", "B. 1971", "C. 1980", "D. 1990"],
    //     answer: "1971"
    // }
    // ,
    // {
    //     question: "20. In Which year did the first commercial computer, UNIVAC I, become operational?",
    //     choices: ["A. 1941", "B. 1951", "C. 1961", "D. 1971"],
    //     answer: "1951"
    // }
    //  ,
    // {
    //     question: "21. When was the release of the first widely popular personal computer, the IBM PC?",
    //     choices: ["A. 1965", "B. 1976", "C. 1981", "D. 1990"],
    //     answer: "1981"
    // }
    //  ,
    // {
    //     question: "22. Who coined the term “artificial intelligence?",
    //     choices: ["A. Alan Turing", "B. John McCarthy", "C. Grace Hopper", "D. John Backus"],
    //     answer: "John McCarthy"
    // }
    //  ,
    // {
    //     question: "23. In Which year did Microsoft release its first version of Windows?",
    //     choices: ["A. 1980", "B. 1985", "C. 1990", "D. 1995"],
    //     answer: "1985"
    // }
    //  ,
    // {
    //     question: "24. When was the introduction of the first computer mouse?",
    //     choices: ["A. 1956", "B. 1964", "C. 1973", "D. 1980"],
    //     answer: "1964"
    // }
    //  ,
    // {
    //     question: "25. Who is known for creating the first programming language, the “Assembly for UNIVAC I?",
    //     choices: ["A. Alan Turing", "B. Grace Hopper", "C. John Backus", "D. John von Neumann"],
    //     answer: "Grace Hopper"
    //  }
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
    questionBox.textContent = questionDetails.question;
    
    if(currentQuestionIndex < quiz.length){                                                                 // SAM
        startTimer();
    }
}

nextBtn.addEventListener('click', () => {
    if (quizOver) {
        window.location.href = "../Rules HTML/abbreviation rules.html"  // REDIRECT
    }
    else {
        correct.play()
        checkAnswer();
    }
});

// Function to check answers
const checkAnswer = () => {
    timeLeft = 15;
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