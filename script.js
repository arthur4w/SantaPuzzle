const startBtn = document.getElementById('start-btn');
const nextBtn = document.getElementById('next-btn');
const quizSection = document.getElementById('quiz-section');
const questionContainer = document.getElementById('question-container');
const resultSection = document.getElementById('result-section');
const resultText = document.getElementById('result');
const spinSection = document.getElementById('spin-section');
const spinButton = document.getElementById('spinButton');
const pointer = document.getElementById('pointer');
let spinning = false;

// Show spin section after answering quiz questions
function showSpinSection() {
    quizSection.classList.add('hidden');
    spinSection.classList.remove('hidden');
}

// Spinning logic with a controlled outcome
spinButton.addEventListener('click', () => {
    if (spinning) return;
    spinning = true;

    const finalResultDegrees = 720 + 270; // Always land on 270° (e.g., smallest sector)
    const randomOffset = Math.random() * 360;
    const totalDegrees = finalResultDegrees + randomOffset;

    // Animate the wheel spin
    wheel.style.transform = `rotate(${totalDegrees}deg)`;

    setTimeout(() => {
        pointer.style.transform = 'rotate(90deg)'; // Pointer "falls"
    }, 1500);

    setTimeout(() => {
        alert("Congratulations! Your Secret Santa gift has been revealed!");
        spinning = false;
    }, 3000);
});

// Trigger spin section after quiz
nextBtn.addEventListener('click', () => {
    collectAnswer();
    currentQuestionIndex++;
    if (currentQuestionIndex < questions.length) {
        showQuestion();
    } else {
        showSpinSection();
    }
});


const questions = [
  { question: 'What’s your favorite color?', options: ['Red', 'Blue', 'Green', 'Yellow'] },
  { question: 'Choose a hobby:', options: ['Reading', 'Gaming', 'Cooking', 'Traveling'] },
];

let currentQuestionIndex = 0;
let answers = [];

startBtn.addEventListener('click', () => {
  startBtn.classList.add('hidden');
  quizSection.classList.remove('hidden');
  showQuestion();
});

nextBtn.addEventListener('click', () => {
  collectAnswer();
  currentQuestionIndex++;
  if (currentQuestionIndex < questions.length) {
    showQuestion();
  } else {
    showResult();
  }
});

function showQuestion() {
  questionContainer.innerHTML = '';
  const question = questions[currentQuestionIndex];
  const questionElem = document.createElement('h3');
  questionElem.textContent = question.question;
  questionContainer.appendChild(questionElem);

  question.options.forEach(option => {
    const button = document.createElement('button');
    button.textContent = option;
    button.classList.add('option-btn');
    button.addEventListener('click', () => {
      answers[currentQuestionIndex] = option;
      nextBtn.classList.remove('hidden');
    });
    questionContainer.appendChild(button);
  });
}

function collectAnswer() {
  nextBtn.classList.add('hidden');
}

function showResult() {
  quizSection.classList.add('hidden');
  resultSection.classList.remove('hidden');
  resultText.textContent = `Your perfect gift: ${answers.join(' & ')}`;
}
