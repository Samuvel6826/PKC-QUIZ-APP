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



// Make an array of objects that stores question, choices of question and answer
const quiz = [
    {
        question: "1. With respect to computer processing speed. What is the full form of MIPS?",
        choices: ["A. Millions of Instructions Per Second", "B. Millions of Instructions Per Speed", "C. Millions of Instructions Per Signal", "D. Millions of Instructions Per Symbol"],
        answer: "A. Millions of Instructions Per Second"
    },
    {
        question: "2. In the field of computer VIRUS stands for",
        choices: ["A. Very Intelligent Result Until Source", "B. Vital Information Resource Under Siege", "C. Viral Important Record User Searched", "D. Very Interchanged Resource Under Search"],
        answer: "B. Vital Information Resource Under Siege"
    },
    {
        question: "3. SD RAM stands for ",
        choices: ["A. Serial Dynamic RAM", "B. Straight Dynamic RAM", "C. Surface Dynamic RAM", "D. Synchronous Dynamic RAM"],
        answer: "D. Synchronous Dynamic RAM"
    },
    // {
    //     question: "4. With respect to the information technology. What does GIS stands for?",
    //     choices: ["A. Geographical International Studies", "B. Geographical Information Systems", "C. Global Institute for Soils", "D. Global Information Statistics"],
    //     answer: "B. Geographical Information Systems"
    // },
    // {
    //     question: `5. The full form of "SQL" is`,
    //     choices: ["A. Student Query Line", "B. Structured Question List", "C.Straight Query Language", "D. Structured Query Language"],
    //     answer: "D. Structured Query Language"
    // },
    // {
    //     question: "6. The process of transferring files from Internet to user Computer is called",
    //     choices: ["A. Downloading", "B. Uploading", "C. FTP", "D. JPEG"],
    //     answer: "A. Downloading"
    // },
    // {
    //     question: "7. What is the full form of COBOL?",
    //     choices: ["A. Common Basic Operating Language", "B. Computer Basic Oriented Language", "C. Computer Based Operating Language", "D. Common Business Oriented Language"],
    //     answer: "D. Common Business Oriented Language"
    // },
    // {
    //     question: "8. What is the full form of PNG in the computer image format?",
    //     choices: ["A. Printable New Graphic", "B. Printable New Graphical", "C. Port Natural Graphics", "D. Portable Network Graphics"],
    //     answer: "D. Portable Network Graphics"
    // },
    // {
    //     question: "9. The standard internet protocol is",
    //     choices: ["A. TCP/IP", "B. UDP", "C. FTP", "D. www"],
    //     answer: "A. TCP/IP"
    // },
    // {
    //     question: "10. USB Pendrive is which type of storage device?",
    //     choices: ["A. Primary", "B. Secondary", "C. Tertiary", "D. None of the above"],
    //     answer: "B. Secondary"
    // },
    // {
    //     question: `11. Which of the following is the correct full form of JPEG?`,
    //     choices: ["A. Joint Photography Exports Group", "B. Joint Pixel Experts Group", "C. Joint Photographic Experts Group", "D. Joint Pixel Exports Group"],
    //     answer: "C. Joint Photographic Experts Group"
    // },
    // {
    //     question: "12. In the context of computers. WORM is an acronym of?",
    //     choices: ["A. Write Once. Read Many", "B. Word On. RAM Memory", "C. Word Optical. Recognition Malware", "D. Wireless Operating. Read Module"],
    //     answer: "A. Write Once. Read Many"
    // },
    // {
    //     question: "13. What is the full form of PROM?",
    //     choices: ["A. Primary read-only memory", "B. Programmable read-only memory", "C. Program read-output memory ", "D. Program read-only memory"],
    //     answer: "B. Programmable read-only memory"
    // },
    // {
    //     question: "14. SMTP stands for ________",
    //     choices: ["A. Switch mode Transfer Programming", "B. Switch mode Transfer Protocol ", "C. Simple Mail Transfer Prortocol", "D. Simple Main Transfer Prortocol"],
    //     answer: "C. Simple Mail Transfer Prortocol"
    // }
    // ,
    // {
    //     question: "15. MDI stands for ______",
    //     choices: ["A. Multiple Document Interface", "B. Multiple Design Interface", "C. Multiple Design Interaction", "D. Multiple Document Interaction"],
    //     answer: "A. Multiple Document Interface"
    // }
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
    
    if(currentQuestionIndex < quiz.length){                                                                 // SAM
        startTimer();
    }
}

nextBtn.addEventListener('click', () => {
    const selectedChoice = document.querySelector('.choice.selected');
    if (!selectedChoice && nextBtn.textContent === "Next") {
        // alert("Select your answer");            
        displayAlert("Select your answer");
        return;
    }
    if (quizOver) {
        // nextBtn.textContent = "Next";
        // scoreCard.textContent = "";
        // currentQuestionIndex = 0;
        // quizOver = false;
        // score = 0;
        // startQuiz();

        window.location.href="/Rules HTML/software rules.html"  // REDIRECT
    }
    else {
        checkAnswer();
    }
});

// Function to check answers
const checkAnswer = () => {
    const selectedChoice = document.querySelector('.choice.selected');
    // console.log(selectedChoice.textContent)  
    if (selectedChoice.textContent === quiz[currentQuestionIndex].answer) {
        // alert("Correct Answer!");       
        displayAlert("Correct Answer!");
        score++;
    }
    else {
        // alert("Wrong answer");                                                                                   
        displayAlert(`Wrong Answer! ${quiz[currentQuestionIndex].answer} is the Correct Answer`);
    }
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
    questionBox.textContent = "";
    choicesBox.textContent = "";
    scoreCard.textContent = `You Scored ${score} out of ${quiz.length}!`;
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
        // if(timeLeft === 0){                                                                  
        //     const confirmUser = confirm("Time Up!!! Do you want to play the quiz again");
        //     if(confirmUser){
        //         timeLeft = 15;
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