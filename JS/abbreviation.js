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
        question: "1. MIPS?",
        choices: ["A. Millions of Instructions Per Second", "B. Millions of Instructions Per Speed", "C. Millions of Instructions Per Signal", "D. Millions of Instructions Per Symbol"],
        answer: "Millions of Instructions Per Second"
    },
    {
        question: "2. UHF?",
        choices: ["A. Very Intelligent Result Until Source", "B. Vital Information Resource Under Siege", "C. Viral Important Record User Searched", "D. Very Interchanged Resource Under Search"],
        answer: "Vital Information Resource Under Siege"
    },
    {
        question: "3. OpenGL?",
        choices: ["A. Serial Dynamic RAM", "B. Straight Dynamic RAM", "C. Surface Dynamic RAM", "D. Synchronous Dynamic RAM"],
        answer: "Synchronous Dynamic RAM"
    },
    {
        question: "4. GIS?",
        choices: ["A. Geographical International Studies", "B. Geographical Information Systems", "C. Global Institute for Soils", "D. Global Information Statistics"],
        answer: "Geographical Information Systems"
    },
    {
        question: "5. SNOBOL?",
        choices: ["A. Student Query Line", "B. Structured Question List", "C.Straight Query Language", "D. Structured Query Language"],
        answer: "Structured Query Language"
    },
    {
        question: "6. RIP?",
        choices: ["A. Downloading", "B. Uploading", "C. FTP", "D. JPEG"],
        answer: "Downloading"
    },
    {
        question: "7. SNAP?",
        choices: ["Common Basic Operating Language", "B. Computer Basic Oriented Language", "C. Computer Based Operating Language", "D. Common Business Oriented Language"],
        answer: "D. Common Business Oriented Language"
    },
    {
        question: "8. DOC?",
        choices: ["A. Printable New Graphic", "B. Printable New Graphical", "C. Port Natural Graphics", "D. Portable Network Graphics"],
        answer: "Portable Network Graphics"
    },
    {
        question: "9. HSDPA?",
        choices: ["A. TCP/IP", "B. UDP", "C. FTP", "D. www"],
        answer: "TCP/IP"
    },
    {
        question: "10. LLL?",
        choices: ["A. Primary", "B. Secondary", "C. Tertiary", "D. None of the above"],
        answer: "Secondary"
    },
    {
        question: "11. DNA?",
        choices: ["A. Joint Photography Exports Group", "B. Joint Pixel Experts Group", "C. Joint Photographic Experts Group", "D. Joint Pixel Exports Group"],
        answer: "Joint Photographic Experts Group"
    },
    {
        question: "12. In the context of computers. WORM is an acronym of?",
        choices: ["A. Write Once. Read Many", "B. Word On. RAM Memory", "C. Word Optical. Recognition Malware", "D. Wireless Operating. Read Module"],
        answer: "Write Once. Read Many"
    },
    {
        question: "13. VOIP?",
        choices: ["A. Primary read-only memory", "B. Programmable read-only memory", "C. Program read-output memory ", "D. Program read-only memory"],
        answer: "Programmable read-only memory"
    },
    {
        question: "14. Yahoo?",
        choices: ["A. Switch mode Transfer Programming", "B. Switch mode Transfer Protocol ", "C. Simple Mail Transfer Prortocol", "D. Simple Main Transfer Prortocol"],
        answer: "Simple Mail Transfer Prortocol"
    }
    ,
    {
        question: "15. MDI stands for ______?",
        choices: ["A. Multiple Document Interface", "B. Multiple Design Interface", "C. Multiple Design Interaction", "D. Multiple Document Interaction"],
        answer: "Multiple Document Interface"
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
        window.location.href="../Rules HTML/software rules.html" // REDIRECT
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