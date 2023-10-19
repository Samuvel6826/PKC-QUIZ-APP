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
        question: "1. What is the primary function of a CPU (Central Processing Unit)?",
        answer: "Processing instructions"
    },
    {
        question: "2. From what location are the 1st computer instructions available on boot up?",
        answer: "ROM BIOS"
    },
    {
        question: "3. What could cause a fixed disk error?",
        answer: "Incorrect CMOS settings"
    },
    {
        question: "4. Missing slot covers on a computer can cause?",
        answer: "over heat"
    },
    {
        question: "5. With respect to a network interface card, the term 10/100 refers to?",
        answer: "megabits per seconds"
    },
    {
        question: "6. Which Motherboard form factor uses one 20 pin connector?",
        answer: "ATX"
    },
    {
        question: "7. A hard disk is divided into tracks which are further subdivided into:?",
        answer: "sectors"
    },
    {
        question: "8. During preventative maintenance on a dot matrix printer, do NOT lubricate:?",
        answer: "Print head pins"
    },
    {
        question: "9. Which component is responsible for storing data and programs on a computer?",
        answer: "HDD (Hard Disk Drive)"
    },
    {
        question: "10. : Which hardware component is responsible for providing power to all other components in a computer?",
        answer: "PSU (Power Supply Unit)"
    },
    {
        question: "11. What type of storage device has no moving parts and is known for its speed and durability?",
        answer: "SSD (Solid State Drive)"
    },
    {
        question: "12. Which component controls the communication between the CPU and other hardware components?",
        answer: "Motherboard"
    },
    {
        question: "13. What is the function of a sound card in a computer?",
        answer: " Providing audio output"
    },
    {
        question: "14. What is the standard interface used to connect external devices to a computer, such as a keyboard or mouse?",
        answer: "USB (Universal Serial Bus)"
    }
    ,
    {
        question: "15. What is the function of a network card (NIC) in a computer?",
        answer: "Managing network connections"
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
        window.location.href = "../Rules HTML/logo rules.html"  // REDIRECT
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