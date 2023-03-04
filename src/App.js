import React from 'react';
import firework from "./img/fireworks.png";
import './index.css';

const questions = [
  {
    title: 'HTML - what is it?',
    variants: ['Hyper Text Markup Lang', 'Framework', 'Programming Lang', 'Python library'],
    correct: 0,
  },
  {
    title: 'Who is the author of Python?',
    variants: ['James Gosling', 'Facebook', 'Guido van Rossum', 'Elon Musk'],
    correct: 2,
  },
  {
    title: 'What year was React founded?',
    variants: ['1998', '2009', '2011', '2016'],
    correct: 2,
  },
  {
    title: 'Most used programming language?',
    variants: ['Java', 'JavaScript', 'Go', 'Python'],
    correct: 1,
  },
  {
    title: 'City of programmers?',
    variants: ['Paris', 'Moscow', 'Berlin', 'San Francisko'],
    correct: 3,
  },
  {
    title: 'What year was Windows founded?',
    variants: ['1975', '1952', '1989', '2000'],
    correct: 0,
  },
  {
    title: 'What are the easiest programming lang for beginners',
    variants: ['C / C++', 'JavaScript', 'Python', 'Java'],
    correct: 2,
  },
  {
    title: 'What year was Linux founded?',
    variants: ['2006', '2002', '1995', '1991'],
    correct: 3,
  },
  {
    title: 'Which programming language does not require a ";" at the end of a function?',
    variants: ['Java', 'Python', 'C#', 'Ruby'],
    correct: 1,
  },
  {
    title: 'Which of the following is not a programming language?',
    variants: ['HTML', 'Ruby', 'Python', 'Java'],
    correct: 0,
  },
];

function Results({score}){
  return(
    <>
    <img src={firework} alt="fireworks" />
    <h2 className='result_percent'>{score / questions.length * 100}%</h2>
    <h2 className='result_text'>You answered 5 out of 10 questions correctly</h2>
    <a href='/'>
      <button>Try again</button>
    </a>
    </>
  )
}

function Game({step, currentQuestion, onClickAnswer}){
  const percentBar = Math.round(step / questions.length * 100);
  return(
    <>
      <div className="progress-bar">
        <div style={{width: `${percentBar}%`}} className="bar"></div>
      </div>
      <h2 className="question_title">{currentQuestion.title}</h2>
      <ul>
        {currentQuestion.variants.map((quest, index) => (
          <li onClick={() => onClickAnswer(index)}>{quest}</li>
        ))}
      </ul>
    </>
  )
}

function App() {
  const [step, setStep] = React.useState(0);
  const currentQuestion = questions[step];
  const [score, setScore] = React.useState(0);

  const onClickAnswer = (index) => {
    if (index === currentQuestion.correct){
      setScore(score + 1)
    }
    setStep(step + 1);
  }


  return (
    <body>
      <div className="quiz">
        {
          questions.length != step ? <Game step = {step} currentQuestion = {currentQuestion} onClickAnswer = {onClickAnswer}/> : <Results score = {score}/>
        }
      </div>
    </body>
  );
}

export default App;