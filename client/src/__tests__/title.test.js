import React from "react";
import { render, cleanup } from "@testing-library/react";
import Title from "../Components/Title";

afterEach(cleanup);

test("renders without crashing", () => {
  const { getByTestId } = render(<Title />);
  const title = getByTestId("title-div");
  expect(title).toBeDefined();
});

test("renders desired value", () => {
  const { getByTestId } = render(<Title value="Log In" />);
  const h2 = getByTestId("title-h2");
  expect(h2).toHaveTextContent("Log In");
});
