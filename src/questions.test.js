import { myQuestions } from "./questions";

test("my questions contains 10 questions", () => {
  expect(myQuestions.length).toBe(10);
});

test("the first question has a correct answer", () => {
  expect(myQuestions[0].correctAnswer).toBe("Ellen Ripley");
});
test("the 10th question contains 3 answers", () => {
  expect(Object.keys(myQuestions[9].answers).length).toBe(3);

  expect(myQuestions[9].answers.a).toEqual("Claude Monet");
});
