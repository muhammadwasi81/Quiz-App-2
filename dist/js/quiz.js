'use strict'

window.onload = () => {
  showHandler(0)
}

const uuid = () => {
  const head = Date.now().toString(36)
  const tail = Math.random().toString(36).substr(2)
  return head + tail
}

const totalQuestions = [
  {
    _id: uuid(),
    question: 'Javascript can be used in?',
    answer: 'FullStack development',
    options: ['FrontEnd', 'Backend', 'FullStack development', 'None of these'],
  },
  {
    _id: uuid(),
    question: 'What is "this" in Javascript?',
    answer: 'wasi',
    options: ['Object', 'Array', 'undefined', 'None of the above'],
  },
  {
    _id: uuid(),
    question: 'How many data types are there in Javascript?',
    answer: [7],
    options: [7, 8, 9, 5],
  },
  {
    _id: uuid(),
    question: 'Javascript has been created by?',
    answer: 'breden Eich',
    options: ['Arnold', 'Elon Musk', 'brendan Eich', 'Lucifer'],
  },
  {
    _id: uuid(),
    question: 'What is the capital of france?',
    answer: 'paris',
    options: ['sydney', 'beijing', 'cairo', 'paris'],
  },
]

const submitHandler = (e) => {
  e.preventDefault()
  let name = document.forms['welcome__form']['name'].value
  console.log('start quiz triggered: ', name)
  if (!name) {
    alert('please enter a name to start quiz')
    return false
  }
  // store names in local storage
  localStorage.setItem('name', name)
  location.href = 'quiz.html'
}

let questionCount = 0
let points = 0

const handleNext = () => {
  let userAnswer = document.querySelector('li.option.active').innerHTML
  if (userAnswer === totalQuestions[questionCount].answer) {
    points += 10
    localStorage.setItem('points', points)
    alert('correct')
    return true
    // } else if (userAnswer !== totalQuestions[questionCount].answer) {
    //   points -= 10
    //   localStorage.setItem('points', points)
    //   alert('wrong')
  }
  if (questionCount === totalQuestions.length - 1) {
    localStorage.setItem('time', `${minutes} minutes and ${seconds} seconds`)
    clearInterval(timer)
    location.href = 'score.html'
    return
  }

  questionCount++
  showHandler(questionCount)
}

const showHandler = (count) => {
  let getQuestions = document.getElementById('questions')
  getQuestions.innerHTML = `<h3>Q${questionCount + 1}.${
    totalQuestions[count].question
  }
        <ul class="option_group">
          <li class="option">${totalQuestions[count].options[0]}</li>
          <li class="option">${totalQuestions[count].options[1]}</li>
          <li class="option">${totalQuestions[count].options[2]}</li>
          <li class="option">${totalQuestions[count].options[3]}</li>
        </ul>
  </h3>
  `
  handleToggler()
}

const handleToggler = () => {
  const selectedOptions = document.querySelectorAll('li.option')
  selectedOptions.forEach((option) => {
    option.onclick = () => {
      selectedOptions.forEach((option) => {
        option.classList.remove('active')
      })
      option.classList.add('active')
    }
  })
}
