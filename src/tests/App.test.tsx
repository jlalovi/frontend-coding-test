import React from "react";
import { render, screen } from "./test-utils";
import App from "../App";

test("renders add event input", () => {
  render(<App />);
  const addEventInput = screen.getByPlaceholderText(/Enter a new event/i);
  expect(addEventInput).toBeInTheDocument();
});
