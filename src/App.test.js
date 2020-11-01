import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import App from "./App";

test("renders correct copy", () => {
  render(<App />);
  const linkElement = screen.getByText(/engineering with heart/i);
  expect(linkElement).toBeInTheDocument();
});
