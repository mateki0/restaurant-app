import React from "react";
import { render, cleanup, fireEvent } from "@testing-library/react";
import Footer from "../Components/Footer/Footer";

afterEach(cleanup);

test("renders without crashing", () => {
  const { getByTestId } = render(<Footer />);
  const footer = getByTestId("footer-div");
  expect(footer).toBeDefined();
});

test("event fires correctly", () => {
  const { getByTestId } = render(<Footer />);
  window.scrollTo = jest.fn();
  const button = getByTestId("top");
  fireEvent.click(button);
  expect(window.scrollTo).toHaveBeenCalledTimes(1);
});
