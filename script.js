const questions = [
    {
        question: "What is Rick Sanchez's favorite catchphrase?",
        options: ["Wubba Lubba Dub-Dub!", "I'm Pickle Rick!", "Oh, geez!", "None of the above"],
        answer: "Wubba Lubba Dub-Dub!"
    },
    {
        question: "Which dimension do Rick and Morty primarily operate from?",
        options: ["C-137", "B-132", "X-109", "E-123"],
        answer: "C-137"
    },
    {
        question: "What is Morty's last name?",
        options: ["Smith", "Sanchez", "Johnson", "Rickson"],
        answer: "Smith"
    },
    {
        question: "What does Rick turn himself into to avoid family therapy?",
        options: ["A cat", "A car", "A pickle", "A robot"],
        answer: "A pickle"
    }
];

let currentQuestionIndex = 0;
let score = 0;

function displayQuestion() {
  const questionElement = document.getElementById("question");
  const optionsElement = document.getElementById("options");

  questionElement.innerText = questions[currentQuestionIndex].question;
  optionsElement.innerHTML = "";

  questions[currentQuestionIndex].options.forEach((option) => {
    const li = document.createElement("li");
    li.innerText = option;
    li.addEventListener("click", () => selectAnswer(option, li));
    optionsElement.appendChild(li);
    {
    }
  });
}

function selectAnswer(selectedOption, liElement) {
    const correctAnswer = questions[currentQuestionIndex].answer;
    const submitButton = document.getElementById('submit-answer');

    if (selectedOption === correctAnswer) {
        score++;
        liElement.style.backgroundColor = 'lightgreen';
    } else {
        liElement.style.backgroundColor = 'salmon';
    }

    if (submitButton) {
        submitButton.disabled = false;
    }
}


document.getElementById("submit-answer").addEventListener("click", () => {
  currentQuestionIndex++;
  if (currentQuestionIndex < questions.length) {
    displayQuestion();
    document.getElementById("submit").disabled = true;
  } else {
    document.getElementById(
      "quiz-container"
    ).innerHTML = `<div id="result">Your final score is: ${score}/${questions.length}</div>`;
  }
});

document.getElementById("submit-answer").disabled = true;
displayQuestion();
