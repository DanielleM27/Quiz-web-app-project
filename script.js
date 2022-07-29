const startButton = document.getElementById("start-btn")
const nextButton = document.getElementById("next-btn")
const questionContainerElement = document.getElementById("question-container")
const questionElement = document.getElementById("question")
const answerButtonsElement = document.getElementById("answer-buttons")

let shuffledQuestions, currentQuestionIndex

startButton.addEventListener("click", startGame)

function startGame() {
  startButton.classList.add("hide")
  shuffledQuestions = questions.sort(() => Math.random() - .5)
  currentQuestionIndex = 0
  questionContainerElement.classList.remove("hide")
  setNextQuestion()  
}

function setNextQuestion() {
  currentQuestionIndex++;
  showQuestion(shuffledQuestions[currentQuestionIndex])
}

function showQuestion(question) {
  console.log(question);
  questionElement.innerText = question.question
  question.answers.forEach(answer => {
    console.log(answer.text);
    const button = document.createElement("button");
    button.innerHTML = answer.text;
    button.classList.add("btn");
    if (answer.correct) {
      button.dataset.correct = answer.correct;
      button.addEventListener("click", selectAnswer);
      answerButtonsElement.appendChild(button);
    } else {
      button.addEventListener("click", selectAnswer);
      answerButtonsElement.appendChild(button);
    }
  })  
  document.querySelector('#next-btn').classList.add('hide');
}


function resetState() {
  clearStatusClass(document.body)
  nextButton.classList.add("hide")
  while (answerButtonsElement.firstChild) {
    answerButtonsElements.removeChild(answerButtonsElement.firstChild)
  }
}

function selectAnswer(e) {
  const selectedButton = e.target
  const correct = selectedButton.dataset.correct
  setStatusClass(document.body, correct)
  Array.from(answerButtonsElement.children).forEach(button => {
    setStatusClass(button, button.dataset.correct)
  })
  document.querySelector('#next-btn').classList.remove('hide');
}


function clearCurrentAnswer(){
  document.querySelector('#answer-buttons').innerHTML = '';
}


function setStatusClass(element, correct) {
  clearStatusClass(element)
  if (correct) {
    element.classList.add("correct")
  } else {
    element.classList.add("wrong")
  }
}

function clearStatusClass(element) {
  element.classList.remove("correct")
  element.classList.remove("wrong")
}

const questions = [{
    question: 'What language do they speak in Zimbabwe?',
    answers: [{
        text: 'Shona',
        correct: true
      },
      {
        text: 'Spanish',
        correct: false
      }
    ]
  },
  {
    question: 'Who is the President of Russia?',
    answers: [{
        text: 'Juju',
        correct: false
      },
      {
        text: 'Putin',
        correct: true
      },
      {
        text: 'Hitler',
        correct: false
      },
      {
        text: 'Clint',
        correct: false
      }
    ]
  },
  {
    question: 'What are the colours of the Jamaican flag?',
    answers: [{
        text: 'Pink and White',
        correct: false
      },
      {
        text: 'Green, yellow, white and black',
        correct: true
      },
      {
        text: 'White, yellow and gold',
        correct: false
      },
      {
        text: 'Red',
        correct: false
      }
    ]
  },
  {
    question: 'What is the Capital City of Germany ?',
    answers: [{
        text: 'Belgium',
        correct: false
      },
      {
        text: 'Berlin',
        correct: true
      }
    ]
  },
  {
    question: 'In which city is the Statue of Liberty?',
    answers: [{
        text: 'Soweto',
        correct: false
      },
      {
        text: 'New York City',
        correct: true
      }
    ]
  },
  {
    question: 'Which country has a unicorn as its national animal?',
    answers: [{
        text: 'Finland',
        correct: false
      },
      {
        text: 'Scotland',
        correct: true
      },
      {
        text: 'Fairytopia',
        correct: false
      },
      {
        text: 'Narnia',
        correct: false
      }
    ]
  },
  {
    question: 'Where is Nollywood?',
    answers: [{
        text: 'Nairobi',
        correct: false
      },
      {
        text: 'Nigeria',
        correct: true
      },
      {
        text: 'Namibia',
        correct: false
      },
      {
        text: 'Nashville',
        correct: false
      }
    ]
  },
  {
    question: 'Which country is home to the tallest building?',
    answers: [{
        text: 'Singapore',
        correct: false
      },
      {
        text: 'UAE',
        correct: true
      },
      {
        text: 'China',
        correct: false
      },
      {
        text: 'France',
        correct: false
      }
    ]
  },
  {
    question: 'Which is the largest country in the world?',
    answers: [{
        text: 'China',
        correct: false
      },
      {
        text: 'Russia',
        correct: true
      },
      {
        text: 'Mexico',
        correct: false
      },
      {
        text: 'Nigeria',
        correct: false
      }
    ]
  },
  {
    question: 'Who is the President of South Korea?',
    answers: [{
        text: 'Son Heung-Min',
        correct: false
      },
      {
        text: 'Yoon Soek-Youl',
        correct: true
      },
      {
        text: 'Kim Nam-Joon',
        correct: false
      },
      {
        text: 'Kim Bok-Joo',
        correct: false
      }
    ]
  },
]