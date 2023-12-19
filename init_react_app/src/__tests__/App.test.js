import React from "react";
import { render, screen } from "@testing-library/react";
import App from "../App";

test("renders greeting text", () => {
  render(<App />);
  const greetingElement = screen.getByText(/Hola, Mundo!/i);
  expect(greetingElement).toBeInTheDocument();
});
