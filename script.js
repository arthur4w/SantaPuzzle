const startBtn = document.getElementById('start-btn');
const nextBtn = document.getElementById('next-btn');
const quizSection = document.getElementById('quiz-section');
const questionContainer = document.getElementById('question-container');
const resultSection = document.getElementById('result-section');
const resultText = document.getElementById('result');

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
