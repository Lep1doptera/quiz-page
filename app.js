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


// Quiz Questions
const myQuestions = [
{
  question: "What is the name of the main character in Alien",
  answers: {
    a:"Ellen Ripley",
    b:"Pennywise",
    c:"Freddy Krueger"
  },
  correctAnswer: "Ellen Ripley"
},
{
  question: "What year did the third Alien film release?",
  answers: {
    "1999",
    "1992",
    "1983"
  },
  correctAnswer: "1992"
},
{
  question: "What is the name of the ship in the first Alien film",
  answers: {
    "Serenity",
    "Nostromo",
    "Millennium Falcon"
  },
  correctAnswer: "Nostromo"
},
{
  question: "Complete this quote from Aliens; 'You know, Burke, I dont know which species is worse. You dont see them f*****g each other over for a goddamn _______.'",
  answers: {
    "Percentage",
    "Snack",
    "Profit"
  },
  correctAnswer: "Percentage"
},
{
  question: "Who was the first to die in Alien",
  answers: {
    "Parker",
    "Brett",
    "Kane"
  },
  correctAnswer: "Kane"
},
{
  question: "Who directed Aliens?",
  answers: {
    "Tim Burton",
    "James Cameron",
    "Ridley Scott"
  },
  correctAnswer: "James Cameron"
},
{
  question: "What is the androids name in Alien 4",
  answers: {
    "David",
    "Bishop",
    "Call"
  },
  correctAnswer: "Call"
},
{
  question: "Which character did Bill Paxton play?",
  answers: {
    "Hicks",
    "Hudson",
    "Gorman"
  },
  correctAnswer: "Hudson"
},
{
  question: "What gift did Ellen give to the Queen in Alien 4",
  answers: {
    "Immortality",
    "Birth",
    "Speech"
  },
  correctAnswer: "Birth"
},
{
  question: "Who designed the creature Xenomorph?",
  answers: {
    "Claude Monet",
    "H.R.Giger",
    "Pueblo Picos"
  },
  correctAnswer: "H.R.Giger"
}
]