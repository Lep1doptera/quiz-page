import { render, screen } from "@testing-library/react";
import App from "./App";
import { myQuestions } from "./questions";

test("renders the initialize button", () => {
  render(<App />);
  const titleElement = screen.getByText("Initialize");
  expect(titleElement).toBeInTheDocument();
});

test("Does not render a android", () => {
  render(<App />);
  const androidElement = screen.queryByAltText("Bishop");

  expect(androidElement).toBeFalsy();
});

test("Enters the quiz on Initialize click", async () => {
  render(<App />);

  const initializeButton = screen.getByText("Initialize");

  await initializeButton.click();

  const questionElement = screen.getByText(myQuestions[0].question);

  expect(questionElement).toBeInTheDocument();
});
