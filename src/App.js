import logo from "./logo.svg";
import "./App.css";
import { myQuestions } from "./questions";
import { useState } from "react";

function App() {
  const [started, setStarted] = useState(false);
  const completed = false;

  console.log("hi");
  if (!started) {
    return <StartComponent setStarted={setStarted} />;
  }

  if (completed) {
    return <ResultsComponent />;
  }

  return <QuizComponent />;
}

const StartComponent = ({ setStarted }) => {
  return (
    <button
      id="submit"
      onClick={() => {
        setStarted(true);
      }}
    >
      Start
    </button>
  );
};

const QuizComponent = () => {
  return <div id="quiz">text</div>;
};

function ResultsComponent() {
  return <div id="results">Results</div>;
}

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


*/

//will hold questions
const quizContainer = document.getElementById("quiz");
//submit button for triggers
const submitButton = document.getElementById("submit");
//will hold checking and retrieving questions
const resultsContainer = document.getElementById("results");

//functionality
function buildQuiz() {}

function getAnwers() {}

//call to show as we go
buildQuiz();

// next button for question
const nextButton = document.getElementById("next");

// event listeners for button and clicks
//submitButton.addEventListener("click", getAnwers);

export default App;
