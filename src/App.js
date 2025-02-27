import "./index.css";
import { myQuestions } from "./questions";
import { useState } from "react";

function App() {
  const [started, setStarted] = useState(false);
  const [completed, setCompleted] = useState(false);
  const [answerScore, setAnswerScore] = useState(0);
  const resetQuiz = () => {
    setStarted(false);
    setCompleted(false);
    setAnswerScore(0);
  };

  //console.log("hi");
  if (!started) {
    return <StartComponent setStarted={setStarted} />;
  }

  if (!completed) {
    return (
      <QuizComponent
        setCompleted={setCompleted}
        setAnswerScore={setAnswerScore}
        answerScore={answerScore}
      />
    );
  }

  return <ResultsComponent answerScore={answerScore} resetQuiz={resetQuiz} />;
}

const StartComponent = ({ setStarted }) => {
  return (
    <button
      id="begin"
      onClick={() => {
        setStarted(true);
      }}
    >
      Initialize
    </button>
  );
};

const QuizComponent = ({ setCompleted, setAnswerScore, answerScore }) => {
  const [index, setIndex] = useState(0);
  const currentQuestion = myQuestions[index];

  const answerHandler = (answer) => {
    if (answer === currentQuestion.correctAnswer) {
      setAnswerScore(answerScore + 1);
    }

    //if myQuestions length is less than the new index, we have completed
    // We will check to make sure that the next (index + 1) index is less than the last accessible array element (length - 1)
    // This is because the length will always be 1 more than the accessible elements since accessing elements starts at 0.
    if (myQuestions.length - 1 < index + 1) {
      setCompleted(true);
    } else {
      //otherwise we can increment the index
      setIndex(index + 1);
    }
  };

  return (
    <div id="quiz">
      <h1>{currentQuestion.question}</h1>
      <button
        onClick={() => {
          answerHandler(currentQuestion.answers.a);
        }}
      >
        {currentQuestion.answers.a}
      </button>
      <button
        onClick={() => {
          answerHandler(currentQuestion.answers.b);
        }}
      >
        {currentQuestion.answers.b}
      </button>
      <button
        onClick={() => {
          answerHandler(currentQuestion.answers.c);
        }}
      >
        {currentQuestion.answers.c}
      </button>
    </div>
  );
};

const ResultsComponent = ({ answerScore, resetQuiz }) => {
  return (
    <div id="results">
      You got {answerScore} correct!
      <button
        id="retake"
        onClick={() => {
          resetQuiz();
        }}
      >
        Retake Quiz
      </button>
    </div>
  );
};

/*Pseudo Code 

-From Index page to Quiz page
1   Ready button > if clicked will reload page to go to Quiz page

- Quiz pages
2 -page loads with first question that has 4 options for an answer
  -progress at bottom is tracked for question number

3 - User clicks on one answer field, only one.
  - User can change answer to click on another field as many times as they like
  - User clicks on Next button to go to next question
        -can't go back, only forward

        Functionality>
        - Listen for click to which answer was chosen
        - Compare to right answer with answer chosen
              -If that answer does not !== match = is incorrect
              -If matches = is correct
        - Collect and store that data for Summary End page

5 Repeat for all questions until all have been answered. 
        -Will repeat functionality for all questions have ended
        -Randomize question pages and answer fields on those pages each time the quiz is repeated
        -Progress at bottom is updated to reflect question number

- Summary End
6 When all questions have been answered, page will load for summary of answers.
    - What type of results do we want shown/ how much infomation returned? 
        - Data stored and collected during Quiz pages are retrieved
        - Will show that output with chosen visual style from question above
    - User can scroll (if applicaable) to view that information
    - user can repeat the quiz with button to try again
        - clicking on button will go back to step 2 above

Concerns
    -method of answer return, between end of quiz or after it's answerd




//will hold questions
//const quizContainer = document.getElementById("quiz");
//submit button for triggers
//const submitButton = document.getElementById("submit");
//will hold checking and retrieving questions
//const resultsContainer = document.getElementById("results");

//functionality
function buildQuiz() {}

function getAnwers() {}

//call to show as we go
buildQuiz();

// next button for question
const nextButton = document.getElementById("next");

// event listeners for button and clicks
//submitButton.addEventListener("click", getAnwers);
*/

export default App;
