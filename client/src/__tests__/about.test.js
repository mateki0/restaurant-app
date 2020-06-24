import React from "react";
import { render, cleanup } from "@testing-library/react";

import About from "../Components/About/About";

afterEach(cleanup);

test("renders without crashing", () => {
  const { getByTestId } = render(<About />);
  const about = getByTestId("about-div");
  expect(about).toBeDefined();
});

test("renders without crashing", () => {
  const { getByTestId } = render(<About />);
  const description = getByTestId("description-div");
  expect(description).toBeDefined();
});
