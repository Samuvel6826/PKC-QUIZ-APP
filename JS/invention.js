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
        question: "1. Which company invented the first floppy disk?",
        choices: ["A. Samsung", "B. Sony", "C. Dell", "D. IBM"],
        answer: "D. IBM"
    },
    {
        question: "2. Who is the father Of Computer science?",
        choices: ["A.Allen Turing"],
        answer: "A.Allen Turing"
    },
    {
        question: "3. Who is the father of personal computer? ",
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
    {
        question: "6. What was the invention of Gene Dolgoff?",
        choices: ["A. LCD television", "B. LCD projector", "C. LCD Printer", "D. LCD"],
        answer: "B. LCD projector"
    },
    {
        question: "7. Who invented Compact Disc?",
        choices: ["A. James T. Russell", "B. Fujio Masuoka", "C. Thomas Edison", "D. Martin Cooper"],
        answer: "A. James T. Russell"
    },
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
    //     question: `11. Who is considered the “father of computer science”?`,
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
    //     question: "15. What year was the first message sent over the ARPANET, the precursor to the internet?",
    //     choices: ["A. 1957", "B. 1969", "C. 1976", "D. 1983"],
    //     answer: "B. 1969"
    // }
    // ,
    // {
    //     question: "16. Who developed the first graphical user interface (GUI) and computer mouse?",
    //     choices: ["A. Douglas Engelbart", "B. Tim Berners-Lee", "C. Steve Jobs", "D. Charles Babbage"],
    //     answer: "A. Douglas Engelbart"
    // }
    // ,
    // {
    //     question: "17. When was the World Wide Web (WWW) invented by Tim Berners-Lee?",
    //     choices: ["A. 1979", "B. 1985", "C. 1989", "D. 1995"],
    //     answer: "C. 1989"
    // }
    // ,
    // {
    //     question: "18. Who founded Apple Inc. along with Steve Wozniak and Ronald Wayne?",
    //     choices: ["A. Steve Jobs", "B. Bill Gates", "C. Tim Cook", "D. Mark Zuckerberg"],
    //     answer: "A. Steve Jobs "
    // }
    // ,
    // {
    //     question: "19. When did Intel release the first microprocessor, the 4004?",
    //     choices: ["A. 1965", "B. 1971", "C. 1980", "D. 1990"],
    //     answer: "B. 1971"
    // }
    // ,
    // {
    //     question: "20. What year did the first commercial computer, UNIVAC I, become operational?",
    //     choices: ["A. 1941", "B. 1951", "C. 1961", "D. 1971"],
    //     answer: "B. 1951"
    // }
    //  ,
    // {
    //     question: "21. When was the release of the first widely popular personal computer, the IBM PC?",
    //     choices: ["A. 1965", "B. 1976", "C. 1981", "D. 1990"],
    //     answer: "C. 1981"
    // }
    //  ,
    // {
    //     question: "22. Who coined the term “artificial intelligence?",
    //     choices: ["A. Alan Turing", "B. John McCarthy", "C. Grace Hopper", "D. John Backus"],
    //     answer: "B. John McCarthy "
    // }
    //  ,
    // {
    //     question: "23. What year did Microsoft release its first version of Windows?",
    //     choices: ["A. 1980", "B. 1985", "C. 1990", "D. 1995"],
    //     answer: " B. 1985 "
    // }
    //  ,
    // {
    //     question: "24. When was the introduction of the first computer mouse by Douglas Engelbart?",
    //     choices: ["A. 1956", "B. 1964", "C. 1973", "D. 1980"],
    //     answer: "B. 1964 "
    // }
    //  ,
    // {
    //     question: "25. Who is known for creating the first programming language, the “Assembly for UNIVAC I?",
    //     choices: ["A. Alan Turing", "B. Grace Hopper", "C. John Backus", "D. John von Neumann"],
    //     answer: "B. Grace Hopper "
    //  }


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
    // shuffleQuestions();
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
    }
    
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
        window.location.href = "../Rules HTML/abbreviation rules.html"  // REDIRECT
    }
    else {
        displayAlert(`${quiz[currentQuestionIndex].answer} is the Correct Answer`);
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
    }
  });